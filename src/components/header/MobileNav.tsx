"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { RainbowButton } from "../ui/rainbow-button";

type MobileNavProps = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  isServicesOpen: boolean;
  setIsServicesOpen: (v: boolean) => void;
  services: Array<{ id: string; name: string; image: string; href: string }>;
  navItems: Array<{ name: string; href: string; hasDropdown: boolean }>;
  closeMenu: () => void;
};

export default function MobileNav({
  isOpen,
  setIsOpen,
  isServicesOpen,
  setIsServicesOpen,
  services,
  navItems,
  closeMenu,
}: Readonly<MobileNavProps>) {
  return (
    <>
      {/* Mobile CTA and menu button */}
      <div className="md:hidden flex items-center gap-3 py-3">
        <RainbowButton className="text-sm" size={"custom"}>
          Get Consultation
        </RainbowButton>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-2 py-1 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <div
              className={`bg-gray-800 transition-all duration-300 ${
                isOpen ? "w-6 rotate-45 translate-y-2 h-[1.5px]" : "w-7.5 h-0.5"
              }`}
            ></div>
            <div
              className={`bg-gray-800 transition-all duration-300 ${
                isOpen
                  ? "w-6 -rotate-45 -translate-y-0 h-[1.5px]"
                  : "w-7.5 h-0.5"
              }`}
            ></div>
            <span
              className={`text-[10px] font-medium text-gray-800 tracking-wider transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              MENU
            </span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 mt-0 tertiary-color z-[70] shadow-2xl rounded-xl overflow-hidden mx-4"
          >
            {/* Mobile Menu Content */}
            <div className="max-h-[calc(100vh-150px)] overflow-y-auto p-4">
              {/* Navigation Links */}
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors text-left font-medium text-gray-900"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              isServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Services Submenu */}
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-2 pt-2 space-y-1">
                                {services.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={service.href}
                                    onClick={closeMenu}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                  >
                                    <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                                      <Image
                                        src={service.image}
                                        alt={service.name}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <span className="text-sm font-medium group-hover:text-blue-600 transition-colors">
                                      {service.name}
                                    </span>
                                  </Link>
                                ))}
                                {/* Removed View All Services button as requested */}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="block p-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-gray-900"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA Button */}
              <div className="mt-6 pt-4 border-t">
                <RainbowButton className="w-full">
                  Get Free Consultation
                </RainbowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
