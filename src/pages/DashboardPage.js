import React, { useState } from "react";
import Icon from "../components/Icon";

const SWAP_DATA = {
  "beef-suya": { title: "King Oyster + Smoked Iru", match: "94% Match", fiber: "9.4/10", fiberWidth: "94%", umami: "9.8/10", umamiWidth: "98%", saving: "-₦420 per 200g portion" },
  "goat-meat": { title: "Hydrated Jackfruit & Uziza", match: "89% Match", fiber: "9.1/10", fiberWidth: "91%", umami: "9.2/10", umamiWidth: "92%", saving: "-₦510 per 200g portion" },
  "dry-fish": { title: "Smoked Nori & Fermented Locust", match: "96% Match", fiber: "8.8/10", fiberWidth: "88%", umami: "9.9/10", umamiWidth: "99%", saving: "-₦380 per 100g portion" },
  ponmo: { title: "Charred Konjac & Mushroom Stems", match: "93% Match", fiber: "9.7/10", fiberWidth: "97%", umami: "8.9/10", umamiWidth: "89%", saving: "-₦260 per 150g portion" },
};

const MONTHS = [
  { name: "January", saved: "₦180k", before: "₦420k", after: "₦240k", beforeH: "h-3/4", afterH: "h-[43%]", recipes: "14 recipes active", current: false },
  { name: "February", saved: "₦290k", before: "₦680k", after: "₦390k", beforeH: "h-[88%]", afterH: "h-[51%]", recipes: "29 recipes active", current: false },
  { name: "March (Current)", saved: "₦425k", before: "₦980k", after: "₦555k", beforeH: "h-full", afterH: "h-[56%]", recipes: "48 recipes active", current: true },
];

const SWAPS = [
  { name: "Beef Suya Platter", swap: "Spiced Soy Protein + Yaji Spice", category: "Street Food / Grills", icon: "outdoor_grill", iconBg: "bg-surface-container text-primary", before: "₦2,400", after: "₦1,450", saved: "-₦950", pct: "39%", match: "92%", status: "Active Menu", active: true },
  { name: "Goat Meat Pepper Soup", swap: "King Oyster Mushroom + Uda spice broth", category: "Soups & Stews", icon: "soup_kitchen", iconBg: "bg-tertiary-fixed text-on-tertiary-fixed", before: "₦3,100", after: "₦1,900", saved: "-₦1,200", pct: "38%", match: "88%", status: "Testing", active: false },
  { name: "Classic Beef Jollof Rice", swap: "Seasoned Tempeh Crumbles + Smoked Paprika", category: "Rice Dishes", icon: "rice_bowl", iconBg: "bg-surface-container text-primary", before: "₦2,800", after: "₦1,650", saved: "-₦1,150", pct: "41%", match: "94%", status: "Active Menu", active: true },
  { name: "Assorted Meat Egusi Soup", swap: "Textured Egusi Balls, Enoki & Shiitake Base", category: "Traditional Soups", icon: "skillet", iconBg: "bg-secondary-container text-primary", before: "₦3,500", after: "₦2,100", saved: "-₦1,400", pct: "40%", match: "91%", status: "Active Menu", active: true },
];

function Greeting({ navigate }) {
  return (
    <section className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-secondary-container/40 blur-3xl pointer-events-none"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
        <div className="flex flex-col gap-1">
          <div className="inline-flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">
              Service Active
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span> Live Kitchen Sync
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Good morning, Chef Tunde 👋</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Bukateria Bistro • Lagos Kitchen | Shift: Lunch Prep (Station 04)
          </p>
        </div>
        <div className="flex items-center gap-space-sm w-full md:w-auto">
          <button className="inline-flex items-center justify-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-all font-label-lg text-label-lg shadow-sm">
            <Icon name="download" className="text-base" />
            <span>Shift Audit</span>
          </button>
          <button
            onClick={() => navigate("new-meal")}
            className="inline-flex items-center justify-center gap-space-xs px-space-lg py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-all font-label-lg text-label-lg shadow-md group"
          >
            <Icon name="add" className="text-lg transition-transform group-hover:rotate-90" />
            <span>+ New meal swap</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function StatCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
      <div className="relative flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between gap-space-sm">
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Meals Swapped</span>
            <div className="flex items-baseline gap-2">
              <span className="font-display-lg text-display-lg text-on-surface">48</span>
              <span className="font-title-lg text-title-lg text-on-surface-variant">meals</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
            <Icon name="restaurant_menu" className="text-2xl" fill />
          </div>
        </div>
        <div className="mt-space-md flex items-center justify-between pt-space-sm">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
            <Icon name="trending_up" className="text-xs" /> +12% this month
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">Target: 55 meals</span>
        </div>
      </div>

      <div className="relative flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between gap-space-sm">
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Average Cost Saved</span>
            <div className="flex items-baseline gap-1">
              <span className="font-display-lg text-display-lg text-primary font-metric-tabular">₦850</span>
              <span className="font-body-md text-body-md text-on-surface-variant">/ plate</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
            <Icon name="savings" className="text-2xl" />
          </div>
        </div>
        <div className="mt-space-md flex items-center justify-between pt-space-sm">
          <div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface">
            <span className="text-on-surface-variant">Monthly yield:</span>
            <span className="font-label-md text-label-md text-primary font-metric-tabular">₦425,000.00</span>
          </div>
          <span className="font-label-sm text-label-sm text-tertiary font-semibold uppercase">High Parity</span>
        </div>
      </div>

      <div className="relative flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between gap-space-sm">
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Top Plant Protein Base</span>
            <h2 className="font-title-lg text-title-lg text-on-surface leading-tight">Brown Beans &amp; Egusi Seed Base</h2>
          </div>
          <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
            <Icon name="eco" className="text-2xl" fill />
          </div>
        </div>
        <div className="mt-space-md flex items-center justify-between pt-space-sm">
          <span className="inline-flex items-center gap-1 font-body-sm text-body-sm text-on-surface">
            <span className="font-label-md text-label-md text-on-surface font-metric-tabular">26</span> recipes active
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm">
            96% protein efficiency
          </span>
        </div>
      </div>
    </section>
  );
}

