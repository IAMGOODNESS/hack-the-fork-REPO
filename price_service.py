

import pandas as pd
import streamlit as st


@st.cache_data
def _load_defaults():
    """Default prices: plant substitutes from substitutes.csv, animals from training_data.csv."""
    prices = {}
    subs = pd.read_csv("data/substitutes.csv")
    for _, r in subs.iterrows():
        prices[r["substitute_name"]] = int(r["cost_per_kg_ngn"])

    tr = pd.read_csv("data/training_data.csv")
    for _, r in tr.iterrows():
        prices[r["original_ingredient"]] = int(r["cost_before_ngn"])
    return prices


def init_prices():
    if "prices" not in st.session_state:
        st.session_state.prices = _load_defaults()


def get_price(name: str) -> int:
    return st.session_state.prices.get(name, 0)


def set_price(name: str, value: int):
    st.session_state.prices[name] = value


def all_prices() -> dict:
    return dict(st.session_state.prices)