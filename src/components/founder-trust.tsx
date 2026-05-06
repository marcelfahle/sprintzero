import Image from "next/image";
import { Container } from "./container";

import marcelPhoto from "../../public/marcel.jpg";
import vanessaPhoto from "../../public/vanessa.jpg";

export function FounderTrust() {
  return (
    <section className="bg-bg-primary py-20">
      <Container>
        <div className="mb-12">
          <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
            Who&apos;s behind this
          </p>
          <h2 className="font-display text-[32px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[40px]">
            Founder-led. Not farmed out.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <article className="flex items-start gap-6">
            <Image
              src={vanessaPhoto}
              alt="Vanessa Roberts"
              width={120}
              height={120}
              priority
              className="size-[120px] shrink-0 rounded-full object-cover [filter:grayscale(0.15)]"
              sizes="120px"
            />
            <div className="flex flex-col gap-2.5">
              <div>
                <h3 className="font-display text-[22px] font-bold tracking-subhead text-fg-primary">
                  Vanessa Roberts
                </h3>
                <p className="-mt-0.5 text-[15px] tracking-wide text-fg-tertiary">
                  CEO — Partnerships
                </p>
              </div>
              <p className="text-[16px] leading-[1.65] text-fg-secondary">
                Four-time founder. Three successful exits. 20+ years scaling B2B SaaS companies. She
                runs strategy, partnerships, and the relationships that put the right work in front
                of the right people. When you book the call, she&apos;s who you&apos;re talking to.
              </p>
            </div>
          </article>
          <article className="flex items-start gap-6">
            <Image
              src={marcelPhoto}
              alt="Marcel Fahle"
              width={120}
              height={120}
              priority
              className="size-[120px] shrink-0 rounded-full object-cover [filter:grayscale(0.15)]"
              sizes="120px"
            />
            <div className="flex flex-col gap-2.5">
              <div>
                <h3 className="font-display text-[22px] font-bold tracking-subhead text-fg-primary">
                  Marcel Fahle
                </h3>
                <p className="-mt-0.5 text-[15px] tracking-wide text-fg-tertiary">
                  CTO — Engineering
                </p>
              </div>
              <p className="text-[16px] leading-[1.65] text-fg-secondary">
                25+ years building and rescuing software. Operating exclusively
                with AI-powered workflows since mid-2024 — before most CTOs
                knew Cursor existed. He leads every engagement personally, not
                farming your project out to subcontractors. When we say
                shipped in 30 days, he&apos;s the one writing the code.
              </p>
              <p className="font-mono text-[13px] text-accent-600">First client hired us twice.</p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
