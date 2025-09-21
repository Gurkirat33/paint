import React from "react";
import { Badge } from "./ui/badge";

interface Feature {
  title: string;
  description: string;
}

// const FeaturesCol = ({ features }: { features: Feature[] }) => {
//   return (
//     <div className="flex flex-col gap-4">
//       {features.map((feature, index) => (
//         <div key={index}></div>
//       ))}
//     </div>
//   );
// };

export default function FeaturesSection() {
  return (
    <div className="primary-color section-container-top">
      <div className="bg-[#143C47] rounded-xl flex flex-col justify-center items-center p-20">
        <Badge className="bg-[#2CC3D7] text-white text-sm">
          GET Found on Google & increase Bookings
        </Badge>
        <h2 className="text-white text-center text-5xl font-semibold mt-6">
          Get More <br /> Appointment Bookings
        </h2>
        <p className="mt-5 text-gray-200 max-w-md text-lg text-center">
          Rank higher, reduce phone calls, and streamline admin — all with a
          fast, beautiful website tailored to your clinic.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-10"></div>
      </div>
    </div>
  );
}
