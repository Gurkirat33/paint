import React from "react";
import Container from "@/lib/Container";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <Container variant="orange" className="max-w-none" padding>
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-7xl mb-4">
          Let&apos;s Start Your Project
        </h2>

        <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">
          Free consultation and quote. No commitment required.
        </p>

        {/* Single Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white hover:bg-gray-50 text-emerald-900 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            Get Your Free Quote
            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <a
            href="tel:087-9721238"
            className="text-white hover:text-emerald-100 font-medium text-lg underline underline-offset-4 transition-colors"
          >
            or call 087-9721238
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-emerald-100">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-300" />
            <span className="text-sm">15+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-300" />
            <span className="text-sm">500+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-300" />
            <span className="text-sm">Free Consultation</span>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Container>
  );
}
