import { Container } from "./container";
import { BOOKING_URL, XRAY_PRICE } from "@/lib/constants";

const includes = [
  "Full architecture risk map",
  "Dependency & vulnerability audit",
  "Prioritized modernization plan",
  "Sprint scope & timeline",
  "60-minute walkthrough call",
];

export function XRayOffer() {
  return (
    <section id="pricing" className="bg-bg-primary py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <p className="font-mono text-[13px] font-medium tracking-mono text-accent-600">
              The offer
            </p>
            <h2 className="font-display text-[32px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[40px]">
              Start with the Codebase X-Ray.
            </h2>
            <p className="text-[17px] leading-[1.65] text-fg-secondary">
              A fixed-price diagnostic that tells you exactly what&apos;s broken, what&apos;s risky,
              and what to modernize first. You get a plan whether you hire us or not.
            </p>
            <div className="rounded-lg border border-border-default bg-bg-secondary px-6 py-4 text-[15px] leading-[1.6] text-fg-tertiary">
              <strong className="text-fg-primary">The alternative?</strong> A full rewrite:
              $300K–$500K, 6–12 months, and a coin flip on whether it ships. The X-Ray costs less
              than one week of your current team spinning on the wrong problems.
            </div>
          </div>

          <article className="flex flex-col gap-5 rounded-lg border border-border-default bg-bg-secondary p-10">
            <h3 className="font-display text-[28px] font-bold tracking-subhead text-fg-primary">
              Codebase X-Ray
            </h3>
            <div className="font-mono text-[48px] font-bold tracking-heading text-fg-primary">
              {XRAY_PRICE}
            </div>
            <p className="-mt-3 text-[15px] text-fg-secondary">One-time. Delivered in one week.</p>
            <ul className="flex flex-col gap-2.5 pt-2">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[16px] text-fg-primary">
                  <span aria-hidden className="font-mono text-[14px] text-accent-500">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-full bg-fg-primary px-8 py-4 text-center text-[16px] font-semibold text-fg-inverse transition-opacity duration-200 hover:opacity-90"
            >
              Book the Codebase X-Ray
            </a>
            <p className="text-center font-mono text-[13px] text-accent-500">
              100% credited toward the modernization sprint
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
