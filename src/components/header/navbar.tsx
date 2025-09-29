import { APP_NAME } from "@/constants";
import { NavbarData } from "@/data/nav";
import Link from "next/link";
import { Button } from "../ui/button";
import { GradientButton } from "../ui/gradient-button";

export default function Navbar() {
  return (
    <div className="primary-color section-container">
      <div className="flex justify-between items-center w-full tertiary-color py-3.5 px-10 rounded-xl">
        {/* Logo */}
        <div className="text-2xl font-semibold uppercase ">{APP_NAME}</div>

        {/* nav links */}
        <div className="flex gap-6 items-center">
          {NavbarData.map((item) => (
            <Link href={item.href} key={item.name} className="text-lg">
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <div className="flex gap-4">
          {/* <Button size={"xl"} variant="secondary">Call at (555) 123-4567</Button> */}
          <Button>Get Free Consultation</Button>
        </div>
      </div>
    </div>
  );
}
