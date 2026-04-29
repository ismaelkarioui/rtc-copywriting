import HeroSection, { NavBar } from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import OfferSection from "@/components/landing/OfferSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <OfferSection />
      <GuaranteeSection />
      <CTASection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
