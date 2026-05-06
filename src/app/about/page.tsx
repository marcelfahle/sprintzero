import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/container";
import { BOOKING_URL } from "@/lib/constants";

import marcelPhoto from "../../../public/marcel.jpg";
import vanessaPhoto from "../../../public/vanessa.jpg";

const URL = "https://sprintzero.sh/about";

export const metadata: Metadata = {
  title: "About — Founders & Team",
  description:
    "SprintZero is a founder-led, two-person shop. Marcel writes the code (25+ years, AI-assisted workflows since 2024). Vanessa runs strategy and partnerships (four-time founder, three exits).",
  alternates: { canonical: URL },
  openGraph: {
    type: "profile",
    url: URL,
    title: "About SprintZero — Founders & Team",
    description:
      "Founder-led, not farmed out. Marcel Fahle (CTO) and Vanessa Roberts (CEO).",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SprintZero — Founders & Team",
    description: "Founder-led, not farmed out. Two co-founders. Twenty-plus years each.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${URL}#page`,
      url: URL,
      name: "About SprintZero",
      isPartOf: { "@id": "https://sprintzero.sh/#org" },
    },
    {
      "@type": "Person",
      "@id": `${URL}#vanessa`,
      name: "Vanessa Roberts",
      jobTitle: "Co-founder & CEO",
      worksFor: { "@id": "https://sprintzero.sh/#org" },
      description:
        "Four-time founder. Three successful exits. 20+ years scaling B2B SaaS companies. Runs strategy, partnerships, and the relationships that put the right work in front of the right people.",
      image: "https://sprintzero.sh/vanessa.jpg",
    },
    {
      "@type": "Person",
      "@id": `${URL}#marcel`,
      name: "Marcel Fahle",
      jobTitle: "Co-founder & CTO",
      worksFor: { "@id": "https://sprintzero.sh/#org" },
      description:
        "25+ years building and rescuing software. Operating exclusively with AI-powered workflows since mid-2024. Leads every engagement personally.",
      image: "https://sprintzero.sh/marcel.jpg",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sprintzero.sh" },
        { "@type": "ListItem", position: 2, name: "About", item: URL },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="border-b border-border-default bg-bg-primary pt-32 pb-16">
          <Container>
            <p className="mb-5 font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
              About
            </p>
            <h1 className="mb-6 max-w-[820px] font-display text-[32px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[40px] lg:text-[48px]">
              Founder-led. Not farmed out.
            </h1>
            <p className="max-w-[760px] text-[18px] leading-[1.65] text-fg-secondary">
              SprintZero is a two-founder shop built around one question:
              what would modernization look like if AI tools were used the
              way senior engineers actually use them? Marcel writes the
              code. Vanessa runs the relationships. We do not subcontract.
            </p>
          </Container>
        </header>

        <section className="bg-bg-primary py-20">
          <Container>
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
              <article className="flex flex-col gap-6">
                <Image
                  src={vanessaPhoto}
                  alt="Vanessa Roberts, Co-founder and CEO of SprintZero"
                  width={160}
                  height={160}
                  priority
                  className="size-[160px] rounded-full object-cover [filter:grayscale(0.15)]"
                  sizes="160px"
                />
                <div>
                  <h2 className="font-display text-[26px] font-bold tracking-subhead text-fg-primary">
                    Vanessa Roberts
                  </h2>
                  <p className="text-[15px] tracking-wide text-fg-tertiary">
                    Co-founder &amp; CEO — Partnerships
                  </p>
                </div>
                <div className="flex flex-col gap-4 text-[16px] leading-[1.7] text-fg-secondary">
                  <p>
                    Four-time founder. Three successful exits. 20+ years
                    scaling B2B SaaS companies — and a network most
                    consultancies never get. Chances are, she&apos;s the
                    reason you&apos;re on this page.
                  </p>
                  <p>
                    She runs the business end: strategy, partnerships, and
                    the relationships that put the right work in front of
                    the right people. When you book the call, she&apos;s
                    the one you&apos;re talking to. When something needs to
                    move mid-sprint, she&apos;s the one moving it.
                  </p>
                </div>
              </article>

              <article className="flex flex-col gap-6">
                <Image
                  src={marcelPhoto}
                  alt="Marcel Fahle, Co-founder and CTO of SprintZero"
                  width={160}
                  height={160}
                  priority
                  className="size-[160px] rounded-full object-cover [filter:grayscale(0.15)]"
                  sizes="160px"
                />
                <div>
                  <h2 className="font-display text-[26px] font-bold tracking-subhead text-fg-primary">
                    Marcel Fahle
                  </h2>
                  <p className="text-[15px] tracking-wide text-fg-tertiary">
                    Co-founder &amp; CTO — Engineering
                  </p>
                </div>
                <div className="flex flex-col gap-4 text-[16px] leading-[1.7] text-fg-secondary">
                  <p>
                    25+ years building and rescuing software. Operating
                    exclusively with AI-powered workflows since mid-2024 —
                    before most CTOs knew Cursor existed. He leads every
                    engagement personally, not farming your project out to
                    subcontractors.
                  </p>
                  <p>
                    When we say &ldquo;shipped in 30 days,&rdquo; he&apos;s
                    the one writing the code. AI handles the mechanical
                    transformation at scale; engineering judgment is the
                    product.
                  </p>
                </div>
              </article>
            </div>
          </Container>
        </section>

        <section className="bg-bg-secondary py-20">
          <Container>
            <div className="mx-auto flex max-w-[820px] flex-col items-start gap-5 rounded-2xl border border-border-default bg-bg-primary p-10">
              <h2 className="font-display text-[24px] leading-[1.2] font-bold tracking-subhead text-fg-primary sm:text-[28px]">
                Want to talk?
              </h2>
              <p className="text-[16px] leading-[1.65] text-fg-secondary">
                The Codebase X-Ray is the first step. One week. $2,500.
                Credited 100% toward the sprint if you proceed. You walk
                away with a plan whether you hire us or not.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-fg-primary px-7 py-3.5 text-[15px] font-semibold text-fg-inverse transition-opacity duration-200 hover:opacity-90"
              >
                Book the Codebase X-Ray →
              </a>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
    </>
  );
}
