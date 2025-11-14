import Link from "next/link";
import { AuroraText } from "./ui/aurora-text";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";
import GetQuoteButton from "./GetQuoteButton";
import { AnimatedIcon, floatingBadges, stats } from "@/data/hero";

export default function HeroSection() {
  return (
    <div className="primary-color section-container-top">
      <div className="rounded-xl flex flex-col lg:flex-row gap-4">
        {/* Left side */}
        <div className="w-full lg:w-[55%] tertiary-color rounded-xl p-6 lg:px-12 lg:py-16">
          <Badge
            className="text-sm px-3 py-1.5 uppercase"
            variant={"secondary"}
          >
            Transform Your Space Today
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4">
            Premium <AuroraText>Paint & Wallpaper</AuroraText> Solutions
          </h1>
          <p className="text-base md:text-lg lg:text-xl mt-5">
            Transform your home or business with our skilled painting team and
            premium wallpaper designs that add elegance, color, and long-lasting
            appeal to every space—crafted with care, precision, and unmatched
            attention to detail.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-8">
            <GetQuoteButton size="xl">Get Free Quote</GetQuoteButton>
            <Button variant="secondary" size={"xl"} asChild>
              <Link href={"/services"}>View All Services</Link>
            </Button>
          </div>

          {/* Stats/Trust */}
          <div className="flex gap-8 mt-6 md:mt-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl md:text-3xl font-bold text-center md:text-left">
                  {stat.number}
                </div>
                <div className="text-[13px] md:text-sm opacity-80 text-center md:text-left">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="relative w-full lg:w-[45%]">
          <Image
            src="/hero-image.jpg"
            alt=""
            width={880}
            height={600}
            className="h-full overflow-hidden w-full rounded-xl"
          />

          {/* Floating pill badges - Mapped from array */}
          {floatingBadges.map((badge, index) => (
            <div
              key={index}
              className={`absolute ${badge.position} bg-white rounded-full px-3 py-1 md:px-5 md:py-2 shadow-lg flex items-center gap-3 animate-soft-bounce`}
              style={{ animationDelay: badge.delay }}
            >
              {badge.iconPosition === "left" && <AnimatedIcon />}
              <span className="text-gray-800 font-medium text-sm">
                {badge.text}
              </span>
              {badge.iconPosition === "right" && <AnimatedIcon />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
