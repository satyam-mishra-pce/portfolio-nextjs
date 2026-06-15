"use client";

// Horizontal drag-to-scroll for the work carousel. Touch devices already get
// native momentum scrolling, so this only kicks in for mouse pointers — it
// gives desktop visitors an obvious "grab and pull" affordance. A drag past a
// small threshold swallows the click so cards don't navigate mid-drag.

import { useRef, type ReactNode } from "react";

const DRAG_THRESHOLD = 6; // px of travel before it counts as a drag, not a click

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
    el.style.scrollSnapType = ""; // restore snap so it settles on a card
    if (el.hasPointerCapture?.(e.pointerId)) el.releasePointerCapture(e.pointerId);
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
