"use client";

import { useEffect, useState } from "react";
import { ProgressiveBlur } from "./ProgressiveBlur";

const links = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

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
        <a href="#top" className="group flex items-center gap-3">
          <span className="h-7 w-7 rounded-full bg-gradient-to-br from-ivory-faint to-ink-line ring-1 ring-ink-line transition-transform duration-300 group-hover:scale-95" />
          <span className="text-[15px] font-medium tracking-tight text-ivory">
            Satyam
          </span>
        </a>

        {/* center — links */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={`#${l.id}`}
                className={`text-[15px] transition-colors duration-300 ${
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
