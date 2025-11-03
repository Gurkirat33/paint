// import Comparison from "@/components/Comparison";
import EstimationForm from "@/components/EstimationForm";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ScrollCta from "@/components/ScrollCta";
import Testimonials from "@/components/Testimonials";
// import SpecialOfferModal from "@/components/SpecialOfferModal";

export default function page() {
  return (
    <>
      <HeroSection />
      <ScrollCta />
      <AboutSection />
      <FeaturesSection />
      {/* <Comparison /> */}
      <EstimationForm />
      <PortfolioSection />
      <Testimonials />
      <FaqSection />
      {/* <SpecialOfferModal delaySeconds={5} /> */}
    </>
  );
}
