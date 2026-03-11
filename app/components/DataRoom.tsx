"use client";

import {
  Play,
  FileText,
  Headphones,
  Camera,
  Download,
  BarChart2,
} from "lucide-react";

const mediaItems = [
  {
    icon: Play,
    title: "2-Minute Intro",
    desc: "Quick overview of the strategy",
    tag: "Video",
    placeholder: true,
  },
  {
    icon: Play,
    title: "8-Minute Deep Dive",
    desc: "Full explanation with charts",
    tag: "Video",
    placeholder: true,
  },
  {
    icon: Headphones,
    title: "Podcast Episode",
    desc: "Discussion on strategy mechanics",
    tag: "Audio",
    placeholder: true,
  },
  {
    icon: FileText,
    title: "Investor Pitch",
    desc: "Presentation deck for allocators",
    tag: "Deck",
    placeholder: true,
  },
  {
    icon: Camera,
    title: "Strategy Snapshot",
    desc: "One-page visual summary",
    tag: "Image",
    placeholder: true,
  },
  {
    icon: BarChart2,
    title: "Trade Data",
    desc: "Full backtest trade log",
    tag: "Data",
    placeholder: true,
  },
];

const downloads = [
  { name: "Trader Guide (.md)", placeholder: true },
  { name: "Strategy Sheet (.md)", placeholder: true },
  { name: "KSP Analysis (.md)", placeholder: true },
  { name: "Thesis Document (.md)", placeholder: true },
];

export default function DataRoom() {
  return (
    <section className="max-w-5xl mx-auto px-6 mt-10">
      <h2 className="text-xl font-bold text-white mb-4">Data Room</h2>

      {/* Media grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {mediaItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.title}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 text-left hover:border-cyan-500/30 transition-colors group"
            >
              <div className="flex items-center justify-between mb-3">
                <Icon className="w-5 h-5 text-cyan-400" />
                <span className="text-[10px] uppercase tracking-widest text-gray-600 bg-white/5 px-2 py-0.5 rounded">
                  {item.tag}
                </span>
              </div>
              <p className="text-white text-sm font-medium">{item.title}</p>
              <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
              {item.placeholder && (
                <p className="text-[10px] text-yellow-600/60 mt-2">
                  Coming soon
                </p>
              )}
            </button>
          );
        })}
      </div>

      {/* Downloads */}
      <h3 className="text-lg font-bold text-white mb-3">Downloads</h3>
      <div className="space-y-2">
        {downloads.map((dl) => (
          <div
            key={dl.name}
            className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded-lg px-5 py-3 hover:border-cyan-500/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Download className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-white">{dl.name}</span>
            </div>
            {dl.placeholder && (
              <span className="text-[10px] text-yellow-600/60">Coming soon</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
