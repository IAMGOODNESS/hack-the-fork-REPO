import React from "react";
import Icon from "./Icon";
import { LOGO, NAV } from "../utils";

export default function Sidebar({ activePath, navigate }) {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col">
        <div className="h-16 px-space-md flex items-center gap-space-sm bg-surface-container-lowest">
          <img alt="PlantSwap Brand Logo" className="h-8 w-auto object-contain" src={LOGO} />
          <div className="flex flex-col">
            <span className="font-title-lg text-title-lg text-primary leading-none">PlantSwap</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Culinary Engine</span>
          </div>
        </div>
        <div className="px-space-md py-space-sm">
          <nav className="flex flex-col gap-space-xs">
            {NAV.map((item) => {
              const active = activePath === item.path;
              return (
                <a
                  key={item.path}
                  href="#"
                  aria-current={active ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.path);
                  }}
                  className={`flex items-center gap-space-sm px-space-md py-space-sm transition-all rounded-xl ${
                    active
                      ? "bg-secondary-container text-on-secondary-container font-label-lg"
                      : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
                  }`}
                >
                  <Icon name={item.icon} className="text-secondary" />
                  <span className="font-label-lg text-label-lg">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="p-space-md m-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Location</span>
          <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>Live Sync
          </span>
        </div>
        <div className="font-label-md text-label-md text-on-surface truncate">Bukateria Bistro Lagos</div>
        <div className="font-body-sm text-body-sm text-on-surface-variant truncate">Kitchen Office #2</div>
      </div>
    </aside>
  );
}
