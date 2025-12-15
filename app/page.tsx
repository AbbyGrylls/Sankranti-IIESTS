"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Great_Vibes, Cinzel } from "next/font/google";
import Hero from "@/components/bhogi/Hero";
import AboutSection from "@/components/bhogi/About";
import EventsSection from "@/components/bhogi/Event";
import { Gallery } from "@/components/bhogi/Gallery";
import { History } from "@/components/bhogi/History";
import SankrantiPage from "@/components/sankranti/page";
import DhotiMerchCard from "@/components/DhotiMerchCard";
import RampWalkCard from "@/components/RampWalkCard";

const greatVibes = Great_Vibes({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-great-vibes"
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel"
});

const Kite = ({
  color = "#ef4444",
  className,
  delay = 0,
}: {
  color?: string;
  className?: string;
  delay?: number;
}) => {
  const randomY = Math.random() * 30 + 20;
  const randomX = Math.random() * 40 + 20;
  const randomDur = Math.random() * 3 + 5;

  return (
    <motion.div
      className={`absolute z-20 pointer-events-none ${className}`}
      initial={{ y: 0, rotate: 0, scale: 1 }}
      animate={{
        y: [-randomY, randomY, -randomY],
        x: [-randomX, randomX, -randomX],
        rotate: [-10, 15, -10],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: randomDur,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <svg
        viewBox="0 0 100 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        <motion.path
          d="M50 100 Q 50 130 60 150"
          stroke="white"
          strokeWidth="1.5"
          strokeOpacity="0.8"
          animate={{ d: ["M50 100 Q 40 130 30 150", "M50 100 Q 60 130 70 150", "M50 100 Q 40 130 30 150"] }}
          transition={{ duration: randomDur / 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <path d="M50 0 L95 50 L50 100 L5 50 Z" fill={color} stroke="#fcd34d" strokeWidth="2" />
        <path d="M50 0 L50 100" stroke="#fcd34d" strokeWidth="1.5" />
        <path d="M5 50 L95 50" stroke="#fcd34d" strokeWidth="1.5" />
        <path d="M40 100 L60 100 L50 120 Z" fill={color} stroke="#fcd34d" strokeWidth="1" />
      </svg>
    </motion.div>
  );
};

const RotatingRangoli = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-0 pointer-events-none opacity-40">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="w-[350px] sm:w-[450px] md:w-[600px]"
      >
        <img 
            src="/decor/rangoli.webp" 
            alt="Rangoli" 
            className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]"
            onError={(e) => {
               e.currentTarget.style.display = 'none';
            }}
        />
      </motion.div>
    </div>
  );
};

const FallingParticles = () => {
  const [particles, setParticles] = useState<number[]>([]);
  useEffect(() => setParticles(Array.from({ length: 35 }, (_, i) => i)), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((i) => {
        const size = Math.random() * 6 + 2;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-200/60 blur-[1px]"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: -20,
            }}
            animate={{
              y: ["0vh", "120vh"],
              x: [0, Math.random() * 100 - 50],
              rotate: 360,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        )
      })}
    </div>
  );
};

const kiteConfig = [
  { color: "#3b82f6", className: "bottom-[35%] left-[20%] w-[100px] md:w-[160px]", delay: 0 },
  { color: "#ef4444", className: "top-[25%] right-[10%] w-[90px] md:w-[180px] scale-x-[-1]", delay: 1.5 },
  { color: "#facc15", className: "top-[15%] left-[8%] w-[70px] md:w-[120px]", delay: 0.5 },
  { color: "#a855f7", className: "top-[40%] right-[25%] w-[80px] md:w-[140px] rotate-[15deg]", delay: 2.5 },
  { color: "#10b981", className: "top-[12%] left-[40%] w-[50px] md:w-[90px] opacity-70", delay: 3.5 },
];

