"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Components
import Hero from "@/components/bhogi/Hero";
import AboutSection from "@/components/bhogi/About";
import EventsSection from "@/components/bhogi/Event";
import { Gallery } from "@/components/bhogi/Gallery";
import { History } from "@/components/bhogi/History";
import SankrantiPage from "@/components/sankranti/page";
import DhotiMerchCard from "@/components/DhotiMerchCard";
import RampWalkCard from "@/components/RampWalkCard";
import { ParallaxLayer } from "@/components/ParallaxLayer"; // Import your new component

// --- 1. ANIMATED KITE COMPONENT ---
const Kite = ({
  color = "#ef4444",
  className,
  delay = 0,
}: {
  color?: string;
  className?: string;
  delay?: number;
}) => {
    const randomY = Math.random() * 10 + 10; 
    const randomX = Math.random() * 10 + 5; 
    const randomDur = Math.random() * 2 + 5; 

  return (
    <motion.div
      className={`absolute z-10 pointer-events-none ${className}`} // Lowered Z-index to sit in sky
      initial={{ y: 0, rotate: 0 }}
      animate={{
        y: [-randomY, randomY, -randomY],
        x: [-randomX, randomX, -randomX],
        rotate: [-5, 8, -5],
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
        className="w-full h-full drop-shadow-md"
      >
        <motion.path
          d="M50 100 Q 50 130 60 150"
          stroke="white"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          animate={{ d: ["M50 100 Q 45 130 40 150", "M50 100 Q 55 130 60 150", "M50 100 Q 45 130 40 150"] }}
          transition={{ duration: randomDur/2, repeat: Infinity, ease: "easeInOut" }}
        />
        <path d="M50 0 L95 50 L50 100 L5 50 Z" fill={color} stroke="#f59e0b" strokeWidth="2" />
        <path d="M50 0 L50 100" stroke="#f59e0b" strokeWidth="1.5" />
        <path d="M5 50 L95 50" stroke="#f59e0b" strokeWidth="1.5" />
        <path d="M40 100 L60 100 L50 120 Z" fill={color} stroke="#f59e0b" strokeWidth="1" />
      </svg>
    </motion.div>
  );
};

// --- 2. WALKING CHARACTER (Haridas + Ox) ---
const WalkingCharacter = () => (
  <motion.div
    className="absolute z-40 left-[5%] md:left-[10%] bottom-[2%] md:bottom-[1%]"
    // Bobbing animation to simulate walking
    animate={{ y: [0, -6, 0] }} 
    transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }}
  >
    {/* Adjust width to fit your design */}
    <img 
        src="/home/haridas.png" 
        alt="Haridas and Ox walking" 
        className="w-[110px] md:w-[320px] h-auto drop-shadow-2xl"
    />
  </motion.div>
);

