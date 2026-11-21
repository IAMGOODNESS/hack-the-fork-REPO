
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                # app.py
import pandas as pd
import streamlit as st
import joblib

from price_service import init_prices, get_price, set_price

FEATURES = ["functional_role", "cooking_method", "texture_target",
            "dish_category", "cost_sensitivity"]

ALLERGY_OPTIONS = ["soy", "legume", "peanut", "fish", "shellfish",
                   "egg", "offal", "melon seed"]

st.set_page_config(page_title="Plant-Based Menu Swapper", page_icon="🌱", layout="wide")


@st.cache_resource
def load_model():
    return joblib.load("model.pkl")


@st.cache_data
def load_tables():
    meals = pd.read_csv("data/meals.csv")
    training = pd.read_csv("data/training_data.csv")
    substitutes = pd.read_csv("data/substitutes.csv")
    return meals, training, substitutes


def parse_list(s):
    if pd.isna(s) or str(s).strip() == "":
        return []
    return [x.strip() for x in str(s).split(";") if x.strip()]


model = load_model()
meals, training, substitutes = load_tables()
init_prices()

if "records" not in st.session_state:
    st.session_state.records = []

st.title("🌱 Plant-Based Menu Swapper")
st.caption("Pick a Nigerian restaurant dish. A decision tree recommends local plant-based swaps — "
           "and you can see exactly why.")

tab_swap, tab_dash = st.tabs(["🔄 Swap", "📊 Dashboard"])

with tab_swap:
    st.subheader("1. Pick a menu item")
    selected_meal = st.selectbox("Dish", meals["meal_name"])
    dish_rows = training[training["meal_name"] == selected_meal].copy()

    st.subheader("2. Constraints the system identified")
    st.caption("These are the characteristics extracted from the dish. The AI uses these — "
               "never prices — to choose a substitute.")
    st.dataframe(
        dish_rows[["original_ingredient", "functional_role", "cooking_method",
                   "texture_target", "cost_sensitivity", "dish_category"]],
        hide_index=True, use_container_width=True,
    )

    st.subheader("3. Your constraints")
    c1, c2 = st.columns(2)
    with c1:
        allergies = st.multiselect("Allergens to avoid", ALLERGY_OPTIONS)
    with c2:
        protein_target = st.slider("Minimum protein per 100g (g)", 3, 40, 15)

    st.subheader("4. Prices (optional)")
    st.caption("The AI never sees these. Prices only affect the cost-impact shown on the dashboard.")
    with st.expander("Edit prices for the ingredients in this dish", expanded=False):
        n = max(1, min(3, len(dish_rows)))
        cols = st.columns(n)
        for i, (_, r) in enumerate(dish_rows.iterrows()):
            ing = r["original_ingredient"]
            with cols[i % n]:
                val = st.number_input(
                    f"{ing} (₦/kg)",
                    min_value=100, max_value=20000,
                    value=int(get_price(ing)), step=100,
                    key=f"price_{selected_meal}_{ing}",
                )
                set_price(ing, int(val))

    st.subheader("5. Recommend swaps")
    if st.button("🔁 Recommend plant-based swaps", type="primary"):
        classes = model.named_steps["tree"].classes_
        new_records = []

        for _, r in dish_rows.iterrows():
            X = pd.DataFrame([{f: r[f] for f in FEATURES}])
            proba = model.predict_proba(X)[0]
            ranked = sorted(zip(classes, proba), key=lambda t: -t[1])

            chosen, fallback = None, None
            for sub_name, prob in ranked:
                sub_row = substitutes[substitutes["substitute_name"] == sub_name]
                if sub_row.empty:
                    continue
                sub_row = sub_row.iloc[0]
                if any(a in allergies for a in parse_list(sub_row["allergens"])):
                    continue
                cand = (sub_name, float(prob), sub_row, False)
                if fallback is None:
                    fallback = cand
                if float(sub_row["protein_per100g"]) >= protein_target:
                    chosen = cand
                    break

            if chosen is None:
                if fallback is None:
                    continue
                chosen = (fallback[0], fallback[1], fallback[2], True)

            sub_name, prob, sub_row, below = chosen
            new_records.append({
                "meal_name": selected_meal,
                "original": r["original_ingredient"],
                "substitute": sub_row["display_name"],
                "confidence": round(prob, 2),
                "below_target": below,
                "protein_before_g": float(r["protein_before_g"]),
                "protein_after_g": float(sub_row["protein_per100g"]),
                "protein_target_g": protein_target,
                "cost_before_ngn": get_price(r["original_ingredient"]),
                "cost_after_ngn": get_price(sub_name),
                "texture_similarity": r["texture_similarity"],
                "cooking_time_before": int(r["cooking_time_before"]),
                "cooking_time_after": int(r["cooking_time_after"]),
                "state_strength": r["state_strength"],
                "allergies_applied": ", ".join(allergies) if allergies else "none",
            })

        if new_records:
            st.session_state.records.extend(new_records)
            st.success(f"Added {len(new_records)} swap(s). Check the Dashboard tab.")
        else:
            st.warning("No substitute survived your constraints. Try removing an allergen.")

        if new_records:
            st.subheader("Why these recommendations")
            for rec in new_records:
                title = (f"{rec['original']} → {rec['substitute']} "
                         f"({rec['confidence']*100:.0f}% confidence)")
                with st.expander(title):
                    st.write(f"**Protein check:** {rec['protein_after_g']}g vs target "
                             f"{rec['protein_target_g']}g per 100g")
                    if rec["below_target"]:
                        st.warning("Below protein target — increase portion size or relax the target.")
                    else:
                        st.success("Meets protein target.")
                    if rec["confidence"] < 0.6:
                        st.warning("Low model confidence — verify with a food scientist.")
                    st.write(f"**Texture similarity:** {rec['texture_similarity']}")
                    st.write(f"**Cost:** ₦{rec['cost_before_ngn']:,} → "
                             f"₦{rec['cost_after_ngn']:,} per kg")
                    st.write(f"**Regional relevance:** {rec['state_strength']}")

    if st.session_state.records:
        if st.button("🗑️ Clear all swaps"):
            st.session_state.records = []
            st.rerun()

