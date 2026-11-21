import React, { useState } from "react";
import Icon from "../components/Icon";

const TEMPLATES = [
  {
    id: "rice-stew",
    title: "Nigerian Rice & Stew with Braised Beef",
    tag: "Rice & Stew",
    station: "Stew & Braise Station",
    stationKey: "stew",
    category: "rice",
    yieldLabel: "50 Covers Batch",
    baseline: "₦88,500",
    perPlate: "(₦1,770/p)",
    share: 51.2,
    cuts: "Fresh Beef Chuck (6.0kg), Seasoned Bovine Broth Reduction Cubes.",
    affinity: "94% Affinity",
    swap: "Textured Soy Protein (TSP) / Spiced Tempeh + Slow-Fermented Locust Bean (Iru) umami base.",
    lift: "Save ₦34,200 – ₦46,000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxsiduqPytOe1qEdQWSrLcV553Cym9KAGRK3a0FzclrxWap7E2vBwRIeil93aLdSNcnzJX-_MiOm0oLzTbw7C19mcrCpFp5Ro_s21SblQnEnR7AQ7lk8Qipwbz_xE6KRx3oWynpY1uVHeNwk-HU3GnZvdNVwiuzmSIkyFl0nyEo269oMDrqfgl3kQyqIu_HmDxMZQ9lNVRuq0_01Exxe_fFi3-JE7o4IsPp8hXFw",
  },
  {
    id: "egusi",
    title: "Pounded Yam & Egusi Soup with Hard Chicken",
    tag: "Swallow & Traditional Soup",
    station: "Soup Reduction Line",
    stationKey: "soup",
    category: "soups",
    yieldLabel: "50 Covers Batch",
    baseline: "₦112,000",
    perPlate: "(₦2,240/p)",
    share: 58.4,
    cuts: "Hard Stewing Layer Chicken (5.5kg), Ground Dried Crayfish.",
    affinity: "96% Affinity",
    swap: "Steamed Lion's Mane & King Oyster Mushroom + Smoked Nori & Fermented Dawadawa.",
    lift: "Save ₦48,000 – ₦62,000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4WxxaR2eRZ5izpqtJyxc0BWpMF-p5tuu4ClDvcGJg7ZAF5dpOvnO7nbeS4rhdJsMiO6enZgZUiltWTYODyuu2CSn-LcaaIcGtXN0UjENiwppb3lcC0zxrcVKbbXBeXhUgIoiWnNDw6ALto923Luev8Bg9hNhqiaBQa7oASunUOKlN-nT1z23Erj69XOUDHtnyRmzzPnvArCV7mJSMPuLmVvMv_PTwccx1vgTjMQ",
  },
  {
    id: "jollof",
    title: "Classic Nigerian Jollof Rice with Fried Beef",
    tag: "Rice Dish",
    station: "Starch & Stew Station",
    stationKey: "stew",
    category: "rice",
    yieldLabel: "50 Covers Batch",
    baseline: "₦95,900",
    perPlate: "(₦1,918/p)",
    share: 48.3,
    cuts: "Beef Chuck Cuts, Free-Range Eggs, Beef Tallow Broth.",
    affinity: "91% Affinity",
    swap: "Spiced Tempeh Crumbles, Smoked Paprika Soy Cubes & Agar Savory Emulsion.",
    lift: "Save ₦38,000 – ₦52,000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoar6KWx3JtEp7k_HmV46p_J3FGMhM9dDx5DjcDIlFxzlUS1FG8URf8Z46fYP-wkEXG4raNZd0qDxEGyGnBKn-ryIm6_6XYGAwnTarupVZruhGeY_WdqnowqF5S9q5J2cL2DxutiwZSZ66wYrEjsjEAcjv8Yo8TFZhpzwVy5Xv86CRFO1lS6otKZ9eD_Dj7t4sSapaVQOYRA88ZyQ2OLvqlYTh9nI7XCrzofxzHg",
  },
  {
    id: "pepper-soup",
    title: "Goat Meat Pepper Soup (Asun Broth Base)",
    tag: "Soups & Broths",
    station: "Pot & Broth Line",
    stationKey: "pot",
    category: "soups",
    yieldLabel: "40 Covers Batch",
    baseline: "₦78,000",
    perPlate: "(₦1,950/p)",
    share: 62.1,
    cuts: "Diced Goat Meat with Skin, Roasted Bone Gelatin Broth.",
    affinity: "93% Affinity",
    swap: "Smoked King Oyster + Fermented African Nutmeg (Ehuru) & Uda Seed reduction.",
    lift: "Save ₦36,000 – ₦45,000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3RL91xRqap6U_i944TK7B_40f-aGRGHIunWCYK6aHq1Pg9cVLjZYw6U4moYdnN_A3WUPkgz5RZeijc3brkLrjG7wVr6CqnZE9TQReKOiVNgDkAsbiiAlX3slM1Dfk5GCHxXvOIA628uLuqJV1q6b9dQcP2cP_pBrvsGkRISi6o70CpTv6ubTIl4Jtlf_ayf0OOOxz1brKvkl9B2b-4L30Nu8oSxq89AmT70AbPg",
  },
  {
    id: "efo-riro",
    title: "Efo Riro with Assorted Cuts (Shaki, Kpomo)",
    tag: "Traditional Soup",
    station: "Soup Reduction Line",
    stationKey: "soup",
    category: "soups",
    yieldLabel: "45 Covers Batch",
    baseline: "₦104,000",
    perPlate: "(₦2,311/p)",
    share: 54.0,
    cuts: "Tripe (Shaki), Cow Skin (Kpomo), Stewing Beef (5.0kg).",
    affinity: "95% Affinity",
    swap: "Textured Brown Bean Curd, Braised Eryngii & Iru Umami Concentrate.",
    lift: "Save ₦42,000 – ₦55,000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo4rrCd5ih8YWbKuYxBzj8qH_9YTLTeeXI4CUhxpPTpCvx8mUQ55xLW6yGoPYW0KmYbWwkhZ7GFd0PnQR6MxqO8FVvQ9up58eHt85QRKhAv-XKz9miq55Zw3huF0N4lUMV-hvsSSFCzlLaw3MM-A2Ehxs9YNbr5iyJZ9Dq9pckJJUbKJU9-9v1nX964h-UtkTfI1t86ynHjEJwQ2wBCctjYmoRUdTcxbC3025wGA",
  },
  {
    id: "suya",
    title: "Beef Suya Skewers with Yaji Spice",
    tag: "Street Food / Grills",
    station: "Charcoal Suya Grill",
    stationKey: "grill",
    category: "grills",
    yieldLabel: "35 Orders Batch",
    baseline: "₦64,000",
    perPlate: "(₦1,828/p)",
    share: 68.0,
    cuts: "Flank Steak Strips (4.0kg), Ground Peanut Flour Binding.",
    affinity: "97% Affinity",
    swap: "Pressed High-Density Soybean Cutlets + Cold-Pressed Groundnut Oil infusion.",
    lift: "Save ₦28,000 – ₦36,000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB29lZIioYRfnRgZwNWjXqfWKkfyNUdX5UJ5poVweIS02T858e8usVxo2saM32CNKCDmqG0I-zSeMIWLtXvNy8YVD15ScfGgeLFJUEKzUQ-CrTiSBLSmfRjaLpXlBMiIIbfIT-vqHaCV49nZsyJ8MNxnefoorOHm44Z0VKTnM_paPU57pZlYgdPiBCFgGKywuBicslJ9Xk7yn0L6IlQlzdzf8Uav_JKa_cNR98vsg",
  },
];

