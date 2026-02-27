import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import OfferSection from "@/components/landing/OfferSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <OfferSection />
      <GuaranteeSection />
      <CTASection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Index;
