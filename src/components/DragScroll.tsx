"use client";

// Horizontal drag-to-scroll for the work carousel. Touch devices already get
// native momentum scrolling, so this only kicks in for mouse pointers — it
// gives desktop visitors an obvious "grab and pull" affordance. A drag past a
// small threshold swallows the click so cards don't navigate mid-drag.

import { useRef, type ReactNode } from "react";

const DRAG_THRESHOLD = 6; // px of travel before it counts as a drag, not a click

// The scrollLeft that aligns the nearest child to the snap start — mirrors the
// container's `snap-start` + `scroll-padding-left` so restoring snap can't nudge.
function nearestSnapLeft(el: HTMLElement) {
  const pad = parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0;
  const containerLeft = el.getBoundingClientRect().left;
  const max = el.scrollWidth - el.clientWidth;
  let best = el.scrollLeft;
  let bestDist = Infinity;
  for (const child of Array.from(el.children)) {
    if (!(child instanceof HTMLElement)) continue;
    const left = el.scrollLeft + (child.getBoundingClientRect().left - containerLeft) - pad;
    const dist = Math.abs(left - el.scrollLeft);
    if (dist < bestDist) {
      bestDist = dist;
      best = left;
    }
  }
  return Math.max(0, Math.min(best, max));
}

export default function DragScroll({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const dragging = useRef(false);
  const moved = useRef(false);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return; // leave touch/pen to native scroll
    const el = ref.current;
    if (!el) return;
    dragging.current = true;
    moved.current = false;
    startX.current = e.clientX;
    startScroll.current = el.scrollLeft;
    el.style.scrollSnapType = "none"; // free movement while dragging
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

    // Re-enabling mandatory snapping makes the browser jump to the nearest
    // snap point instantly. Instead, smoothly scroll there ourselves and only
    // restore native snapping once the animation has settled (no visible jump).
    if (!moved.current) {
      el.style.scrollSnapType = "";
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: nearestSnapLeft(el), behavior: reduce ? "auto" : "smooth" });
    const restore = () => {
      el.style.scrollSnapType = "";
      el.removeEventListener("scrollend", restore);
    };
    if ("onscrollend" in el) el.addEventListener("scrollend", restore);
    else window.setTimeout(restore, 400); // Safari has no scrollend yet
  }

  function onClickCapture(e: React.MouseEvent<HTMLDivElement>) {
    if (moved.current) {
      e.preventDefault();
      e.stopPropagation();
      moved.current = false;
    }
  }

  return (
    <div
      ref={ref}
      className={className}
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
  );
}
