import {
  Palette,
  Percent,
  Phone,
  Sparkles,
  Award,
  Calendar,
  Flame,
  Star,
} from "lucide-react";

export const offers = [
  { icon: Palette, text: "Free Color Consultation" },
  { icon: Percent, text: "Up to 20% Off This Month", special: true },
  { icon: Phone, text: "Same Day Quote Guarantee" },
  { icon: Sparkles, text: "Post-Paint Cleanup Included" },
  { icon: Award, text: "Licensed & Insured Professionals" },
  { icon: Calendar, text: "Flexible Scheduling Available" },
  { icon: Flame, text: "Limited Time Spring Special", special: true },
  { icon: Star, text: "98% Customer Satisfaction Rate" },
];

export const extendedOffers = [...offers, ...offers, ...offers];
