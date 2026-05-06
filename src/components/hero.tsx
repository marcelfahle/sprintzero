import { Container } from "./container";
import { BOOKING_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="bg-bg-primary pt-[140px] pb-4">
      <Container>
        <p className="mb-5 flex items-center gap-2 font-mono text-[13px] font-medium tracking-mono text-accent-600">
          <span className="size-1.5 rounded-full bg-accent-500" />
          30-day legacy codebase modernization
        </p>
        <h1 className="mb-6 max-w-[800px] font-display text-[40px] leading-[1.05] font-bold tracking-display text-fg-primary sm:text-[52px] lg:text-[64px]">
          Modernize the legacy codebase that&apos;s slowing your team down.
        </h1>
        <p className="mb-10 max-w-[580px] text-[18px] leading-[1.65] text-fg-secondary sm:text-[19px]">
          Without a 6-month rewrite. For SaaS companies on aging JS/PHP stacks with delivery drag,
          security debt, or compliance pressure.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-fg-primary px-8 py-3.5 text-[16px] font-semibold text-fg-inverse transition-opacity duration-200 hover:opacity-90"
          >
            Book a Codebase X-Ray
          </a>
          <a
            href="#case-study"
            className="rounded-full border border-border-strong px-8 py-3.5 text-[16px] font-medium text-fg-primary transition-colors duration-200 hover:bg-bg-secondary"
          >
            See the case study →
          </a>
        </div>
      </Container>
    </section>
  );
}
