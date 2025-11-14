import Container from "@/lib/Container";
import Image from "next/image";
import { Button } from "./ui/button";
import TrustBadge from "./ui/TrustBadge";
import { APP_NAME } from "@/constants";
import { highlights } from "@/data/about";

export default function AboutSection() {
  return (
    <Container variant="green" padding>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
            Calgary’s Favourite Painting Experts —{" "}
            <span className="font-semibold">{APP_NAME}</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-200 mt-3 md:mt-5 max-w-xl">
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

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" variant="white" className="w-full sm:w-fit">
              Get Free Quote
            </Button>
            <TrustBadge full />
          </div>
        </div>

        <div className="hidden lg:block">
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