function CostChart() {
  return (
    <div className="lg:col-span-8 p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Culinary Margin Delta</span>
          <h2 className="font-headline-md text-headline-md text-on-surface">Monthly Kitchen Cost Reduction (Q1 Parity)</h2>
        </div>
        <div className="flex items-center gap-space-sm bg-surface-container-low p-1 rounded-xl">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container-lowest shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-outline"></span>
            <span className="font-label-sm text-label-sm text-on-surface">Animal-based Baseline</span>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary-container text-on-primary-container shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed"></span>
            <span className="font-label-sm text-label-sm">PlantSwap Optimized</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-xs">
        {MONTHS.map((m) => (
          <div key={m.name} className={`flex flex-col p-space-md rounded-xl ${m.current ? "bg-secondary-container/30" : "bg-surface-container-low"}`}>
            <div className="flex items-center justify-between">
              <span className={`font-label-md text-label-md ${m.current ? "text-primary" : "text-on-surface-variant"}`}>{m.name}</span>
              <span className="font-label-sm text-label-sm text-primary font-metric-tabular">Saved {m.saved}</span>
            </div>
            <div className="mt-4 flex items-end gap-2 h-28">
              <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-metric-tabular">{m.before}</span>
                <div className={`w-full bg-surface-dim rounded-t-md ${m.beforeH}`}></div>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                <span className="font-label-sm text-label-sm text-primary font-semibold font-metric-tabular">{m.after}</span>
                <div className={`w-full ${m.current ? "bg-primary" : "bg-primary-container"} rounded-t-md ${m.afterH}`}></div>
              </div>
            </div>
            <div className={`mt-2 text-center font-body-sm text-body-sm ${m.current ? "text-primary font-semibold" : "text-on-surface-variant"}`}>
              {m.recipes}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm">
        <span className="flex items-center gap-1">
          <Icon name="check_circle" className="text-sm text-primary" />
          Plate cost reduction currently averaging <strong className="text-on-surface font-semibold">39.5%</strong> across all Lagos BOH operations.
        </span>
        <button className="text-primary hover:underline font-label-sm text-label-sm">Export Financials (PDF)</button>
      </div>
    </div>
  );
}

function NutrientChecker() {
  const [selected, setSelected] = useState("beef-suya");
  const item = SWAP_DATA[selected];

  return (
    <div className="lg:col-span-4 p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Live Line Tool</span>
          <h2 className="font-headline-md text-headline-md text-on-surface">Quick Nutrient Checker</h2>
        </div>
        <Icon name="bolt" className="text-tertiary" />
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        Evaluate immediate texture, moisture retention &amp; protein parity for ongoing meal preps.
      </p>
      <div className="flex flex-col gap-space-sm">
        <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Select Cut or Dish to Compare</label>
        <div className="w-full flex items-center bg-surface-container-low px-space-md py-2 rounded-xl">
          <Icon name="search" className="text-on-surface-variant text-base mr-2" />
          <select
            className="w-full bg-transparent border-0 outline-none font-body-md text-body-md text-on-surface focus:ring-0"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="beef-suya">Beef Shaki &amp; Suya Cuts</option>
            <option value="goat-meat">Goat Meat (Asun / Soup cut)</option>
            <option value="dry-fish">Smoked Catfish / Mangala</option>
            <option value="ponmo">Ponmo (Cow Skin)</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col p-space-md rounded-xl bg-surface-container-low gap-space-xs transition-all">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-surface">Recommended Base:</span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
            <Icon name="eco" className="text-xs" /> {item.match}
          </span>
        </div>
        <div className="font-title-lg text-title-lg text-primary">{item.title}</div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
              <span>Fiber &amp; Chew Resistance</span>
              <span className="text-on-surface font-semibold">{item.fiber}</span>
            </div>
            <div className="w-full bg-surface-dim h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: item.fiberWidth }}></div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
              <span>Umami Depth (Glutamate)</span>
              <span className="text-on-surface font-semibold">{item.umami}</span>
            </div>
            <div className="w-full bg-surface-dim h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary-container h-full rounded-full transition-all duration-500" style={{ width: item.umamiWidth }}></div>
            </div>
          </div>
        </div>
        <div className="mt-2 pt-2 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
          <span>Est. Cost Delta:</span>
          <span className="font-label-md text-label-md text-primary font-metric-tabular">{item.saving}</span>
        </div>
      </div>

      <button className="w-full py-2.5 rounded-lg bg-surface-container-low text-primary hover:bg-secondary-container hover:text-on-secondary-container transition-colors font-label-lg text-label-lg text-center">
        Open Deep Parity Calculator
      </button>
    </div>
  );
}

function SwapsTable() {
  return (
    <section className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm gap-space-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Kitchen Deployments</span>
          <h2 className="font-headline-md text-headline-md text-on-surface">Recent Heritage Swaps</h2>
        </div>
        <div className="flex items-center gap-space-sm">
          <div className="flex items-center gap-1 bg-surface-container-low px-space-md py-1.5 rounded-xl">
            <Icon name="filter_list" className="text-sm text-on-surface-variant" />
            <select className="bg-transparent border-0 outline-none font-body-sm text-body-sm text-on-surface focus:ring-0">
              <option>All Menu Categories</option>
              <option>Street Food / Grills</option>
              <option>Soups &amp; Stews</option>
              <option>Rice Dishes</option>
            </select>
          </div>
          <button className="p-2 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors">
            <Icon name="refresh" className="text-base" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low/60 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
              <th className="py-3 px-space-md rounded-l-lg">Meal Name</th>
              <th className="py-3 px-space-md">Category</th>
              <th className="py-3 px-space-md text-right font-metric-tabular">Cost Before</th>
              <th className="py-3 px-space-md text-right font-metric-tabular">Cost After</th>
              <th className="py-3 px-space-md text-right font-metric-tabular">Savings</th>
              <th className="py-3 px-space-md text-center">Match %</th>
              <th className="py-3 px-space-md">Status</th>
              <th className="py-3 px-space-md text-right rounded-r-lg">Actions</th>
            </tr>
          </thead>
          <tbody className="text-on-surface font-body-md text-body-md">
            {SWAPS.map((r) => (
              <tr key={r.name} className="hover:bg-surface-container-low/40 transition-colors">
                <td className="py-4 px-space-md">
                  <div className="flex items-center gap-space-sm">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${r.iconBg}`}>
                      <Icon name={r.icon} className="text-lg" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-title-lg text-title-lg text-on-surface truncate">{r.name}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Swap: {r.swap}</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-space-md whitespace-nowrap">
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">{r.category}</span>
                </td>
                <td className="py-4 px-space-md text-right whitespace-nowrap font-metric-tabular text-on-surface-variant">{r.before}</td>
                <td className="py-4 px-space-md text-right whitespace-nowrap font-metric-tabular text-primary font-semibold">{r.after}</td>
                <td className="py-4 px-space-md text-right whitespace-nowrap">
                  <div className="inline-flex flex-col items-end">
                    <span className="font-metric-tabular text-primary font-semibold">{r.saved}</span>
                    <span className="font-label-sm text-label-sm text-primary">({r.pct})</span>
                  </div>
                </td>
                <td className="py-4 px-space-md text-center whitespace-nowrap">
                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                    <Icon name="bolt" className="text-xs" /> {r.match}
                  </span>
                </td>
                <td className="py-4 px-space-md whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-label-sm ${
                      r.active ? "bg-secondary-container text-on-secondary-container" : "bg-tertiary-fixed text-on-tertiary-fixed"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${r.active ? "bg-primary" : "bg-tertiary"}`}></span>
                    {r.status}
                  </span>
                </td>
                <td className="py-4 px-space-md text-right whitespace-nowrap">
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md transition-all shadow-sm">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-sm">
        <span className="font-body-sm text-body-sm text-on-surface-variant">Showing 4 of 48 calibrated recipes</span>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm opacity-50 cursor-not-allowed">Previous</button>
          <span className="px-3 py-1 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm">1</span>
          <button className="px-3 py-1 rounded-lg hover:bg-surface-container-low text-on-surface font-label-sm text-label-sm">2</button>
          <button className="px-3 py-1 rounded-lg hover:bg-surface-container-low text-on-surface font-label-sm text-label-sm">3</button>
          <button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm hover:bg-surface-container">Next</button>
        </div>
      </div>
    </section>
  );
}

export default function DashboardPage({ navigate }) {
  return (
    <div className="flex flex-col w-full gap-space-lg">
      <Greeting navigate={navigate} />
      <StatCards />
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
        <CostChart />
        <NutrientChecker />
      </section>
      <SwapsTable />
    </div>
  );
}
