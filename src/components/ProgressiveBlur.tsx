"use client";

import React from "react";

export interface ProgressiveBlurProps {
  className?: string;
  height?: string;
  position?: "top" | "bottom" | "both";
  blurLevels?: number[];
}

/**
 * Layered progressive (gradient) blur. Each layer applies a stronger
 * backdrop-blur, masked so it only shows toward the edge — stacking the
 * opaque regions produces a smooth ramp of blur intensity.
 * Ported from bumicerts/components/ui/progressive-blur.tsx.
 */
export function ProgressiveBlur({
  className = "",
  height = "30%",
  position = "bottom",
  blurLevels = [1, 4, 10, 20],
}: ProgressiveBlurProps) {
  const renderStack = (stackPosition: "top" | "bottom") => {
    const direction = stackPosition === "top" ? "to top" : "to bottom";
    const step = 100 / (blurLevels.length + 1);

    return blurLevels.map((blur, i) => {
      const fadeStart = i * step;
      const fadeEnd = (i + 1) * step;
      const mask = `linear-gradient(${direction}, transparent ${fadeStart}%, #000 ${fadeEnd}%)`;

      return (
        <span
          key={`${stackPosition}-${i}`}
          className="progressive-blur-layer"
          style={{
            ["--progressive-blur" as string]: `${blur}px`,
            gridArea: "1 / 1",
            backdropFilter: `blur(${blur}px)`,
            WebkitBackdropFilter: `blur(${blur}px)`,
            maskImage: mask,
            WebkitMaskImage: mask,
          }}
        />
      );
    });
  };

  if (position === "both") {
    return (
      <>
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 z-10 grid ${className}`}
          style={{ height }}
        >
          {renderStack("top")}
        </div>
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 grid ${className}`}
          style={{ height }}
        >
          {renderStack("bottom")}
        </div>
      </>
    );
  }

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 z-10 grid ${
        position === "top" ? "top-0" : "bottom-0"
      } ${className}`}
      style={{ height }}
    >
      {renderStack(position)}
    </div>
  );
}
