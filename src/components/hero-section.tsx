"use client";

import React from "react";
import dynamic from "next/dynamic";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const DottedSurface = dynamic(
  () => import("@/components/ui/dotted-surface").then((m) => m.DottedSurface),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--grey-900)" }}
    >
      {/* Dotted wave background */}
      <DottedSurface className="opacity-40" />


      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center fade-in fade-in-2">
        <GooeyText
          texts={["Del", "Sur", "Al", "Norte", "DSN"]}
          textColors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#FF6B00"]}
          morphTime={1}
          cooldownTime={0.25}
          className="w-full h-[13vw]"
          textClassName="font-display tracking-[0.15em] uppercase !text-[13vw] leading-none"
        />
      </div>
    </section>
  );
}
