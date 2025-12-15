"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Added Import

/* -------------------------------------------------------------------------- */
/* CONSTANTS                                                                  */
/* -------------------------------------------------------------------------- */

const TITLES = ["SANKRANTI", "సంక్రాంతి"];

const EVENTS = [
  {
    title: "Morning Puja",
    date: "11 Jan 2026",
    time: "10:00 AM",
    venue: "Netaji Bhavan",
    icon: "🙏",
  },
  {
    title: "Cultural Show",
    date: "11 Jan 2026",
    time: "11:00 AM",
    venue: "Netaji Bhavan",
    icon: "🎭",
  },
  {
    title: "Folk Dance",
    date: "11 Jan 2026",
    time: "11:30 AM",
    venue: "Netaji Bhavan",
    icon: "💃",
  },
  {
    title: "Classical Parade",
    date: "11 Jan 2026",
    time: "2:00 PM",
    venue: "Netaji Bhavan",
    icon: "🎻",
  },
  {
    title: "DJ Night",
    date: "11 Jan 2026",
    time: "8:30 PM",
    venue: "Netaji Bhavan",
    icon: "🎧",
  },
];

const GLIMPSES = [
  {
    src: "/galleryphotos/2025/sankranthi/framebird-converted/DSC_0240.webp",
    alt: "Kites filling the sunset sky",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "/galleryphotos/2025/sankranthi/framebird-converted/DSC_0224.webp",
    alt: "Bonfire night celebration",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/galleryphotos/2025/sankranthi/framebird-converted/DSC_0420.webp",
    alt: "Students gathering around fire",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/galleryphotos/2025/sankranthi/framebird-converted/DSC_0407.webp",
    alt: "Warmth of the festival",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

/* -------------------------------------------------------------------------- */
/* SUB-COMPONENTS                                                             */
/* -------------------------------------------------------------------------- */

// 1. About Section
function AboutSection() {
  return (
    <section className="relative py-32 bg-stone-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block px-3 py-1 mb-4 border border-amber-500/30 rounded-full bg-amber-500/10 text-amber-400 text-sm tracking-widest uppercase font-semibold">
            The Festival of Harvest
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-orange-100 to-amber-200">
            About The <br /> Celebration
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed mb-8 font-light">
            Makar Sankranti marks the transition of the sun into the zodiac sign
            of Makara (Capricorn). It is a festival of harvest, gratitude, and
            new beginnings. At{" "}
            <span className="text-amber-400 font-semibold border-b border-amber-400/50">
              IIEST Shibpur
            </span>
            , we bring this tradition to life with vibrant performances, sweet
            delights, and the warmth of togetherness.
          </p>

          <div className="flex flex-wrap gap-4">
            {["Harvest", "Unity", "Joy"].map((tag, i) => (
              <div
                key={i}
                className="px-8 py-3 rounded-full bg-stone-900 border border-stone-800 text-amber-200/90 font-medium shadow-lg shadow-black/20 hover:border-amber-500/50 transition-colors cursor-default"
              >
                {tag}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual / Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, rotate: 3, scale: 0.9 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative h-[60dvh] w-full"
        >
          {/* Artistic Border Frame */}
          <div className="absolute inset-0 border-2 border-amber-500/30 rounded-2xl translate-x-4 translate-y-4" />

          <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-stone-900">
            <div className="absolute inset-0  ">
              <Image
                src="/sankranti/poster2.webp"
                alt="Makar Sankranti Celebration"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-amber-100 font-serif text-2xl italic">
                &quot;Celebrating Tradition&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// 2. Glimpses Section
function GlimpsesSection() {
  return (
    <section className="py-32 bg-stone-950 relative ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Past <span className="text-amber-500">Glimpses</span>
            </motion.h2>
            <p className="text-stone-400 text-lg font-light">
              Capturing the vibrant spirit of kites, colors, and smiles from
              previous years.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-stone-800 to-transparent mx-8 mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          {GLIMPSES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              // Added cursor-pointer so users know it's clickable
              className={`relative rounded-2xl overflow-hidden shadow-xl border border-white/5 group ${item.span} cursor-pointer`}
            >
              {/* Wrapped content in Link */}
              <Link href="/gallery" className="block w-full h-full relative">
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-in-out">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover filter sepia-[0.2] group-hover:sepia-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="h-1 w-12 bg-amber-500 mb-3 rounded-full" />
                  <span className="text-white font-medium text-lg drop-shadow-md">
                    2025 Highlights
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN PAGE                                                                  */
/* -------------------------------------------------------------------------- */

export default function SankrantiPage() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  // Parallax scroll hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-stone-950 text-amber-50 overflow-x-hidden selection:bg-amber-500 selection:text-white"
    >
      {/* === HERO SECTION === */}
      <div className="relative h-screen w-full overflow-hidden flex items-center justify-center ">
        {/* VIDEO BACKGROUND */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          {/* Overlay: Warm gradient to blend video with Stone theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-950 z-10" />

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="sankranti/sank_vid.webm" type="video/webm" />
          </video>
        </motion.div>

        {/* CONTENT LAYER */}
        <div className="relative z-20 text-center px-4 w-full flex flex-col items-center justify-center">
          {/* Text Vignette - Warmer tone now */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[400px] bg-gradient-to-r from-transparent via-stone-950/70 to-transparent blur-3xl -z-10" />

          <div className="h-[120px] md:h-[180px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.h1
                key={TITLES[index]}
                initial={{ y: 40, opacity: 0, scale: 0.9 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                exit={{ y: -40, opacity: 0, scale: 0.9 }}
                transition={{
                  y: { duration: 0.8, ease: "backOut" },
                  opacity: { duration: 0.6 },
                  scale: { duration: 0.8 },
                  backgroundPosition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                style={{
                  // Luxurious Gold Gradient
                  backgroundImage:
                    "linear-gradient(180deg, #FFFDE7 0%, #FFD700 40%, #B8860B 80%, #78350F 100%)",
                  backgroundSize: "100% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter:
                    "drop-shadow(0 4px 0px rgba(0,0,0,0.8)) drop-shadow(0 0 40px rgba(251, 191, 36, 0.4))",
                }}
                className="text-6xl md:text-9xl font-extrabold tracking-tighter h-40"
              >
                {TITLES[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-amber-100/80 tracking-[0.2em] uppercase text-sm font-medium mt-4"
          >
            The Festival of Kites & Sun
          </motion.p>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-amber-200/60 drop-shadow-md"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>

      {/* === ABOUT SECTION === */}
      <AboutSection />

      {/* === GLIMPSES SECTION === */}
      <GlimpsesSection />

      {/* === EVENTS SECTION === */}
      <section className="relative py-32 bg-stone-950">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-amber-900/10 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold inline-block text-white"
            >
              Event Schedule
            </motion.h2>
            {/* Artistic divider */}
            <div className="flex items-center justify-center gap-2 mt-4 opacity-70">
              <div className="h-[1px] w-12 bg-amber-500/50" />
              <div className="h-1.5 w-1.5 rotate-45 bg-amber-500" />
              <div className="h-[1px] w-12 bg-amber-500/50" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {EVENTS.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group w-full max-w-sm"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full bg-stone-900/60 backdrop-blur-xl border border-white/5 p-8 rounded-2xl shadow-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300">
                  {/* Glowing orb effect on hover */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors duration-500" />

                  {/* Subtle noise texture overlay */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

                  <div className="relative z-10 flex justify-between items-start mb-6">
                    <div className="text-5xl p-3 bg-stone-800/50 rounded-xl border border-white/5 group-hover:scale-110 transition-transform duration-300">
                      {event.icon}
                    </div>
                    <div className="px-3 py-1 bg-amber-950/30 border border-amber-900/30 rounded text-amber-500 text-xs font-bold uppercase tracking-wide">
                      Jan 11
                    </div>
                  </div>

                  <h3 className="relative z-10 text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {event.title}
                  </h3>

                  <div className="relative z-10 space-y-4 mt-8 border-t border-white/5 pt-6 text-stone-400 font-medium text-sm">
                    <div className="flex items-center gap-3 group/item">
                      <span className="p-1.5 rounded-full bg-stone-800 text-amber-500 group-hover/item:bg-amber-500 group-hover/item:text-stone-900 transition-colors">
                        ⏰
                      </span>
                      {event.time}
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <span className="p-1.5 rounded-full bg-stone-800 text-amber-500 group-hover/item:bg-amber-500 group-hover/item:text-stone-900 transition-colors">
                        📍
                      </span>
                      {event.venue}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
