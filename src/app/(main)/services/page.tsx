import PageBanner from "@/components/PageBanner";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Professional painting and finishing services tailored to your needs"
        backgroundImage="/paint.jpg"
      />
      <ServicesGrid />
      <ProcessSection />
    </>
  );
}
