import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import WorkCarousel from "@/components/WorkCarousel";
import BatmanModel from "@/components/BatmanModel";
import BatDots from "@/components/BatDots";
import { FlickeringGrid } from "@/components/FlickeringGrid";
import SocialStack from "@/components/SocialStack";
import TechStack from "@/components/TechStack";
import { profile, projects, skills, experience, education } from "@/lib/data";
import { ogImageUrl, siteUrl } from "@/lib/seo";

const COL = "mx-auto w-full max-w-[680px] px-6";

export default function Home() {
  const skillKeywords = Array.from(new Set(skills.flatMap((group) => group.items)));
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.name,
        url: siteUrl,
        email: profile.email,
        jobTitle: [
          "Full Stack Developer",
          "Frontend Developer",
          "React Developer",
          "Next.js Developer",
          "TypeScript Developer",
          "Web3 Engineer",
        ],
        description:
          "Full stack developer building production React, Next.js, TypeScript, Node.js and Web3 applications with polished user interfaces.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jaipur",
          addressCountry: "IN",
        },
        sameAs: profile.socials.filter((social) => !social.href.startsWith("mailto:")).map((social) => social.href),
        knowsAbout: [
          "Full stack development",
          "Frontend engineering",
          "UI engineering",
          "Web application development",
          "API integrations",
          "Web3 development",
          ...skillKeywords,
        ],
        worksFor: {
          "@type": "Organization",
          name: "GainForest",
        },
        alumniOf: education.map((item) => ({
          "@type": "CollegeOrUniversity",
          name: item.org,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${profile.name} Portfolio`,
        description: profile.tagline,
        publisher: { "@id": `${siteUrl}/#person` },
        inLanguage: "en-IN",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: `${profile.name} Full Stack Developer`,
        description: profile.tagline,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#person` },
        primaryImageOfPage: ogImageUrl,
        inLanguage: "en-IN",
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#selected-work`,
        name: "Selected work by Satyam Mishra",
        itemListElement: projects.map((project, index) => ({
          "@type": "CreativeWork",
          position: index + 1,
          name: project.title,
          description: project.blurb,
          url: project.href,
          keywords: project.tags.join(", "),
          creator: { "@id": `${siteUrl}/#person` },
        })),
      },
    ],
  };

  return (
    <div className="grain relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      {/* ────────────────────────── HERO ────────────────────────── */}
      <section id="top" className="px-3 pb-3 pt-[56px] md:px-5 md:pb-5">
        <div className="relative isolate flex min-h-[calc(100svh-4.25rem)] flex-col items-center justify-center overflow-hidden rounded-[28px] bg-[#131318] p-6 text-center md:min-h-[calc(100svh-4.75rem)] md:p-10">
          <TechStack className="z-0" />
          {/* 16:10 porthole — Batman peeks over the rim and pokes out the top. */}
          <div
            className="rise relative z-10 aspect-[16/10] w-full max-w-[324px] rounded-[101.25px] border-8 border-ink-line bg-black"
            style={{ ["--rise-delay" as string]: "0ms" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-[101.25px]"
            >
              <BatDots />
            </div>
            <BatmanModel />
          </div>

          <h1
            className="rise relative z-10 mt-10 font-display text-[clamp(2.75rem,9vw,6rem)] leading-[1.05] tracking-[-0.02em] text-ivory"
            style={{ ["--rise-delay" as string]: "120ms" }}
          >
            Satyam Mishra
          </h1>

          <p
            className="rise relative z-10 mt-5 text-[0.7rem] uppercase tracking-[0.2em] text-ivory-faint"
            style={{ ["--rise-delay" as string]: "200ms" }}
          >
            {profile.role} · {profile.location}
          </p>

          <p
            className="rise relative z-10 mt-8 max-w-[46ch] text-lg leading-relaxed text-ivory-dim"
            style={{ ["--rise-delay" as string]: "300ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="rise relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3"
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
          <Reveal className="mb-10">
            <h2 className="font-display text-3xl tracking-[-0.01em] md:text-4xl">
              About
            </h2>
            <p className="mt-2 text-sm text-ivory-dim">The man behind the cowl</p>
          </Reveal>

          <Reveal
            as="p"
            className="text-2xl leading-[1.5] tracking-[-0.01em] text-ivory-faint md:text-[1.7rem]"
          >
            <span className="text-ivory">
              I am Satyam, a developer who has been writing code since I was 12
            </span>{" "}
            and never found a reason to stop. I think in interfaces and{" "}
            <span className="text-ivory">
              can build almost any design down to the last pixel
            </span>{" "}
            while telling you exactly what makes a bad one feel wrong. The best of
            it happens late, when the city is quiet.
          </Reveal>

          <Reveal className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-ink-line pt-12 sm:grid-cols-4">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <Image
                  src={s.icon}
                  alt=""
                  aria-hidden
                  width={96}
                  height={96}
                  className="mb-3 h-9 w-9 select-none object-contain opacity-90 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                />
                <div className="text-3xl font-medium tracking-tight text-ivory md:text-4xl">
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
        <WorkCarousel
          col={COL}
          title="Selected work"
          subtitle="Gadgets from the belt with more to discover"
        >
          {projects.map((p) => (
              <a
                key={p.index}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-[300px] shrink-0 snap-start flex-col rounded-[48px] border-[6px] border-ink-line bg-ink-soft p-8 transition-colors duration-300 hover:border-ivory-faint hover:bg-ivory/[0.03]"
              >
                <div className="flex items-start justify-between">
                  <Image
                    src={p.icon}
                    alt=""
                    aria-hidden
                    width={128}
                    height={128}
                    className="h-[5.5rem] w-[5.5rem] select-none object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="mono text-xs text-ivory-faint">{p.year}</span>
                </div>
                <div className="mt-auto pt-10">
                  <h3 className="flex items-center gap-2 text-2xl font-medium text-ivory">
                    {p.title}
                    <span className="translate-x-[-4px] text-ivory-faint opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      ↗
                    </span>
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ivory-dim">
                    {p.blurb}
                  </p>
                  <div className="mono mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-ivory-faint">
                    <span className="text-ivory-dim">{p.role}</span>
                    <span aria-hidden>·</span>
                    {p.tags.join("  ·  ")}
                  </div>
                </div>
              </a>
            ))}
          {/* trailing spacer so the last card can clear the fade */}
          <div aria-hidden className="w-2 shrink-0" />
        </WorkCarousel>
      </section>

      {/* ───────────────────────── SKILLS ──────────────────────── */}
      <section id="skills" className="py-28 md:py-32">
        <div className={COL}>
          <Reveal className="mb-10">
            <h2 className="font-display text-3xl tracking-[-0.01em] md:text-4xl">
              Toolkit
            </h2>
            <p className="mt-2 text-sm text-ivory-dim">Everything on the utility belt</p>
          </Reveal>

          <dl className="border-t border-ink-line">
            {skills.map((g, i) => (
              <Reveal
                key={g.title}
                delay={i * 50}
                className="grid grid-cols-1 gap-3 border-b border-ink-line py-7 md:grid-cols-[180px_1fr] md:gap-8"
              >
                <dt className="flex items-start gap-3">
                  <Image
                    src={g.icon}
                    alt=""
                    aria-hidden
                    width={96}
                    height={96}
                    className="mt-0.5 h-9 w-9 shrink-0 select-none object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                  />
                  <span>
                    <span className="text-lg font-medium text-ivory">{g.title}</span>
                    <span className="label mt-1 block normal-case tracking-normal">
                      {g.note}
                    </span>
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
          <Reveal className="mb-12">
            <h2 className="font-display text-3xl tracking-[-0.01em] md:text-4xl">
              Trajectory
            </h2>
            <p className="mt-2 text-sm text-ivory-dim">Patrols, past and present</p>
          </Reveal>

          <div>
            {experience.map((job, i) => (
              <Reveal
                key={job.org}
                delay={i * 50}
                className="relative flex gap-5 pb-10 last:pb-0"
              >
                {i < experience.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-6 top-14 h-[calc(100%-3rem)] w-px bg-ink-line"
                  />
                )}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink-soft ring-1 ring-ink-line">
                  <Image
                    src={job.icon}
                    alt=""
                    aria-hidden
                    width={96}
                    height={96}
                    className="h-7 w-7 select-none object-contain drop-shadow-[0_3px_8px_rgba(0,0,0,0.5)]"
                  />
                </div>
                <div className="pt-1.5">
                  <span className="label">{job.period}</span>
                  <h3 className="mt-1.5 text-lg font-medium text-ivory">
                    {job.role}
                    <span className="text-ivory-faint"> · {job.org}</span>
                  </h3>
                  <p className="mt-2 max-w-[52ch] leading-relaxed text-ivory-dim">
                    {job.summary}
                  </p>
                  <div className="mono mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ivory-faint">
                    {job.stack.join("  ·  ")}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── EDUCATION ────────────────────── */}
      <section id="education" className="py-28 md:py-32">
        <div className={COL}>
          <Reveal className="mb-10">
            <h2 className="font-display text-3xl tracking-[-0.01em] md:text-4xl">
              Education
            </h2>
            <p className="mt-2 text-sm text-ivory-dim">Where the training began</p>
          </Reveal>

          <div className="border-t border-ink-line">
            {education.map((ed, i) => (
              <Reveal
                key={ed.degree}
                delay={i * 50}
                className="grid grid-cols-1 gap-2 border-b border-ink-line py-7 md:grid-cols-[150px_1fr] md:gap-8"
              >
                <div className="label pt-1.5">{ed.period}</div>
                <div>
                  <h3 className="text-lg font-medium text-ivory">{ed.degree}</h3>
                  <p className="mono mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ivory-faint">
                    <span className="text-ivory-dim">{ed.org}</span>
                    <span aria-hidden>·</span>
                    {ed.location}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── CONTACT + FOOTER ───────────────────── */}
      <section id="contact" className="px-3 pb-3 md:px-5 md:pb-5">
        <Reveal className="light-selection relative overflow-hidden rounded-[28px] bg-ivory px-6 py-14 text-ink md:px-12 md:py-16">
          <FlickeringGrid
            className="absolute inset-0 z-0"
            color="rgb(8, 8, 10)"
            squareSize={3}
            gridGap={6}
            flickerChance={0.25}
            maxOpacity={0.13}
          />
          {/* soften the grid toward the center so text stays crisp */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_70%_at_50%_45%,var(--color-ivory)_30%,transparent_100%)]"
          />

          <div className="relative z-10 mx-auto max-w-[680px]">
            <h2 className="max-w-[14ch] font-display text-[clamp(2rem,6vw,3rem)] leading-[1.05] tracking-[-0.02em] text-ink">
              Got something to build? Light the signal.
            </h2>
            <p className="mt-3 text-sm text-ink/55">Light it, and I answer within a day</p>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-7 inline-flex items-center gap-2 text-lg font-medium text-ink"
            >
              <span className="underline decoration-ink/30 underline-offset-4 transition-colors group-hover:decoration-ink">
                {profile.email}
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <div className="mt-7">
              <SocialStack />
            </div>

            <div className="mt-14 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between">
              <span className="mono">© {profile.name}</span>
              <span className="mono">Built after dark</span>
              <a
                href="#top"
                className="mono uppercase tracking-widest transition-colors hover:text-ink"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
