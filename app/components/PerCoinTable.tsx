"use client";

import { strategies, StrategyKey } from "../data";

export default function PerCoinTable({ strategyKey }: { strategyKey: StrategyKey }) {
  const s = strategies[strategyKey];

  return (
    <section className="max-w-5xl mx-auto px-6 mt-10">
      <h2 className="text-xl font-bold text-white mb-4">Per-Coin Backtest Results</h2>
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06]">
              <th className="text-left px-5 py-3 text-gray-500 font-medium">Coin</th>
              <th className="text-right px-5 py-3 text-gray-500 font-medium">Total Return</th>
              <th className="text-right px-5 py-3 text-gray-500 font-medium">Max DD</th>
              <th className="text-right px-5 py-3 text-gray-500 font-medium">Sharpe</th>
              <th className="text-right px-5 py-3 text-gray-500 font-medium">Win Rate</th>
              <th className="text-right px-5 py-3 text-gray-500 font-medium">Profit Factor</th>
            </tr>
          </thead>
          <tbody>
            {s.perCoin.map((row, i) => (
              <tr
                key={row.coin}
                className={
                  i !== s.perCoin.length - 1
                    ? "border-b border-white/[0.04]"
                    : ""
                }
              >
                <td className="px-5 py-3 text-white font-medium">{row.coin}</td>
                <td className="px-5 py-3 text-right text-emerald-400 font-mono">
                  {row.totalReturn}
                </td>
                <td className="px-5 py-3 text-right text-gray-300 font-mono">
                  {row.maxDD}
                </td>
                <td className="px-5 py-3 text-right text-gray-300 font-mono">
                  {row.sharpe}
                </td>
                <td className="px-5 py-3 text-right text-gray-300 font-mono">
                  {row.winRate}
                </td>
                <td className="px-5 py-3 text-right text-gray-300 font-mono">
                  {row.profitFactor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
