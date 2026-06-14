// Scattered, low-contrast tech logos for the hero atmosphere.
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiGit,
} from "@icons-pack/react-simple-icons";
import type { ComponentType, CSSProperties } from "react";

type IconProps = {
  title?: string;
  color?: string;
  className?: string;
  style?: CSSProperties;
  "aria-hidden"?: boolean;
};

type TechIcon = {
  Icon: ComponentType<IconProps>;
  name: string;
  left: string;
  top: string;
  size: string;
  opacity: number;
  rotate: string;
};

const ICONS: TechIcon[] = [
  { Icon: SiTypescript, name: "TypeScript", left: "8%", top: "18%", size: "clamp(1.45rem, 3vw, 2.55rem)", opacity: 0.18, rotate: "-12deg" },
  { Icon: SiReact, name: "React", left: "24%", top: "10%", size: "clamp(1.7rem, 3.3vw, 2.9rem)", opacity: 0.15, rotate: "13deg" },
  { Icon: SiNextdotjs, name: "Next.js", left: "78%", top: "15%", size: "clamp(1.6rem, 3.2vw, 2.8rem)", opacity: 0.16, rotate: "-7deg" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", left: "90%", top: "33%", size: "clamp(1.35rem, 2.8vw, 2.3rem)", opacity: 0.14, rotate: "18deg" },
  { Icon: SiJavascript, name: "JavaScript", left: "9%", top: "50%", size: "clamp(1.3rem, 2.8vw, 2.25rem)", opacity: 0.12, rotate: "10deg" },
  { Icon: SiHtml5, name: "HTML", left: "17%", top: "82%", size: "clamp(1.45rem, 3vw, 2.4rem)", opacity: 0.13, rotate: "-18deg" },
  { Icon: SiCss, name: "CSS", left: "84%", top: "79%", size: "clamp(1.45rem, 3vw, 2.35rem)", opacity: 0.13, rotate: "14deg" },
  { Icon: SiNodedotjs, name: "Node.js", left: "72%", top: "88%", size: "clamp(1.4rem, 2.9vw, 2.45rem)", opacity: 0.12, rotate: "-11deg" },
  { Icon: SiGit, name: "Git", left: "93%", top: "62%", size: "clamp(1.25rem, 2.6vw, 2.1rem)", opacity: 0.11, rotate: "-20deg" },
];

export default function TechStack({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {ICONS.map(({ Icon, name, left, top, size, opacity, rotate }) => (
        <Icon
          key={name}
          color="currentColor"
          className="absolute text-ivory-faint drop-shadow-[0_10px_28px_rgba(0,0,0,0.65)]"
          style={{
            left,
            top,
            width: size,
            height: size,
            opacity,
            transform: `translate(-50%, -50%) rotate(${rotate})`,
          }}
        />
      ))}
    </div>
  );
}
