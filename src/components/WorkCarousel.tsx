"use client";

// The work carousel and its controls. Owns the scroll container so the heading
// chevrons can drive it and reflect whether either end has been reached. Three
// ways to move it: the chevron buttons, mouse drag, or native touch/trackpad
// scrolling — whichever the visitor reaches for first.
//
// We deliberately DON'T use CSS `scroll-snap-type: mandatory`. Mandatory snap
// fights programmatic smooth scrolling (it re-snaps mid-animation, which both
// stalls repeated button presses and causes a visible jump). Instead we drive
// scrolling in JS and recreate the snap *feel* by settling to the nearest card
// whenever a free scroll ends — that can never conflict, because the target we
// scroll to already is a settle point.

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Reveal from "@/components/Reveal";

const DRAG_THRESHOLD = 6; // px of travel before it counts as a drag, not a click
const EDGE_EPS = 2; // px slack when deciding we've hit an end / moved off one

function prefersReduced() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// scrollLeft values that align each card to the column start, ascending. Cards
// are the <a> children; the trailing spacer <div> is ignored.
function cardStops(el: HTMLElement) {
  const pad = parseFloat(getComputedStyle(el).paddingLeft) || 0;
  const containerLeft = el.getBoundingClientRect().left;
  const max = el.scrollWidth - el.clientWidth;
  const out: number[] = [];
  for (const child of Array.from(el.children)) {
    if (!(child instanceof HTMLElement) || child.tagName !== "A") continue;
    const left = el.scrollLeft + (child.getBoundingClientRect().left - containerLeft) - pad;
    out.push(Math.max(0, Math.min(left, max)));
  }
  return out.sort((a, b) => a - b);
}

function nearestStop(el: HTMLElement) {
  return cardStops(el).reduce(
    (best, x) => (Math.abs(x - el.scrollLeft) < Math.abs(best - el.scrollLeft) ? x : best),
    el.scrollLeft,
  );
}

export default function WorkCarousel({
  col,
  title,
  subtitle,
  children,
}: {
  col: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const dragging = useRef(false);
  const moved = useRef(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncEdges = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= EDGE_EPS);
    setAtEnd(el.scrollLeft >= max - EDGE_EPS);
  }, []);

  // Settle to the nearest card after a free scroll (touch flick, trackpad, drag
  // release). No-op when already on a stop, so it can't loop on its own smooth
  // scroll. Skipped mid-drag.
  const settle = useCallback(() => {
    const el = ref.current;
    if (!el || dragging.current) return;
    const target = nearestStop(el);
    if (Math.abs(target - el.scrollLeft) < 1) return;
    el.scrollTo({ left: target, behavior: prefersReduced() ? "auto" : "smooth" });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    syncEdges();
    el.addEventListener("scroll", syncEdges, { passive: true });
    el.addEventListener("scrollend", settle);
    const ro = new ResizeObserver(syncEdges);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", syncEdges);
      el.removeEventListener("scrollend", settle);
      ro.disconnect();
    };
  }, [syncEdges, settle]);

  function step(dir: 1 | -1) {
    const el = ref.current;
    if (!el) return;
    const stops = cardStops(el);
    const target =
      dir === 1
        ? stops.find((x) => x > el.scrollLeft + EDGE_EPS) ?? el.scrollWidth
        : [...stops].reverse().find((x) => x < el.scrollLeft - EDGE_EPS) ?? 0;
    el.scrollTo({ left: target, behavior: prefersReduced() ? "auto" : "smooth" });
  }

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return; // leave touch/pen to native scroll
    const el = ref.current;
    if (!el) return;
    dragging.current = true;
    moved.current = false;
    startX.current = e.clientX;
    startScroll.current = el.scrollLeft;
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    const el = ref.current;
    if (!el) return;
    const delta = e.clientX - startX.current;
    if (!moved.current && Math.abs(delta) > DRAG_THRESHOLD) {
      moved.current = true;
      el.setPointerCapture(e.pointerId);
    }
    if (moved.current) el.scrollLeft = startScroll.current - delta;
  }

  function endDrag(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    dragging.current = false;
    const el = ref.current;
    if (!el) return;
    if (el.hasPointerCapture?.(e.pointerId)) el.releasePointerCapture(e.pointerId);
    if (moved.current) settle(); // drag doesn't emit scrollend, so settle here
  }

  function onClickCapture(e: React.MouseEvent<HTMLDivElement>) {
    if (moved.current) {
      e.preventDefault();
      e.stopPropagation();
      moved.current = false;
    }
  }

  return (
    <>
      <div className={col}>
        <Reveal className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl tracking-[-0.01em] md:text-4xl">{title}</h2>
            <p className="mt-2 text-sm text-ivory-dim">{subtitle}</p>
          </div>
          <div className="flex shrink-0 gap-2">
            <Arrow dir="prev" disabled={atStart} onClick={() => step(-1)} />
            <Arrow dir="next" disabled={atEnd} onClick={() => step(1)} />
          </div>
        </Reveal>
      </div>

      {/* Carousel bleeds to the right edge of the viewport but starts at the
          page column, so it reads as part of the same measure. */}
      <Reveal className="relative">
        <div
          ref={ref}
          className="no-scrollbar flex gap-4 overflow-x-auto px-[max(1.5rem,calc((100%-680px)/2))] py-1 md:cursor-grab md:active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
          // Cancel the browser's native link/image ghost-drag so the gesture
          // scrolls the carousel instead of dragging the card's href.
          onDragStart={(e) => e.preventDefault()}
        >
          {children}
        </div>
        {/* right fade — signals there is more to scroll */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent transition-opacity duration-300 md:w-24"
          style={{ opacity: atEnd ? 0 : 1 }}
        />
      </Reveal>
    </>
  );
}

function Arrow({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous projects" : "Next projects"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-ivory transition-colors duration-200 hover:border-ivory-faint hover:bg-ivory/[0.04] disabled:pointer-events-none disabled:opacity-30"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className={dir === "prev" ? "-translate-x-px" : "translate-x-px"}
      >
        <polyline points={dir === "prev" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
      </svg>
    </button>
  );
}
