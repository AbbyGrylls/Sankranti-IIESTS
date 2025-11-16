"use client";

import { useRouter } from "next/navigation";
import Image from 'next/image'
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./gallery.css";

import { Dancing_Script } from "next/font/google";
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

// --- Types ---
interface PhotoSections {
  [sectionName: string]: string[];
}

interface PhotoGroup {
  year: string;
  photos: string[];
  sections: PhotoSections;
}


// --- Component ---
const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<PhotoGroup | null>(null);
  const router = useRouter();

  const photoGroups: PhotoGroup[] = [
    {
      year: "2025",
      photos: [
        "/galleryphotos/2025/bhogi/DSC_0017.jpg",
          "/galleryphotos/2025/sankranthi/DSC_0224.jpg",
          "/galleryphotos/2025/sankranthi/DSC_0224.jpg",
          "/galleryphotos/2025/sankranthi/DSC_0224.jpg",
          "/galleryphotos/2025/sankranthi/DSC_0224.jpg",
      ],
      sections: {},
    },
    {
      year: "2024",
      photos: [
        "/galleryphotos/2024/bhogi/IMG_5813.jpg",
        "/galleryphotos/2024/sankranthi/DSC_0002.jpg",
          "/galleryphotos/2025/sankranthi/DSC_0228.jpg",
          "/galleryphotos/2025/sankranthi/DSC_0228.jpg",
          "/galleryphotos/2025/sankranthi/DSC_0228.jpg",
      ],
      sections: {},
    },
    {
      year: "2023",
      photos: [
        "/galleryphotos/2025/bhogi/DSC_0059.jpg",
          "/galleryphotos/2025/sankranthi/DSC_0419.jpg",
          "/galleryphotos/2025/sankranthi/DSC_0419.jpg",
          "/galleryphotos/2025/sankranthi/DSC_0419.jpg",
          "/galleryphotos/2025/sankranthi/DSC_0419.jpg",
          "/galleryphotos/2025/sankranthi/DSC_0419.jpg",
      ],
      sections: {},
    },
  ];

  return (
   <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">

      <video
        ref={(el) => {
          if (el) el.playbackRate = 0.75;   // <<< slow motion
        }}
        preload="auto"
        src="/galleryphotos/videoback2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[0px] z-[-1]" />

      {/* Heading */}
      <div className="text-center mb-20 z-10 pt-6">
        <h1
  className={`${dancing.className} text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text [-webkit-background-clip:text] bg-white`}
>
  {/* bg-gradient-to-r from-[#FFBA08] via-[#DC2F02] to-[#D00000] drop-shadow-lg animate-pulse */}
  Sankranti Memories
</h1>

        <p
          className="mt-2 text-lg md:text-xl text-yellow-100 font-medium tracking-wide"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Celebrating the joy of{" "}
          <span className="text-[#FFBA08]" style={{ fontFamily: "'poppins', cursive" }}>
            Batches from 2024 Passouts
          </span>
        </p>

        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-[#FFBA08] via-[#DC2F02] to-[#D00000] mx-auto rounded-full animate-pulse"></div>
      </div>

      {/* === Timeline Section === */}
      <div className="relative w-full max-w-8xl z-10">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-white/40 hidden md:block"></div>
{photoGroups.map((group, index) => (
  <div
    key={index}
    className="relative flex flex-col md:flex-row items-center justify-between mb-48 md:mb-32 w-full"
  >
    {/* CENTER TIMELINE LINE */}
    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-white/40"></div>

    {/* LEFT STACK */}
    {/* <div className="relative w-full md:w-1/2 flex justify-end pr-16 md:pr-32"> */}
    <div className="relative w-full md:w-1/2 flex 
  justify-center md:justify-end
  px-2 md:pr-32 mb-6 md:mb-0"
>

  <motion.div
    // onClick={() => setSelectedYear(group)}
    onClick={() => router.push(`/gallery/${encodeURIComponent(group.year)}/Bhogi`)}
    className="relative w-[300px] h-[190px]  sm:w-[400px] sm:h-[260px] md:w-[460px] md:h-[300px] group cursor-pointer"

    initial="initial"
    whileHover="hover"
    style={{ willChange: "transform" }}
  >
    {/* STACK IMAGES */}
    {group.photos.map((img, i) => (
     <motion.div
  key={i}
  className="absolute w-full h-full rounded-xl border-4 border-white shadow-md"
  variants={{
    initial: { rotate: (i - 1) * 2 },
    hover: {
      rotate: (i - 2) * 3 + i * 2,
      transition: { duration: 0.45, ease: "easeInOut" }
    }
  }}
  style={{
    zIndex: 10 - i,
    willChange: "transform"
  }}
>
  <div className="absolute inset-0 rounded-xl overflow-hidden">
    <Image
      src={img}
      alt=""
      fill
      loading="lazy"
      className="object-cover rounded-xl"
    />
  </div>
</motion.div>

    ))}

    {/* ONLY FIRST IMAGE OVERLAY */}
    <div
      className="
        absolute inset-0 rounded-xl 
        bg-black/60 
        opacity-0 
        group-hover:opacity-100 
        transition-opacity duration-500 ease-in-out
        pointer-events-none
      "
      style={{ zIndex: 11 }}
    ></div>

    {/* CALLIGRAPHY TEXT */}
    <div
      className="
        absolute inset-0 flex items-center justify-center
        opacity-0 group-hover:opacity-100
        transition-opacity duration-700 ease-in-out
        pointer-events-none
      "
      style={{ zIndex: 12 }}
    >
      <span
        className="text-white text-5xl drop-shadow-xl"
        style={{
          fontFamily: '"Dancing Script", cursive'
        }}
      >
        Bhogi
      </span>
    </div>
  </motion.div>
</div>




<div
  className="
    absolute left-1/2 -translate-x-1/2
    z-30 
    backdrop-blur-[15px]
    hidden md:block 
    p-2
  "
>
  <span className="text-white text-2xl font-semibold bg-black/40 px-4 py-2 rounded-lg border border-white/20">
    {group.year}
  </span>
</div>

{/* MOBILE DATE — shown above both stacks */}
<div className="md:hidden flex justify-center mb-6 mt-6 backdrop-blur-[15px] p-0.5">
  <span className="text-white text-2xl font-semibold bg-black/40 px-12 py-2 rounded-lg border border-white/20">
    {"\" "+group.year+ " \""}
  </span>
</div>


    {/* RIGHT STACK */}
{/* <div className="relative w-full md:w-1/2 flex justify-start pl-16 md:pl-32"> */}
<div className="relative w-full md:w-1/2 flex 
  justify-center md:justify-start
  px-2 md:pl-32 mt-6 md:mt-0"
>

  <motion.div
    // onClick={() => setSelectedYear(group)}
    onClick={() => router.push(`/gallery/${encodeURIComponent(group.year)}/Sankranthi`)}

    // className="relative w-[360px] h-[220px] group cursor-pointer"
    // className="relative w-[250px] h-[150px] sm:w-[300px] sm:h-[180px] md:w-[460px] md:h-[300px] group cursor-pointer"
    className="relative w-[300px] h-[190px]  sm:w-[400px] sm:h-[260px] md:w-[460px] md:h-[300px] group cursor-pointer"


    initial="initial"
    whileHover="hover"
    style={{ willChange: "transform" }}
  >
    {/* STACK IMAGES */}
    {/* {group.photos.map((img, i) => ( */}
    {[...group.photos.slice(1), group.photos[0]].map((img, i) => (
      <motion.div
  key={i}
  className="absolute w-full h-full rounded-xl border-4 border-white shadow-md"
  variants={{
    initial: { rotate: (i - 1) * 2 },
    hover: {
      rotate: (i - 2) * 3 + i * 2,
      transition: { duration: 0.45, ease: "easeInOut" }
    }
  }}
  style={{
    zIndex: 10 - i,
    willChange: "transform"
  }}
>
  <div className="absolute inset-0 rounded-xl overflow-hidden">
    <Image
      src={img}
      alt=""
      width={500}
      height={500}
      className="object-cover rounded-xl"
    />
  </div>
</motion.div>


      
    ))}

    {/* DARK OVERLAY ONLY ON TOP CARD */}
    <div
      className="
        absolute inset-0 rounded-xl
        bg-black/60
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-500 ease-in-out
        pointer-events-none
      "
      style={{ zIndex: 11 }}
    ></div>

    {/* CALLIGRAPHY TEXT: SANKRANTHI */}
    <div
      className="
        absolute inset-0 flex items-center justify-center
        opacity-0 group-hover:opacity-100
        transition-opacity duration-700 ease-in-out
        pointer-events-none
      "
      style={{ zIndex: 12 }}
    >
      <span
        className="text-white text-5xl drop-shadow-xl"
        style={{
          fontFamily: '"Dancing Script", cursive'
        }}>
        Sankranthi
      </span>
    </div>
  </motion.div>
</div>

  </div>
))}

      </div>
    </main>
  );
};

export default App;