with tab_dash:
    if not st.session_state.records:
        st.info("No swaps yet. Go to the **Swap** tab and recommend a substitution.")
    else:
        df = pd.DataFrame(st.session_state.records)
        df["protein_delta"] = df["protein_after_g"] - df["protein_before_g"]
        df["cost_delta"] = df["cost_after_ngn"] - df["cost_before_ngn"]
        df["time_saved"] = df["cooking_time_before"] - df["cooking_time_after"]

        c1, c2, c3, c4 = st.columns(4)
        c1.metric("Swaps", len(df))
        c2.metric("Cost change (₦/kg)", f"{int(df['cost_delta'].sum()):,}")
        c3.metric("Protein change (g/100g)", f"{df['protein_delta'].sum():+.1f}")
        c4.metric("Time saved (min)", int(df["time_saved"].sum()))

        st.subheader("All swaps")
        st.dataframe(
            df[["meal_name", "original", "substitute", "confidence",
                "protein_before_g", "protein_after_g",
                "cost_before_ngn", "cost_after_ngn", "texture_similarity"]],
            hide_index=True, use_container_width=True,
        )

        st.subheader("Protein: before vs after (per 100g)")
        st.bar_chart(df[["protein_before_g", "protein_after_g"]])

        st.subheader("Cost: before vs after (₦/kg)")
        st.bar_chart(df[["cost_before_ngn", "cost_after_ngn"]])

        col_a, col_b = st.columns(2)
        with col_a:
            st.subheader("Substitute frequency")
            st.bar_chart(df["substitute"].value_counts())
        with col_b:
            st.subheader("Texture fidelity")
            st.bar_chart(df["texture_similarity"].value_counts())

        st.subheader("Allergen safety")
        st.success("0 swaps introduce an allergen the user flagged — enforced at selection time, "
                   f"not checked afterwards. Active filters: {df['allergies_applied'].iloc[-1]}.")

        st.subheader("Regional relevance")
        st.dataframe(
            df[["meal_name", "state_strength"]].drop_duplicates(),
            hide_index=True, use_container_width=True,
        )                           