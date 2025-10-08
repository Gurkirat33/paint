"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Calendar, CheckCircle, Clock } from "lucide-react";
import TrustBadge from "./ui/TrustBadge";
import EstimationReviewCard from "./ui/EstimationReviewCard";
import Container from "@/lib/Container";

const features = [
  "15+ years professional experience",
  "Free color consultation included",
  "Get your quote within 24 hours",
  "No pressure, just honest pricing",
];

const projectOptions = [
  "Interior painting",
  "Exterior painting",
  "Wallpaper installation",
  "Wallpaper removal",
  "Color consultation",
  "Not sure yet",
];

export default function EstimationForm() {
  return (
    <Container
      variant="purple"
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
        {/* Professional subtle banner */}
        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 text-blue-900 px-4 py-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <p className="text-sm font-medium">
              Limited-time: 10% off when you book within 24 hours
            </p>
          </div>
        </div>

        <form className="space-y-6" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-medium">
                Your Name
              </Label>
              <Input
                id="name"
                placeholder="e.g., John Murphy"
                className="h-12 border-gray-300 focus:border-blue-500"
                autoComplete="name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-medium">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="087 972 1238"
                className="h-12 border-gray-300 focus:border-blue-500"
                autoComplete="tel"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 md:col-span-2">
              <Label className="font-medium">Project Type</Label>
              <Select>
                <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  {projectOptions.map((option, index) => (
                    <SelectItem
                      key={index}
                      value={option.toLowerCase().replace(/\s+/g, "-")}
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <Button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-bold transition-all duration-200"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Get Free Estimate
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
                variant="outline"
                className="w-full mt-4 h-12 border-green-500 text-green-600 hover:bg-green-50 font-medium"
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
