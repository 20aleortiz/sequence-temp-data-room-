"use client";

import {
  TrendingUp,
  Shield,
  BarChart3,
  Activity,
  Zap,
  Target,
} from "lucide-react";
import { strategies, StrategyKey } from "../data";

const icons = [TrendingUp, Shield, BarChart3, Activity, Zap, Target];

export default function StatsCards({ strategyKey }: { strategyKey: StrategyKey }) {
  const s = strategies[strategyKey];
  const cards = [
    { label: "Win Rate", value: s.stats.winRate },
    { label: "Sharpe Ratio", value: s.stats.sharpe },
    { label: "Max Drawdown", value: s.stats.maxDrawdown },
    { label: "Profit Factor", value: s.stats.profitFactor },
    { label: "Total Trades", value: s.stats.totalTrades },
    { label: "Liquidation Risk", value: s.liquidationRisk },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 -mt-2">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card, i) => {
          const Icon = icons[i];
          return (
            <div
              key={card.label}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {card.label}
                </span>
              </div>
              <p className="text-xl font-semibold text-white">{card.value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
