"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { HeroBookingCard } from "./HeroBookingCard";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function HeroBanner({
  title = "Explore the World with JP Tour Travels",
  subtitle = "Curated travel packages, seamless bookings, and unforgettable experiences — all at your fingertips.",
  backgroundImage = "/hero-bg.jpg",
}: HeroBannerProps) {
  const [destination, setDestination] = useState("");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            ref={subtitleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-white/80 sm:text-xl max-w-xl"
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 max-w-lg"
        >
          <HeroBookingCard
            destination={destination}
            onDestinationChange={setDestination}
          />
        </motion.div>
      </div>
    </section>
  );
}
