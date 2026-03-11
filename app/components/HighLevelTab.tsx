"use client";

import { useState } from "react";
import { Play, FileText, Headphones, X } from "lucide-react";
import { strategies, StrategyKey } from "../data";

type ActiveMedia =
  | { type: "video"; src: string }
  | { type: "audio"; src: string }
  | { type: "pdf"; src: string }
  | null;

export default function HighLevelTab({
  strategyKey,
}: {
  strategyKey: StrategyKey;
}) {
  const s = strategies[strategyKey];
  const [activeMedia, setActiveMedia] = useState<ActiveMedia>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const toggle = (media: NonNullable<ActiveMedia>) => {
    if (activeMedia?.type === media.type && activeMedia.src === media.src) {
      setActiveMedia(null);
    } else {
      setActiveMedia(media);
    }
  };

  const isActive = (type: string, src: string) =>
    activeMedia?.type === type && activeMedia.src === src;



  return (
    <div className="space-y-6">
      {/* Media player */}
      {activeMedia?.type === "video" && (
        <div className="relative rounded-xl overflow-hidden bg-black">
          <button
            onClick={() => setActiveMedia(null)}
            className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <video
            key={activeMedia.src}
            src={activeMedia.src}
            controls
            autoPlay
            className="w-full max-h-[400px]"
          />
        </div>
      )}

      {activeMedia?.type === "audio" && (
        <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
          <button
            onClick={() => setActiveMedia(null)}
            className="bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
          <Headphones className="w-5 h-5 text-cyan-500" />
          <audio
            key={activeMedia.src}
            src={activeMedia.src}
            controls
            autoPlay
            className="flex-1"
          />
        </div>
      )}

      {activeMedia?.type === "pdf" && (
        <div className="relative rounded-xl overflow-hidden bg-white shadow-sm">
          <div className="flex items-center justify-between bg-gray-900 px-4 py-2.5">
            <span className="text-sm text-white font-medium">Investor Pitch Deck</span>
            <div className="flex items-center gap-3">
              <a
                href={activeMedia.src}
                download
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Download PDF
              </a>
              <button
                onClick={() => setActiveMedia(null)}
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <object
            key={activeMedia.src}
            data={`${activeMedia.src}#toolbar=1&navpanes=0&view=FitH`}
            type="application/pdf"
            className="w-full bg-white"
            style={{ height: "500px" }}
          >
            <div className="flex flex-col items-center justify-center p-10 text-center" style={{ height: "500px" }}>
              <FileText className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-gray-600 mb-2">Unable to display PDF in browser</p>
              <a
                href={activeMedia.src}
                download
                className="text-cyan-600 hover:text-cyan-500 font-medium text-sm"
              >
                Download Investor Pitch Deck (PDF)
              </a>
            </div>
          </object>
        </div>
      )}

      {/* Coming soon modal */}
      {showComingSoon && (
        <div
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
          onClick={() => setShowComingSoon(false)}
        >
          <div className="bg-white rounded-xl p-8 text-center shadow-lg max-w-sm" onClick={(e) => e.stopPropagation()}>
            <FileText className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">1 Pager</h3>
            <p className="text-sm text-gray-500 mb-4">Coming soon — this document is being prepared.</p>
            <button
              onClick={() => setShowComingSoon(false)}
              className="text-sm text-cyan-600 hover:text-cyan-500 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Row 1: Two grouped cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Group 1: Videos */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div
              onClick={() => toggle({ type: "video", src: s.media.intro })}
              className={`bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center p-5 min-h-[120px] transition-colors cursor-pointer ${
                isActive("video", s.media.intro)
                  ? "ring-2 ring-cyan-500 bg-gray-200"
                  : "hover:bg-gray-200"
              }`}
            >
              <Play className="w-7 h-7 text-gray-400 mb-2" />
              <p className="text-xs text-gray-700 font-medium leading-tight">Video Intro:<br/>The Summary</p>
            </div>
            <div
              onClick={() => toggle({ type: "video", src: s.media.explainer })}
              className={`bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center p-5 min-h-[120px] transition-colors cursor-pointer ${
                isActive("video", s.media.explainer)
                  ? "ring-2 ring-cyan-500 bg-gray-200"
                  : "hover:bg-gray-200"
              }`}
            >
              <Play className="w-7 h-7 text-gray-400 mb-2" />
              <p className="text-xs text-gray-700 font-medium leading-tight">Video Explainer:<br/>The Deep Dive</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 text-right">Notebook LM</p>
        </div>

        {/* Group 2: Documents */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div
              onClick={() => setShowComingSoon(true)}
              className="bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center p-5 min-h-[120px] hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <FileText className="w-7 h-7 text-gray-400 mb-2" />
              <p className="text-xs text-gray-700 font-medium">1 Pager</p>
              <p className="text-[10px] text-yellow-600/70 mt-1">Coming soon</p>
            </div>
            <div
              onClick={() => toggle({ type: "pdf", src: s.media.pitch })}
              className={`bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center p-5 min-h-[120px] transition-colors cursor-pointer ${
                isActive("pdf", s.media.pitch)
                  ? "ring-2 ring-cyan-500 bg-gray-200"
                  : "hover:bg-gray-200"
              }`}
            >
              <FileText className="w-7 h-7 text-gray-400 mb-2" />
              <p className="text-xs text-gray-700 font-medium leading-tight">Investor Pitch<br/>Deck</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 text-right">Notebook LM</p>
        </div>
      </div>

      {/* Row 2: Podcast + Live Data/Backtest */}
      <div className="grid grid-cols-[2fr_3fr] gap-4">
        {/* Podcast / Audio Overview */}
        <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col">
          <div
            onClick={() => toggle({ type: "audio", src: s.media.podcast })}
            className={`flex-1 bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center p-5 min-h-[140px] transition-colors cursor-pointer ${
              isActive("audio", s.media.podcast)
                ? "ring-2 ring-cyan-500 bg-gray-200"
                : "hover:bg-gray-200"
            }`}
          >
            <Headphones className="w-8 h-8 text-gray-400 mb-2" />
            <p className="text-xs text-gray-700 font-medium leading-tight">Audio Overview:<br/>The Expert Conversation</p>
          </div>
          <p className="text-xs text-gray-400 text-right mt-3">Notebook LM</p>
        </div>

        {/* Live Data + Backtest */}
        <div className="bg-white rounded-xl p-6 shadow-sm grid grid-cols-2 gap-8">
          {/* Live Data */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-5">Live Data</h3>
            <div className="space-y-4">
              {[
                { label: "Last 30 days closed PnL", value: s.liveData.pnl30d },
                { label: "Trades / account last 30 days", value: s.liveData.trades30d },
                { label: "Amount trading", value: s.liveData.amountTrading },
                { label: "Minimum Funds required", value: s.liveData.minFunds },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-400">{row.label}</span>
                  <span className={`text-sm font-semibold font-mono ${
                    row.value.startsWith("+") || row.value.startsWith("$")
                      ? "text-emerald-500"
                      : "text-gray-900"
                  }`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backtest Results */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-5">Backtest results</h3>
            <div className="space-y-3">
              {s.backtestBars.map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-sm text-gray-500">{bar.label}</span>
                    <span className="text-sm font-semibold text-emerald-500 font-mono">
                      {bar.value}
                    </span>
                  </div>
                  <div className="bg-gray-100 rounded-full h-2 w-full">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full h-2 transition-all"
                      style={{ width: `${bar.barPercent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-5 text-sm text-center py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors font-medium">
              View Full Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