// --- 3. TORAN ---
const Toran = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 flex justify-between overflow-hidden pointer-events-none mix-blend-soft-light">
      <div className="flex w-[200%] md:w-full justify-center -mt-2 md:-mt-5 flex-nowrap">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0.9, rotate: -2 }}
            animate={{ scaleY: 1.05, rotate: 2 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.05,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center -ml-4 md:-ml-6 flex-shrink-0"
          >
            <svg width="80" height="100" viewBox="0 0 60 80">
               <path d="M0 -5 Q 30 15 60 -5 L 50 70 Q 30 90 10 70 Z" fill="#15803d" />
               <circle cx="30" cy="20" r="8" fill="#fbbf24" />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- 4. PARTICLES ---
const FallingParticles = () => {
  const [particles, setParticles] = useState<number[]>([]);
  useEffect(() => setParticles(Array.from({ length: 30 }, (_, i) => i)), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {particles.map((i) => {
          const size = Math.random() * 5 + 2;
          return (
        <motion.div
          key={i}
          className="absolute bg-yellow-300/50 rounded-full blur-[1px]"
          style={{
            width: size,
            height: size,
            left: `${Math.random() * 100}%`,
            top: -20,
          }}
          animate={{
            y: ["0vh", "120vh"],
            x: [0, Math.random() * 200 - 100],
            rotate: 360,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        />
      )})}
    </div>
  );
};

const kiteConfig = [
    { color: "#3b82f6", className: "top-[12%] left-[5%] w-[100px] md:w-[160px]", delay: 0 },
    { color: "#ef4444", className: "top-[22%] right-[8%] w-[90px] md:w-[180px] scale-x-[-1]", delay: 1.5 }, 
    { color: "#facc15", className: "top-[5%] left-[35%] w-[70px] md:w-[120px]", delay: 0.5 },
    { color: "#a855f7", className: "top-[40%] left-[15%] w-[80px] md:w-[130px] rotate-[15deg]", delay: 2.5 },
    { color: "#10b981", className: "top-[8%] right-[30%] w-[50px] md:w-[80px] opacity-50 blur-[1px]", delay: 3.5 },
    { color: "#f97316", className: "top-[30%] left-[55%] w-[60px] md:w-[90px] opacity-60 blur-[2px] scale-x-[-1]", delay: 4.5 },
];

// --- MAIN PAGE ---
export default function Page() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 300], [0, 100]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative pt-14 min-h-screen overflow-hidden bg-sky-300">
        
       {/* --- 1. PARALLAX BACKGROUND LAYERS --- */}

{/* Sky: Covers the whole background */}
<ParallaxLayer
  src="/home/sky.png"
  speed={60}
  zIndex={0}
  fitType="cover"
/>

{/* Hills: Move slightly faster. 
    REMOVED pb-[15vh]. Added bottom-20 to lift it just slightly above the road. 
    Adjust 'bottom-20' to 'bottom-32' if you want them higher, or 'bottom-0' for lower.
*/}
<ParallaxLayer
  src="/home/hills.png"
  speed={40}
  zIndex={10}
  className="mt-[3 0px] md:mt-[150px] opacity-90" 
/>

{/* Huts: Move faster. 
    REMOVED pb-[12vh]. Added bottom-10 to sit right on the horizon line.
*/}
<ParallaxLayer
  src="/home/huts.png"
  speed={20}
  zIndex={20}
  className="mt-[70px] md:mt-[300px]"
/>

{/* Road: Fastest. 
    Strictly bottom-0 to stick to the floor.
*/}
<ParallaxLayer
  src="/home/road.png"
  speed={20}
  zIndex={30}
  className="mt-[100px] md:mt-[400px]"
/>

        {/* --- 2. ATMOSPHERE OVERLAYS --- */}
        <FallingParticles />
        <Toran />

        {/* Kites (Placed in the sky layer) */}
        {kiteConfig.map((kite, index) => (
            <Kite key={index} color={kite.color} className={kite.className} delay={kite.delay} />
        ))}

        {/* --- 3. CHARACTER --- */}
        <WalkingCharacter />

        {/* --- 4. UI CONTENT (Text & Buttons) --- */}
        <motion.div 
            style={{ y: yText }}
            className="relative z-50 flex flex-col items-center mt-32 md:mt-40 select-none px-4"
        >
          <div className="flex flex-col items-center gap-2">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="
                text-center font-[var(--font-cinzel)]
                text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-orange-200 to-yellow-100
                drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]
                text-5xl md:text-8xl tracking-wide
              "
            >
              Happy Makar Sankranti
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="
                text-center text-2xl md:text-4xl 
                text-orange-100 mt-4
                font-[var(--font-cinzel)] tracking-[0.3em] 
                drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)]
              "
            >
              2026
            </motion.p>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative mt-12 md:mt-16 flex flex-wrap w-full justify-center gap-4 md:gap-10 z-50 px-4"
        >
          <NavButton onClick={() => scrollToSection("bhogi-section")}>Bhogi</NavButton>
          <NavButton onClick={() => scrollToSection("sankranti-section")}>Sankranti</NavButton>
        </motion.div>

        {/* Merch/Cards */}
        <div className="
            relative z-40 
            flex flex-col gap-6 scale-[0.85]
            mt-12 items-center w-full px-2 mb-32
            lg:absolute lg:bottom-[8%] lg:right-8 lg:w-[300px] 
            lg:mt-0 lg:mb-0 lg:items-end lg:px-0 lg:scale-[1] lg:gap-4
        ">
          <DhotiMerchCard />
          <RampWalkCard />
        </div>

        {/* Scroll Arrow */}
        <motion.div
          onClick={() => scrollToSection("bhogi-section")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 15, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-orange-900/70 cursor-pointer z-50 p-4 hover:text-orange-700 transition-colors"
        >
          <ChevronDown size={52} strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="w-full h-40 bg-gradient-to-b from-[#240000] to-black" />

      <main id="bhogi-section" className="bg-black text-white relative">
        <Hero />
        <div className="bg-gradient-to-b from-black to-gray-950">
          <AboutSection />
          <EventsSection />
          <History />
          <Gallery />
        </div>
      </main>

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
      px-8 py-3 min-w-[140px]
      bg-gradient-to-br from-[#b88a30]/80 to-[#78350f]/80 backdrop-blur-md 
      text-amber-100
      font-[var(--font-cinzel)]
      border border-amber-500/50 
      rounded-full
      shadow-[0_4px_15px_rgba(0,0,0,0.4),inset_0_0_10px_rgba(251,191,36,0.2)]
      hover:bg-[#b88a30] hover:scale-105 hover:shadow-[0_4px_25px_rgba(251,191,36,0.4)]
      hover:text-white hover:border-amber-400
      active:scale-95
      transition-all duration-300
      tracking-widest uppercase text-sm md:text-base font-semibold
    "
  >
    {children}
  </button>
);