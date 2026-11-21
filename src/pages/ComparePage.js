import React from "react";
import Icon from "../components/Icon";

const PLATED_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC_aeEKd4rCUzCFEb47cW7G5csbNeZKjEHsUNTGuIqjtOgoQoOdj1PLwnkrRU4zGz2J3LVbbyPJ1ziwx1UfM2gc7076w0GhNesc7qXB2GEQ66wJ9F_yEWa58-TLHRMQoUdmkMv556N4v8N395d1kCze1vmzQ6xV5MWWOZeXz6ge7u5Ln_ZMnEiopNmKPJxMW2ffp3Z1VGVuudGLRpjya5VN3CJvVAR5MCl8pBe0BQ";

const PAIRS = [
  {
    n: 1,
    title: "Protein Core Replacement",
    badgeIcon: "energy_savings_leaf",
    badge: "94% Umami & Texture Match",
    baseLabel: "Baseline Animal Cut",
    baseName: "Beef (Chuck Steak)",
    baseDesc: "Cubed 3cm • High connective tissue",
    baseCost: "₦1,950.00",
    save: "Save ₦1,230/portion",
    newName: "Textured Soy Protein (TSP) Chunks",
    newDesc: "Infused with Local Suya Spices & Smoked Paprika",
    newCost: "₦720.00",
    pct: "-63%",
    tags: [
      { icon: "texture", label: "Texture Metric", value: "Fibrous Meat-like (7.8/10)" },
      { icon: "timer", label: "Stew Simmer Limit", value: "25 Mins Stability" },
      { icon: "warning", label: "Allergen Notice", value: "Contains Soy", warn: true },
    ],
  },
  {
    n: 2,
    title: "Base Bouillon & Seasoning",
    badgeIcon: "thumb_up",
    badge: "96% Heritage Flavor Parity",
    baseLabel: "Baseline Animal Base",
    baseName: "Beef Broth Cube",
    baseDesc: "Commercial Bovine Extract Powder",
    baseCost: "₦450.00",
    save: "Save ₦270/portion",
    newName: "Slow-Fermented Locust Bean (Iru) & Roasted Mushroom Stock",
    newDesc: "Artisanal Yoruba fermented parkia biglobosa extract",
    newCost: "₦180.00",
    pct: "-60%",
    tags: [
      { icon: "soup_kitchen", label: "Bouillon Viscosity", value: "Savory Bouillon (9.2/10)" },
      { icon: "local_fire_department", label: "Extraction Window", value: "10 Mins Simmer" },
      { icon: "check_circle", label: "Allergen Notice", value: "100% Allergen-Free" },
    ],
  },
];

const CHECKS = [
  {
    n: 1,
    title: "Flavour Balance",
    chip: "High Umami Parity",
    body: "Locust bean (Iru) perfectly complements the spiced TSP chunks, yielding rich traditional depth and masking raw soy esters with fermented notes.",
    footIcon: "verified",
    foot: "Organoleptically Synced",
  },
  {
    n: 2,
    title: "Texture Balance",
    chip: "Chew & Fiber Integrity",
    body: "TSP chunks retain springiness and fiber bite under standard 25-minute sauce simmer without becoming spongy or disintegrating into mush.",
    footIcon: "verified",
    foot: "Shear Test Passed",
  },
  {
    n: 3,
    title: "Cooking Method Conflict",
    chip: "Thermal Alignment",
    body: "Simultaneous addition compatible: Roasted mushroom stock base maintains volatile aromas while TSP completes sauce reduction without scorched sediment.",
    footIcon: "verified",
    foot: "Boil Stable (>105°C)",
  },
  {
    n: 4,
    title: "Allergen Clash Detection",
    chip: "Action Suggested",
    lead: "Single Allergen Detected:",
    body: " Contains Soy (TSP). Label menu card for soy sensitivity, or tap to quickly substitute with zero-allergen Lion's Mane Mushroom.",
    warn: true,
  },
  {
    n: 5,
    title: "Commercial Margin Fit",
    chip: "Exceeds Margin Goal",
    strongChip: true,
    body: "Total plate cost dropped from ₦3,200 to ₦1,240, yielding ₦1,960 margin expansion (+61.2% profit surplus per portion) at current ₦4,500 menu retail price.",
    footIcon: "trending_up",
    foot: "ROI Target Met",
  },
];

