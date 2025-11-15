import { Button } from "../ui/button";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import Link from "next/link";
import Container from "@/lib/Container";

const footerNavs = [
  {
    label: "Services",
    items: [
      { href: "/services", name: "All Services" },
      { href: "/services/exterior-painting", name: "Exterior Painting" },
      { href: "/services/interior-painting", name: "Interior Painting" },
      { href: "/services/cabinet-painting", name: "Cabinet Painting" },
      { href: "/services/deck-staining", name: "Deck Staining" },
    ],
  },
  {
    label: "Company",
    items: [
      { href: "/about", name: "About Us" },
      { href: "/gallery", name: "Gallery" },
      { href: "/contact", name: "Contact" },
      { href: "#", name: "FAQ" },
    ],
  },
  {
    label: "Resources",
    items: [
      { href: "#", name: "Color Guide" },
      { href: "#", name: "Our Process" },
      { href: "#", name: "Free Estimate" },
      { href: "#", name: "Privacy Policy" },
    ],
  },
];

const socialLinks = [
  { icon: <Instagram size={20} />, href: "#" },
  { icon: <Twitter size={20} />, href: "#" },
  { icon: <Facebook size={20} />, href: "#" },
];

export default function Footer() {
  return (
    <Container as="footer" variant="black" padding className="text-white">
      <div className="flex justify-between items-center border-b border-gray-600 pb-8">
        <h2 className="text-4xl md:text-5xl font-bold">Get in Touch</h2>
        {/* <PulsatingButton className="bg-[#40E0D0] hover:bg-[#38c7b7] text-black">Get Started</PulsatingButton> */}
        <Button className="bg-[#40E0D0] hover:bg-[#38c7b7] text-black" asChild>
          <Link href="/contact">Get Free Quote</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-10">
        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Send size={16} />
              <span>Get Free Quote</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} />
              <span>info@premiumpaint.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} />
              <span>Serving Dublin & Leinster</span>
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        {footerNavs.map((nav) => (
          <div key={nav.label}>
            <h3 className="font-semibold mb-4">{nav.label}</h3>
            <ul className="space-y-3">
              {nav.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-600">
        <p className="text-sm text-gray-400 text-center md:text-left">
          © 2025 Premium Paint & Wallpaper Solutions. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-gray-300 transition-colors"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
