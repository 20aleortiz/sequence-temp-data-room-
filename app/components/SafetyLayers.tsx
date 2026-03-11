"use client";

import { ShieldCheck } from "lucide-react";
import { strategies, StrategyKey } from "../data";

export default function SafetyLayers({ strategyKey }: { strategyKey: StrategyKey }) {
  const s = strategies[strategyKey];

  return (
    <section className="max-w-5xl mx-auto px-6 mt-10">
      <h2 className="text-xl font-bold text-white mb-4">Risk Management</h2>
      <div className="space-y-3">
        {s.safetyLayers.map((layer, i) => (
          <div
            key={layer.name}
            className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-4"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center mt-0.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">
                Layer {i + 1}: {layer.name}
              </p>
              <p className="text-gray-500 text-sm mt-0.5">{layer.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
