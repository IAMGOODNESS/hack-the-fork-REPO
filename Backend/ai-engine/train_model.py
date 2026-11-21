import pandas as pd
import joblib
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.tree import DecisionTreeClassifier, export_text

FEATURES = ["functional_role", "cooking_method", "texture_target",
            "dish_category", "cost_sensitivity"]
TARGET = "recommended_substitute"

df = pd.read_csv("data/training_data.csv")
X = df[FEATURES]
y = df[TARGET]

preprocessor = ColumnTransformer(
    transformers=[("cat", OneHotEncoder(handle_unknown="ignore"), FEATURES)],
)

model = Pipeline([
    ("preprocessor", preprocessor),
    ("tree", DecisionTreeClassifier(max_depth=4, min_samples_leaf=2, random_state=42)),
])

model.fit(X, y)


feature_names = model.named_steps["preprocessor"].get_feature_names_out()
print(export_text(model.named_steps["tree"], feature_names=list(feature_names)))

joblib.dump(model, "model.pkl")
print("\nSaved model.pkl")