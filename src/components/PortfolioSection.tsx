import React from 'react';
import Image from 'next/image';
import Container from '@/lib/Container';

const portfolioItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80',
    title: 'Modern Interior',
    category: 'Interior Painting',
    size: 'large', // Takes 2 columns
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
    title: 'Elegant Living Space',
    category: 'Wall Finishing',
    size: 'medium',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    title: 'Contemporary Design',
    category: 'Feature Walls',
    size: 'medium',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: 'Luxury Bedroom',
    category: 'Residential',
    size: 'tall',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    title: 'Minimalist Kitchen',
    category: 'Cabinet Refinishing',
    size: 'medium',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'Cozy Living Room',
    category: 'Color Consultation',
    size: 'large',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    title: 'Modern Bathroom',
    category: 'Specialty Finishes',
    size: 'medium',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80',
    title: 'Stylish Workspace',
    category: 'Commercial',
    size: 'medium',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80',
    title: 'Stylish Workspace',
    category: 'Commercial',
    size: 'medium',
  },
];

export default function PortfolioSection() {
  return (
    <Container variant="black" padding>
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-semibold text-white mb-6">
          Our Work Speaks
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Louder Than Words
          </span>
        </h2>
        
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          From residential homes to commercial spaces, we handle every type of painting and finishing work. 
          Explore our portfolio and see the quality and craftsmanship that sets us apart.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className={`
              group relative overflow-hidden rounded-2xl cursor-pointer
              ${item.size === 'large' ? 'md:col-span-2' : ''}
              ${item.size === 'tall' ? 'md:row-span-2' : ''}
            transition-transform duration-300
            `}
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white mb-3">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  Professional craftsmanship with attention to every detail
                </p>
              </div>
            </div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}