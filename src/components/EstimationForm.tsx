"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Calendar,
  CheckCircle,
  Loader2,
} from "lucide-react";
import TrustBadge from "./ui/TrustBadge";
import EstimationReviewCard from "./ui/EstimationReviewCard";
import Container from "@/lib/Container";

const features = [
  "15+ years professional experience",
  "Free color consultation included",
  "Get your quote within 24 hours",
  "No pressure, just honest pricing",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectDetails: string;
}

export default function EstimationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Container variant="blue" padding className="text-center">
        <div className="max-w-md mx-auto bg-white rounded-xl p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Thank You!
          </h3>
          <p className="text-gray-600 mb-6">
            We've received your request and will contact you within 24 hours
            with your free estimate.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                projectDetails: "",
              });
            }}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Submit Another Request
          </Button>
        </div>
      </Container>
    );
  }
  return (
    <Container
      variant="blue"
      padding
      className="flex flex-col lg:flex-row gap-6"
    >
      {/* Left Side */}
      <div className="lg:w-1/2 text-white">
        <TrustBadge />

        <h2 className="text-4xl lg:text-5xl font-semibold mt-4 leading-tight">
          Request a Free Estimate
        </h2>

        <p className="text-blue-100 text-lg mt-3">
          No-pressure quotes from experienced local professionals.
        </p>

        <div className="space-y-4 mt-6">
          {features.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <CheckCircle className="size-6 text-green-400" />
              <span className="text-[17px]">{benefit}</span>
            </div>
          ))}
        </div>

        <EstimationReviewCard />
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-1/2 bg-white rounded-xl px-6 py-10">
        <div className="mb-5">
          <h3 className="text-3xl font-semibold text-gray-900 mb-1">
            Get Started Today
          </h3>
          <p className="text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group relative">
              <label
                htmlFor="name"
                className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-gray-800 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-gray-900 has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-gray-900"
              >
                <span className="inline-flex bg-background px-2">
                  Your Name
                </span>
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder=" "
                className="h-12 border-gray-400 focus:border-blue-500"
                autoComplete="name"
              />
            </div>
            <div className="group relative">
              <label
                htmlFor="email"
                className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-gray-800 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-gray-900 has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-gray-900"
              >
                <span className="inline-flex bg-background px-2">
                  Email Address
                </span>
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder=" "
                className="h-12 border-gray-400 focus:border-blue-500"
                autoComplete="email"
              />
            </div>
          </div>

          {/* Phone Number - Full Width */}
          <div className="group relative">
            <label
              htmlFor="phone"
              className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-gray-800 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-gray-900 has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-gray-900"
            >
              <span className="inline-flex bg-background px-2">
                Phone Number
              </span>
            </label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder=" "
              className="h-12 border-gray-400 focus:border-blue-500"
              autoComplete="tel"
            />
          </div>

          {/* Project Details */}
          <div className="group relative">
            <label
              htmlFor="projectDetails"
              className="origin-start absolute top-0 block translate-y-2 cursor-text px-1 text-sm text-gray-800 transition-all group-focus-within:pointer-events-none group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-gray-900 has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:-translate-y-1/2 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium has-[+textarea:not(:placeholder-shown)]:text-gray-900 dark:has-aria-invalid:ring-destructive/40"
            >
              <span className="inline-flex bg-background px-2">
                Project Details (Optional)
              </span>
            </label>
            <Textarea
              id="projectDetails"
              value={formData.projectDetails}
              onChange={(e) =>
                handleInputChange("projectDetails", e.target.value)
              }
              placeholder=" "
              className="min-h-[100px] border-gray-400 focus:border-blue-500 resize-none"
              rows={4}
            />
            <p className="text-xs text-gray-500 mt-2">
              The more details you provide, the more accurate our estimate will
              be.
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-bold transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Free Estimate
                </>
              )}
            </Button>

            {/* Direct Call Option */}
            <div className="text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or call directly
                  </span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full mt-4 h-12 border-green-500 text-green-600 hover:bg-green-50 font-medium transition-all duration-200 hover:text-green-700"
                onClick={() => window.open("tel:087-9721238")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 087-9721238
              </Button>
            </div>

            <p className="text-center text-sm text-gray-500">
              We respect your privacy. No spam. No sales pressure.
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
}
