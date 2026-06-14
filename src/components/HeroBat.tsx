"use client";

import { useEffect, useRef } from "react";

/**
 * Dot-art Batman emblem. A faint base layer of dots is always visible;
 * a brighter layer is revealed only within a radial spotlight that tracks
 * the cursor — so dots closer to the pointer glow more.
 */
export default function HeroBat() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bat = ref.current;
    const card = bat?.parentElement;
    if (!bat || !card) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = bat.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        bat.style.setProperty("--mx", `${x}px`);
        bat.style.setProperty("--my", `${y}px`);
        bat.style.setProperty("--glow", "1");
      });
    };
    const onLeave = () => bat.style.setProperty("--glow", "0");

    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerleave", onLeave);
    return () => {
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="bat pointer-events-none absolute left-1/2 top-1/2 w-[min(960px,90%)] -translate-x-1/2 -translate-y-1/2 [aspect-ratio:200/70]"
    >
      <div className="bat-base absolute inset-0" />
      <div className="bat-glow absolute inset-0" />
    </div>
  );
}
