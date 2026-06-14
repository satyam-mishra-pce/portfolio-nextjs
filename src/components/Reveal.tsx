"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import type { ComponentType, ElementType, ReactNode } from "react";

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  // motion exposes a component for every intrinsic tag (motion.div, motion.h2…).
  const Component = (
    motion as unknown as Record<string, ElementType<HTMLMotionProps<"div">>>
  )[as as string] ?? motion.div;

  if (reduce) {
    const Plain = as as ComponentType<{ className?: string; children?: ReactNode }>;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.75,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Component>
  );
}
