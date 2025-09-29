import React from "react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import {
  Paintbrush,
  House,
  Wallpaper,
  Layers,
  RollerCoaster,
  Cable,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  description: () => React.ReactNode;
}

const FeaturesCol = ({ features }: { features: Feature[] }) => {
  return (
    <div className=" flex flex-col gap-4">
      {features.map((feature, index) => (
        <div key={index} className="bg-white/10 p-4 rounded-xl">
          <p className="text-white">{feature.icon}</p>
          <p className="text-xl text-gray-400">{feature.description()}</p>
        </div>
      ))}
    </div>
  );
};

const features: Feature[] = [
  {
    icon: <Paintbrush />,
    description: () => (
      <>
        <span className="font-semibold text-white">
          Interior Wall & Trim Painting
        </span>{" "}
        smooth, beautiful finishes for walls, ceilings, doors, and trims.
      </>
    ),
  },
  {
    icon: <House />,
    description: () => (
      <>
        <span className="font-semibold text-white">
          Exterior Painting & Protection
        </span>{" "}
        protect and refresh siding, stucco, brick, and wood surfaces against the
        elements.
      </>
    ),
  },
  {
    icon: <Wallpaper />,
    description: () => (
      <>
        <span className="font-semibold text-white">
          Wallpaper & Wallcoverings
        </span>{" "}
        expert installation, removal & pattern matching for stylish spaces.
      </>
    ),
  },
  {
    icon: <RollerCoaster />,
    description: () => (
      <>
        <span className="font-semibold text-white">
          Cabinet & Built-In Refinishing
        </span>{" "}
        breathe new life into your cabinets with durable, high-quality finishes.
      </>
    ),
  },
  {
    icon: <Layers />,
    description: () => (
      <>
        <span className="font-semibold text-white">Surface Prep & Repairs</span>{" "}
        patching, sanding, caulking, leveling so finishes look flawless.
      </>
    ),
  },
  {
    icon: <Cable />,
    description: () => (
      <>
        <span className="font-semibold text-white">
          Decks, Fences & Outdoor Wood/Metal Work
        </span>{" "}
        staining, painting and sealing exterior wood and metal structures.
      </>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <div className="primary-color section-container-top">
      <div className="bg-[#143C47] rounded-xl flex flex-col justify-center items-center p-20">
        <h2 className="text-white text-center text-5xl font-semibold mt-6">
          Get More <br /> Appointment Bookings
        </h2>
        <p className="mt-5 text-gray-200 max-w-md text-lg text-center">
          Rank higher, reduce phone calls, and streamline admin — all with a
          fast, beautiful website tailored to your clinic.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-10 max-w-7xls">
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
      </div>
    </div>
  );
}
