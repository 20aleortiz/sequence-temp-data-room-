"use client";

import { strategies, StrategyKey } from "../data";

export default function StrategyOverview({ strategyKey }: { strategyKey: StrategyKey }) {
  const s = strategies[strategyKey];

  const details = [
    ["Strategy Type", s.type],
    ["Direction", s.direction],
    ["Leverage", s.leverage],
    ["Coins Traded", s.coins.join(", ")],
    ["Timeframe", s.timeframe],
    ["Backtest Period", s.backtestPeriod],
    ["Recommended Capital", s.recommendedCapital],
    ["Status", s.status],
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 mt-10">
      <h2 className="text-2xl font-bold text-white mb-2">{s.name}</h2>
      <p className="text-gray-400 mb-6">{s.description}</p>

      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden">
        {details.map(([label, value], i) => (
          <div
            key={label}
            className={`flex justify-between items-center px-5 py-3 ${
              i !== details.length - 1 ? "border-b border-white/[0.04]" : ""
            }`}
          >
            <span className="text-sm text-gray-500">{label}</span>
            <span className="text-sm text-white font-medium">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
