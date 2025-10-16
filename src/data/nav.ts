import { Palette, Layout, FileText, Pen, Code } from "lucide-react";

export const services = [
  {
    id: "exterior-paint",
    name: "Exterior Painting",
    shortName: "Exterior Paint",
    description:
      "Revitalize and protect your home’s exterior with a fresh, high-quality coat of paint.",
    href: "/services/exterior-painting",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop",
    features: [
      "Weather-resistant finishes",
      "Detailed surface preparation",
      "Increased curb appeal",
    ],
    cta: "Learn About Exterior Painting",
  },
  {
    id: "interior-paint",
    name: "Interior Painting",
    shortName: "Interior Paint",
    description:
      "Transform your indoor spaces with vibrant, lasting colors and a flawless finish.",
    href: "/services/interior-painting",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&h=400&fit=crop",
    features: [
      "Color consultation",
      "Eco-friendly paint options",
      "Meticulous attention to detail",
    ],
    cta: "Discover Interior Painting",
  },
  {
    id: "basement-finishing",
    name: "Basement Finishing",
    shortName: "Basement Finishing",
    description:
      "Turn your basement into a beautiful and functional living space, from framing to final touches.",
    href: "/services/basement-finishing",
    icon: Layout,
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&h=400&fit=crop",
    features: [
      "Custom design and layout",
      "Moisture and mold resistance",
      "Egress window installation",
    ],
    cta: "Explore Basement Finishing",
  },
  {
    id: "wallpaper-installation",
    name: "Wallpaper Installation",
    shortName: "Wallpaper",
    description:
      "Add elegance and personality to your walls with professional wallpaper installation.",
    href: "/services/wallpaper-installation",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1560416943-d7fb37c3b214?w=600&h=400&fit=crop",
    features: [
      "Seamless pattern matching",
      "Proper wall preparation",
      "Removal of old wallpaper",
    ],
    cta: "See Wallpaper Options",
  },
  {
    id: "cabinet-painting",
    name: "Cabinet Painting",
    shortName: "Cabinet Painting",
    description:
      "A cost-effective way to modernize your kitchen or bathroom with a durable, factory-like finish.",
    href: "/services/cabinet-painting",
    icon: Pen,
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=400&fit=crop",
    features: [
      "Thorough cleaning and sanding",
      "High-quality, lasting enamel",
      "Hardware consultation",
    ],
    cta: "Learn About Cabinet Painting",
  },
  {
    id: "deck-staining",
    name: "Deck Staining",
    shortName: "Deck Staining",
    description:
      "Protect and enhance the natural beauty of your deck with professional staining and sealing.",
    href: "/services/deck-staining",
    icon: Code, // Using 'Code' as a placeholder, can be changed
    image:
      "https://images.unsplash.com/photo-1593436122512-0f3733a1401a?w=600&h=400&fit=crop",
    features: [
      "Protection from UV rays and moisture",
      "Variety of stain colors",
      "Prevents wood rot and decay",
    ],
    cta: "Explore Deck Staining",
  },
];

export const NavbarData = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
    hasDropdown: true,
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
