"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiSolidity,
  SiEthereum,
  SiWagmi,
  SiEthers,
  SiChainlink,
  SiClaude,
  SiGit,
  SiLinux,
  SiVercel,
  SiNpm,
} from "@icons-pack/react-simple-icons";
import type { ComponentType, CSSProperties } from "react";
import type { SkillGroup } from "@/lib/data";

type IconProps = {
  title?: string;
  color?: string;
  className?: string;
  style?: CSSProperties;
  "aria-hidden"?: boolean;
};

/** name in data -> brand icon. Anything missing falls back to a monogram badge. */
const ICON_MAP: Record<string, ComponentType<IconProps>> = {
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Tailwind: SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss,
  Solidity: SiSolidity,
  Ethereum: SiEthereum,
  wagmi: SiWagmi,
  ethers: SiEthers,
  Chainlink: SiChainlink,
  Claude: SiClaude,
  Git: SiGit,
  Linux: SiLinux,
  Vercel: SiVercel,
  npm: SiNpm,
};

/** Short label for techs without a Simple Icon (GPT, Pi). */
function monogram(name: string) {
  return name === "Pi" ? "π" : name.slice(0, 3);
}

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Crossfades its text whenever `id` changes, with the same blur-rise the rest
 * of the page uses. Falls back to plain text when reduced motion is requested.
 */
function Swap({
  id,
  text,
  className,
  reduce,
}: {
  id: string | number;
  text: string;
  className: string;
  reduce: boolean | null;
}) {
  if (reduce) return <p className={className}>{text}</p>;
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.p
        key={id}
        className={className}
        initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -4, filter: "blur(4px)" }}
        transition={{ duration: 0.14, ease: EASE }}
      >
        {text}
      </motion.p>
    </AnimatePresence>
  );
}

function TechButton({
  tech,
  active,
  pinned,
  onPreview,
  onToggle,
}: {
  tech: SkillGroup["techs"][number];
  active: boolean;
  pinned: boolean;
  onPreview: () => void;
  onToggle: () => void;
}) {
  const Icon = ICON_MAP[tech.name];
  return (
    <button
      type="button"
      aria-label={tech.name}
      aria-pressed={pinned}
      onMouseEnter={onPreview}
      onFocus={onPreview}
      onClick={onToggle}
      className={`flex h-9 w-9 items-center justify-center rounded-xl outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ivory-faint ${
        active
          ? "scale-110 text-ivory opacity-100"
          : "text-ivory-faint opacity-45 hover:opacity-100"
      } ${pinned ? "bg-ivory/[0.06]" : ""}`}
    >
      {Icon ? (
        <Icon color="currentColor" aria-hidden className="h-5 w-5" />
      ) : (
        <span aria-hidden className="text-sm font-semibold leading-none">
          {monogram(tech.name)}
        </span>
      )}
    </button>
  );
}

function Row({ group }: { group: SkillGroup }) {
  // `pinned` persists on click/tap; `preview` is the transient hover/focus.
  const [pinned, setPinned] = useState<number | null>(null);
  const [preview, setPreview] = useState<number | null>(null);
  const current = preview ?? pinned;
  const hovered = current === null ? null : group.techs[current];
  const reduce = useReducedMotion();

  return (
    <div className="flex items-start gap-4 border-b border-ink-line py-7">
      {/* icon with a blurred copy as a glow halo */}
      <div className="relative h-12 w-12 shrink-0">
        <Image
          src={group.icon}
          alt=""
          aria-hidden
          width={96}
          height={96}
          className="absolute inset-0 h-full w-full select-none object-contain opacity-60 blur-lg"
        />
        <Image
          src={group.icon}
          alt=""
          aria-hidden
          width={96}
          height={96}
          className="relative h-full w-full select-none object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.55)]"
        />
      </div>

      <div className="min-w-0 flex-1">
        {/* heading: title + reserved second line (fixed height, no jump) */}
        <div className="h-[3.15rem]">
          <h3 className="text-xl font-medium leading-tight text-ivory">
            {group.title}
          </h3>
          <Swap
            id={current ?? "default"}
            text={hovered ? hovered.line2 : group.note}
            reduce={reduce}
            className={`text-xl font-medium leading-tight transition-colors duration-200 ${
              hovered ? "text-ivory-dim" : "text-ivory-faint"
            }`}
          />
        </div>

        {/* message: fixed height so swaps never resize the row */}
        <div className="mt-0.5 h-[5rem] overflow-hidden sm:h-[3.5rem]">
          <Swap
            id={current ?? "default"}
            text={hovered ? hovered.message : group.blurb}
            reduce={reduce}
            className="text-[0.95rem] leading-relaxed text-ivory-dim"
          />
        </div>

        {/* clear preview only when the pointer/focus leaves the whole row, so
            crossing the gaps between icons never flashes back to default */}
        <div
          className="mt-4 flex flex-wrap gap-1.5"
          onMouseLeave={() => setPreview(null)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setPreview(null);
            }
          }}
        >
          {group.techs.map((tech, i) => (
            <TechButton
              key={tech.name}
              tech={tech}
              active={current === i}
              pinned={pinned === i}
              onPreview={() => setPreview(i)}
              onToggle={() => setPinned((cur) => (cur === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ToolkitGrid({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="border-t border-ink-line">
      {groups.map((g) => (
        <Row key={g.title} group={g} />
      ))}
    </div>
  );
}
