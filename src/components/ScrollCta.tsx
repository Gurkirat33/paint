"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Percent,
  Phone,
  Sparkles,
  Award,
  Calendar,
  Flame,
  Star,
} from "lucide-react";

export default function ScrollCta() {
  const offers = [
    { icon: Palette, text: "Free Color Consultation" },
    { icon: Percent, text: "Up to 20% Off This Month", special: true },
    { icon: Phone, text: "Same Day Quote Guarantee" },
    { icon: Sparkles, text: "Post-Paint Cleanup Included" },
    { icon: Award, text: "Licensed & Insured Professionals" },
    { icon: Calendar, text: "Flexible Scheduling Available" },
    { icon: Flame, text: "Limited Time Spring Special", special: true },
    { icon: Star, text: "98% Customer Satisfaction Rate" },
  ];

  // Triple the array for seamless scrolling
  const extendedOffers = [...offers, ...offers, ...offers];

  return (
    <div className="primary-color section-container-top overflow-hidden">
      <motion.div
        className="flex gap-4 whitespace-nowrap py-4"
        animate={{
          x: [0, -100 * offers.length],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ width: `${100 * extendedOffers.length}%` }}
      >
        {extendedOffers.map((offer, index) => {
          const Icon = offer.icon;
          return (
            <div
              key={index}
              className={`font-semibold px-6 py-4 rounded-xl flex-shrink-0 flex items-center gap-2 ${
                offer.special
                  ? "bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg scale-[1.03]"
                  : "bg-white"
              }`}
            >
              <Icon size={20} />
              {offer.text}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
