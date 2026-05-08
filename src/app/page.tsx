import type { ReactElement } from "react";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ProofStrip } from "@/components/proof-strip";
import { ProblemSection } from "@/components/problem-section";
import { CaseStudy } from "@/components/case-study";
import { WhatWeAre } from "@/components/what-we-are";
import { HowItWorks } from "@/components/how-it-works";
import { HandoverSection } from "@/components/handover-section";
import { FrameworkBar } from "@/components/framework-bar";
import { ComparisonSection } from "@/components/comparison-section";
import { FounderTrust } from "@/components/founder-trust";
import { Deliverables } from "@/components/deliverables";
import { GuaranteeSection } from "@/components/guarantee-section";
import { XRayOffer } from "@/components/x-ray-offer";
import { TechnicalDueDiligenceCard } from "@/components/technical-due-diligence-card";
import { ForNotFor } from "@/components/for-not-for";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sprintzero.sh/#org",
      name: "SprintZero",
      url: "https://sprintzero.sh",
      logo: "https://sprintzero.sh/icon.svg",
      description:
        "AI-assisted legacy codebase modernization. Fixed-price 30-day sprints for SaaS teams on aging React, Laravel, Rails, and Phoenix stacks.",
      founder: [
        {
          "@type": "Person",
          name: "Vanessa Roberts",
          jobTitle: "Co-founder & CEO",
        },
        {
          "@type": "Person",
          name: "Marcel Fahle",
          jobTitle: "Co-founder & CTO",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://sprintzero.sh/#service",
      name: "SprintZero — Legacy Codebase Modernization",
      url: "https://sprintzero.sh",
      provider: { "@id": "https://sprintzero.sh/#org" },
      areaServed: "Worldwide",
      serviceType: "Legacy Codebase Modernization",
      description:
        "AI-assisted modernization of legacy SaaS codebases. Starts with a fixed-price Codebase X-Ray; 30-day modernization sprint with handover, custom AI skills package, and 30-day support window.",
      offers: [
        {
          "@type": "Offer",
          name: "Codebase X-Ray",
          price: "2500",
          priceCurrency: "USD",
          url: "https://sprintzero.sh/x-ray",
          description:
            "One-week diagnostic with architecture risk map, dependency audit, prioritized modernization plan, and walkthrough call.",
        },
        {
          "@type": "Offer",
          name: "Modernization Sprint",
          priceCurrency: "USD",
          description:
            "30-day fixed-scope modernization sprint with full handover. Starting at $35,000.",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "35000",
            priceCurrency: "USD",
          },
        },
      ],
    },
  ],
};

function JsonLd({ data }: { data: unknown }): ReactElement {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <ProblemSection />
        <CaseStudy />
        <WhatWeAre />
        <HowItWorks />
        <HandoverSection />
        <FrameworkBar />
        <ComparisonSection />
        <FounderTrust />
        <Deliverables />
        <GuaranteeSection />
        <XRayOffer />
        <TechnicalDueDiligenceCard />
        <ForNotFor />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
      <JsonLd data={homepageSchema} />
    </>
  );
}
