import React from "react";
import Image from "next/image";
import Container from "@/lib/Container";
import SectionHeading from "@/lib/SectionHeading";
import { Feature, features } from "@/data/features";

const FeaturesBox = ({ feature }: { feature: Feature }) => {
  return (
    <div className="bg-white/10 p-4 rounded-xl flex-1 flex flex-col items-center">
      <Image
        src={feature.image}
        alt={feature.title}
        width={400}
        height={400}
        className="object-cover w-full h-full max-h-52 rounded-xl mb-3"
      />
      <p className="text-base md:text-[19px] text-gray-400">
        <span className="text-[17px] md:text-xl font-semibold text-white">
          {feature.title}
        </span>{" "}
        {feature.description}
      </p>
    </div>
  );
};

export default function FeaturesSection() {
  return (
    <Container variant="purple" padding>
      <SectionHeading
        title="Services We Offer"
        description="Bringing your walls to life with skilled painting and wallpaper craftsmanship."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <FeaturesBox key={index} feature={feature} />
        ))}
      </div>
    </Container>
  );
}
