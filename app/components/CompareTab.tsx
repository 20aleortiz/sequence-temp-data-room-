"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { strategies, StrategyKey } from "../data";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CompareTab({ strategyKey }: { strategyKey: StrategyKey }) {
  const both = strategies["both"];
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Video player */}
      {playingVideo && (
        <div className="relative rounded-xl overflow-hidden bg-black">
          <button
            onClick={() => setPlayingVideo(null)}
            className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <video
            key={playingVideo}
            src={playingVideo}
            controls
            autoPlay
            className="w-full max-h-[400px]"
          />
        </div>
      )}

      {/* Side-by-side comparison cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Sigma 1x card */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              1x
            </span>
            <h3 className="text-sm font-bold text-gray-900">Sigma 1x — Spot</h3>
          </div>
          <div
            onClick={() => setPlayingVideo(
              playingVideo === strategies["sigma-1x"].media.explainer
                ? null
                : strategies["sigma-1x"].media.explainer
            )}
            className={`bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center p-8 min-h-[160px] transition-colors cursor-pointer ${
              playingVideo === strategies["sigma-1x"].media.explainer
                ? "ring-2 ring-cyan-500 bg-gray-200"
                : "hover:bg-gray-200"
            }`}
          >
            <Play className="w-8 h-8 text-gray-400 mb-3" />
            <p className="text-sm text-gray-700 font-medium">Video Explainer</p>
          </div>
          <div className="flex items-center justify-end gap-1.5 mt-3">
            <span className="text-[10px] text-gray-400">Powered By</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/notebooklm-logo.png" alt="NotebookLM" className="h-2" />
          </div>
          <a
            href="/strategy/sigma-1x"
            className="block w-full mt-4 text-sm text-center py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors font-medium"
          >
            View Card
          </a>
        </div>

        {/* Sigma 2x card */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              2x
            </span>
            <h3 className="text-sm font-bold text-gray-900">Sigma 2x — Derivatives</h3>
          </div>
          <div
            onClick={() => setPlayingVideo(
              playingVideo === strategies["sigma-2x"].media.explainer
                ? null
                : strategies["sigma-2x"].media.explainer
            )}
            className={`bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center p-8 min-h-[160px] transition-colors cursor-pointer ${
              playingVideo === strategies["sigma-2x"].media.explainer
                ? "ring-2 ring-cyan-500 bg-gray-200"
                : "hover:bg-gray-200"
            }`}
          >
            <Play className="w-8 h-8 text-gray-400 mb-3" />
            <p className="text-sm text-gray-700 font-medium">Video Explainer</p>
          </div>
          <div className="flex items-center justify-end gap-1.5 mt-3">
            <span className="text-[10px] text-gray-400">Powered By</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/notebooklm-logo.png" alt="NotebookLM" className="h-2" />
          </div>
          <a
            href="/strategy/sigma-2x"
            className="block w-full mt-4 text-sm text-center py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors font-medium"
          >
            View Card
          </a>
        </div>
      </div>

      {/* Comparison backtest bars */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-gray-900 mb-5">Backtest Comparison</h3>
        <div className="space-y-3">
          {both.backtestBars.map((bar) => (
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
      </div>
    </div>
  );
}
