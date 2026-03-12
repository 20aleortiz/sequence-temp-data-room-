"use client";

import { Download } from "lucide-react";
import { StrategyKey } from "../data";

export const downloadsByStrategy: Record<
  StrategyKey,
  { name: string; type: string; href: string }[]
> = {
  "sigma-1x": [
    { name: "Sigma 1x Trader Guide", type: "MD", href: "https://kwtagyeqhdxswpztqcsa.supabase.co/storage/v1/object/public/data-room/downloads/sigma-1x-trader-guide.md" },
    { name: "Sigma 1x KSP Focus Guide", type: "PDF", href: "https://kwtagyeqhdxswpztqcsa.supabase.co/storage/v1/object/public/data-room/downloads/sigma-1x-ksp.pdf" },
    { name: "Sigma 1x Investment Thesis", type: "PDF", href: "https://kwtagyeqhdxswpztqcsa.supabase.co/storage/v1/object/public/data-room/downloads/sigma-1x-investment-thesis.pdf" },
  ],
  "sigma-2x": [
    { name: "Sigma 2x Strategy Sheet", type: "MD", href: "https://kwtagyeqhdxswpztqcsa.supabase.co/storage/v1/object/public/data-room/downloads/sigma-2x-strategy-sheet.md" },
    { name: "Sigma 2x Trader Guide", type: "MD", href: "https://kwtagyeqhdxswpztqcsa.supabase.co/storage/v1/object/public/data-room/downloads/sigma-2x-trader-guide.md" },
    { name: "Sigma 2x KSP Focus Guide", type: "PDF", href: "https://kwtagyeqhdxswpztqcsa.supabase.co/storage/v1/object/public/data-room/downloads/sigma-2x-ksp.pdf" },
    { name: "Sigma 2x Investment Thesis", type: "PDF", href: "https://kwtagyeqhdxswpztqcsa.supabase.co/storage/v1/object/public/data-room/downloads/sigma-2x-investment-thesis.pdf" },
  ],
  "both": [
    { name: "Sigma 2x Strategy Sheet", type: "MD", href: "https://kwtagyeqhdxswpztqcsa.supabase.co/storage/v1/object/public/data-room/downloads/sigma-2x-strategy-sheet.md" },
    { name: "Sigma 1x Trader Guide", type: "MD", href: "https://kwtagyeqhdxswpztqcsa.supabase.co/storage/v1/object/public/data-room/downloads/sigma-1x-trader-guide.md" },
    { name: "Sigma 2x Trader Guide", type: "MD", href: "https://kwtagyeqhdxswpztqcsa.supabase.co/storage/v1/object/public/data-room/downloads/sigma-2x-trader-guide.md" },
    { name: "Sigma 1x KSP Focus Guide", type: "PDF", href: "https://kwtagyeqhdxswpztqcsa.supabase.co/storage/v1/object/public/data-room/downloads/sigma-1x-ksp.pdf" },
    { name: "Sigma 2x KSP Focus Guide", type: "PDF", href: "https://kwtagyeqhdxswpztqcsa.supabase.co/storage/v1/object/public/data-room/downloads/sigma-2x-ksp.pdf" },
    { name: "Sigma 1x Investment Thesis", type: "PDF", href: "https://kwtagyeqhdxswpztqcsa.supabase.co/storage/v1/object/public/data-room/downloads/sigma-1x-investment-thesis.pdf" },
    { name: "Sigma 2x Investment Thesis", type: "PDF", href: "https://kwtagyeqhdxswpztqcsa.supabase.co/storage/v1/object/public/data-room/downloads/sigma-2x-investment-thesis.pdf" },
  ],
};

export default function DownloadsTab({
  strategyKey,
}: {
  strategyKey: StrategyKey;
}) {
  const downloads = downloadsByStrategy[strategyKey];

  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-500 mb-4">
        Download strategy documentation for offline reading or to analyze with
        your AI tool of choice.
      </p>
      {downloads.map((dl) => (
        <a
          key={dl.name}
          href={`${dl.href}?download=`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-white rounded-lg shadow-sm px-5 py-4 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Download className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-900">{dl.name}</span>
            <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded uppercase">
              {dl.type}
            </span>
          </div>
          <span className="text-xs text-cyan-500 hover:text-cyan-600 font-medium">
            Download
          </span>
        </a>
      ))}
    </div>
  );
}