export default function Page() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 300], [0, 100]);
  const yBhogi = useTransform(scrollY, [0, 600], [0, -150]);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={`relative min-h-[120vh] overflow-hidden bg-gradient-to-t from-[#240000] via-[#5e0a0a] to-[#b88a30] ${greatVibes.variable} ${cinzel.variable}`}>

        <div className="absolute top-0 md:top-[60px] left-0 w-full z-10 flex justify-center gap-0 pointer-events-none">
          <div className="flex w-full max-w-[1400px] justify-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`flex-shrink justify-center ${i >= 3 ? "hidden md:flex" : "flex"} basis-1/2 md:basis-[16%]`}
              >
                <Image
                  src="/decor/garland3.webp"
                  alt="garland"
                  width={250}
                  height={250}
                  className="w-full h-auto max-h-[120px] md:max-h-[200px] object-contain drop-shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        <FallingParticles />
        
        {kiteConfig.map((kite, index) => (
          <Kite key={index} color={kite.color} className={kite.className} delay={kite.delay} />
        ))}
        <motion.div
          style={{ y: yText }}
          className="relative z-30 flex flex-col items-center justify-start min-h-screen w-full px-4 pt-72 md:pt-52
           pb-20"
        >
          <div className="relative flex flex-col items-center justify-center">
            
            <RotatingRangoli />
            <div className="relative z-10 flex flex-col items-center gap-1 mt-10 md:gap-2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-[family-name:var(--font-great-vibes)] text-yellow-300 text-4xl md:text-6xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              >
                Happy
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="
                  text-center font-[family-name:var(--font-cinzel)]
                  text-[#FF7A00] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]
                  text-2xl sm:text-4xl md:text-5xl lg:text-7xl 
                  tracking-wide font-bold uppercase leading-tight
                "
              >
                Makar Sankranti
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="
                  text-center text-lg md:text-3xl 
                  text-orange-200 mt-1
                  font-[family-name:var(--font-cinzel)] tracking-[0.5em] 
                  drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]
                "
              >
                2026
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative z-10 flex flex-wrap justify-center gap-6 md:gap-14 mt-8 md:mt-12 w-full"
            >
              <NavButton onClick={() => scrollToSection("bhogi-section")}>Bhogi</NavButton>
              <NavButton onClick={() => scrollToSection("sankranti-section")}>Sankranti</NavButton>
            </motion.div>
          </div>
          <div className="
            relative w-full max-w-7xl
            flex flex-col md:flex-row 
            items-center md:justify-between 
            gap-2 md:gap-0
            mt-32 md:mt-12
            md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2 md:px-10
            pointer-events-none
          ">
            <div className="pointer-events-auto transform scale-90 md:scale-100">
               <DhotiMerchCard />
            </div>
            
            <div className="pointer-events-auto transform scale-90 md:scale-100">
               <RampWalkCard />
            </div>
          </div>
        <motion.div
          onClick={() => scrollToSection("bhogi-section")}
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="
            absolute bottom-2 left-1/2 -translate-x-1/2 
            text-yellow-200/80 hover:text-yellow-100
            cursor-pointer z-50 p-4
            hidden md:block
          "
        >
          <ChevronDown size={48} />
        </motion.div>
        </motion.div>
      </div>

      <motion.div style={{ y: yBhogi }} className="relative z-40">
        <div className="w-full h-28 bg-gradient-to-b from-[#240000] to-black" />

        <main id="bhogi-section" className="bg-black text-white relative font-[family-name:var(--font-cinzel)]">
          <Hero />
          <div className="bg-gradient-to-b from-black to-gray-950">
            <AboutSection />
            <EventsSection />
            <History />
            <Gallery />
          </div>
        </main>
      </motion.div>

      <div id="sankranti-section">
        <SankrantiPage />
      </div>
    </>
  );
}

const NavButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="
      px-6 py-2 md:px-10 md:py-3
      min-w-[120px] md:min-w-[140px]
      bg-[#b88a30]/40 backdrop-blur-md
      text-yellow-200
      font-[family-name:var(--font-cinzel)]
      border border-yellow-300/40
      rounded-xl
      shadow-[0_4px_15px_rgba(0,0,0,0.3)]
      hover:bg-[#b88a30]/60 hover:scale-105 hover:border-yellow-200
      active:scale-95
      transition-all duration-300
      tracking-widest uppercase text-sm md:text-base font-semibold
    "
  >
    {children}
  </button>
);