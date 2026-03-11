"use client";

import { StrategyKey } from "../data";

export default function Hero({ strategyKey }: { strategyKey: StrategyKey }) {
  const isSpot = strategyKey === "sigma-1x";
  const label = isSpot ? "Spot" : "Derivatives";

  return (
    <section className="relative h-48 md:h-56 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1929] via-[#0f2a3d] to-[#0a1e2e]" />

      {/* Radial glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-600/15 via-blue-900/10 to-transparent" />

      {/* Secondary glow right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />

      {/* Circuit board pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Horizontal lines */}
            <line x1="0" y1="40" x2="80" y2="40" stroke="cyan" strokeWidth="1" />
            <line x1="100" y1="40" x2="200" y2="40" stroke="cyan" strokeWidth="0.5" />
            <line x1="20" y1="100" x2="120" y2="100" stroke="cyan" strokeWidth="0.5" />
            <line x1="140" y1="100" x2="200" y2="100" stroke="cyan" strokeWidth="1" />
            <line x1="0" y1="160" x2="60" y2="160" stroke="cyan" strokeWidth="0.5" />
            <line x1="80" y1="160" x2="180" y2="160" stroke="cyan" strokeWidth="1" />
            {/* Vertical lines */}
            <line x1="80" y1="0" x2="80" y2="40" stroke="cyan" strokeWidth="0.5" />
            <line x1="100" y1="40" x2="100" y2="100" stroke="cyan" strokeWidth="0.5" />
            <line x1="120" y1="100" x2="120" y2="160" stroke="cyan" strokeWidth="0.5" />
            <line x1="60" y1="160" x2="60" y2="200" stroke="cyan" strokeWidth="0.5" />
            <line x1="140" y1="60" x2="140" y2="100" stroke="cyan" strokeWidth="0.5" />
            {/* Nodes */}
            <circle cx="80" cy="40" r="3" fill="cyan" />
            <circle cx="100" cy="40" r="2" fill="cyan" />
            <circle cx="120" cy="100" r="3" fill="cyan" />
            <circle cx="140" cy="100" r="2" fill="cyan" />
            <circle cx="60" cy="160" r="2" fill="cyan" />
            <circle cx="80" cy="160" r="3" fill="cyan" />
            {/* Small squares (chips) */}
            <rect x="30" y="55" width="12" height="8" rx="1" fill="none" stroke="cyan" strokeWidth="0.5" />
            <rect x="150" y="120" width="16" height="10" rx="1" fill="none" stroke="cyan" strokeWidth="0.5" />
            <rect x="90" y="150" width="10" height="6" rx="1" fill="none" stroke="cyan" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Binary numbers scattered */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.06] font-mono text-[10px] text-cyan-300 leading-tight select-none pointer-events-none">
        <div className="absolute top-4 right-[10%]">0010101110<br/>1101001011<br/>0110100010<br/>1001011101</div>
        <div className="absolute top-8 right-[35%]">110101<br/>001011<br/>110010</div>
        <div className="absolute bottom-8 right-[20%]">10010111<br/>01101001<br/>11010010</div>
        <div className="absolute top-6 left-[15%]">01100<br/>10011<br/>01110</div>
        <div className="absolute bottom-12 left-[40%]">1010011<br/>0110110<br/>1001101</div>
      </div>

      {/* Concentric rings (center glow effect like the Figma) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[300px] h-[300px] rounded-full border border-cyan-500/[0.06]" />
        <div className="absolute inset-4 rounded-full border border-blue-400/[0.08]" />
        <div className="absolute inset-10 rounded-full border border-cyan-400/[0.10]" />
        <div className="absolute inset-16 rounded-full border border-teal-400/[0.06]" />
      </div>

      {/* Tag */}
      <div className="relative z-10 h-full flex items-end p-6">
        <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
          {label}
        </span>
      </div>
    </section>
  );
}
