import React from "react";
import Container from "@/lib/Container";
import { Phone, Calendar, Paintbrush, CheckCircle } from "lucide-react";

interface ProcessStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    icon: <Phone className="size-8" />,
    title: "Contact Us",
    description: "Reach out via phone or our website. We'll discuss your project needs and schedule a convenient time for consultation.",
  },
  {
    number: "02",
    icon: <Calendar className="size-8" />,
    title: "Free Consultation",
    description: "We visit your property, assess the scope, discuss color options, and provide a detailed, transparent quote with no hidden fees.",
  },
  {
    number: "03",
    icon: <Paintbrush className="size-8" />,
    title: "Professional Work",
    description: "Our skilled team arrives on time, protects your property, and delivers meticulous craftsmanship with premium materials.",
  },
  {
    number: "04",
    icon: <CheckCircle className="size-8" />,
    title: "Final Walkthrough",
    description: "We conduct a thorough inspection with you, ensure your complete satisfaction, and clean up everything before we leave.",
  },
];

export default function ProcessSection() {
  return (
    <Container variant="blue" padding>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Simple Process
          </h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            From initial contact to final walkthrough, we make the painting process smooth and stress-free.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-emerald-500/30 -translate-x-1/2" />
              )}

              {/* Step Card */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-emerald-300 mb-4 mt-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-emerald-100 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
            <p className="text-emerald-100 text-sm">
              <span className="font-semibold text-white">Average project timeline:</span> Most residential projects completed within 2-5 days
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
