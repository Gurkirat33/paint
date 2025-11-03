import React from "react";
import Image from "next/image";
import Container from "@/lib/Container";
import { ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
  highlight: string;
}

const services: Service[] = [
  {
    title: "Interior Painting",
    description: "Transform your indoor spaces with flawless finishes and vibrant colors that bring your vision to life.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    highlight: "Premium Finishes",
    features: [
      "Walls & Ceilings",
      "Doors & Trim",
      "Crown Molding",
      "Accent Walls",
    ],
  },
  {
    title: "Exterior Painting",
    description: "Protect and beautify your home's exterior with weather-resistant coatings built to last.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    highlight: "Weather Protection",
    features: [
      "Siding & Stucco",
      "Brick & Masonry",
      "Wood Surfaces",
      "Long-lasting Durability",
    ],
  },
  {
    title: "Wallpaper Installation",
    description: "Expert installation and removal of wallpaper with precision pattern matching for stunning results.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    highlight: "Pattern Perfection",
    features: [
      "Professional Installation",
      "Pattern Matching",
      "Removal & Prep",
      "Designer Wallcoverings",
    ],
  },
  {
    title: "Cabinet Refinishing",
    description: "Revitalize your kitchen and bathrooms with professional cabinet painting and refinishing.",
    image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
    highlight: "Kitchen Transformation",
    features: [
      "Kitchen Cabinets",
      "Bathroom Vanities",
      "Built-in Units",
      "Durable Finishes",
    ],
  },
  {
    title: "Deck & Fence Staining",
    description: "Preserve and enhance outdoor wood structures with quality stains and protective coatings.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    highlight: "Outdoor Excellence",
    features: [
      "Deck Restoration",
      "Fence Staining",
      "Wood Sealing",
      "Pressure Washing",
    ],
  },
  {
    title: "Specialty Finishes",
    description: "Unique decorative techniques and custom finishes for distinctive, personalized spaces.",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80",
    highlight: "Custom Artistry",
    features: [
      "Faux Finishes",
      "Textured Walls",
      "Metallic Effects",
      "Designer Colors",
    ],
  },
  {
    title: "Commercial Painting",
    description: "Professional painting services for offices, retail, and commercial spaces with minimal disruption.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    highlight: "Business Solutions",
    features: [
      "Office Spaces",
      "Retail Stores",
      "Restaurants & Cafes",
      "After-Hours Service",
    ],
  },
  {
    title: "Color Consultation",
    description: "Expert guidance in selecting the perfect colors and finishes to match your style and space.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    highlight: "Design Expertise",
    features: [
      "Color Matching",
      "Mood Boards",
      "Sample Testing",
      "Professional Advice",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <Container variant="default" padding>
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Image with Overlay */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Highlight Badge */}
              <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                {service.highlight}
              </div>

              {/* Title on Image */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-sm group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
        <p className="text-gray-700 text-lg mb-2 font-medium">
          Don&apos;t see what you&apos;re looking for?
        </p>
        <p className="text-gray-600 mb-4">
          We offer custom solutions tailored to your specific needs
        </p>
        <a
          href="tel:087-9721238"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg transition-colors group"
        >
          Contact us today
          <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </Container>
  );
}
