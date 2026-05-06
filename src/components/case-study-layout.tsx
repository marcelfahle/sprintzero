import type { ReactNode } from "react";
import { Container } from "./container";

type HeroMetric = { value: string; label: string };

export function CaseStudyLayout({
  overline,
  title,
  subtitle,
  intro,
  heroMetrics,
  children,
}: {
  overline: string;
  title: string;
  subtitle: string;
  intro: string;
  heroMetrics: HeroMetric[];
  children: ReactNode;
}) {
  return (
    <article className="bg-bg-primary">
      <header className="border-b border-border-default bg-bg-primary pt-32 pb-16">
        <Container>
          <p className="mb-5 font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
            {overline}
          </p>
          <h1 className="mb-4 font-display text-[36px] leading-[1.05] font-bold tracking-display text-fg-primary sm:text-[44px] lg:text-[56px]">
            {title}
          </h1>
          <p className="mb-6 max-w-[780px] font-display text-[20px] leading-[1.3] font-semibold tracking-subhead text-fg-primary sm:text-[24px]">
            {subtitle}
          </p>
          <p className="max-w-[760px] text-[17px] leading-[1.65] text-fg-secondary sm:text-[18px]">
            {intro}
          </p>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border-default pt-10 sm:grid-cols-4">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-1.5">
                <dt className="font-mono text-[12px] font-medium tracking-mono text-fg-tertiary uppercase">
                  {metric.label}
                </dt>
                <dd className="font-mono text-[28px] leading-none font-bold tracking-heading text-fg-primary tabular-nums">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>
      <div className="bg-bg-primary py-20">
        <Container>
          <div className="prose-block flex flex-col gap-16">{children}</div>
        </Container>
      </div>
    </article>
  );
}

export function CaseStudySection({
  overline,
  title,
  children,
}: {
  overline?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-5">
      {overline ? (
        <p className="font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
          {overline}
        </p>
      ) : null}
      <h2 className="font-display text-[28px] leading-[1.15] font-bold tracking-heading text-fg-primary sm:text-[34px]">
        {title}
      </h2>
      <div className="flex max-w-[760px] flex-col gap-4 text-[17px] leading-[1.7] text-fg-secondary">
        {children}
      </div>
    </section>
  );
}

export function CaseStudyCallout({ children }: { children: ReactNode }) {
  return (
    <aside className="rounded-xl border border-accent-500/30 bg-accent-500/[0.06] px-6 py-5 text-[16px] leading-[1.6] text-fg-primary">
      {children}
    </aside>
  );
}

export function CaseStudyCTA({
  href,
  primary,
  secondary,
  caption,
}: {
  href: string;
  primary: string;
  secondary?: { href: string; label: string };
  caption?: string;
}) {
  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-border-default bg-bg-secondary p-8 sm:p-10">
      <div className="flex flex-col flex-wrap items-start gap-4 sm:flex-row sm:items-center">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-fg-primary px-7 py-3.5 text-[15px] font-semibold text-fg-inverse transition-opacity duration-200 hover:opacity-90"
        >
          {primary}
        </a>
        {secondary ? (
          <a
            href={secondary.href}
            className="text-[15px] font-medium text-fg-primary underline-offset-4 hover:underline"
          >
            {secondary.label}
          </a>
        ) : null}
      </div>
      {caption ? (
        <p className="text-[14px] text-fg-tertiary">{caption}</p>
      ) : null}
    </section>
  );
}
