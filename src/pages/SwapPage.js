import React, { useState } from "react";
import Icon from "../components/Icon";
import { naira } from "../utils";

const BASE_PLATE_COST = 3200;
const OTHER_COSTS = 340; // costs that are not swapped (so defaults total ₦1,240)

const PROTEIN_BASELINE = 1950;
const BROTH_BASELINE = 450;

const PROTEIN_OPTIONS = [
  {
    id: "tsp",
    name: "Textured Soy Protein (TSP) Chunks - Local Spice Infused",
    best: true,
    tag: { text: "Contains Soy", cls: "bg-tertiary-fixed text-on-tertiary-fixed" },
    match: 94,
    textureIcon: "texture",
    texture: "Chewy Meat-like fibrous",
    protBold: "48g Prot",
    protRest: " / 100g (310 kcal)",
    time: "25 mins simmer",
    level: 2,
    levelLabel: "Medium",
    cost: 720,
  },
  {
    id: "mushroom",
    name: "Steamed Lion's Mane & Brown Oyster Mushroom Blend",
    tag: { text: "Allergen-free", cls: "bg-secondary-container text-on-secondary-container" },
    match: 88,
    textureIcon: "texture",
    texture: "Dense fibrous tender",
    protBold: "22g Prot",
    protRest: " / 100g (185 kcal)",
    time: "18 mins sear",
    level: 1,
    levelLabel: "Easy",
    cost: 950,
  },
  {
    id: "tempeh",
    name: "Smoked Nigerian Brown Bean Tempeh Chunks",
    tag: { text: "Fermented Bean", cls: "bg-tertiary-fixed text-on-tertiary-fixed" },
    match: 83,
    textureIcon: "texture",
    texture: "Firm savoury bite",
    protBold: "34g Prot",
    protRest: " / 100g (260 kcal)",
    time: "20 mins fry & stew",
    level: 2,
    levelLabel: "Medium",
    cost: 680,
  },
];

const BROTH_OPTIONS = [
  {
    id: "iru",
    name: "Slow-Fermented Locust Bean (Iru) & Roasted Mushroom Umami Stock",
    best: true,
    tag: { text: "Nut-free, Soy-free", cls: "bg-secondary-container text-on-secondary-container" },
    match: 96,
    textureIcon: "eco",
    texture: "Deep West African Umami profile",
    protBold: "8g Prot",
    protRest: " (45 kcal)",
    time: "10 mins simmer",
    level: 1,
    levelLabel: "Easy",
    cost: 180,
  },
  {
    id: "yeast",
    name: "Nutritional Yeast & Caramelized Onion Reduction",
    tag: { text: "Allergen-free", cls: "bg-secondary-container text-on-secondary-container" },
    match: 84,
    textureIcon: "eco",
    texture: "Nutty savoury finish",
    protBold: "5g Prot",
    protRest: " (38 kcal)",
    time: "15 mins reduce",
    level: 1,
    levelLabel: "Easy",
    cost: 220,
  },
];

const SHOWCASE = [
  {
    label: "Option 01: Rehydrated Local TSP",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdx0gU04H3UKE7GZtkfu0ZGKGDR-nSaly_3tILAVm0joRNMkbqR4vTffx59ogrhcfG0fMSE0sFVIVsv36cvIvvlm9MYXXryf0rW-ZKHv4Rug0wjdvXH3IuB74wtKCPZ7Ml4ytmFAEX_kfOOVFD7mLfF2IWNY8Yt_SIjEftFTGQ4xqseA_fpoFW7gx1-J8C_aj0W_dD17Kkh85qZatZzpX-tD7283k_GH2N7C9f6w",
  },
  {
    label: "Option 02: Mushroom Blend",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuKZD-WYLiJGAVhySetMd-a0Rz6V9TZ2t3KTafp1XTfZ3fnk38KgAbahoUVa5pHsofnu8B6jlPAx_981Lz8IG0OZd7ACJNHURZb1mIijjOaO5j2Xi5y4btRFKX0qURW6Vpur6q2-3UNc1SYPC-U6PoHG7jYqk1r7P46z_WoSojBYyLUoc1LheK4jcZOd3EaxKQsbSwmyQkjLN0ZppAiGQgTAx1PYwQsf2sG7yrdQ",
  },
  {
    label: "Option 03: Brown Bean Tempeh",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_UT45BudD14lO2YptutZsZ3nU2dZcPvH3a0pmKXomwzrrD9e8SORoQXh-5r-nMVxz0bK0Bo8jKVwODIPvPksC6d5gYfWtKinMkzuXc2Z2wLPsOHVpdLNSjEfQ8so9aaf883asMDoLsiY-OT-QuSjoaKVINhnRyat5JfPDQ_9cKhZUz6vAWlb-YgEh2K84NUWDmNOpFiVsTOVxNnn-mCpN8qZxhC_xC6qp06H9Qg",
  },
];

