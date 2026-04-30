"use client";

import * as React from "react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export function GooeyTextDemo() {
  return (
    <div className="h-screen flex items-center justify-center">
      <GooeyText
        texts={["Del", "Sur", "Al", "Norte", "DSN"]}
        morphTime={1}
        cooldownTime={0.25}
        className="font-bold"
      />
    </div>
  );
}
