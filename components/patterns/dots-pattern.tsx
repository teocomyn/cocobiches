"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type Variant = "marine-on-creme" | "creme-on-marine";

export function DotsPattern({
  variant,
  className,
}: {
  variant: Variant;
  className?: string;
}) {
  const raw = useId().replace(/:/g, "");
  const patternId = `dots-${variant}-${raw}`;
  const dot =
    variant === "marine-on-creme"
      ? "rgba(45, 48, 119, 0.14)"
      : "rgba(244, 231, 219, 0.18)";
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.25" fill={dot} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
