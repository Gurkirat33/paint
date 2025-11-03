import Container from "@/lib/Container";
import Image from "next/image";
import { Button } from "./ui/button";
import TrustBadge from "./ui/TrustBadge";
import { Quote } from "lucide-react";
import { APP_NAME } from "@/constants";

export default function AboutSection() {
  const highlights = [
    {
      title: "15+ Years Experience",
      desc: "Residential and commercial projects across Dublin & Leinster.",
    },
    {
      title: "Skilled, Insured Team",
      desc: "Fully insured professionals with meticulous prep and clean finishes.",
    },
    {
      title: "Quality Materials",
      desc: "We use premium paints and systems for long‑lasting results.",
    },
  ];

  return (
    <Container variant="green" padding>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-5xl font-medium text-white">
            Calgary’s Favourite Painting Experts —{" "}
            <span className="font-semibold">{APP_NAME}</span>
          </h2>

          {/* <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            Crafting beautiful spaces with care and precision
          </h2> */}
          <p className="text-lg text-gray-200 mt-5 max-w-xl">
            Were a local painting and decorating company committed to delivering
            flawless finishes and a smooth, stress-free experience. From careful
            surface preparation to final inspection, we treat your property like
            our own.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="bg-white/10 rounded-xl p-4">
                <div className="text-white font-semibold">{item.title}</div>
                <div className="text-gray-300 text-sm mt-1">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Button size="lg" variant="white">
              Get Free Quote
            </Button>
            <TrustBadge />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/paint.jpg"
              alt="Our team at work"
              fill
              className="rounded-xl object-cover"
              sizes="(max-width: 768px) 100vw, 42rem"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