const STEPS = [
  { n: 1, label: "1. Enter meal", done: true, go: "new-meal" },
  { n: 2, label: "2. Review alternatives", done: true, go: "swap" },
  { n: 3, label: "3. Check & compare", active: true },
  { n: 4, label: "4. Save & Deploy" },
];

export default function ComparePage({ navigate }) {
  return (
    <div className="flex flex-col w-full">
      {/* Stepper */}
      <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between relative">
          <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-0.5 bg-surface-container-highest z-0"></div>
          <div className="absolute top-1/2 left-6 w-2/3 -translate-y-1/2 h-0.5 bg-primary z-0"></div>

          {STEPS.map((s) => {
            if (s.done) {
              return (
                <button key={s.n} onClick={() => navigate(s.go)} className="relative z-10 flex flex-col items-center group cursor-pointer">
                  <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
                    <Icon name="check" className="text-lg" />
                  </div>
                  <span className="mt-1.5 font-label-md text-label-md text-on-surface">{s.label}</span>
                  <span className="font-label-sm text-label-sm text-primary flex items-center gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Done
                  </span>
                </button>
              );
            }
            if (s.active) {
              return (
                <div key={s.n} className="relative z-10 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md text-label-md shadow-md ring-4 ring-secondary-container">
                    <span className="font-bold">{s.n}</span>
                  </div>
                  <span className="mt-1.5 font-label-lg text-label-lg text-primary font-bold">{s.label}</span>
                  <span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full mt-0.5 font-semibold">Active Audit</span>
                </div>
              );
            }
            return (
              <div key={s.n} className="relative z-10 flex flex-col items-center opacity-70">
                <div className="w-9 h-9 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-md text-label-md">
                  <span>{s.n}</span>
                </div>
                <span className="mt-1.5 font-label-md text-label-md text-on-surface-variant">{s.label}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Upcoming</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Page header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-lg">
        <div>
          <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-wider mb-1">
            <Icon name="science" className="text-sm" />
            <span>Organoleptic Matrix • Real-Time Verification</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Compatibility &amp; Organoleptic Audit: <span className="text-primary">Nigerian Spicy Beef Stew</span>
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-3xl">
            Evaluating organoleptic synergy, thermal heat thresholds, textural density, and kitchen margin validation across selected botanical substitutes.
          </p>
        </div>
        <div className="flex items-center gap-space-sm bg-surface-container-lowest p-2 rounded-xl shadow-sm">
          <div className="flex flex-col px-3 py-1 bg-surface-container-low rounded-lg">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Original Cost</span>
            <span className="font-metric-tabular text-metric-tabular text-on-surface">
              ₦3,200<span className="text-xs text-on-surface-variant">/plate</span>
            </span>
          </div>
          <Icon name="arrow_forward" className="text-primary text-sm" />
          <div className="flex flex-col px-3 py-1 bg-secondary-container rounded-lg">
            <span className="font-label-sm text-label-sm text-on-secondary-container uppercase">Optimized Cost</span>
            <span className="font-metric-tabular text-metric-tabular text-on-secondary-container font-bold">
              ₦1,240<span className="text-xs">/plate</span>
            </span>
          </div>
        </div>
      </div>

      {/* Hero banner */}
      <div className="relative overflow-hidden bg-primary text-on-primary rounded-xl p-space-lg shadow-md mb-space-lg">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-space-lg">
          <div className="flex items-start gap-space-md max-w-3xl">
            <div className="w-12 h-12 rounded-xl bg-on-primary text-primary flex items-center justify-center shrink-0 shadow-sm">
              <Icon name="verified" className="text-3xl font-bold" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-space-sm flex-wrap">
                <h2 className="font-title-lg text-title-lg font-bold tracking-tight">Excellent Culinary Compatibility</h2>
                <span className="bg-primary-fixed text-on-primary-fixed font-label-md text-label-md px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  92% Harmony Score
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-primary-container mt-1.5 leading-relaxed">
                All selected botanical replacers maintain structural bite, umami depth, and fit within your target food cost margin (
                <strong className="text-primary-fixed underline decoration-secondary-fixed">-61% cost reduction</strong>). No culinary phase separation detected.
              </p>
            </div>
          </div>
          <div className="flex md:flex-col justify-end shrink-0 gap-2">
            <button
              className="inline-flex items-center justify-center gap-2 bg-on-primary text-primary hover:bg-surface-container-low transition-all px-space-md py-2.5 rounded-xl font-label-lg text-label-lg font-semibold shadow-sm"
              onClick={() => document.getElementById("sensory-panel")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span>View Sensory Matrix</span>
              <Icon name="arrow_downward" className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-lg">
        <div className="lg:col-span-8 flex flex-col gap-space-md">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-title-lg text-title-lg text-on-surface flex items-center gap-2">
              <Icon name="swap_horiz" className="text-primary" />
              Chosen Swaps Configuration (2 Cuts Analyzed)
            </h3>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Validated against Lagos Open Market Price Index</span>
          </div>

          {PAIRS.map((p) => (
            <div key={p.n} className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md transition-all hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-space-sm">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold">{p.n}</span>
                  <span className="font-label-lg text-label-lg text-on-surface font-semibold">{p.title}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold self-start sm:self-auto">
                  <Icon name={p.badgeIcon} className="text-sm" />
                  {p.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{p.baseLabel}</span>
                    <h4 className="font-headline-md text-headline-md text-on-surface mt-1">{p.baseName}</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{p.baseDesc}</p>
                  </div>
                  <div className="mt-space-md pt-space-sm bg-surface-container-lowest/60 rounded-lg p-2.5 flex items-baseline justify-between">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Portion Cost:</span>
                    <span className="font-metric-tabular text-metric-tabular text-on-surface font-bold">{p.baseCost}</span>
                  </div>
                </div>

                <div className="bg-surface-container rounded-xl p-space-md flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-secondary-container/40 rounded-full blur-xl pointer-events-none"></div>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Selected Replacer</span>
                      <span className="font-label-sm text-label-sm text-primary font-bold">{p.save}</span>
                    </div>
                    <h4 className="font-headline-md text-headline-md text-primary mt-1">{p.newName}</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{p.newDesc}</p>
                  </div>
                  <div className="mt-space-md pt-space-sm bg-surface-container-lowest rounded-lg p-2.5 flex items-baseline justify-between shadow-sm">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Replacement Cost:</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-metric-tabular text-metric-tabular text-primary font-extrabold">{p.newCost}</span>
                      <span className="font-label-sm text-label-sm text-primary bg-secondary-container px-1.5 py-0.5 rounded">{p.pct}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 bg-surface-container-low/40 p-2.5 rounded-lg">
                {p.tags.map((t) => (
                  <div key={t.label} className="flex items-center gap-2">
                    <Icon name={t.icon} className={`${t.warn ? "text-tertiary" : "text-primary"} text-base`} />
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">{t.label}</span>
                      <span className={`font-label-md text-label-md ${t.warn ? "text-tertiary" : "text-on-surface"}`}>{t.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="lg:col-span-4 flex flex-col gap-space-md">
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
            <div className="relative h-48 w-full">
              <img className="w-full h-full object-cover" alt="Plated Nigerian spicy beef stew with plant-based swaps" src={PLATED_IMG} />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex items-end p-space-md">
                <div>
                  <span className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold uppercase">Recipe Preview</span>
                  <h4 className="font-title-lg text-title-lg text-inverse-on-surface font-bold mt-1">Plated Stew Visual Identity</h4>
                </div>
              </div>
            </div>
            <div className="p-space-md bg-surface-container-lowest flex flex-col gap-2">
              <div className="flex justify-between items-center text-on-surface">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Color Parity (Deep Tomato Red)</span>
                <span className="font-label-md text-label-md font-bold text-primary">98% Match</span>
              </div>
              <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: "98%" }}></div>
              </div>
              <div className="flex justify-between items-center text-on-surface mt-1">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Aroma Volatility (Maillard/Umami)</span>
                <span className="font-label-md text-label-md font-bold text-primary">91% Match</span>
              </div>
              <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: "91%" }}></div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">Per-Batch Yield (50 Covers)</span>
              <Icon name="payments" className="text-primary" />
            </div>
            <div className="flex flex-col gap-space-xs py-space-xs">
              <div className="flex justify-between items-center">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Traditional Batch Prep:</span>
                <span className="font-metric-tabular text-metric-tabular text-on-surface">₦160,000.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body-sm text-body-sm text-on-surface-variant">PlantSwap Batch Prep:</span>
                <span className="font-metric-tabular text-metric-tabular text-primary font-bold">₦62,000.00</span>
              </div>
              <div className="h-0.5 bg-surface-container-high my-1"></div>
              <div className="flex justify-between items-center">
                <span className="font-label-md text-label-md text-on-surface font-semibold">Net Shift Saving:</span>
                <span className="font-metric-tabular text-metric-tabular text-primary font-bold text-lg">+₦98,000.00</span>
              </div>
            </div>

            <div id="sensory-panel" className="mt-space-md p-space-sm bg-surface-container-low rounded-xl flex items-center gap-space-md">
              <div className="w-20 h-20 shrink-0">
                <svg className="w-full h-full text-primary" viewBox="0 0 100 100">
                  <polygon className="opacity-30" fill="none" points="50,10 90,40 75,85 25,85 10,40" stroke="currentColor" strokeDasharray="2,2" strokeWidth="1.5" />
                  <polygon className="opacity-40" fill="none" points="50,25 78,45 68,78 32,78 22,45" stroke="currentColor" strokeDasharray="2,2" strokeWidth="1.5" />
                  <polygon fill="currentColor" fillOpacity="0.25" points="50,15 84,42 70,80 28,76 16,42" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="15" fill="currentColor" r="3" />
                  <circle cx="84" cy="42" fill="currentColor" r="3" />
                  <circle cx="70" cy="80" fill="currentColor" r="3" />
                  <circle cx="28" cy="76" fill="currentColor" r="3" />
                  <circle cx="16" cy="42" fill="currentColor" r="3" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm font-bold text-on-surface uppercase">Sensory Concordance</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant leading-snug">Evaluated across Chew, Fat-Slip, Heat Retention, Pungency, and Aftertaste.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm mb-space-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-2">
          <div>
            <h3 className="font-title-lg text-title-lg text-on-surface flex items-center gap-2">
              <Icon name="checklist" className="text-primary" />
              Kitchen Feasibility &amp; Compatibility Checklist
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Automated test matrix simulating 100°C prolonged oil-water stew reduction.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
              <Icon name="done_all" className="text-xs" /> 4 Passed
            </span>
            <span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-semibold">
              <Icon name="info" className="text-xs" /> 1 Caution
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-space-sm">
          {CHECKS.map((c) => (
            <div
              key={c.n}
              className={`p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md ${c.warn ? "bg-tertiary-fixed/30" : "bg-surface-container-low"}`}
            >
              <div className="flex items-start gap-space-md">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    c.warn ? "bg-tertiary-container text-on-tertiary-container" : "bg-secondary-container text-on-secondary-container"
                  }`}
                >
                  <Icon name={c.warn ? "priority_high" : "check"} className="text-lg" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`font-label-lg text-label-lg font-bold ${c.warn ? "text-tertiary" : "text-on-surface"}`}>
                      {c.n}. {c.title}
                    </span>
                    <span
                      className={`font-label-sm text-label-sm px-2 py-0.5 rounded font-bold ${
                        c.warn
                          ? "bg-tertiary text-on-tertiary"
                          : c.strongChip
                          ? "bg-secondary-container text-on-secondary-container"
                          : "bg-surface-container-lowest text-primary"
                      }`}
                    >
                      {c.chip}
                    </span>
                  </div>
                  <p className={`font-body-md text-body-md mt-0.5 ${c.warn ? "text-on-surface" : "text-on-surface-variant"}`}>
                    {c.lead && <strong>{c.lead}</strong>}
                    {c.body}
                  </p>
                </div>
              </div>

              {c.warn ? (
                <button
                  onClick={() => navigate("swap")}
                  className="shrink-0 self-start md:self-auto bg-surface-container-lowest text-tertiary hover:bg-tertiary-fixed font-label-md text-label-md px-3 py-1.5 rounded-xl font-bold transition-all shadow-sm flex items-center gap-1"
                >
                  <Icon name="swap_calls" className="text-sm" />
                  <span>Swap to Lion's Mane</span>
                </button>
              ) : (
                <div className="flex items-center gap-1 shrink-0 self-end md:self-auto font-label-sm text-label-sm text-primary font-bold">
                  <Icon name={c.footIcon} className="text-base" />
                  <span>{c.foot}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stress test */}
      <div className="bg-error-container/40 rounded-xl p-space-md mb-space-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div className="flex items-start gap-space-md">
          <div className="w-10 h-10 rounded-xl bg-error text-on-error flex items-center justify-center shrink-0">
            <Icon name="block" className="text-xl" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-label-lg text-label-lg font-bold text-on-surface">Stress-Test Simulation: What if you switched to Unfermented Tofu?</span>
              <span className="bg-error text-on-error font-label-sm text-label-sm px-2 py-0.5 rounded font-semibold uppercase">High Risk Conflict</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              High thermal breakdown risk: During prolonged 105°C pepper stew bubbling, standard unpressed tofu releases 40% unbound water, diluting the rich obe ata sauce and turning gelatinously mushy.
            </p>
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-2">
          <span className="font-label-sm text-label-sm text-error font-bold flex items-center gap-1">
            <Icon name="cancel" className="text-sm" />
            Rejected by Engine
          </span>
        </div>
      </div>

      {/* Bottom dock */}
      <div className="sticky bottom-4 z-30 bg-surface-container-lowest/95 backdrop-blur-md rounded-2xl p-space-md shadow-xl flex flex-col sm:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md w-full sm:w-auto">
          <button
            onClick={() => navigate("swap")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-container-low hover:bg-surface-container text-on-surface px-space-md py-3 rounded-xl font-label-lg text-label-lg transition-colors"
          >
            <Icon name="tune" className="text-base" />
            <span>Adjust Swaps / Change Selection</span>
          </button>
          <button
            onClick={() => window.print()}
            className="hidden sm:inline-flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md px-2 py-1"
          >
            <Icon name="print" className="text-sm" />
            <span>Print Lab Audit Sheet</span>
          </button>
        </div>
        <div className="flex items-center gap-space-md w-full sm:w-auto justify-end">
          <div className="hidden md:flex flex-col text-right">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Readiness Score</span>
            <span className="font-label-md text-label-md text-primary font-bold">100% Kitchen-Proof</span>
          </div>
          <button
            onClick={() => navigate("deploy")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary px-space-xl py-3.5 rounded-xl font-label-lg text-label-lg font-bold shadow-md hover:shadow-lg transition-all"
          >
            <span>Proceed to Step 4: Save &amp; Deploy to Menu</span>
            <Icon name="arrow_forward" className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
