import React from "react";
import Icon from "./Icon";
import { PROFILE } from "../utils";

export default function Header({ navigate }) {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-lg flex items-center justify-between gap-space-md">
      <div className="flex items-center flex-1 max-w-md">
        <div className="w-full flex items-center gap-space-sm bg-surface-container-low px-space-md py-1.5 rounded-xl">
          <Icon name="search" className="text-on-surface-variant text-lg" />
          <input
            className="w-full bg-transparent border-0 outline-none font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:ring-0"
            placeholder="Search Nigerian heritage recipes, cuts, swaps..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-space-md">
        <div className="hidden lg:flex items-center gap-space-xs bg-surface-container-low px-space-md py-1.5 rounded-xl">
          <span className="font-body-sm text-body-sm text-on-surface-variant">Shift Balance:</span>
          <span className="font-metric-tabular text-metric-tabular text-primary font-semibold">₦482,500.00</span>
        </div>
        <div className="hidden sm:flex items-center gap-1 px-space-sm py-1 rounded-xl bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
          <Icon name="location_on" className="text-base text-tertiary" />
          <span>Lagos, Nigeria</span>
        </div>
        <button className="relative p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors">
          <Icon name="notifications" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <button
          onClick={() => navigate("login")}
          title="Log out"
          className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors"
        >
          <Icon name="logout" />
        </button>
        <div className="flex items-center gap-space-sm pl-space-sm">
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={PROFILE} />
          <div className="hidden md:flex flex-col text-left">
            <span className="font-label-md text-label-md text-on-surface leading-snug">Chef Tunde Adebayo</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant leading-none">Head Chef</span>
          </div>
        </div>
      </div>
    </header>
  );
}
