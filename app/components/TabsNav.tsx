"use client";

type Tab = "high-level" | "trade-data" | "compare" | "downloads";

export default function TabsNav({
  activeTab,
  onSwitch,
  downloadsCount,
}: {
  activeTab: Tab;
  onSwitch: (t: Tab) => void;
  downloadsCount: number;
}) {
  const tabs: { id: Tab; label: string; count?: number }[] = [
    { id: "high-level", label: "High Level", count: 3 },
    { id: "trade-data", label: "Trade Data" },
    { id: "compare", label: "Compare" },
    { id: "downloads", label: "Downloads", count: downloadsCount },
  ];

  return (
    <div className="flex gap-8 border-b border-gray-200 mt-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onSwitch(tab.id)}
          className={`pb-3 text-sm font-medium transition-colors relative ${
            activeTab === tab.id
              ? "text-gray-900"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          {tab.label}
          {tab.count != null && (
            <span className="ml-1 text-xs text-gray-400">({tab.count})</span>
          )}
          {activeTab === tab.id && (
            <span className="absolute -bottom-[1px] left-0 right-0 h-[3px] bg-cyan-500 rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}
