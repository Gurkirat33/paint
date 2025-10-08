import { AuroraText } from "./ui/aurora-text";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";

export default function HeroSection() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="primary-color section-container-top">
      <div className="rounded-xl flex flex-col lg:flex-row gap-4">
        {/* Left side */}

        <div className="w-full lg:w-[55%] tertiary-color rounded-xl p-8 lg:px-12 lg:py-16">
          <Badge className="text-sm px-3 py-1.5">
            Transform Your Space Today
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-semibold mt-4">
            Premium <AuroraText>Paint & Wallpaper</AuroraText> Solutions
          </h1>
          <p className="text-xl mt-5">
            Elevate your home or business with our expert painting services and
            stunning wallpaper installations.Elevate your home or business with
            our expert painting services and stunning wallpaper installations.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-4 mt-8">
            <Button size={"xl"}>Get Free Quote</Button>
            <Button variant="secondary" size={"xl"}>
              Contact Us
            </Button>
          </div>

          {/* Stats/Trust */}
          <div className="flex gap-8 mt-10">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <Image
          src="/hero-image.jpg"
          alt=""
          width={880}
          height={600}
          className="max-h-1/2 h-full overflow-hidden w-full lg:w-[45%] rounded-xl"
        />
      </div>
    </div>
  );
}
