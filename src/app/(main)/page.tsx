import Comparison from "@/components/Comparison";
import EstimationForm from "@/components/EstimationForm";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import ScrollCta from "@/components/ScrollCta";
import Testimonials from "@/components/Testimonials";

export default function page() {
  return (
    <>
      <HeroSection />
      <ScrollCta />
      <FeaturesSection />
      <Comparison />
      <EstimationForm />
      <Testimonials />
      <FaqSection />
      {/* About us / portfolio /  image comparison / contact */}
    </>
  );
}
