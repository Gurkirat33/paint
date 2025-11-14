import Container from "@/lib/Container";
import Image from "next/image";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

export default function PageBanner({
  title,
  subtitle,
  backgroundImage = "/demo.png",
  className = "",
}: PageBannerProps) {
  return (
    <Container className={`relative overflow-hidden max-w-none ${className}`}>
      <div className="relative w-full min-h-[40vh] rounded-xl overflow-hidden">
        {/* Background Image */}
        <div className="w-full h-full absolute inset-0 z-0">
          <Image
            src={"/demo.png"}
            alt="Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center min-h-[50vh] w-full flex items-center justify-center px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
