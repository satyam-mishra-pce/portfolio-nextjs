import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Chevron from "@/components/Chevron";
import { ProgressiveBlur } from "@/components/ProgressiveBlur";
import { experience } from "@/lib/data";
import { siteUrl } from "@/lib/seo";

const COL = "mx-auto w-full max-w-[720px] px-6";

// Only the known roles render; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return experience.map((job) => ({ slug: job.slug }));
}

function getJob(slug: string) {
  return experience.find((job) => job.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};

  const title = `${job.role} · ${job.org}`;
  const description = job.detail.tagline;
  const url = `${siteUrl}/experience/${job.slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/experience/${job.slug}` },
    openGraph: { title, description, url, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ExperienceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  const { detail } = job;

  return (
    <div className="grain relative">
      {/* top bar — same scroll-reveal blur backdrop as the landing nav */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="nav-backdrop pointer-events-none absolute inset-x-0 top-0 h-28">
          <ProgressiveBlur position="top" height="100%" blurLevels={[0.5, 2, 6, 16]} />
          <div className="nav-backdrop-gradient absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink/70 to-transparent" />
        </div>
        <nav className="relative z-20 px-6 py-3 md:px-9">
          <Button href="/#experience" variant="secondary" size="sm">
            <Chevron
              dir="left"
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Back to trajectory
          </Button>
        </nav>
      </header>

      <article className="px-3 pb-3 pt-[56px] md:px-5 md:pb-5">
        <div className="relative overflow-hidden rounded-[28px] bg-[#131318] py-20 md:py-28">
          <div className={COL}>
            {/* ── header ── */}
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                  <Image
                    src={job.icon}
                    alt=""
                    aria-hidden
                    width={96}
                    height={96}
                    className="pointer-events-none absolute inset-0 m-auto h-9 w-9 select-none object-contain opacity-50 blur-sm"
                  />
                  <Image
                    src={job.icon}
                    alt=""
                    aria-hidden
                    width={96}
                    height={96}
                    className="relative h-7 w-7 select-none object-contain drop-shadow-[0_3px_8px_rgba(0,0,0,0.5)]"
                  />
                </span>
                <span className="label">{job.period}</span>
              </div>

              <h1 className="mt-5 font-display text-4xl tracking-[-0.01em] md:text-5xl">
                {job.role}
                <span className="text-ivory-faint"> · {job.org}</span>
              </h1>
              <p className="mt-3 max-w-[54ch] text-lg text-ivory-dim">
                {detail.tagline}
              </p>

              <div className="mono mt-6 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ivory-faint">
                {job.stack.join("  ·  ")}
              </div>
            </Reveal>

            {/* ── context ── */}
            <Reveal delay={60} className="mt-12 space-y-4 border-t border-ink-line pt-10">
              {detail.context.map((p) => (
                <p key={p} className="max-w-[60ch] leading-relaxed text-ivory-dim">
                  {p}
                </p>
              ))}
            </Reveal>

            {/* ── sections ── */}
            <div className="mt-12 space-y-12">
              {detail.sections.map((section, i) => (
                <Reveal key={section.heading} delay={i * 40}>
                  <h2 className="font-display text-2xl tracking-[-0.01em] md:text-[1.75rem]">
                    {section.heading}
                  </h2>
                  {section.body?.map((p) => (
                    <p
                      key={p}
                      className="mt-3 max-w-[60ch] leading-relaxed text-ivory-dim"
                    >
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-4 max-w-[60ch] space-y-2">
                      {section.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 leading-relaxed text-ivory-dim"
                        >
                          <span
                            aria-hidden
                            className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ivory-dim"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}
            </div>

            {/* ── stack notes ── */}
            {detail.stackNotes && detail.stackNotes.length > 0 && (
              <Reveal className="mt-12 border-t border-ink-line pt-10">
                <h2 className="label mb-5">The stack, and why</h2>
                <dl className="space-y-3">
                  {detail.stackNotes.map((s) => (
                    <div
                      key={s.name}
                      className="grid grid-cols-1 gap-1 md:grid-cols-[140px_1fr] md:gap-6"
                    >
                      <dt className="mono text-sm text-ivory">{s.name}</dt>
                      <dd className="text-ivory-dim">{s.note}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            )}

            {/* ── links ── */}
            {detail.links && detail.links.length > 0 && (
              <Reveal className="mt-12 border-t border-ink-line pt-10">
                <h2 className="label mb-5">Proof</h2>
                <ul className="flex flex-wrap gap-x-6 gap-y-3">
                  {detail.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-ivory transition-colors hover:text-white"
                      >
                        <span className="link-underline">{l.label}</span>
                        <Chevron
                          size={15}
                          className="text-ivory-faint transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {/* ── footer back link ── */}
            <Reveal className="mt-16 border-t border-ink-line pt-8">
              <Button href="/#experience" variant="secondary" size="sm">
                <Chevron
                  dir="left"
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-x-0.5"
                />
                Back to trajectory
              </Button>
            </Reveal>
          </div>
        </div>
      </article>
    </div>
  );
}
