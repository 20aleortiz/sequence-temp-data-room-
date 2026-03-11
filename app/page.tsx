"use client";

import { useState } from "react";
import { strategies, StrategyKey } from "./data";
import Hero from "./components/Hero";
import TabsNav from "./components/TabsNav";
import HighLevelTab from "./components/HighLevelTab";
import TradeDataTab from "./components/TradeDataTab";
import DownloadsTab from "./components/DownloadsTab";

type Tab = "high-level" | "trade-data" | "downloads";

export default function Home() {
  const [activeStrategy, setActiveStrategy] = useState<StrategyKey>("sigma-1x");
  const [activeTab, setActiveTab] = useState<Tab>("high-level");
  const s = strategies[activeStrategy];

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <Hero strategyKey={activeStrategy} />

      {/* Strategy selector + description */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-4">
        <div className="flex items-center gap-4 mb-3">
          <h2 className="text-xl font-bold text-gray-900">{s.name}</h2>
          <div className="inline-flex bg-gray-200 rounded-md p-0.5 gap-0.5">
            <button
              onClick={() => { setActiveStrategy("sigma-1x"); setActiveTab("high-level"); }}
              className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                activeStrategy === "sigma-1x"
                  ? "bg-emerald-500 text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              1x
            </button>
            <button
              onClick={() => { setActiveStrategy("sigma-2x"); setActiveTab("high-level"); }}
              className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                activeStrategy === "sigma-2x"
                  ? "bg-emerald-500 text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              2x
            </button>
            <button
              onClick={() => { setActiveStrategy("both"); setActiveTab("high-level"); }}
              className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                activeStrategy === "both"
                  ? "bg-emerald-500 text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Compare
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">
          {s.description}
        </p>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-6">
        <TabsNav activeTab={activeTab} onSwitch={setActiveTab} />

        <div className="mt-6 pb-20">
          {activeTab === "high-level" && <HighLevelTab strategyKey={activeStrategy} />}
          {activeTab === "trade-data" && <TradeDataTab strategyKey={activeStrategy} />}
          {activeTab === "downloads" && <DownloadsTab strategyKey={activeStrategy} />}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-5xl mx-auto px-6 pb-10">
        <div className="border-t border-gray-200 pt-6">
          <p className="text-[11px] text-gray-400 leading-relaxed">
            <strong className="text-gray-500">Disclaimer:</strong> All data shown is from backtesting.
            Past performance does not guarantee future returns. Paper trading active since March 7, 2026.
          </p>
        </div>
      </div>
    </main>
  );
}
