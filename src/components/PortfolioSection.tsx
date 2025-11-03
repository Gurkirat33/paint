import React from "react";
import Image from "next/image";
import Container from "@/lib/Container";
import SectionHeading from "@/lib/SectionHeading";

const portfolioItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    title: "Modern Interior",
    category: "Interior Painting",
    aspectRatio: "4/3",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    title: "Elegant Living Space",
    category: "Wall Finishing",
    aspectRatio: "3/4",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    title: "Contemporary Design",
    category: "Feature Walls",
    aspectRatio: "16/9",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Luxury Bedroom",
    category: "Residential",
    aspectRatio: "3/4",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    title: "Minimalist Kitchen",
    category: "Cabinet Refinishing",
    aspectRatio: "4/3",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Cozy Living Room",
    category: "Color Consultation",
    aspectRatio: "16/9",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    title: "Modern Bathroom",
    category: "Specialty Finishes",
    aspectRatio: "4/5",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
    title: "Stylish Workspace",
    category: "Commercial",
    aspectRatio: "3/4",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    title: "Rustic Kitchen",
    category: "Cabinet Refinishing",
    aspectRatio: "4/3",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    title: "Elegant Dining Room",
    category: "Interior Painting",
    aspectRatio: "3/4",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea8?w=800&q=80",
    title: "Modern Office Space",
    category: "Commercial",
    aspectRatio: "16/9",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Cozy Reading Nook",
    category: "Residential",
    aspectRatio: "4/5",
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Luxury Master Suite",
    category: "Interior Painting",
    aspectRatio: "3/4",
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Contemporary Living",
    category: "Wall Finishing",
    aspectRatio: "4/3",
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Artistic Feature Wall",
    category: "Feature Walls",
    aspectRatio: "16/9",
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Spa-Like Bathroom",
    category: "Specialty Finishes",
    aspectRatio: "3/4",
  },
  {
    id: 17,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Industrial Loft",
    category: "Commercial",
    aspectRatio: "4/3",
  },
  {
    id: 18,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Family Room Makeover",
    category: "Color Consultation",
    aspectRatio: "3/4",
  },
  {
    id: 19,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Modern Entryway",
    category: "Interior Painting",
    aspectRatio: "4/5",
  },
  {
    id: 20,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Elegant Staircase",
    category: "Wall Finishing",
    aspectRatio: "16/9",
  },
  {
    id: 21,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Kids Room Design",
    category: "Residential",
    aspectRatio: "4/3",
  },
  {
    id: 22,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Restaurant Interior",
    category: "Commercial",
    aspectRatio: "3/4",
  },
  {
    id: 23,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Accent Wall Design",
    category: "Feature Walls",
    aspectRatio: "4/3",
  },
  {
    id: 24,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Guest Bedroom",
    category: "Interior Painting",
    aspectRatio: "3/4",
  },
  {
    id: 25,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    title: "Rustic Farmhouse",
    category: "Exterior Painting",
    aspectRatio: "16/9",
  },
  {
    id: 26,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea8?w=800&q=80",
    title: "Modern Studio",
    category: "Commercial",
    aspectRatio: "4/3",
  },
  {
    id: 27,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Vintage Library",
    category: "Interior Painting",
    aspectRatio: "3/4",
  },
  {
    id: 28,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Coastal Living Room",
    category: "Color Consultation",
    aspectRatio: "4/5",
  },
  {
    id: 29,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Urban Loft",
    category: "Commercial",
    aspectRatio: "16/9",
  },
  {
    id: 30,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    title: "Traditional Study",
    category: "Interior Painting",
    aspectRatio: "3/4",
  },
];

export default function PortfolioSection({
  galleryPage = false,
}: {
  galleryPage?: boolean;
}) {
  const portfolioItemsList = galleryPage
    ? portfolioItems
    : portfolioItems.slice(0, 8);
  return (
    <Container variant="indigo" padding>
      {/* Header Section */}
      <SectionHeading title="Work That Stands Out" description="We turn ordinary spaces into inspiring ones through careful craftsmanship and attention to detail."/>


      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {portfolioItemsList.map((item) => (
          <div key={item.id} className="break-inside-avoid mb-6">
            <div className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:shadow-2xl">
              {/* Image with dynamic aspect ratio */}
              <div
                className="relative w-full"
                style={{ aspectRatio: item.aspectRatio }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-2 group-hover:translate-y-1 transition-all duration-300">
                    <span className="inline-block px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full text-xs font-medium text-white/90 mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Subtle shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
