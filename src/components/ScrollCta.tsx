"use client";

import { motion } from "framer-motion";
import { AuroraText } from "./ui/aurora-text";
import { extendedOffers, offers } from "@/data/scollCta";

export default function ScrollCta() {
  return (
    <div className="primary-color section-container-top overflow-hidden">
      <motion.div
        className="flex gap-3 md:gap-4 whitespace-nowrap"
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
              className={`flex-shrink-0 flex items-center gap-2 bg-white font-semibold px-4 py-2.5 md:px-6 md:py-4 rounded-xl ${
                offer.special ? "" : "  "
              }`}
            >
              <Icon
                size={20}
                className={offer.special ? "text-orange-700" : ""}
              />
              {offer.special ? (
                <AuroraText className="font-bold text-[15px] md:text-base">
                  {offer.text}
                </AuroraText>
              ) : (
                offer.text
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
