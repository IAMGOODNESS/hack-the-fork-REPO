import React from "react";
import { NAV } from "../utils";

const TITLES = { deploy: "Save & Deploy" };

export default function PlaceholderPage({ page, navigate }) {
  const title = TITLES[page] || NAV.find((n) => n.path === page)?.label || "Page";

  return (
    <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <h1 className="font-headline-lg text-headline-lg text-on-surface">{title}</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">This page is not built yet.</p>
      <div className="flex gap-space-sm mt-space-md">
        <button
          onClick={() => navigate("dashboard")}
          className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors"
        >
          Back to Dashboard
        </button>
        {page === "deploy" && (
          <button
            onClick={() => navigate("compare")}
            className="px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-label-lg text-label-lg hover:bg-surface-container transition-colors"
          >
            Back to compatibility check
          </button>
        )}
      </div>
    </section>
  );
}
