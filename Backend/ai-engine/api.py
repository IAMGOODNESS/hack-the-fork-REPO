from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional
import pandas as pd
import joblib
from price_service import init_prices, get_price

app = FastAPI()

FEATURES = ["functional_role", "cooking_method", "texture_target", "dish_category", "cost_sensitivity"]
model = joblib.load("model.pkl")
training = pd.read_csv("data/training_data.csv")
substitutes = pd.read_csv("data/substitutes.csv")
init_prices()

def parse_list(s):
    if pd.isna(s) or str(s).strip() == "":
        return []
    return [x.strip() for x in str(s).split(";") if x.strip()]

class IngredientInput(BaseModel):
    id: str
    name: str
    quantity: Optional[str] = ""

class AnalyzeRequest(BaseModel):
    dishName: str
    ingredients: List[IngredientInput]
    allergies: List[str] = []

@app.post("/analyze-proteins")
def analyze_proteins(req: AnalyzeRequest):
    classes = model.named_steps["tree"].classes_
    results = []

    for ing in req.ingredients:
        # Match ingredient against training_data.csv (case-insensitive partial match)
        match = training[
            training["original_ingredient"].str.lower().str.contains(ing.name.lower(), regex=False)
            | training["original_ingredient"].str.lower().apply(lambda x: x in ing.name.lower())
        ]

        if match.empty:
            results.append({
                "ingredientId": ing.id,
                "isAnimalProtein": False,
                "alternatives": []
            })
            continue

        r = match.iloc[0]
        X = pd.DataFrame([{f: r[f] for f in FEATURES}])
        proba = model.predict_proba(X)[0]
        ranked = sorted(zip(classes, proba), key=lambda t: -t[1])

        alternatives = []
        for sub_name, prob in ranked[:4]:
            sub_row = substitutes[substitutes["substitute_name"] == sub_name]
            if sub_row.empty:
                continue
            sub_row = sub_row.iloc[0]
            sub_allergens = parse_list(sub_row["allergens"])
            if any(a in req.allergies for a in sub_allergens):
                continue

            cook_after = int(r["cooking_time_after"])
            alternatives.append({
                "name": sub_row["display_name"],
                "texture": str(r["texture_similarity"]),
                "ingredientCookTime": f"{cook_after} mins",
                "totalDishCookTime": f"{cook_after + 15} mins",
                "allergenFree": len(sub_allergens) == 0,
                "allergenNotes": ", ".join(sub_allergens) if sub_allergens else "Allergen-free",
                "skillLevel": "Beginner" if float(prob) >= 0.6 else "Intermediate",
                "confidence": round(float(prob), 2),
                "costNgn": get_price(sub_name)
            })

        results.append({
            "ingredientId": ing.id,
            "isAnimalProtein": True,
            "alternatives": alternatives
        })

    return {"analysis": results}