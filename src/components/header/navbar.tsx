"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { APP_NAME } from "@/constants";
import { RainbowButton } from "../ui/rainbow-button";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";

// Services data
const services = [
  {
    id: "exterior-paint",
    name: "Exterior Painting",
    image: "/paint.jpg",
    href: "/services/exterior-painting",
  },
  {
    id: "interior-paint",
    name: "Interior Painting",
    image: "/paint.jpg",
    href: "/services/interior-painting",
  },
  {
    id: "cabinet-refinish",
    name: "Cabinet Refinishing",
    image: "/paint.jpg",
    href: "/services/cabinet-refinishing",
  },
  {
    id: "deck-staining",
    name: "Deck Staining",
    image: "/paint.jpg",
    href: "/services/deck-staining",
  },
  {
    id: "pressure-washing",
    name: "Pressure Washing",
    image: "/paint.jpg",
    href: "/services/pressure-washing",
  },
  {
    id: "repairs",
    name: "Repairs & Prep",
    image: "/paint.jpg",
    href: "/services/repairs",
  },
];

const NavbarData = [
  { name: "Home", href: "/", hasDropdown: false },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "Gallery", href: "/gallery", hasDropdown: false },
  { name: "About", href: "/about", hasDropdown: false },
  { name: "Contact", href: "/contact", hasDropdown: false },
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsServicesOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky primary-color p-4 z-50",
        isScrolled && "!p-0 top-0"
      )}
    >
      <div
        className={cn(
          "flex justify-between items-center w-full tertiary-color py-3.5 px-4 md:px-10 rounded-xl",
          isScrolled && "!rounded-none"
        )}
      >
        {/* Logo */}
        <div className="text-xl md:text-2xl font-semibold uppercase">
          {APP_NAME}
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6 items-center">
          {NavbarData.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="text-lg hover:opacity-80 transition-opacity duration-200 flex items-center gap-1">
                    {item.name}
                    <motion.svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <path d="M6 9L2 3L10 3L6 9Z" fill="currentColor" />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                          duration: 0.15,
                          ease: "easeOut",
                        }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 z-[9999]"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Dropdown container */}
                        <div
                          className="relative bg-white rounded-xl shadow-2xl overflow-hidden"
                          style={{ width: "920px" }}
                        >
                          <div className="flex">
                            {/* Left side - Featured Service */}
                            <div className="w-80 relative overflow-hidden">
                              <div className="relative h-full">
                                <Image
                                  src="/nav.jpg"
                                  alt="Professional Painting"
                                  layout="fill"
                                  objectFit="cover"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />

                                {/* Content overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                  <h3 className="text-3xl font-bold mb-3">
                                    Transform Your Space
                                  </h3>
                                  <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                                    Professional painting services with expert
                                    craftsmanship and premium quality materials
                                  </p>
                                  <Link href="/services">
                                    <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold shadow-lg">
                                      View All Services
                                      <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </div>

                            {/* Right side - Services Grid */}
                            <div className="tertiary-color flex-1 p-5">
                              <div className="grid grid-cols-2 gap-3">
                                {services.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={service.href}
                                    className="bg-white/50 group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
                                  >
                                    <div className="w-24 h-16 rounded-md overflow-hidden shadow-sm flex-shrink-0">
                                      <Image
                                        src={service.image}
                                        alt={service.name}
                                        width={80}
                                        height={56}
                                        objectFit="cover"
                                        className="group-hover:scale-110 transition-transform duration-300 w-full h-full"
                                      />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h5 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200">
                                        {service.name}
                                      </h5>
                                      <p className="text-xs text-gray-500 leading-snug">
                                        Lorem ipsum dolor sit amet.
                                      </p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link href={item.href} className="text-lg">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA button */}
        <div className="hidden md:flex gap-4">
          <RainbowButton>Get Free Consultation</RainbowButton>
        </div>

        {/* Mobile CTA and menu button */}
        <MobileNav
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
          isServicesOpen={isMobileServicesOpen}
          setIsServicesOpen={setIsMobileServicesOpen}
          services={services}
          navItems={NavbarData}
          closeMenu={closeMobileMenu}
        />
      </div>

      {/* Mobile Menu handled in MobileNav */}
    </div>
  );
}
