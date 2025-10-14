import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import ShineBorder from "./magicui/shine-border";
import {
  Users,            // community / belonging
  Compass,          // discovery
  CalendarHeart,    // participation / events
  Globe2,           // visibility / reach
} from "lucide-react";

const features = [
  {
    Icon: Users,
    name: "Stronger Belonging on Campus",
    description:
      "Students no longer feel “lost” in their own college. They can instantly connect with like-minded peers.",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/50 opacity-20"></div>
    ),
    className: "col-span-3 lg:col-span-1",
    href: "/features/belonging",
    cta: "Explore more",
  },
  {
    Icon: Compass,
    name: "Instant Community Discovery",
    description:
      "Students find their type of people faster, whether it’s someone who plays guitar, codes AI, or dances on Freshers’ Day.",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/50 opacity-20"></div>
    ),
    className: "col-span-3 lg:col-span-2",
    href: "/features/discovery",
    cta: "Discover now",
  },
  {
    Icon: CalendarHeart,
    name: "Simplified Participation",
    description:
      "Gain access to members-only events and experiences, both online and in the real world.",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/50 opacity-20"></div>
    ),
    className: "col-span-3 lg:col-span-2",
    href: "/features/participation",
    cta: "Join events",
  },
  {
    Icon: Globe2,
    name: "Cross-College Visibility",
    description:
      "Colleges and students gain visibility across campuses, making them known beyond official marketing channels.",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/50 opacity-20"></div>
    ),
    className: "col-span-3 lg:col-span-1",
    href: "/features/visibility",
    cta: "See more",
  },
];

export default function Features() {
  return (
    <section className="w-full max-w-6xl mx-auto py-24 px-4">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 font-heading bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
        More than a campus. It’s your home!
      </h2>
      <BentoGrid className="lg:grid-rows-2">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
