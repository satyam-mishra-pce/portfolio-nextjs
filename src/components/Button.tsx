import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md";

// primary mirrors the hero "Get in touch" pill. secondary is a borderless,
// shadowless muted fill that sits one step above whatever surface is beneath it.
const base =
  "group inline-flex items-center justify-center gap-1.5 rounded-full font-medium transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-ivory text-ink hover:bg-white",
  secondary: "bg-ivory/[0.06] text-ivory hover:bg-ivory/[0.12]",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-4 text-[13px]",
  md: "h-10 px-5 text-sm",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
