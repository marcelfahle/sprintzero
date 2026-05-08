import Link from "next/link";
import { Container } from "./container";

export function TechnicalDueDiligenceCard() {
  return (
    <section className="border-t border-border-default bg-bg-secondary py-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 rounded-2xl border border-border-default bg-bg-primary p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-[760px]">
            <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
              Acquisitions and pre-close diligence
            </p>
            <h2 className="mb-4 font-display text-[32px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[40px]">
              Buying or selling a SaaS company?
            </h2>
            <p className="text-[17px] leading-[1.65] text-fg-secondary">
              SprintZero also runs pre-close technical due diligence: codebase risk map,
              dependency and security posture, architecture debt, handover risk, and modernization
              cost range. Written for buyers, advisors, founders, and investment committees.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <Link
              href="/tech-due-diligence"
              className="inline-flex justify-center rounded-full bg-fg-primary px-7 py-3.5 text-[15px] font-semibold whitespace-nowrap text-fg-inverse transition-opacity duration-200 hover:opacity-90"
            >
              See technical due diligence
            </Link>
            <p className="text-center font-mono text-[12px] tracking-mono text-fg-tertiary uppercase lg:text-left">
              From $5K. Typical $10K. 1–2 weeks.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
