import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import HeroBat from "@/components/HeroBat";
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
        <div className="relative flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden rounded-[28px] bg-[#131318] p-6 md:min-h-[calc(100svh-4.75rem)] md:p-10">
          {/* atmosphere — cursor-reactive dot-art bat emblem + faint glow */}
          <HeroBat />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[460px] w-[680px] -translate-x-1/2 rounded-full bg-ivory/[0.03] blur-[150px]" />

          {/* centered headline */}
          <div className="relative flex flex-1 flex-col items-center justify-center text-center">
            <p
              className="rise label mb-8 flex items-center gap-2.5"
              style={{ ["--rise-delay" as string]: "0ms" }}
            >
              {profile.available && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ivory-dim opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ivory-dim" />
                </span>
              )}
              Available for work
            </p>

            <h1
              className="rise font-display text-[clamp(2.75rem,9vw,6rem)] leading-[1.05] tracking-[-0.02em]"
              style={{ ["--rise-delay" as string]: "120ms" }}
            >
              <span className="underline decoration-ivory-dim decoration-[3px] underline-offset-[0.18em] [text-decoration-skip-ink:none]">
                Satyam Mishra
              </span>
            </h1>

            <p
              className="rise mt-8 max-w-[44ch] text-lg leading-relaxed text-ivory-dim"
              style={{ ["--rise-delay" as string]: "260ms" }}
            >
              {profile.tagline}
            </p>
          </div>

          {/* card footer — stats */}
          <dl
            className="rise relative flex flex-wrap gap-x-9 gap-y-4"
            style={{ ["--rise-delay" as string]: "380ms" }}
          >
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl text-ivory">{s.value}</dt>
                <dd className="label mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
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
