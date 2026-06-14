// A muted strip of tech logos — tells the stack at a glance, no words needed.
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSolidity,
  SiGit,
} from "@icons-pack/react-simple-icons";
import type { ComponentType } from "react";

type IconProps = { title?: string; color?: string; className?: string };

const ICONS: { Icon: ComponentType<IconProps>; name: string }[] = [
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiReact, name: "React" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiHtml5, name: "HTML" },
  { Icon: SiCss, name: "CSS" },
  { Icon: SiSolidity, name: "Solidity" },
  { Icon: SiGit, name: "Git" },
];

export default function TechStack({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-4 ${className}`}>
      {ICONS.map(({ Icon, name }) => (
        <Icon
          key={name}
          title={name}
          color="currentColor"
          className="h-[1.35rem] w-[1.35rem] text-ivory-faint transition-colors duration-300 hover:text-ivory"
        />
      ))}
    </div>
  );
}
