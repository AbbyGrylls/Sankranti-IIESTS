"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const heading = "Meet Our Festival Family";
  const subtext =
    "The dedicated teams that make Sankranthi celebrations vibrant, organized, and unforgettable.";

  return (
    <section
      className="min-h-[65vh] flex flex-col justify-center items-center text-center 
      bg-gradient-to-b from-[#0A0F24] via-[#111C3A] to-[#0B1633]
      relative overflow-hidden px-6 py-20"
    >
      {/* Cinematic Heading (Sequential word animation, no overlap) */}
      <motion.h1
        className="font-extrabold mb-4 tracking-wide flex flex-wrap justify-center
        bg-gradient-to-r from-[#A3DAFF] via-[#E6F7FF] to-[#A3DAFF]
        bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(163,218,255,0.8)]
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.25] pb-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05 } }, // controls full letter pacing
        }}
      >
        {heading.split(" ").map((word, wi) => (
          <span key={wi} className="mx-2 whitespace-nowrap flex">
            {word.split("").map((char, ci) => (
              <motion.span
                key={`${wi}-${ci}`}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="text-base sm:text-lg md:text-xl text-[#D6E4FF]/90 max-w-[85%] sm:max-w-2xl leading-relaxed"
      >
        {subtext}
      </motion.p>

      {/* Soft shimmer overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent pointer-events-none"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glowing cyan orb animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[280px] sm:w-[340px] md:w-[420px] h-[280px] sm:h-[340px] md:h-[420px]
        rounded-full bg-cyan-400/10 blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
