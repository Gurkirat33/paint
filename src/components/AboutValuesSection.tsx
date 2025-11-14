import Container from "@/lib/Container";
import { Button } from "./ui/button";
import {
  CheckCircle,
  Users,
  Award,
  Clock,
  Shield,
  Palette,
  Home,
  Star,
} from "lucide-react";

export default function AboutValuesSection() {
  const values = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description:
        "Proven track record with thousands of successful projects across Calgary and surrounding areas.",
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description:
        "Complete protection for your peace of mind. Licensed, bonded, and fully insured professionals.",
    },
    {
      icon: CheckCircle,
      title: "Quality Guarantee",
      description:
        "We stand behind our work with comprehensive warranties and satisfaction guarantees.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Skilled, trained professionals who take pride in delivering exceptional results every time.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "We respect your schedule and complete projects on time, every time, without compromising quality.",
    },
    {
      icon: Palette,
      title: "Premium Materials",
      description:
        "We use only the highest quality paints and materials for lasting, beautiful results.",
    },
    {
      icon: Home,
      title: "Local Calgary Company",
      description:
        "Proudly serving Calgary and surrounding communities with local expertise and personalized service.",
    },
    {
      icon: Star,
      title: "5-Star Reviews",
      description:
        "Consistently rated 5 stars by our customers. Your satisfaction is our top priority.",
    },
  ];

  return (
    <Container padding>
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Why Choose Us?
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          We deliver exceptional painting services with professionalism,
          quality, and reliability that sets us apart from the competition.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {values.map((value, index) => (
          <div
            key={index}
            className="relative rounded-xl bg-white p-6 border border-gray-100 shadow-lg hover:shadow-xl overflow-hidden"
          >
                        <span
              className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
              style={{ background: 'var(--secondary-color)' }}
            />
            {/* <div className="mb-4">
              <value.icon className="size-6 text-gray-700" />
            </div> */}
            <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button size="lg" variant="default" className="px-8 py-3">
          Get Your Free Quote Today
        </Button>
      </div>
    </Container>
  );
}
