import React, { useState } from "react";
import Icon from "../components/Icon";

const OPERATION_TYPES = [
  { value: "fine_dining", label: "Fine Dining" },
  { value: "bistro", label: "Bistro / Bukateria" },
  { value: "qsr", label: "Fast Casual" },
  { value: "catering", label: "Catering / Scale" },
];

const PILLARS = [
  { icon: "trending_down", title: "Immediate Cost Optimization", text: "Average 35% – 55% reduction per pot across commercial volume batches." },
  { icon: "storefront", title: "Live Regional Indexing", text: "Real-time daily raw pricing synced with Mile 12, Oyingbo, and Bodija depots." },
  { icon: "restaurant_menu", title: "Sensory Organoleptic Parity", text: "Texture, collagen mouthfeel, and deep umami preserved for Egusi, Jollof, and Peppersoup." },
];

const INPUT_CLS =
  "w-full pl-10 pr-3 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all";

function passwordStrength(value) {
  let s = 0;
  if (value.length >= 8) s++;
  if (/[A-Z]/.test(value)) s++;
  if (/[0-9]/.test(value)) s++;
  if (/[^A-Za-z0-9]/.test(value)) s++;
  return s;
}

export default function SignUpPage({ navigate }) {
  const [form, setForm] = useState({
    chefName: "",
    restaurantName: "",
    kitchenLocation: "lagos-vi",
    workEmail: "",
    kitchenType: "fine_dining",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const strength = passwordStrength(form.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Account created: send the chef to the login page
    navigate("login");
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface flex items-center justify-center min-h-screen p-space-md">
      <main className="w-full bg-surface-container-lowest rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] max-w-5xl">
        <div className="w-full flex flex-col lg:flex-row overflow-hidden bg-surface-container-lowest rounded-xl shadow-xl">
          {/* LEFT PANEL */}
          <div className="lg:w-5/12 bg-primary text-on-primary p-space-lg lg:p-space-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>
            <div className="absolute -left-12 bottom-12 w-64 h-64 rounded-full bg-secondary-container/10 blur-2xl pointer-events-none"></div>

            <div className="relative z-10 space-y-space-md">
              <div className="flex items-center gap-space-xs">
                <div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                  <Icon name="eco" className="text-[20px]" fill />
                </div>
                <div>
                  <span className="font-headline-md text-headline-md tracking-tight block leading-none text-surface-container-lowest">PlantSwap</span>
                  <span className="font-label-sm text-label-sm tracking-widest text-primary-fixed block uppercase pt-0.5 opacity-90">Culinary Intelligence Suite</span>
                </div>
              </div>

              <div className="pt-space-sm space-y-space-xs">
                <h1 className="font-headline-lg text-headline-lg font-bold leading-tight tracking-tight text-surface-container-lowest">
                  Equip your kitchen with high-margin botanical swaps.
                </h1>
                <p className="font-body-sm text-body-sm text-surface-container-high/90">
                  Engineered for executive chefs converting meat-heavy traditional recipes into verified, margin-friendly plant formulations.
                </p>
              </div>

              <div className="space-y-space-sm pt-space-xs">
                {PILLARS.map((p) => (
                  <div key={p.title} className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-lowest/10 backdrop-blur-sm">
                    <Icon name={p.icon} className="text-primary-fixed text-[20px] mt-0.5 shrink-0" fill />
                    <div>
                      <p className="font-label-md text-label-md text-surface-container-lowest font-semibold">{p.title}</p>
                      <p className="font-body-sm text-body-sm text-surface-container-high/80">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-space-lg space-y-space-md">
              <div className="grid grid-cols-2 gap-space-sm p-space-sm rounded-xl bg-surface-container-lowest/15 backdrop-blur-md">
                <div>
                  <div className="font-metric-tabular text-headline-md font-bold text-surface-container-lowest">₦1.42M+</div>
                  <div className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">Avg. Monthly Savings</div>
                </div>
                <div>
                  <div className="font-metric-tabular text-headline-md font-bold text-surface-container-lowest">480+</div>
                  <div className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">Kitchens Registered</div>
                </div>
              </div>

              <div className="p-space-sm rounded-lg bg-surface-container-lowest/10 border-l-2 border-primary-fixed text-surface-container-lowest">
                <p className="font-body-sm text-body-sm italic text-surface-container-high/95">
                  “Switching beef broths to fermented iru and smoked mushroom bases doubled our line margin without a single customer noticing.”
                </p>
                <div className="mt-space-xs flex items-center justify-between">
                  <span className="font-label-sm text-label-sm font-semibold text-surface-container-lowest">Chef Ngozi Okafor</span>
                  <span className="font-label-sm text-label-sm text-surface-container-high/70">Terra Kulture, VI Lagos</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:w-7/12 p-space-lg lg:p-space-xl flex flex-col justify-between bg-surface-container-lowest">
            <div className="space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container/40 text-on-secondary-container">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-label-sm text-label-sm font-bold tracking-wider uppercase">Culinary Onboarding</span>
                </div>
                <span className="font-label-sm text-label-sm text-outline">Step 1 of 2</span>
              </div>

              <div>
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">Create your Restaurant Account</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Join executive chefs across West Africa re-engineering higher-margin plant-based offerings.
                </p>
              </div>

              <form className="space-y-space-md" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-space-md">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="chef-name">Full Chef / Lead Name</label>
                    <div className="relative">
                      <Icon name="person" className="absolute left-3 top-2.5 text-[20px] text-outline" />
                      <input id="chef-name" className={INPUT_CLS} placeholder="e.g. Babatunde Adeleke" required type="text" value={form.chefName} onChange={update("chefName")} />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="restaurant-name">Restaurant / Brand Name</label>
                    <div className="relative">
                      <Icon name="restaurant" className="absolute left-3 top-2.5 text-[20px] text-outline" />
                      <input id="restaurant-name" className={INPUT_CLS} placeholder="e.g. Bukateria Bistro, Lagos" required type="text" value={form.restaurantName} onChange={update("restaurantName")} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-space-md">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="kitchen-location">Kitchen Location</label>
                    <div className="relative">
                      <Icon name="location_on" className="absolute left-3 top-2.5 text-[20px] text-outline" />
                      <select
                        id="kitchen-location"
                        className="w-full pl-10 pr-8 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all cursor-pointer"
                        value={form.kitchenLocation}
                        onChange={update("kitchenLocation")}
                      >
                        <option value="lagos-vi">Lagos (Victoria Island / Lekki)</option>
                        <option value="lagos-ikeja">Lagos (Ikeja / Mainland)</option>
                        <option value="abuja-maitama">Abuja (Maitama / Wuse)</option>
                        <option value="port-harcourt">Port Harcourt (GRA)</option>
                        <option value="ibadan">Ibadan (Bodija / Jericho)</option>
                        <option value="other-ng">Other Region (Nigeria)</option>
                      </select>
                      <Icon name="expand_more" className="absolute right-3 top-2.5 text-[20px] text-outline pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="work-email">Work Email (Kitchen Terminal)</label>
                    <div className="relative">
                      <Icon name="mail" className="absolute left-3 top-2.5 text-[20px] text-outline" />
                      <input id="work-email" className={INPUT_CLS} placeholder="chef@yourkitchen.ng" required type="email" value={form.workEmail} onChange={update("workEmail")} />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-1.5">Commercial Operation Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    {OPERATION_TYPES.map((t) => (
                      <label key={t.value} className="cursor-pointer">
                        <input
                          className="peer sr-only"
                          name="kitchenType"
                          type="radio"
                          value={t.value}
                          checked={form.kitchenType === t.value}
                          onChange={update("kitchenType")}
                        />
                        <div className="py-2.5 px-3 text-center rounded-lg bg-surface-container-low text-on-surface-variant font-label-md text-label-md peer-checked:bg-primary-container peer-checked:text-on-primary peer-checked:font-semibold transition-all">
                          {t.label}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block font-label-md text-label-md text-on-surface" htmlFor="password">Terminal Security Passcode</label>
                    <span className="font-label-sm text-label-sm text-outline">Min. 8 characters</span>
                  </div>
                  <div className="relative">
                    <Icon name="lock" className="absolute left-3 top-2.5 text-[20px] text-outline" />
                    <input
                      id="password"
                      className={INPUT_CLS.replace("pr-3", "pr-10")}
                      placeholder="••••••••••••"
                      required
                      minLength={8}
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={update("password")}
                    />
                    <button type="button" className="absolute right-3 top-2.5 text-outline hover:text-on-surface flex items-center" onClick={() => setShowPassword((v) => !v)}>
                      <Icon name={showPassword ? "visibility_off" : "visibility"} className="text-[20px]" />
                    </button>
                  </div>
                  <div className="mt-2 grid grid-cols-4 gap-1.5 h-1">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`h-full rounded-full transition-colors duration-300 ${
                          i < strength ? (strength <= 1 ? "bg-error" : strength <= 2 ? "bg-tertiary-container" : "bg-primary") : "bg-outline-variant"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    id="terms"
                    className="w-4 h-4 mt-0.5 rounded bg-surface-container-low accent-primary text-primary focus:ring-0 cursor-pointer"
                    required
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />
                  <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none" htmlFor="terms">
                    I agree to the{" "}
                    <a className="text-primary font-semibold hover:underline" href="#" onClick={(e) => e.preventDefault()}>
                      Culinary Terms of Service
                    </a>{" "}
                    and verify I represent a professional Nigerian kitchen or foodservice operation.
                  </label>
                </div>

                <button
                  className="w-full py-3 px-space-md rounded-lg bg-primary hover:bg-primary-container text-on-primary font-title-lg text-title-lg font-semibold flex items-center justify-center gap-space-xs shadow-md transition-all"
                  type="submit"
                >
                  <span>Register</span>
                  <Icon name="arrow_forward" className="text-[20px]" />
                </button>
              </form>

              <div className="pt-2">
                <div className="relative flex items-center justify-center py-2">
                  <div className="w-full h-px bg-surface-container-highest"></div>
                  <span className="absolute bg-surface-container-lowest px-3 font-label-sm text-label-sm text-outline uppercase tracking-wider">Fast Provisioning</span>
                </div>
                <button
                  className="w-full mt-2 py-2.5 px-space-md rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg flex items-center justify-center gap-space-xs transition-colors"
                  type="button"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                  <span>Register with Google Workspace for Kitchens</span>
                </button>
              </div>
            </div>

            <div className="pt-space-md mt-space-md border-t border-surface-container-highest space-y-space-xs text-center">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Already running PlantSwap on your line?{" "}
                <a
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("login");
                  }}
                >
                  Log in to Kitchen Terminal
                  <Icon name="open_in_new" className="text-[14px]" />
                </a>
              </p>
              <div className="flex items-center justify-center gap-1.5 text-outline">
                <Icon name="lock" className="text-[16px]" />
                <span className="font-label-sm text-label-sm">256-bit encrypted. Proprietary heritage recipes and costing sheets remain 100% confidential.</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