const CHIPS = [
  { key: "all", label: "All Recipes (28)" },
  { key: "rice", label: "Rice & Grain Dishes (8)" },
  { key: "soups", label: "Soups & Swallow (10)" },
  { key: "stews", label: "Stews & Sauces (4)" },
  { key: "grills", label: "Grills & Street Bites (6)" },
];

function TemplateCard({ t, onSelect }) {
  return (
    <article className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group">
      <div>
        <div className="relative h-44 w-full overflow-hidden bg-surface-container">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={t.title} src={t.img} />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent"></div>
          <div className="absolute top-space-sm left-space-sm flex flex-wrap gap-space-xs">
            <span className="px-space-sm py-0.5 rounded-md bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold uppercase tracking-wider">
              {t.tag}
            </span>
            <span className="px-space-sm py-0.5 rounded-md bg-surface-container-lowest/90 backdrop-blur text-on-surface font-label-sm text-label-sm">
              {t.station}
            </span>
          </div>
          <div className="absolute bottom-space-sm left-space-sm right-space-sm flex justify-between items-end text-surface-container-lowest">
            <div>
              <span className="font-label-sm text-label-sm opacity-90 uppercase">Commercial Yield</span>
              <p className="font-title-lg text-title-lg font-bold">{t.yieldLabel}</p>
            </div>
            <div className="text-right">
              <span className="font-label-sm text-label-sm opacity-90 uppercase">Baseline Cost</span>
              <p className="font-metric-tabular text-metric-tabular font-bold">
                {t.baseline} <span className="font-body-sm text-body-sm opacity-80">{t.perPlate}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="p-space-md flex flex-col gap-space-sm">
          <h2 className="font-headline-md text-headline-md text-on-surface font-bold group-hover:text-primary transition-colors">{t.title}</h2>

          <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Animal Cut Baseline:</span>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-error-container text-on-error-container font-bold">
                {t.share.toFixed(1)}% Cost Share
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface">{t.cuts}</p>
          </div>

          <div className="bg-secondary-container/30 p-space-sm rounded-lg flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-primary">
                <Icon name="eco" className="text-base" />
                <span className="font-label-sm text-label-sm uppercase font-bold">Botanical Swap Match</span>
              </div>
              <span className="font-label-md text-label-md text-primary font-bold">{t.affinity}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">{t.swap}</p>
            <div className="pt-1 mt-1 flex items-center justify-between text-secondary">
              <span className="font-label-sm text-label-sm font-semibold">Projected Batch Margin Lift:</span>
              <span className="font-metric-tabular text-metric-tabular font-bold text-primary">{t.lift}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-space-md pt-0">
        <button
          onClick={() => onSelect(t)}
          className="w-full py-2.5 px-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-space-xs transition-colors shadow-sm"
        >
          <span>Select This Template</span>
          <Icon name="arrow_forward" className="text-base" />
        </button>
      </div>
    </article>
  );
}

