import { Nav } from "@/components/nav";
import { HeroAIGap } from "@/components/hero-ai-gap";
import { HeroBlunt } from "@/components/hero-blunt";
import { MarqueeStrip } from "@/components/marquee-strip";
import { PainSection } from "@/components/pain-section";
import { CostSection } from "@/components/cost-section";
import { ComparisonSection } from "@/components/comparison-section";
import { CaseStudySection } from "@/components/case-study-section";
import { ProcessSection } from "@/components/process-section";
import { OfferSection } from "@/components/offer-section";
import { PricingSection } from "@/components/pricing-section";
import { ICPSection } from "@/components/icp-section";
import { AboutSection } from "@/components/about-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

const isBlunt = true;

export default function Home() {
  return (
    <main>
      <Nav />
      {isBlunt ? <HeroBlunt /> : <HeroAIGap />}
      <MarqueeStrip />
      <PainSection />
      <CostSection />
      <ComparisonSection />
      <CaseStudySection />
      <ProcessSection />
      <OfferSection />
      <PricingSection />
      <ICPSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
