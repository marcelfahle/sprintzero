import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/container";
import { ThanksXrayConversion } from "@/components/thanks-xray-conversion";

export const metadata: Metadata = {
  title: "Booked. Talk soon.",
  description:
    "Your Codebase X-Ray is booked. Calendar invite is on the way.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://sprintzero.sh/thanks-xray" },
};

export default function ThanksXrayPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="bg-bg-primary pt-32 pb-16">
          <Container>
            <p className="mb-5 font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
              Booked
            </p>
            <h1 className="mb-6 max-w-[820px] font-display text-[36px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[44px] lg:text-[52px]">
              You&apos;re on the calendar. Talk soon.
            </h1>
            <p className="max-w-[680px] text-[18px] leading-[1.65] text-fg-secondary">
              The Codebase X-Ray is booked. Marcel will reach out within 24
              hours to confirm scope and request read-only repo access.
              Check your inbox for the calendar invite.
            </p>
          </Container>
        </header>

        <section className="bg-bg-secondary py-16">
          <Container>
            <div className="mx-auto flex max-w-[760px] flex-col gap-5">
              <h2 className="font-display text-[24px] leading-[1.2] font-bold tracking-subhead text-fg-primary sm:text-[28px]">
                What happens next
              </h2>
              <ol className="flex flex-col gap-4 text-[16px] leading-[1.65] text-fg-secondary">
                <li className="flex gap-3">
                  <span className="font-mono text-[13px] font-semibold tracking-mono text-accent-600 uppercase">
                    01
                  </span>
                  <span>
                    Marcel sends a short pre-call note: what to have ready
                    (repo URL, NDA if needed) and the agenda for the kickoff.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[13px] font-semibold tracking-mono text-accent-600 uppercase">
                    02
                  </span>
                  <span>
                    30-minute kickoff call on the date you booked. We learn
                    your stack, your forcing function, and what success looks
                    like.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[13px] font-semibold tracking-mono text-accent-600 uppercase">
                    03
                  </span>
                  <span>
                    Five business days of analysis. Async questions in Slack
                    the entire time.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[13px] font-semibold tracking-mono text-accent-600 uppercase">
                    04
                  </span>
                  <span>
                    Walkthrough call with the deliverable. You decide whether
                    to book the sprint or run the plan yourself.
                  </span>
                </li>
              </ol>
            </div>
          </Container>
        </section>

        <section className="bg-bg-primary py-12">
          <Container>
            <p className="text-[15px] text-fg-tertiary">
              Wrong calendar slot or need to reschedule?{" "}
              <a
                href="mailto:marcel@sprintzero.sh"
                className="font-medium text-fg-primary underline-offset-4 hover:underline"
              >
                marcel@sprintzero.sh
              </a>
              . Otherwise,{" "}
              <Link
                href="/case-studies"
                className="font-medium text-fg-primary underline-offset-4 hover:underline"
              >
                read the case studies
              </Link>{" "}
              while you wait.
            </p>
          </Container>
        </section>
      </main>
      <SiteFooter />
      <ThanksXrayConversion />
    </>
  );
}
