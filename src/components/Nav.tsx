"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ProgressiveBlur } from "./ProgressiveBlur";

const links = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const observedSections = [{ id: "top", label: "Hero" }, ...links];

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const listRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [slab, setSlab] = useState({ left: 0, width: 0, opacity: 0 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id === "top" ? "" : e.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    observedSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const syncSlab = () => {
      const activeItem = active ? itemRefs.current[active] : null;
      const list = listRef.current;

      if (!activeItem || !list) {
        setSlab((current) =>
          current.opacity === 0 ? current : { ...current, opacity: 0 }
        );
        return;
      }

      const itemRect = activeItem.getBoundingClientRect();
      const listRect = list.getBoundingClientRect();

      setSlab({
        left: itemRect.left - listRect.left - 16,
        width: itemRect.width + 32,
        opacity: 1,
      });
    };

    syncSlab();
    window.addEventListener("resize", syncSlab);
    return () => window.removeEventListener("resize", syncSlab);
  }, [active]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* progressive blur backdrop — content blurs as it scrolls beneath */}
      <div className="nav-backdrop pointer-events-none absolute inset-x-0 top-0 h-28">
        <ProgressiveBlur
          position="top"
          height="100%"
          blurLevels={[0.5, 2, 6, 16]}
        />
        <div className="nav-backdrop-gradient absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink/70 to-transparent" />
      </div>

      <nav className="relative z-20 flex items-center justify-between px-6 py-3 md:px-9">
        {/* left — wordmark */}
        <a href="#top" className="group flex items-center gap-3" onClick={() => setActive("")}>
          <span className="relative h-7 w-7 overflow-hidden rounded-full bg-ink-soft ring-1 ring-ink-line transition-transform duration-300 group-hover:scale-95">
            <Image
              src="/me-fg.png"
              alt="Satyam Mishra"
              fill
              sizes="28px"
              className="object-cover object-[50%_18%]"
            />
          </span>
          <span className="text-[15px] font-medium tracking-tight text-ivory">
            Satyam
          </span>
        </a>

        {/* center — links */}
        <ul
          ref={listRef}
          className="absolute left-1/2 isolate hidden h-10 -translate-x-1/2 items-center gap-8 md:flex"
        >
          <motion.span
            aria-hidden
            className="pointer-events-none absolute top-1/2 z-0 h-8 -translate-y-1/2 rounded-full border border-white/20 bg-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_35px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            initial={false}
            animate={{
              left: slab.left,
              width: slab.width,
              opacity: slab.opacity,
            }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: 420,
                    damping: 24,
                    mass: 0.75,
                    velocity: 6,
                  }
            }
          />
          {links.map((l) => (
            <li key={l.label} className="relative z-10">
              <a
                ref={(node) => {
                  itemRefs.current[l.id] = node;
                }}
                href={`#${l.id}`}
                className={`relative z-10 inline-flex h-10 items-center text-[15px] transition-colors duration-300 ${
                  active === l.id
                    ? "text-ivory"
                    : "text-ivory-dim hover:text-ivory"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* right — CTA */}
        <a
          href="#contact"
          className="flex h-8 items-center rounded-full bg-ivory px-4 text-[13px] font-medium text-ink transition-colors duration-300 hover:bg-white"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
