import { Nav } from "@/components/nav";
import { HeroBlunt } from "@/components/hero-blunt";
import { HeroAIGap } from "@/components/hero-ai-gap";
import { LogoBar } from "@/components/logo-bar";
import { PainSection } from "@/components/pain-section";
import { CostSection } from "@/components/cost-section";
import { ComparisonSection } from "@/components/comparison-section";
import { ProcessSection } from "@/components/process-section";
import { OfferSection } from "@/components/offer-section";
import { PricingSection } from "@/components/pricing-section";
import { AboutSection } from "@/components/about-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import { Footer } from "@/components/footer";

const isBlunt = process.env.NEXT_PUBLIC_VARIANT === "blunt";

export default function Home() {
  return (
    <main>
      <Nav />
      {isBlunt ? <HeroBlunt /> : <HeroAIGap />}
      <LogoBar />
      <PainSection />
      <CostSection />
      <ComparisonSection />
      <ProcessSection />
      <OfferSection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <StickyMobileCTA />
      <Footer />
    </main>
  );
}
