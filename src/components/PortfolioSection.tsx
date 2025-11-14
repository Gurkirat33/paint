import React from "react";
import Image from "next/image";
import Container from "@/lib/Container";
import SectionHeading from "@/lib/SectionHeading";
import { portfolioItems } from "@/data/portfolio";

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
      <SectionHeading
        title="Work That Stands Out"
        description="We turn ordinary spaces into inspiring ones through careful craftsmanship and attention to detail."
      />

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
