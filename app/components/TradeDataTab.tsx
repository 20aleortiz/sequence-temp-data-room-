"use client";

import { strategies, StrategyKey } from "../data";

export default function TradeDataTab({
  strategyKey,
}: {
  strategyKey: StrategyKey;
}) {
  const s = strategies[strategyKey];

  return (
    <div className="space-y-6">
      {/* Stats summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Win Rate", value: s.stats.winRate },
          { label: "Sharpe Ratio", value: s.stats.sharpe },
          { label: "Max Drawdown", value: s.stats.maxDrawdown },
          { label: "Profit Factor", value: s.stats.profitFactor },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-lg shadow-sm p-4"
          >
            <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">
              {stat.label}
            </p>
            <p className="text-lg font-semibold text-gray-900 font-mono">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Per coin table */}
      <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-5 py-3 text-gray-400 font-medium text-xs">Coin</th>
              <th className="text-right px-5 py-3 text-gray-400 font-medium text-xs">Total Return</th>
              <th className="text-right px-5 py-3 text-gray-400 font-medium text-xs">Max DD</th>
              <th className="text-right px-5 py-3 text-gray-400 font-medium text-xs">Sharpe</th>
              <th className="text-right px-5 py-3 text-gray-400 font-medium text-xs">Win Rate</th>
              <th className="text-right px-5 py-3 text-gray-400 font-medium text-xs">Profit Factor</th>
            </tr>
          </thead>
          <tbody>
            {s.perCoin.map((row, i) => (
              <tr
                key={row.coin}
                className={i !== s.perCoin.length - 1 ? "border-b border-gray-50" : ""}
              >
                <td className="px-5 py-3 text-gray-900 font-medium">{row.coin}</td>
                <td className="px-5 py-3 text-right text-emerald-500 font-mono text-xs">{row.totalReturn}</td>
                <td className="px-5 py-3 text-right text-gray-600 font-mono text-xs">{row.maxDD}</td>
                <td className="px-5 py-3 text-right text-gray-600 font-mono text-xs">{row.sharpe}</td>
                <td className="px-5 py-3 text-right text-gray-600 font-mono text-xs">{row.winRate}</td>
                <td className="px-5 py-3 text-right text-gray-600 font-mono text-xs">{row.profitFactor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Strategy details */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {[
          ["Strategy Type", s.type],
          ["Direction", s.direction],
          ["Leverage", s.leverage],
          ["Coins", s.coins.join(", ")],
          ["Timeframe", s.timeframe],
          ["Backtest Period", s.backtestPeriod],
          ["Liquidation Risk", s.liquidationRisk],
          ["Status", s.status],
        ].map(([label, value], i, arr) => (
          <div
            key={label}
            className={`flex justify-between items-center px-5 py-3 text-sm ${
              i !== arr.length - 1 ? "border-b border-gray-50" : ""
            }`}
          >
            <span className="text-gray-400">{label}</span>
            <span className="text-gray-900 font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
