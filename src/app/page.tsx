import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import BatmanModel from "@/components/BatmanModel";
import BatDots from "@/components/BatDots";
import { profile, projects, skills, experience } from "@/lib/data";

const COL = "mx-auto w-full max-w-[680px] px-6";

export default function Home() {
  return (
    <div className="grain relative">
      <Nav />

      {/* ────────────────────────── HERO ────────────────────────── */}
      <section
        id="top"
        className="px-3 pb-3 pt-[56px] md:px-5 md:pb-5"
      >
        <div className="flex min-h-[calc(100svh-4.25rem)] flex-col items-center justify-center rounded-[28px] bg-[#131318] p-6 text-center md:min-h-[calc(100svh-4.75rem)] md:p-10">
          {/* 16:10 porthole — Batman peeks over the rim and pokes out the top.
              border-radius is half the height (202.5px ÷ 2 = 101.25px) in
              absolute units → a capsule with rounded ends. The model's mask is
              a capsule of the same half-height proportion, so the two align.
              The rim is this div's own border, so the canvas (a child) paints
              in front of it. */}
          <div
            className="rise relative aspect-[16/10] w-full max-w-[324px] rounded-[101.25px] border-8 border-ink-line bg-black"
            style={{ ["--rise-delay" as string]: "0ms" }}
          >
            {/* fixed dot matrix behind the model — dots inside the bat
                silhouette are lit yellow (binary per dot, never clipped) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-[101.25px]"
            >
              <BatDots />
            </div>
            <BatmanModel />
          </div>

          <h1
            className="rise mt-10 font-display text-[clamp(2.75rem,9vw,6rem)] leading-[1.05] tracking-[-0.02em] text-ivory"
            style={{ ["--rise-delay" as string]: "120ms" }}
          >
            Satyam Mishra
          </h1>

          <p
            className="rise mt-5 text-[0.7rem] uppercase tracking-[0.2em] text-ivory-faint"
            style={{ ["--rise-delay" as string]: "200ms" }}
          >
            {profile.role} · {profile.location}
          </p>

          <p
            className="rise mt-8 max-w-[44ch] text-lg leading-relaxed text-ivory-dim"
            style={{ ["--rise-delay" as string]: "300ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="rise mt-10 flex flex-wrap items-center justify-center gap-3"
            style={{ ["--rise-delay" as string]: "400ms" }}
          >
            <a
              href="#work"
              className="inline-flex h-11 items-center rounded-full bg-ivory px-6 text-[14px] font-medium text-ink transition-colors duration-300 hover:bg-white"
            >
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-full border border-ink-line px-6 text-[14px] text-ivory transition-colors duration-300 hover:border-ivory-faint hover:bg-ivory/[0.04]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────────── ABOUT ───────────────────────── */}
      <section className="py-28 md:py-36">
        <div className={COL}>
          <Reveal as="p" className="label mb-8">
            About
          </Reveal>
          <Reveal
            as="p"
            className="font-display text-2xl leading-[1.45] text-ivory md:text-[1.9rem]"
          >
            {profile.intro}
          </Reveal>

          <Reveal className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-ink-line pt-12 sm:grid-cols-4">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl text-ivory md:text-4xl">
                  {s.value}
                </div>
                <div className="label mt-2">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────── WORK / PROJECTS ────────────────── */}
      <section id="work" className="py-28 md:py-32">
        <div className={COL}>
          <Reveal className="mb-12 flex items-baseline justify-between">
            <h2 className="font-display text-3xl tracking-[-0.01em] md:text-4xl">
              Selected work
            </h2>
            <span className="label">01 — projects</span>
          </Reveal>

          <ol className="border-t border-ink-line">
            {projects.map((p, i) => (
              <Reveal key={p.index} as="li" delay={i * 50}>
                <a
                  href={p.href}
                  className="group block border-b border-ink-line py-9 transition-opacity duration-300"
                >
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className="font-display text-2xl text-ivory md:text-[1.7rem]">
                      <span className="mono mr-3 align-middle text-xs not-italic text-ivory-faint">
                        {p.index}
                      </span>
                      {p.title}
                      <span className="ml-2 inline-block translate-x-[-4px] not-italic text-ivory-faint opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        ↗
                      </span>
                    </h3>
                    <span className="mono shrink-0 text-xs text-ivory-faint">
                      {p.year}
                    </span>
                  </div>
                  <p className="mt-3 max-w-[54ch] leading-relaxed text-ivory-dim">
                    {p.blurb}
                  </p>
                  <div className="mono mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ivory-faint">
                    <span className="text-ivory-dim">{p.role}</span>
                    <span aria-hidden>·</span>
                    {p.tags.join("  ·  ")}
                  </div>
                </a>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────────────── SKILLS ──────────────────────── */}
      <section id="skills" className="py-28 md:py-32">
        <div className={COL}>
          <Reveal className="mb-12 flex items-baseline justify-between">
            <h2 className="font-display text-3xl tracking-[-0.01em] md:text-4xl">
              Toolkit
            </h2>
            <span className="label">02 — stack</span>
          </Reveal>

          <dl className="border-t border-ink-line">
            {skills.map((g, i) => (
              <Reveal
                key={g.title}
                delay={i * 50}
                className="grid grid-cols-1 gap-3 border-b border-ink-line py-7 md:grid-cols-[180px_1fr] md:gap-8"
              >
                <dt>
                  <span className="font-display text-xl text-ivory">
                    {g.title}
                  </span>
                  <span className="label mt-1 block normal-case tracking-normal">
                    {g.note}
                  </span>
                </dt>
                <dd className="flex flex-wrap gap-x-5 gap-y-2.5 md:pt-1">
                  {g.items.map((it) => (
                    <span key={it} className="text-ivory-dim">
                      {it}
                    </span>
                  ))}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ──────────────────────── EXPERIENCE ────────────────────── */}
      <section id="experience" className="py-28 md:py-32">
        <div className={COL}>
          <Reveal className="mb-12 flex items-baseline justify-between">
            <h2 className="font-display text-3xl tracking-[-0.01em] md:text-4xl">
              Trajectory
            </h2>
            <span className="label">03 — experience</span>
          </Reveal>

          <div className="border-t border-ink-line">
            {experience.map((job, i) => (
              <Reveal
                key={job.org}
                delay={i * 50}
                className="grid grid-cols-1 gap-2 border-b border-ink-line py-9 md:grid-cols-[150px_1fr] md:gap-8"
              >
                <div className="label pt-1.5">{job.period}</div>
                <div>
                  <h3 className="font-display text-xl text-ivory md:text-2xl">
                    {job.role}
                    <span className="text-ivory-faint"> — {job.org}</span>
                  </h3>
                  <p className="mt-3 max-w-[54ch] leading-relaxed text-ivory-dim">
                    {job.summary}
                  </p>
                  <div className="mono mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ivory-faint">
                    {job.stack.join("  ·  ")}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── CONTACT ──────────────────────── */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-ink-line py-28 md:py-36"
      >
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-clay/[0.05] blur-[130px]" />
        <div className={`${COL} relative`}>
          <Reveal as="p" className="label mb-8">
            04 — contact
          </Reveal>
          <Reveal
            as="h2"
            className="font-display text-[clamp(2.25rem,7vw,3.5rem)] leading-[1.05] tracking-[-0.02em]"
          >
            Let&apos;s build something good.
          </Reveal>

          <Reveal className="mt-9">
            <a
              href={`mailto:${profile.email}`}
              className="link-underline group inline-flex items-center gap-2 text-lg text-ivory"
            >
              {profile.email}
              <span className="text-ivory-faint transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>

          <Reveal className="mt-14 border-t border-ink-line">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-ink-line py-4"
              >
                <span className="text-ivory">{s.label}</span>
                <span className="flex items-center gap-3">
                  <span className="mono text-xs text-ivory-faint">
                    {s.handle}
                  </span>
                  <span className="text-ivory-faint transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── FOOTER ───────────────────────── */}
      <footer className={`${COL} flex flex-col gap-3 py-10 sm:flex-row sm:items-center sm:justify-between`}>
        <span className="mono text-xs text-ivory-faint">© {profile.name}</span>
        <span className="mono text-xs text-ivory-faint">
          Designed in the dark
        </span>
        <a
          href="#top"
          className="mono text-xs uppercase tracking-widest text-ivory-dim transition-colors hover:text-ivory"
        >
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}
