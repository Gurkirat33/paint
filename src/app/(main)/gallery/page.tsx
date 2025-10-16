import PageBanner from "@/components/PageBanner";
import PortfolioSection from "@/components/PortfolioSection";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-black">
      <PageBanner
        title="Our Gallery"
        subtitle="Discover our finest work and see the quality craftsmanship that sets us apart"
        backgroundImage="/paint.jpg"
      />
      <PortfolioSection galleryPage />
    </div>
  );
}
