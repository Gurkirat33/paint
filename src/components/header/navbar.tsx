"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { APP_NAME, PHONE_NUMBER } from "@/constants";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";
import { NavbarData, services } from "@/data/nav";
import { Button } from "../ui/button";

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
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 primary-color z-50 transition-all duration-300",
        isScrolled ? "p-0" : "p-3 md:p-4"
      )}
    >
      {/* Animated border container */}
      <div className="relative">
        {/* Border element that animates */}
        <div
          className={cn(
            "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-secondary-color/50 via-secondary-color to-secondary-color/50 transition-all duration-500 ease-out",
            isScrolled ? "w-full" : "w-0"
          )}
        />

        <div
          className={cn(
            "flex justify-between items-center w-full tertiary-color py-3.5s px-4 md:px-10 transition-all duration-300",
            isScrolled ? "rounded-b-xl" : "rounded-xl"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-semibold uppercase"
          >
            {APP_NAME}
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex gap-6 items-center">
            {NavbarData.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="py-4"
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
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 z-[9999]"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          {/* Dropdown container */}
                          <div
                            className="relative bg-white rounded-xl shadow-2xl overflow-hidden"
                            style={{ width: "660px" }}
                          >
                            <div className="flex">
                              {/* Left side - Featured Service */}

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
            <Button variant={"secondary"} size={"custom"}>
              <PhoneCall />
              {PHONE_NUMBER}
            </Button>
            <Button size={"custom"}>Get Free Quote</Button>
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
      </div>
    </nav>
  );
}
