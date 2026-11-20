import os
import pandas as pd

os.makedirs("data", exist_ok=True)

COLS = [
    "meal_name", "original_ingredient",
    "functional_role", "cooking_method", "texture_target",
    "dish_category", "cost_sensitivity", "recommended_substitute",
    "protein_before_g", "protein_after_g",
    "cost_before_ngn", "cost_after_ngn",
    "texture_similarity",
    "cooking_time_before", "cooking_time_after",
    "meal_period", "allergens_in_substitute", "state_strength",
]

ROWS = [
    ("Jollof Rice","chicken","bulk/main","one-pot","tender","rice dish","medium","soy_chunks",19.0,36.0,3500,1800,"High",40,20,"lunch/dinner","soy","Nationwide; South-West strong"),
    ("Jollof Rice","beef","bulk/main","one-pot","tender","rice dish","medium","cowpea",18.0,24.0,4000,1345,"Medium",45,35,"lunch/dinner","legume","Nationwide; South-West strong"),
    ("Fried Rice","prawns","umami/garnish","stir-fry","firm","rice dish","high","mushroom",18.0,3.0,5000,2000,"Medium",15,10,"lunch/dinner","","Nationwide"),
    ("Fried Rice","chicken","bulk/main","stir-fry","tender","rice dish","medium","soy_chunks",19.0,36.0,3500,1800,"High",30,20,"lunch/dinner","soy","Nationwide"),
    ("Egusi Soup","beef","bulk/main","stew","chewy","soup","medium","soy_chunks",18.0,36.0,4000,1800,"High",60,40,"lunch/dinner","soy","South-West, South-East, Middle Belt"),
    ("Egusi Soup","fish (dried)","umami","stew","flaky","soup","high","mushroom",18.0,3.0,4500,2000,"Medium",50,35,"lunch/dinner","fish","South-West, South-East, Middle Belt"),
    ("Egusi Soup","chicken","bulk/main","stew","tender","soup","medium","cowpea",19.0,24.0,3500,1345,"Medium",60,50,"lunch/dinner","legume","South-West, South-East"),
    ("Ogbono Soup","assorted meat","bulk/main","stew","chewy","soup","low","cowpea",18.0,24.0,4000,1345,"Low",75,60,"lunch/dinner","legume","South-East, South-South"),
    ("Efo Riro","beef","bulk/main","stew","chewy","soup","medium","soy_chunks",18.0,36.0,4000,1800,"High",50,35,"lunch/dinner","soy","South-West (Yoruba)"),
    ("Okra Soup","shrimp","umami/garnish","stew","firm","soup","high","mushroom",18.0,3.0,5000,2000,"Medium",40,30,"lunch/dinner","shellfish","South-West, South-East"),
    ("Okra Soup","fish","umami","stew","flaky","soup","medium","mushroom",18.0,3.0,4500,2000,"Medium",40,30,"lunch/dinner","fish","South-West, South-East"),
    ("Pepper Soup","goat meat","bulk/main","simmer","chewy","soup","low","cowpea",16.0,24.0,4500,1345,"Low",90,75,"dinner","legume","South-South, South-East, Nationwide"),
    ("Pepper Soup","beef","bulk/main","simmer","chewy","soup","medium","soy_chunks",18.0,36.0,4000,1800,"High",90,70,"dinner","soy","South-South, Nationwide"),
    ("Moi Moi","egg","binding","steam","firm","snack","low","cowpea_flour",11.8,24.0,2500,1345,"Medium",45,45,"lunch/anytime","egg","Nationwide"),
    ("Moi Moi","beef liver","umami","steam","soft","snack","medium","mushroom",20.4,3.0,3500,2000,"Medium",45,40,"lunch/anytime","offal","Nationwide"),
    ("Suya","beef","bulk/main","grill","chewy","street food","medium","soy_chunks",18.0,36.0,4000,1800,"High",30,25,"evening","soy","North (Kano, Kaduna, Katsina); Nationwide"),
    ("Suya","chicken","bulk/main","grill","chewy","street food","medium","soy_chunks",19.0,36.0,3500,1800,"High",30,25,"evening","soy","North; Nationwide"),
    ("Suya","goat meat","bulk/main","grill","chewy","street food","low","cowpea",16.0,24.0,4500,1345,"Low",40,35,"evening","legume","North; Nationwide"),
    ("Asun","goat meat","bulk/main","grill","chewy","starter","low","cowpea",16.0,24.0,4500,1345,"Low",50,40,"evening","legume","South-West"),
    ("Gizdodo","gizzard","bulk/main","fry","chewy","starter","medium","soy_chunks",18.0,36.0,3500,1800,"High",45,30,"evening","soy","South-West (Lagos)"),
    ("Nkwobi","cow foot","bulk/main","simmer","gelatinous","starter","low","cowpea",18.0,24.0,3000,1345,"Low",120,90,"evening","legume","South-East (Igbo)"),
    ("Akara","egg (optional)","binding","deep-fry","soft","snack","low","cowpea_flour",11.8,24.0,2500,1345,"Medium",30,30,"breakfast","egg","Nationwide; North & South-West strong"),
    ("Meat Pie","beef mince","bulk/main","bake","crumbly","pastry","medium","cowpea_flour",18.0,24.0,4000,1345,"Medium",60,60,"snack/anytime","legume","Nationwide (urban)"),
    ("Beans & Plantain","fish (optional)","umami","stew","flaky","main","high","mushroom",18.0,3.0,4500,2000,"Medium",50,40,"lunch/dinner","fish","South-West; Nationwide"),
]

pd.DataFrame(ROWS, columns=COLS).to_csv("data/training_data.csv", index=False)

meals = [
    ("Jollof Rice","chicken; beef","rice dish"),
    ("Fried Rice","prawns; chicken","rice dish"),
    ("Egusi Soup","beef; fish (dried); chicken","soup"),
    ("Ogbono Soup","assorted meat","soup"),
    ("Efo Riro","beef","soup"),
    ("Okra Soup","shrimp; fish","soup"),
    ("Pepper Soup","goat meat; beef","soup"),
    ("Moi Moi","egg; beef liver","snack"),
    ("Suya","beef; chicken; goat meat","street food"),
    ("Asun","goat meat","starter"),
    ("Gizdodo","gizzard","starter"),
    ("Nkwobi","cow foot","starter"),
    ("Akara","egg (optional)","snack"),
    ("Meat Pie","beef mince","pastry"),
    ("Beans & Plantain","fish (optional)","main"),
]
pd.DataFrame(meals, columns=["meal_name","animal_ingredients","dish_category"]).to_csv("data/meals.csv", index=False)


subs = [
    ("soy_chunks","Soy chunks (soya)",36.0,1800,"soy"),
    ("cowpea","Cowpea / brown beans",24.0,1345,"legume"),
    ("cowpea_flour","Cowpea flour (bean flour)",24.0,1345,"legume"),
    ("mushroom","Mushroom (fresh)",3.0,2000,""),
    ("groundnut","Groundnut (roasted)",25.8,1600,"peanut"),
    ("egusi_seed","Egusi (melon seed)",20.0,2500,"melon seed"),
    ("tofu","Tofu (soybean curd)",8.0,2200,"soy"),
    ("pigeon_pea","Pigeon pea",33.4,1500,"legume"),
]
pd.DataFrame(subs, columns=["substitute_name","display_name","protein_per100g","cost_per_kg_ngn","allergens"]).to_csv("data/substitutes.csv", index=False)

print("Created 3 CSV files in data/")