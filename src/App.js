import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import NewMealPage from "./pages/NewMealPage";
import SwapPage from "./pages/SwapPage";
import ComparePage from "./pages/ComparePage";
import PlaceholderPage from "./pages/PlaceholderPage";

/*
  Flow:  signup -> login -> dashboard
         dashboard / "New meal" -> new-meal (Step 1) -> swap (Step 2) -> compare (Step 3) -> deploy (Step 4)
*/

// Pages that belong to the "New meal" flow keep that sidebar item highlighted
const MEAL_FLOW = ["new-meal", "swap", "compare", "deploy"];

export default function App() {
  const [page, setPage] = useState("signup"); // the app opens on the sign up page

  const navigate = (next) => {
    setPage(next);
    window.scrollTo(0, 0);
  };

  // Sign up and login are full-screen pages with no sidebar or header
  if (page === "signup") return <SignUpPage navigate={navigate} />;
  if (page === "login") return <LoginPage navigate={navigate} />;

  let content;
  switch (page) {
    case "dashboard":
      content = <DashboardPage navigate={navigate} />;
      break;
    case "new-meal":
      content = <NewMealPage navigate={navigate} />;
      break;
    case "swap":
      content = <SwapPage navigate={navigate} />;
      break;
    case "compare":
      content = <ComparePage navigate={navigate} />;
      break;
    default:
      content = <PlaceholderPage page={page} navigate={navigate} />;
  }

  const activeNav = MEAL_FLOW.includes(page) ? "new-meal" : page;

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface">
      <Sidebar activePath={activeNav} navigate={navigate} />
      <div className="pl-64">
        <Header navigate={navigate} />
        <main className="relative pt-16 bg-surface min-h-screen w-full px-space-lg py-space-lg">{content}</main>
      </div>
    </div>
  );
}
