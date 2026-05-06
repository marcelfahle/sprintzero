import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ProofStrip } from "@/components/proof-strip";
import { ProblemSection } from "@/components/problem-section";
import { CaseStudy } from "@/components/case-study";
import { WhatWeAre } from "@/components/what-we-are";
import { HowItWorks } from "@/components/how-it-works";
import { ComparisonSection } from "@/components/comparison-section";
import { FounderTrust } from "@/components/founder-trust";
import { Deliverables } from "@/components/deliverables";
import { GuaranteeSection } from "@/components/guarantee-section";
import { XRayOffer } from "@/components/x-ray-offer";
import { ForNotFor } from "@/components/for-not-for";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

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
        <ComparisonSection />
        <FounderTrust />
        <Deliverables />
        <GuaranteeSection />
        <XRayOffer />
        <ForNotFor />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
