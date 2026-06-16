"use client";

import {
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import Image from "next/image";
import BatmanModel from "@/components/BatmanModel";
import BatDots from "@/components/BatDots";

// Twin portholes that trade places. Both frames are persistent DOM nodes — we
// animate their geometry (size, position, radius) between the "lead" (big) and
// "mini" (badge) roles, so Batman's WebGL canvas never unmounts; it resizes in
// place. (The canvas is forced to fill its frame via the `.bat-stage canvas`
// rule in globals.css, so it tracks the morph instead of lagging to the corner.)
// Click whichever frame is currently the mini to swap which one leads.
//
// The portrait porthole mirrors Batman's: a background that stays clipped inside
// the capsule, a cut-out foreground that pokes over the top via the bat-stage
// mask, and a mouse parallax where the two layers translate by different amounts.

const FG = "/me-fg.png"; // cut-out portrait (transparent), pokes over the top
const BG = "/portrait-bg.jpg"; // scenery, stays clipped inside the porthole

const LEAD: CSSProperties = {
  top: "0%",
  left: "0%",
  width: "100%",
  height: "100%",
  borderRadius: "101.25px",
  borderWidth: "8px",
  zIndex: 10,
  boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
};
const MINI: CSSProperties = {
  // bottom-right, overflowing the wrapper by a touch so it reads as a badge
  top: "calc(56% + 20px)",
  left: "calc(56% + 12px)",
  width: "44%",
  height: "44%",
  borderRadius: "44px",
  borderWidth: "6px",
  zIndex: 20,
  // ring in the hero bg colour cuts a clean halo where it overlaps the lead
  boxShadow: "0 0 0 4px #131318, 0 18px 44px rgba(0,0,0,0.55)",
};

const FRAME =
  "absolute border-solid border-ink-line bg-black transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none";

// parallax: foreground tracks the cursor more, background drifts the other way
const TRANSITION =
  "transition-transform duration-200 ease-out will-change-transform motion-reduce:transition-none";
const BG_LAYER = `absolute inset-0 ${TRANSITION}`;
// foreground is rendered ~12% taller than the stage and top-anchored, so its
// bottom overflows past the rim — that hidden suit is the reserve the upward
// parallax reveals, instead of exposing a gap of background.
const FG_LAYER = `absolute inset-x-0 top-0 h-[112%] ${TRANSITION}`;
// foreground sits 6% lower than the stage top (its own height %, so it scales),
// then drifts with the cursor; parallax kept gentle (~1/3 of the earlier feel)
const FG_SHIFT = "translate(calc(var(--mx,0) * 5px), calc(6% + var(--my,0) * 3px))";
const BG_SHIFT =
  "translate(calc(var(--mx,0) * -2.3px), calc(var(--my,0) * -1.3px)) scale(1.15)";

export default function HeroPortals() {
  const [swapped, setSwapped] = useState(false);
  const swap = () => setSwapped((v) => !v);

  // Batman leads at rest; the photo leads once swapped.
  const batmanIsMini = swapped;
  const photoIsMini = !swapped;

  const interactive = (isMini: boolean, label: string) =>
    isMini
      ? {
          role: "button" as const,
          tabIndex: 0,
          "aria-label": label,
          onClick: swap,
          onKeyDown: (e: KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              swap();
            }
          },
        }
      : {};

  // write cursor position (normalised to [-1, 1]) as CSS vars on the frame;
  // the layers read them, so this never triggers a React re-render.
  const onParallax = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const nx = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width - 0.5) * 2));
    const ny = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height - 0.5) * 2));
    e.currentTarget.style.setProperty("--mx", nx.toFixed(3));
    e.currentTarget.style.setProperty("--my", ny.toFixed(3));
  };
  const resetParallax = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--mx", "0");
    e.currentTarget.style.setProperty("--my", "0");
  };

  return (
    <div
      className="rise relative z-10 aspect-[16/10] w-full max-w-[324px]"
      style={{ ["--rise-delay" as string]: "0ms" }}
    >
      {/* Batman porthole — never clipped, so he can poke out the top. The dot
         matrix always rides with Batman, whichever size he is. */}
      <div
        {...interactive(batmanIsMini, "Bring Batman forward")}
        className={`${FRAME} ${batmanIsMini ? "cursor-pointer" : ""}`}
        style={batmanIsMini ? MINI : LEAD}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
        >
          <BatDots />
        </div>
        <BatmanModel />
      </div>

      {/* Portrait porthole — scenery clipped inside, cut-out pokes over the top. */}
      <div
        {...interactive(photoIsMini, "Reveal the man behind the cowl")}
        onPointerMove={onParallax}
        onPointerLeave={resetParallax}
        className={`${FRAME} ${photoIsMini ? "cursor-pointer" : ""}`}
        style={photoIsMini ? MINI : LEAD}
      >
        {/* background scenery — clipped to the capsule, drifts gently */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
        >
          <div className={BG_LAYER} style={{ transform: BG_SHIFT }}>
            <Image src={BG} alt="" fill sizes="324px" className="object-cover object-center" />
          </div>
        </div>

        {/* foreground cut-out — full portrait; pokes over the top via the
           single-path portrait-stage mask (clean rounded sides, no seam) */}
        <div className="portrait-stage pointer-events-none absolute inset-x-0 bottom-0 top-[-60%]">
          <div className={FG_LAYER} style={{ transform: FG_SHIFT }}>
            <Image
              src={FG}
              alt="Satyam Mishra"
              fill
              sizes="324px"
              priority
              className="object-contain object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
