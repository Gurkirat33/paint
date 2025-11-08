import React from "react";
import Image from "next/image";
import Container from "@/lib/Container";
import SectionHeading from "@/lib/SectionHeading";

interface Feature {
  description: () => React.ReactNode;
}

const FeaturesCol = ({ features }: { features: Feature[] }) => {
  return (
    <div className="flex flex-col justify-between h-full gap-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white/10 p-4 rounded-xl flex-1 flex items-center"
        >
          <p className="text-[19px] text-gray-400">{feature.description()}</p>
        </div>
      ))}
    </div>
  );
};

const features: Feature[] = [
  {
    description: () => (
      <>
        <span className="text-xl font-semibold text-white">
          Interior Wall & Trim Painting
        </span>{" "}
        smooth, beautiful finishes for walls, ceilings, doors, and trims.
      </>
    ),
  },
  {
    description: () => (
      <>
        <span className="text-xl font-semibold text-white">
          Exterior Painting & Protection
        </span>{" "}
        protect and refresh siding, stucco, brick, and wood surfaces against the
        elements.
      </>
    ),
  },
  {
    description: () => (
      <>
        <span className="text-xl font-semibold text-white">
          Wallpaper & Wallcoverings
        </span>{" "}
        expert installation, removal & pattern matching for stylish spaces.
      </>
    ),
  },
  {
    description: () => (
      <>
        <span className="text-xl font-semibold text-white">
          Cabinet & Built-In Refinishing
        </span>{" "}
        breathe new life into your cabinets with durable, high-quality finishes.
      </>
    ),
  },
  {
    description: () => (
      <>
        <span className="text-xl font-semibold text-white">
          Surface Prep & Repairs
        </span>{" "}
        patching, sanding, caulking, leveling so finishes look flawless.
      </>
    ),
  },
  {
    description: () => (
      <>
        <span className="text-xl font-semibold text-white">
          Decks, Fences & Outdoor Wood/Metal Work
        </span>{" "}
        staining, painting and sealing exterior wood and metal structures.
      </>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <Container variant="purple" padding>
      <SectionHeading
        title="Services We Offer"
        description="Bringing your walls to life with skilled painting and wallpaper craftsmanship."
      />

      <div className="grid grid-cols-3 gap-4">
        <FeaturesCol features={features.slice(0, 3)} />
        <Image
          src={"/hero-image.jpg"}
          alt={""}
          width={400}
          height={400}
          className="rounded-xl w-full h-full object-cover"
        />
        <FeaturesCol features={features.slice(3)} />
      </div>
    </Container>
  );
}
