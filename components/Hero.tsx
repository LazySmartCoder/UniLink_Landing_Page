'use client';

import { motion } from "framer-motion";
import RetroGrid from "./magicui/retro-grid";
import ShinyButton from "./magicui/shiny-button";
import OrbitingCircles from "./magicui/orbiting-circles";
import { Heart, Lock, MessageSquare, Users } from "lucide-react";

export default function Hero() {
  const scrollToDownload = () => {
    const section = document.getElementById("download");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <RetroGrid />

      {/* Orbiting Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Heart className="h-6 w-6 text-accent" />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Lock className="h-6 w-6 text-secondary" />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        duration={30}
        delay={25}
        radius={160}
      >
        <Users className="h-8 w-8 text-primary" />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        duration={30}
        delay={15}
        radius={160}
      >
        <MessageSquare className="h-8 w-8 text-white" />
      </OrbitingCircles>

      <div className="relative z-10 flex flex-col items-center max-w-3xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-black tracking-tighter text-white md:text-7xl lg:text-8xl font-heading uppercase"
        >
          Own Spotlight!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl"
        >
          India’s first social networking platform for college students — where
          connections grow, stories are shared, voices get heard, and confidence
          is built.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          <ShinyButton type="button" onClick={scrollToDownload}>
            Let's Go Viral!
          </ShinyButton>
        </motion.div>
      </div>
    </section>
  );
}
