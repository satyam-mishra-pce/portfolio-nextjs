"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// A template re-mounts on every navigation (forward and browser back/forward),
// so this fade runs on each route change and the incoming page always mounts
// fresh instead of restoring a stale view. Opacity only — animating transform or
// filter here would create a containing block and break the fixed nav.
export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
