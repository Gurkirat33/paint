import React from "react";
import Image from "next/image";
import Container from "@/lib/Container";
import { Button } from "./ui/button";
import { Phone, Mail } from "lucide-react";

export default function CtaSection() {
  return (
    <Container variant="default" className="max-w-none">
      <div className="bg-emerald-950 rounded-xl overflow-hidden relative min-h-[400px] flex items-center">
        {/* Background Image - Right Side */}
        <div className="absolute inset-0 lg:left-1/2">
          <Image
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&q=80"
            alt="Professional painting service"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/50 to-transparent lg:from-emerald-950 lg:via-emerald-950/40" />
        </div>

        {/* Content - Left Side */}
        <div className="relative z-10 w-full px-8 py-12 lg:py-16 lg:px-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
              Ready to Transform Your Space?
            </h2>

            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              Get your free consultation and quote today. Professional painting
              services with 15+ years of experience and 500+ satisfied clients.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-6 text-lg transition-all duration-300"
              >
                <Phone className="size-5" />
                Call: 087-9721238
              </Button>
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-6 text-lg transition-all duration-300"
              >
                <Mail className="size-5" />
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
