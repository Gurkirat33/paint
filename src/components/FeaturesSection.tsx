import React from "react";
import Image from "next/image";
import Container from "@/lib/Container";
import SectionHeading from "@/lib/SectionHeading";
import { Feature, features } from "@/data/features";

const FeaturesCol = ({ features }: { features: Feature[] }) => {
  return (
    <div className="flex flex-col justify-between h-full gap-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white/10 p-4 rounded-xl flex-1 flex items-center"
        >
          <p className="text-base md:text-[19px] text-gray-400">
            <span className="text-[17px] md:text-xl font-semibold text-white">
              {feature.title}
            </span>{" "}
            {feature.description}
          </p>
        </div>
      ))}
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

      <div className="grid lg:grid-cols-3 gap-4">
        <FeaturesCol features={features.slice(0, 3)} />
        <Image
          src={"/hero-image.jpg"}
          alt={""}
          width={400}
          height={400}
          className="hidden lg:blockrounded-xl w-full h-full object-cover"
        />
        <FeaturesCol features={features.slice(3)} />
      </div>
    </Container>
  );
}