function OptionRow({ group, option, rank, selected, onSelect, baseline }) {
  const saves = baseline - option.cost;
  const pct = Math.round((saves / baseline) * 100);

  return (
    <label
      className={`relative flex flex-col lg:flex-row items-start lg:items-center justify-between p-space-lg rounded-xl transition-all cursor-pointer shadow-sm group ${
        selected ? "bg-surface-container-low" : "bg-surface-container-lowest hover:bg-surface-container-low"
      }`}
    >
      <div className="flex items-start gap-space-md w-full lg:w-7/12">
        <div className="flex items-center gap-space-sm pt-1">
          <input type="radio" name={group} checked={selected} onChange={onSelect} className="w-5 h-5 text-primary accent-primary cursor-pointer" />
          <span
            className={`w-6 h-6 rounded-full font-label-sm text-label-sm flex items-center justify-center font-bold ${
              selected ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface"
            }`}
          >
            {rank}
          </span>
        </div>

        <div className="flex flex-col gap-space-xs flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-title-lg text-title-lg text-on-surface font-bold group-hover:text-primary transition-colors">{option.name}</span>
            {option.best && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
                <Icon name="verified" className="text-xs" />
                BEST MATCH
              </span>
            )}
            <span className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm font-medium ${option.tag.cls}`}>{option.tag.text}</span>
          </div>

          <div className="flex items-center gap-space-sm my-1 max-w-sm">
            <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
              <div className="bg-primary h-2 rounded-full" style={{ width: `${option.match}%` }}></div>
            </div>
            <span className={`font-metric-tabular text-metric-tabular font-bold whitespace-nowrap ${selected ? "text-primary" : "text-on-surface"}`}>
              {option.match}% Match
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm pt-1">
            <div className="flex items-center gap-1">
              <Icon name={option.textureIcon} className="text-base text-primary" />
              <span>{option.texture}</span>
            </div>
            <span className="text-outline">/</span>
            <div className="flex items-center gap-1">
              <Icon name="bolt" className="text-base text-primary" />
              <span>
                <span className="font-semibold text-on-surface">{option.protBold}</span>
                {option.protRest}
              </span>
            </div>
            <span className="text-outline">/</span>
            <div className="flex items-center gap-1">
              <Icon name="timer" className="text-base text-outline" />
              <span>{option.time}</span>
            </div>
            <span className="text-outline">/</span>
            <div className="flex items-center gap-0.5" title={`Prep Complexity: ${option.level}/3`}>
              {[1, 2, 3].map((i) => (
                <Icon key={i} name="skillet" className={`text-base ${i <= option.level ? "text-primary" : "text-outline-variant"}`} fill={i <= option.level} />
              ))}
              <span className="font-label-sm text-label-sm ml-1 text-on-surface-variant">{option.levelLabel}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-space-md lg:mt-0 flex lg:flex-col items-end justify-between w-full lg:w-auto pl-8 lg:pl-0">
        <div className="flex flex-col items-start lg:items-end">
          <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Portion Cost</span>
          <span className={`font-headline-md text-headline-md font-metric-tabular font-bold ${selected ? "text-primary" : "text-on-surface"}`}>
            {naira(option.cost)}
            <span className="font-body-sm text-body-sm text-on-surface-variant font-normal"> / portion</span>
          </span>
        </div>
        <div
          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-label-sm text-label-sm ${
            selected ? "bg-secondary-container text-on-secondary-container font-bold" : "bg-surface-container text-on-surface-variant font-semibold"
          }`}
        >
          <Icon name="trending_down" className="text-sm" />
          <span>
            Saves {naira(saves)} ({pct}%)
          </span>
        </div>
      </div>
    </label>
  );
}