export default function NewMealPage({ navigate }) {
  const [query, setQuery] = useState("");
  const [chip, setChip] = useState("all");
  const [station, setStation] = useState("all");
  const [ratio, setRatio] = useState("high");

  const visible = TEMPLATES.filter((t) => {
    if (query && !t.title.toLowerCase().includes(query.trim().toLowerCase())) return false;
    if (chip !== "all" && t.category !== chip) return false;
    if (station !== "all" && t.stationKey !== station) return false;
    if (ratio === "high" && !(t.share > 40)) return false;
    if (ratio === "highest" && !(t.share > 55)) return false;
    if (ratio === "low" && !(t.share < 40)) return false;
    return true;
  });

  const steps = [
    { n: 1, label: "Select Heritage Template", active: true },
    { n: 2, label: "Review Alternatives" },
    { n: 3, label: "Check & Compare" },
    { n: 4, label: "Save & Deploy" },
  ];

  return (
    <div className="flex flex-col w-full pb-space-xl">
      {/* Stepper */}
      <section className="mb-space-lg">
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm items-center">
            {steps.map((s) => (
              <div key={s.n} className={`flex items-center gap-space-sm p-space-xs rounded-lg ${s.active ? "bg-surface-container-low" : "opacity-70"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    s.active
                      ? "bg-primary text-on-primary font-headline-md text-headline-md"
                      : "bg-surface-container-highest text-on-surface-variant font-label-md text-label-md"
                  }`}
                >
                  {s.n}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className={`font-label-sm text-label-sm uppercase tracking-wider ${s.active ? "text-primary font-bold" : "text-on-surface-variant"}`}>
                    {s.active ? `Step ${s.n} • Active` : `Step ${s.n}`}
                  </span>
                  <span className={`font-label-lg text-label-lg truncate ${s.active ? "text-on-surface" : "text-on-surface-variant"}`}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero */}
      <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider mb-space-xs">
            <Icon name="restaurant_menu" className="text-sm" />
            <span>Commercial Formulation Engine</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight leading-tight">
            Select a Heritage Recipe Template or Start Blank
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Choose a standard Nigerian restaurant formulation to auto-populate ingredients, baseline animal cuts, and market costs (Mile 12 &amp; Oyingbo benchmark), or configure a blank slate.
          </p>
        </div>
        <div className="flex items-center gap-space-sm shrink-0">
          <button
            onClick={() => navigate("swap")}
            className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-low shadow-sm font-label-lg text-label-lg transition-all active:scale-[0.98]"
          >
            <Icon name="add_circle" className="text-primary" />
            <span>+ Build Custom Recipe From Scratch</span>
          </button>
        </div>
      </header>

      {/* Market callout */}
      <section className="mb-space-lg bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
            <Icon name="trending_up" className="text-2xl" />
          </div>
          <div>
            <div className="flex items-center gap-space-xs">
              <span className="font-label-md text-label-md text-tertiary font-bold uppercase">Live Wholesale Price Index</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Mile 12 &amp; Oyingbo live beef chuck average:{" "}
              <span className="font-metric-tabular text-metric-tabular font-semibold text-on-surface">₦14,750/kg</span>. Animal protein accounts for ~54% of typical commercial soup batch spend in Lagos BOH.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-space-sm self-start md:self-auto shrink-0">
          <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-space-sm py-1 rounded-md">Updated 42m ago</span>
          <button className="text-primary hover:text-primary-container font-label-md text-label-md inline-flex items-center gap-0.5">
            <span>View Index</span>
            <Icon name="north_east" className="text-sm" />
          </button>
        </div>
      </section>

      {/* Filters */}
      <section className="mb-space-lg flex flex-col gap-space-md">
        <div className="flex flex-col lg:flex-row gap-space-sm items-stretch">
          <div className="relative flex-1">
            <Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl" />
            <input
              className="w-full pl-11 pr-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant text-body-md font-body-md shadow-sm outline-none focus:ring-2 focus:ring-primary"
              placeholder="Search dish templates (e.g. Jollof, Egusi, Pepper Soup, Suya, Edikang Ikong)..."
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-space-sm">
            <div className="relative min-w-[200px] flex-1 sm:flex-none">
              <select
                value={station}
                onChange={(e) => setStation(e.target.value)}
                className="w-full appearance-none bg-surface-container-lowest text-on-surface font-label-md text-label-md py-2.5 pl-space-md pr-8 rounded-lg shadow-sm outline-none cursor-pointer focus:ring-2 focus:ring-primary"
              >
                <option value="all">Kitchen Station: All Stations</option>
                <option value="stew">Stew &amp; Braise Station</option>
                <option value="soup">Soup Reduction Line</option>
                <option value="grill">Charcoal Suya Grill</option>
                <option value="pot">Pot &amp; Broth Line</option>
              </select>
              <Icon name="expand_more" className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg" />
            </div>
            <div className="relative min-w-[210px] flex-1 sm:flex-none">
              <select
                value={ratio}
                onChange={(e) => setRatio(e.target.value)}
                className="w-full appearance-none bg-surface-container-lowest text-on-surface font-label-md text-label-md py-2.5 pl-space-md pr-8 rounded-lg shadow-sm outline-none cursor-pointer focus:ring-2 focus:ring-primary"
              >
                <option value="all">Animal Share: All Ratios</option>
                <option value="high">High Animal Cost (&gt;40% Ratio)</option>
                <option value="highest">Critical Savings Target (&gt;55% Ratio)</option>
                <option value="low">Sub-40% Blended Cost</option>
              </select>
              <Icon name="expand_more" className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-space-xs overflow-x-auto pb-1">
          {CHIPS.map((c) => (
            <button
              key={c.key}
              onClick={() => setChip(c.key)}
              className={`px-space-md py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap transition-all shadow-sm ${
                chip === c.key
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-low"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Template grid */}
      {visible.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-lg mb-space-xl">
          {visible.map((t) => (
            <TemplateCard key={t.id} t={t} onSelect={() => navigate("swap")} />
          ))}
        </section>
      ) : (
        <section className="mb-space-xl bg-surface-container-lowest rounded-xl shadow-sm p-space-xl text-center">
          <p className="font-title-lg text-title-lg text-on-surface">No templates match your filters</p>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">Clear the search or choose a different category, station or ratio.</p>
        </section>
      )}

      {/* Guidance banner */}
      <aside className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-space-md">
          <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
            <Icon name="lightbulb" className="text-2xl" />
          </div>
          <div className="flex-1">
            <h3 className="font-title-lg text-title-lg text-on-surface font-bold">Why start from a Nigerian commercial template?</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Every standard formulation is pre-calibrated with Lagos restaurant back-of-house yield ratios, real-time Mile 12 &amp; Oyingbo wholesale meat pricing, and sensory organoleptic scorecards. You retain 100% control to adjust gram weights, seasoning blends, and margin targets in the subsequent step.
            </p>
          </div>
          <button className="shrink-0 font-label-lg text-label-lg text-primary hover:text-primary-container flex items-center gap-1 font-semibold">
            <span>Template Specs Guide</span>
            <Icon name="arrow_outward" className="text-lg" />
          </button>
        </div>
      </aside>
    </div>
  );
}
