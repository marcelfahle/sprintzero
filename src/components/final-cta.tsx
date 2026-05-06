import { Container } from "./container";
import { BOOKING_URL, XRAY_PRICE } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="bg-[#0a0a09] py-24">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-[36px] leading-[1.1] font-bold tracking-heading text-[#fafaf9] sm:text-[44px]">
            Your codebase will get audited eventually.
          </h2>
          <p className="max-w-[500px] text-[18px] leading-[1.6] text-[#a8a8a1]">
            By your next investor, your compliance officer, or your acquirer. Better you do it
            first.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#fafaf9] px-9 py-4 text-[16px] font-semibold text-[#0a0a09] transition-opacity duration-200 hover:opacity-90"
            >
              Book the Codebase X-Ray — {XRAY_PRICE}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#3f3f3c] px-9 py-4 text-[16px] font-medium text-[#fafaf9] transition-colors duration-200 hover:bg-white/5"
            >
              Book a fit call
            </a>
          </div>
          <p className="font-mono text-[13px] text-[#737370]">Typically responds within 24 hours</p>
        </div>
      </Container>
    </section>
  );
}
