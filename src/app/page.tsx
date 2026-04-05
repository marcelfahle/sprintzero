import { Nav } from "@/components/nav";
import { HeroBlunt } from "@/components/hero-blunt";
import { HeroAIGap } from "@/components/hero-ai-gap";
import { LogoBar } from "@/components/logo-bar";
import { PainSection } from "@/components/pain-section";
import { ComparisonSection } from "@/components/comparison-section";
import { ProcessSection } from "@/components/process-section";
import { OfferSection } from "@/components/offer-section";
import { PricingSection } from "@/components/pricing-section";
import { SocialProofSection } from "@/components/social-proof-section";
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
      <ComparisonSection />
      <ProcessSection />
      <OfferSection />
      <PricingSection />
      <SocialProofSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <StickyMobileCTA />
      <Footer />
    </main>
  );
}
