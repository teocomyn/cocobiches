"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import {
  INTRO_MUX_VIDEO,
  INTRO_STORAGE_KEY,
  INTRO_VIDEO_POSTER,
} from "@/lib/intro-config";
import { cn } from "@/lib/utils";

type SiteIntroGateProps = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteIntroGate({ locale, dict }: SiteIntroGateProps) {
  const pathname = usePathname();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const isHome =
    pathname === `/${locale}` || pathname === `/${locale}/` || pathname === "/";

  const g = dict.home.introGate;

  const dismiss = useCallback(() => {
    if (exiting) return;
    setExiting(true);
    sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    document.body.classList.remove("intro-active");
    window.setTimeout(() => setVisible(false), 950);
  }, [exiting]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !isHome) return;

    if (sessionStorage.getItem(INTRO_STORAGE_KEY)) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
      return;
    }

    setVisible(true);
    document.body.classList.add("intro-active");

    return () => {
      document.body.classList.remove("intro-active");
    };
  }, [mounted, isHome]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !visible) return;

    let hls: { destroy: () => void } | null = null;
    let cancelled = false;

    const onReady = () => setVideoReady(true);

    video.addEventListener("canplay", onReady);

    async function attachStream() {
      const el = videoRef.current;
      if (!el || cancelled) return;

      if (el.canPlayType("application/vnd.apple.mpegurl")) {
        el.src = INTRO_MUX_VIDEO;
        try {
          await el.play();
        } catch {
          /* autoplay blocked */
        }
        return;
      }

      const { default: Hls } = await import("hls.js");
      if (cancelled || !Hls.isSupported()) return;

      const instance = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls = instance;
      instance.loadSource(INTRO_MUX_VIDEO);
      instance.attachMedia(el);
      instance.on(Hls.Events.MANIFEST_PARSED, () => {
        void el.play().catch(() => undefined);
      });
    }

    void attachStream();

    return () => {
      cancelled = true;
      video.removeEventListener("canplay", onReady);
      hls?.destroy();
    };
  }, [visible]);

  useEffect(() => {
    if (!visible || exiting) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visible, exiting, dismiss]);

  if (!mounted || !visible) return null;

  return (
    <div
      className={cn(
        "intro-gate fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black",
        exiting && "intro-gate--exit",
      )}
      role="dialog"
      aria-modal="true"
      aria-label={g.videoLabel}
    >
      <div className="intro-gate__media absolute inset-0">
        <Image
          src={INTRO_VIDEO_POSTER}
          alt=""
          fill
          priority
          className={cn(
            "object-cover object-center transition-opacity duration-[1.4s] ease-out",
            videoReady ? "opacity-0" : "opacity-100",
          )}
          sizes="100vw"
          aria-hidden
        />
        <video
          ref={videoRef}
          className={cn(
            "intro-gate__video absolute inset-0 h-full w-full object-cover object-center",
            videoReady ? "opacity-100" : "opacity-0",
          )}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={INTRO_VIDEO_POSTER}
          aria-hidden
        />
      </div>

      <div className="intro-gate__vignette absolute inset-0" aria-hidden />
      <div className="intro-gate__grain absolute inset-0" aria-hidden />
      <div className="intro-gate__glow absolute inset-0" aria-hidden />

      <div className="intro-gate__content relative z-10 flex w-full max-w-lg flex-col items-center px-6 text-center">
        <div className="intro-gate__logo">
          <Image
            src="/brand/cocobiches-logo.png"
            alt="Cocobiches"
            width={220}
            height={58}
            className="h-auto w-[min(220px,62vw)] object-contain brightness-0 invert"
            priority
          />
        </div>

        <p className="intro-gate__tagline mt-10 text-[0.72rem] font-medium lowercase tracking-[0.42em] text-white/78 md:text-[0.78rem]">
          {g.tagline}
        </p>

        <div className="intro-gate__line mx-auto mt-8 h-px w-12 bg-cocobiches-or/70" aria-hidden />

        <button
          type="button"
          onClick={dismiss}
          className="intro-gate__cta group mt-12 inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-black shadow-[0_24px_80px_rgb(0_0_0/0.45)] transition hover:scale-[1.03] hover:bg-cocobiches-creme active:scale-[0.98]"
        >
          <span>{g.enter}</span>
          <span
            aria-hidden
            className="inline-block size-1.5 rounded-full bg-black transition-transform duration-500 group-hover:scale-125"
          />
        </button>

        <button
          type="button"
          onClick={dismiss}
          className="intro-gate__skip mt-8 text-[0.62rem] font-medium lowercase tracking-[0.18em] text-white/42 underline decoration-white/25 underline-offset-[6px] transition hover:text-white/70 hover:decoration-white/50"
        >
          {g.skip}
        </button>
      </div>
    </div>
  );
}
