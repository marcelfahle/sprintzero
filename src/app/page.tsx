import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ProofStrip } from "@/components/proof-strip";
import { ProblemSection } from "@/components/problem-section";
import { CaseStudy } from "@/components/case-study";
import { WhatWeAre } from "@/components/what-we-are";
import { HowItWorks } from "@/components/how-it-works";
import { Deliverables } from "@/components/deliverables";
import { XRayOffer } from "@/components/x-ray-offer";
import { ForNotFor } from "@/components/for-not-for";
import { FounderTrust } from "@/components/founder-trust";
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
        <Deliverables />
        <XRayOffer />
        <ForNotFor />
        <FounderTrust />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
