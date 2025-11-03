"use client";

import React from 'react';
import Image from 'next/image';
import Container from '@/lib/Container';
import { motion } from 'framer-motion';
import SectionHeading from '@/lib/SectionHeading';

const testimonials = [
  {
    name: 'Emily Carter',
    testimonial: 'They did an amazing job on our living room. The wallpaper was installed perfectly, and the paint job is flawless. Highly recommend!',
    position: 'Homeowner, Dublin',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    name: 'Michael Chen',
    testimonial: 'From the initial quote to the final walkthrough, the process was seamless. Professional, clean, and the results exceeded our expectations.',
    position: 'Interior Designer',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Jessica Patel',
    testimonial: 'Working with this team has been a game-changer for our business. Their professionalism, creativity, and genuine care made us feel supported at every step.',
    position: 'Homeowner, Cork',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    name: 'David Rodriguez',
    testimonial: "This team exceeded every expectation. They delivered results that were both creative and practical. Communication was clear and their dedication was obvious.",
    position: 'Real Estate Agent',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
  },
  {
    name: 'Sophia Williams',
    testimonial: 'I was so impressed with the color consultation. They helped me pick the perfect shades for my home office. The result is stunning!',
    position: 'Freelance Graphic Designer',
    image: 'https://randomuser.me/api/portraits/women/58.jpg',
  },
  {
    name: 'James O\'Connor',
    testimonial: 'Outstanding service from start to finish. The team was punctual, respectful of our home, and delivered exceptional quality work.',
    position: 'Business Owner, Galway',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Ava Murphy',
    testimonial: 'The attention to detail was remarkable. Every corner, every edge was perfect. Couldn\'t be happier with our new kitchen!',
    position: 'Homeowner, Limerick',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Liam Walsh',
    testimonial: 'Fair pricing, excellent workmanship, and they completed the job ahead of schedule. What more could you ask for?',
    position: 'Property Manager',
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
  },
];
  
export default function Testimonials() {
  // Split testimonials into two rows
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4);
  
  // Extend arrays for infinite scroll
  const extendedRow1 = [...row1, ...row1, ...row1];
  const extendedRow2 = [...row2, ...row2, ...row2];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg flex-shrink-0 w-[400px] flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
      <p className="text-gray-700 mb-6 italic leading-relaxed">
        &ldquo;{testimonial.testimonial}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <Image 
          src={testimonial.image} 
          alt={testimonial.name} 
          width={48} 
          height={48} 
          className="rounded-full border-2 border-orange-500" 
        />
        <div>
          <p className="font-bold text-gray-800">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );

  return (
    <Container variant="deepPurple" className='max-w-none py-20'>
      <SectionHeading title="Testimonials" description="What our clients say about us"/>
      <div className="space-y-6 overflow-hidden">
        {/* First Row - Scroll Right to Left */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: [-100 * row1.length, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {extendedRow1.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>

        {/* Second Row - Scroll Left to Right */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -100 * row2.length],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {extendedRow2.map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </Container>
  );
}
