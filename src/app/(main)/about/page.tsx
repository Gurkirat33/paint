import PageBanner from "@/components/PageBanner";
import AboutSection from "@/components/AboutSection";
import AboutValuesSection from "@/components/AboutValuesSection";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Discover the story behind Calgary's most trusted painting professionals"
        backgroundImage="/paint.jpg"
      />
      <AboutSection />
      <AboutValuesSection />
    </>
  );
}
