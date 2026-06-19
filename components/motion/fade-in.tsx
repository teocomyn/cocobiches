"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeInCallback = () => void;

let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new Map<Element, FadeInCallback>();

function getSharedObserver() {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const callback = observerCallbacks.get(entry.target);
        if (!callback) continue;
        callback();
        observerCallbacks.delete(entry.target);
        sharedObserver?.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -4% 0px", threshold: 0 },
  );

  return sharedObserver;
}

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = getSharedObserver();
    observerCallbacks.set(node, () => setVisible(true));
    observer.observe(node);

    return () => {
      observerCallbacks.delete(node);
      observer.unobserve(node);
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-500 motion-safe:opacity-0 motion-safe:translate-y-1.5",
        visible && "motion-safe:translate-y-0 motion-safe:opacity-100",
        className,
      )}
      style={{
        transitionDelay: visible ? `${delay * 1000}ms` : "0ms",
        transitionTimingFunction: "var(--ease-cb)",
      }}
    >
      {children}
    </div>
  );
}
