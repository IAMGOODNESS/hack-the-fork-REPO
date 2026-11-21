import React, { useState, useRef, useEffect } from "react";
import Icon from "../components/Icon";
import { LOGO } from "../utils";

const FLOAT_LABEL =
  "absolute left-11 -top-2.5 bg-surface-container-lowest px-1.5 font-label-md text-label-md text-primary transition-all pointer-events-none peer-placeholder-shown:text-body-md peer-placeholder-shown:top-3 peer-placeholder-shown:text-on-surface-variant/70 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-label-md peer-focus:text-primary peer-focus:bg-surface-container-lowest";

const FLOAT_INPUT =
  "peer w-full h-12 pl-11 rounded-lg bg-surface text-on-surface font-body-md text-body-md placeholder-transparent outline-none transition-all focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#006b2c]";

export default function LoginPage({ navigate }) {
  const [email, setEmail] = useState("chef@bukateria.ng");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const timers = useRef([]);

  // Clear any pending timers if the page is closed early
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("Authenticating terminal credentials...");

    timers.current.push(
      setTimeout(() => {
        setFeedback("Kitchen Terminal Verified. Loading Recipe Substitutions...");
        timers.current.push(setTimeout(() => navigate("dashboard"), 900));
      }, 1000)
    );
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface flex items-center justify-center min-h-screen p-space-md">
      <main className="w-full max-w-5xl my-auto p-4 sm:p-6 lg:p-8">
        <div className="w-full bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
          {/* LEFT PANEL */}
          <div className="lg:col-span-5 bg-primary text-on-primary p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col gap-space-lg">
              <div className="flex items-center gap-space-sm">
                <img alt="PlantSwap Brand Logo" className="h-10 w-auto object-contain brightness-0 invert" src={LOGO} />
              </div>
              <div className="space-y-space-xs mt-space-sm">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed opacity-90">CULINARY INTELLIGENCE SUITE</span>
                <h2 className="font-headline-lg text-headline-lg text-on-primary leading-tight">Smarter plant-based swaps for your menu.</h2>
                <p className="font-body-md text-body-md text-on-primary/80 pt-space-xs">
                  Engineered specifically for Nigerian culinary directors, executive chefs, and fast-paced commercial kitchens modernizing heritage palates.
                </p>
              </div>

              <div className="bg-primary-fixed-variant/40 rounded-lg p-space-md backdrop-blur-sm mt-space-sm flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-secondary-fixed flex items-center gap-1">
                    <Icon name="trending_up" className="text-[16px]" />
                    Average Menu Margin Impact
                  </span>
                  <span className="font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full font-bold">+28% MARGIN</span>
                </div>
                <div className="flex items-baseline gap-space-xs mt-1">
                  <span className="font-display-lg text-display-lg font-bold tracking-tight text-on-primary font-metric-tabular">₦420</span>
                  <span className="font-body-sm text-body-sm text-on-primary/75">saved per protein portion across 12,000+ plated covers</span>
                </div>
                <div className="w-full bg-on-primary/20 h-1.5 rounded-full overflow-hidden mt-space-xs">
                  <div className="bg-secondary-fixed h-full rounded-full w-[78%] transition-all duration-1000"></div>
                </div>
                <div className="flex justify-between items-center text-on-primary/70 font-label-sm text-label-sm mt-1">
                  <span>Egusi &amp; Efo Riro Baselines</span>
                  <span>78% Cost Parity vs Beef Cut</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-space-xl mt-space-lg">
              <div className="bg-on-primary-fixed/20 p-space-md rounded-lg flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold font-title-lg">KO</div>
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg text-on-primary leading-none">Chef Kunle Olatunji</span>
                    <span className="font-body-sm text-body-sm text-on-primary/70">Culinary Director, Terra &amp; Spice (Victoria Island, Lagos)</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm italic text-on-primary/90 leading-relaxed">
                  “Replacing cow skin (kpomo) with slow-braised king oyster mushroom retained our signature rich gelatinous broth texture while slicing our soup line cost significantly.”
                </p>
                <div className="flex items-center gap-1 text-secondary-fixed text-[14px]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Icon key={i} name="star" className="text-[16px]" fill />
                  ))}
                  <span className="font-label-sm text-label-sm text-on-primary/80 ml-1">Verified Culinary Lead</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 lg:p-12 flex flex-col justify-between">
            <div className="w-full max-w-md mx-auto flex flex-col h-full justify-between">
              <div className="flex flex-col gap-space-xs pt-space-md">
                <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase font-semibold">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Terminal Secure Gateway v2.4
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs">Welcome back, Chef</h1>
                <p className="font-body-md text-body-md text-on-surface-variant">Log in to manage recipe substitutions, sensory profiles, and restaurant margins.</p>
              </div>

              <form className="flex flex-col gap-space-lg my-space-xl" onSubmit={handleLogin}>
                {/* Email */}
                <div className="relative flex flex-col">
                  <div className="relative flex items-center">
                    <Icon name="restaurant_menu" className="absolute left-3.5 text-on-surface-variant/70 text-[20px] pointer-events-none" />
                    <input
                      id="workEmail"
                      className={`${FLOAT_INPUT} pr-4`}
                      placeholder=" "
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className={FLOAT_LABEL} htmlFor="workEmail">Work Email Address</label>
                  </div>
                  <span className="text-on-surface-variant/60 font-body-sm text-body-sm mt-1 ml-1">e.g. headchef@lagosgrill.ng</span>
                </div>

                {/* Password */}
                <div className="relative flex flex-col">
                  <div className="relative flex items-center">
                    <Icon name="lock" className="absolute left-3.5 text-on-surface-variant/70 text-[20px] pointer-events-none" />
                    <input
                      id="chefPassword"
                      className={`${FLOAT_INPUT} pr-11`}
                      placeholder=" "
                      required
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className={FLOAT_LABEL} htmlFor="chefPassword">Kitchen Security Passcode</label>
                    <button
                      aria-label="Toggle password view"
                      className="absolute right-3.5 text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none"
                      onClick={() => setShowPassword((v) => !v)}
                      type="button"
                    >
                      <Icon name={showPassword ? "visibility_off" : "visibility"} className="text-[20px]" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-space-xs">
                  <label className="flex items-center gap-space-xs cursor-pointer select-none">
                    <input
                      className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer"
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />
                    <span className="font-body-md text-body-md text-on-surface">Remember this kitchen terminal</span>
                  </label>
                  <a className="font-label-md text-label-md text-primary hover:text-primary-container transition-colors" href="#" onClick={(e) => e.preventDefault()}>
                    Forgot password?
                  </a>
                </div>

                <div className="flex flex-col gap-space-xs mt-space-xs">
                  <button
                    className={`w-full h-12 rounded-lg bg-primary hover:bg-primary-container active:scale-[0.99] text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-space-sm shadow-md transition-all cursor-pointer ${
                      loading ? "opacity-75" : ""
                    }`}
                    disabled={loading}
                    type="submit"
                  >
                    <Icon name="countertops" className="text-[20px]" />
                    <span>Log in to Kitchen</span>
                  </button>
                  {feedback && (
                    <div className="font-body-sm text-body-sm text-primary text-center pt-1">{feedback}</div>
                  )}
                </div>

                <div className="flex items-center gap-space-sm my-space-xs">
                  <div className="h-px bg-surface-container-highest flex-1"></div>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">or rapid auth</span>
                  <div className="h-px bg-surface-container-highest flex-1"></div>
                </div>
                <button
                  className="w-full h-11 rounded-lg bg-surface hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-sm transition-colors cursor-pointer"
                  type="button"
                >
                  <Icon name="pin" className="text-[18px] text-secondary" />
                  <span>Switch to Chef 4-Digit Station PIN</span>
                </button>
              </form>

              <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-xs text-center sm:text-left">
                <div className="flex flex-col">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">New culinary outlet?</span>
                  <a
                    className="font-label-md text-label-md text-primary hover:underline"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("signup");
                    }}
                  >
                    Create restaurant account
                  </a>
                </div>
                <div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant/80">
                  <Icon name="support_agent" className="text-[16px] text-primary" />
                  <span>Kitchen Onboarding: </span>
                  <a className="font-label-md text-label-md text-on-surface underline hover:text-primary" href="#" onClick={(e) => e.preventDefault()}>
                    support@plantswap.ng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