function AlternativesCard({ icon, iconColor, title, badge, badgeCls, baselineText, filterOptions, group, options, baseline, value, onChange }) {
  return (
    <section className="w-full bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="p-space-lg bg-surface-container-lowest flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <div className={`w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center flex-shrink-0 ${iconColor}`}>
            <Icon name={icon} className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-space-sm">
              <h2 className="font-headline-md text-headline-md text-on-surface">{title}</h2>
              <span className={`px-2.5 py-0.5 rounded-full font-label-sm text-label-sm uppercase text-on-surface font-bold tracking-wider ${badgeCls}`}>{badge}</span>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant">{baselineText}</span>
          </div>
        </div>
        <div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-1.5 rounded-xl self-start md:self-auto">
          <span className="font-label-sm text-label-sm uppercase text-on-surface-variant whitespace-nowrap">Filter by Texture:</span>
          <select className="bg-transparent font-label-md text-label-md text-primary font-semibold pr-2 py-0.5 outline-none cursor-pointer">
            {filterOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      {group === "beef-alternative" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md px-space-lg pt-space-xs">
          {SHOWCASE.map((s) => (
            <div key={s.label} className="relative h-28 rounded-xl overflow-hidden group">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={s.label} src={s.img} />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex items-end p-2.5">
                <span className="font-label-sm text-label-sm text-inverse-on-surface font-semibold">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="p-space-lg flex flex-col gap-space-md">
        {options.map((o, i) => (
          <OptionRow key={o.id} group={group} option={o} rank={i + 1} selected={value === o.id} onSelect={() => onChange(o.id)} baseline={baseline} />
        ))}
      </div>
    </section>
  );
}

export default function SwapPage({ navigate }) {
  const [protein, setProtein] = useState("tsp");
  const [broth, setBroth] = useState("iru");

  const p = PROTEIN_OPTIONS.find((o) => o.id === protein);
  const b = BROTH_OPTIONS.find((o) => o.id === broth);
  const plateCost = OTHER_COSTS + p.cost + b.cost;
  const saving = BASE_PLATE_COST - plateCost;
  const boost = ((saving / BASE_PLATE_COST) * 100).toFixed(1);

  const reset = () => {
    setProtein("tsp");
    setBroth("iru");
  };

  const upcoming = [
    { n: 3, label: "Check & Compare" },
    { n: 4, label: "Save & Deploy" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Stepper */}
      <div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-md mb-space-lg flex flex-col gap-space-sm">
        <div className="flex items-center justify-between gap-space-xs relative">
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-surface-container pointer-events-none z-0"></div>

          <button onClick={() => navigate("new-meal")} className="relative z-10 flex items-center gap-space-sm bg-surface-container-lowest pr-space-md text-left">
            <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm flex-shrink-0">
              <Icon name="check" className="text-lg" />
            </span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase text-primary tracking-wider">Step 01</span>
              <span className="font-label-md text-label-md text-on-surface font-semibold">Enter Meal</span>
            </div>
          </button>

          <div className="relative z-10 flex items-center gap-space-sm bg-surface-container-lowest px-space-md">
            <span className="w-9 h-9 rounded-full bg-surface-container-lowest text-primary shadow-sm flex-shrink-0 flex items-center justify-center font-title-lg text-title-lg font-bold outline outline-2 outline-offset-2 outline-primary">
              2
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-label-sm text-label-sm uppercase text-primary font-bold tracking-wider">Step 02</span>
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Active</span>
              </div>
              <span className="font-label-md text-label-md text-primary font-bold">Review Alternatives</span>
            </div>
          </div>

          {upcoming.map((s, i) => (
            <div key={s.n} className={`relative z-10 flex items-center gap-space-sm bg-surface-container-lowest ${i === 0 ? "px-space-md" : "pl-space-md"}`}>
              <span className="w-9 h-9 rounded-full bg-surface-container text-outline flex items-center justify-center font-label-lg text-label-lg font-medium flex-shrink-0">{s.n}</span>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase text-outline tracking-wider">Step 0{s.n}</span>
                <span className="font-label-md text-label-md text-on-surface-variant">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Context header */}
      <div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-lg mb-space-lg relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-surface-container-low pointer-events-none"></div>
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-space-sm">
              <span className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-primary bg-secondary-container px-2.5 py-0.5 rounded-full font-bold">
                <Icon name="restaurant_menu" className="text-sm" />
                Active Formulation
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Target Parity: 100% Organoleptic Match</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Nigerian Spicy Beef Stew</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Swap analysis engine for commercial kitchen yield, botanical umami layering, and margin optimization.
            </p>
          </div>
          <div className="flex items-stretch gap-space-md flex-wrap sm:flex-nowrap">
            <div className="flex flex-col justify-center px-space-md py-2 bg-surface-container-low rounded-xl">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Current Base Cost</span>
              <span className="font-headline-md text-headline-md text-on-surface font-metric-tabular font-bold">
                {naira(BASE_PLATE_COST)}
                <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">/portion</span>
              </span>
            </div>
            <div className="flex flex-col justify-center px-space-md py-2 bg-surface-container-low rounded-xl">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Target Vector</span>
              <span className="inline-flex items-center gap-1 font-label-lg text-label-lg font-bold text-tertiary">
                <Icon name="fitness_center" className="text-base" />
                High Protein Swap
              </span>
            </div>
            <div className="flex flex-col justify-center px-space-md py-2 bg-surface-container-low rounded-xl">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Identified Cuts</span>
              <span className="font-label-lg text-label-lg text-on-surface font-bold">2 Animal Bases</span>
            </div>
          </div>
        </div>
      </div>

      {/* Alternatives */}
      <div className="flex flex-col gap-space-xl pb-28">
        <AlternativesCard
          icon="lunch_dining"
          iconColor="text-primary"
          title="Alternatives to Beef (Chuck Steak)"
          badge="Protein"
          badgeCls="bg-surface-container"
          baselineText={`Baseline Animal Cut: ${naira(PROTEIN_BASELINE)} / portion in stew base`}
          filterOptions={["Meat-like", "Milk-like", "Creamy", "Crunchy", "Soft"]}
          group="beef-alternative"
          options={PROTEIN_OPTIONS}
          baseline={PROTEIN_BASELINE}
          value={protein}
          onChange={setProtein}
        />
        <AlternativesCard
          icon="soup_kitchen"
          iconColor="text-tertiary"
          title="Alternatives to Beef Broth Seasoning"
          badge="Flavour base"
          badgeCls="bg-surface-container-high"
          baselineText={`Baseline Seasoning Cost: ${naira(BROTH_BASELINE)} / portion in base reduction`}
          filterOptions={["Savoury Liquid / Bouillon", "Concentrated Paste", "Dry Powder"]}
          group="broth-alternative"
          options={BROTH_OPTIONS}
          baseline={BROTH_BASELINE}
          value={broth}
          onChange={setBroth}
        />
      </div>

      {/* Sticky action bar */}
      <aside className="fixed bottom-0 left-64 right-0 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-4px_16px_rgba(0,0,0,0.06)] z-30 px-space-lg py-space-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0">
              <Icon name="done_all" className="text-base font-bold" />
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-label-lg text-label-lg font-bold text-on-surface">2 of 2 ingredients swapped</span>
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">Ready</span>
              </div>
              <div className="flex items-center gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <span>
                  Estimated Plate Cost: <strong className="text-on-surface font-metric-tabular font-bold">{naira(plateCost)}</strong> (was {naira(BASE_PLATE_COST)})
                </span>
                <span className="text-outline">|</span>
                <span className="inline-flex items-center gap-0.5 text-primary font-bold font-metric-tabular">
                  <Icon name="savings" className="text-sm" />
                  Saving {naira(saving)} / plate ({boost}% Margin Boost)
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-space-md w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={() => navigate("new-meal")}
              className="px-space-md py-2.5 rounded-xl font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-low transition-colors hidden md:block"
            >
              Back to templates
            </button>
            <button
              type="button"
              onClick={reset}
              className="px-space-md py-2.5 rounded-xl font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-low transition-colors hidden md:block"
            >
              Reset Defaults
            </button>
            <button
              type="button"
              onClick={() => navigate("compare")}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-space-sm px-space-xl py-3 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-title-lg text-title-lg font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
            >
              <span>Check combination</span>
              <Icon name="arrow_forward" />
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
