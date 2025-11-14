"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/lib/Container";
import { motion } from "framer-motion";
import SectionHeading from "@/lib/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4);

  const extendedRow1 = [...row1, ...row1, ...row1];
  const extendedRow2 = [...row2, ...row2, ...row2];

  const TestimonialCard = ({
    testimonial,
    isMobile = false,
  }: {
    testimonial: (typeof testimonials)[0];
    isMobile?: boolean;
  }) => (
    <div
      className={`bg-white p-6 rounded-xl shadow-lg flex-shrink-0 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 ${
        isMobile ? "w-full" : "w-[400px]"
      }`}
    >
      <p className="md:text-[17px] text-gray-700 mb-6 italic leading-relaxed">
        &ldquo;{testimonial.testimonial}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <p className="font-bold text-gray-800">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );

  return (
    <Container
      variant="deepPurple"
      className="max-w-none py-6 md:py-12 lg:py-20"
    >
      <SectionHeading
        title="Testimonials"
        description="What our clients say about us"
      />

      {/* Mobile Grid View - Below md */}
      <div className="md:hidden px-4">
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials
              .slice(0, showAll ? testimonials.length : 5)
              .map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`${
                    !showAll && idx === 4 ? "relative sm:col-span-2" : ""
                  }`}
                >
                  <TestimonialCard testimonial={testimonial} isMobile />

                  {/* Gradient overlay and button on 5th card */}
                  {!showAll && idx === 4 && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-[#1a0b2e]/90 to-transparent rounded-xl pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={() => setShowAll(true)}
                          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 border border-white/20 pointer-events-auto"
                        >
                          View All Testimonials
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Desktop Auto-scroll - md and above */}
      <div className="hidden md:block space-y-6 overflow-hidden">
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
