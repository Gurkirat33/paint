"use client";

import React, { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    text: "I got 3 quotes and theirs was the most detailed and honest. They walked me through everything, didn't try to upsell me, and the final price was exactly what they quoted. My living room looks incredible!",
    name: "Michael K.",
    initials: "MK",
    location: "Dublin 8",
    service: "Interior Paint",
    time: "2 weeks ago",
  },
  {
    id: 2,
    text: "Absolutely brilliant work! They showed up on time every day, kept everything clean, and the attention to detail was outstanding. I've already recommended them to my neighbors.",
    name: "Emma D.",
    initials: "ED",
    location: "Rathmines",
    service: "Exterior Paint",
    time: "1 month ago",
  },
  {
    id: 3,
    text: "Best decision I made for my home renovation. Fair pricing, no hidden costs, and they completed the job faster than expected. The wallpaper installation is flawless!",
    name: "James M.",
    initials: "JM",
    location: "Ranelagh",
    service: "Wallpaper Install",
    time: "3 weeks ago",
  },
];

export default function EstimationReviewCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleDotClick = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const review = reviews[currentIndex];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-5 relative overflow-hidden">
      {/* Review Content */}
      <div
        className="transition-all duration-500 ease-in-out"
        style={{
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating ? "translateY(10px)" : "translateY(0)",
        }}
      >
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 fill-yellow-400"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>

        <p className="text-[17px] text-white leading-relaxed mb-4 min-h-[100px]">
          &ldquo;{review.text}&rdquo;
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-md">
              {review.initials}
            </div>
            <div>
              <p className="font-semibold text-[15px]">{review.name}</p>
              <p className="text-blue-200 text-[13px]">
                {review.location} • {review.service}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-blue-200 text-[13px]">Verified</p>
            <p className="text-blue-300 text-xs">{review.time}</p>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className="transition-all duration-300 ease-out rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            style={{
              width: currentIndex === index ? "32px" : "8px",
              height: "8px",
              backgroundColor:
                currentIndex === index
                  ? "rgb(96, 165, 250)"
                  : "rgba(255, 255, 255, 0.4)",
            }}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
