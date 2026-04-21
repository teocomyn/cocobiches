"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

export function LogoPattern({ className }: { className?: string }) {
  const raw = useId().replace(/:/g, "");
  const patternId = `cocobiches-logo-tile-${raw}`;
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-[0.06]",
        className,
      )}
      aria-hidden
    >
      <svg className="h-[160%] w-[160%] -translate-x-1/4 -translate-y-1/4 rotate-45" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <g fill="none" stroke="#2D3077" strokeWidth="1.2">
              <circle cx="10" cy="14" r="4" />
              <circle cx="22" cy="14" r="4" />
              <circle cx="10" cy="26" r="4" />
              <circle cx="22" cy="26" r="4" />
              <rect x="30" y="12" width="18" height="16" rx="2" />
              <path d="M54 18h12M54 24h12" strokeLinecap="round" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
