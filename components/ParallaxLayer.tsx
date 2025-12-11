"use client";
import { motion } from "framer-motion";

interface ParallaxLayerProps {
  src: string;
  speed: number;
  zIndex: number;
  className?: string;
  fitType?: "cover" | "contain-bottom";
}

export const ParallaxLayer = ({
  src,
  speed,
  zIndex,
  className = "",
  fitType = "contain-bottom",
}: ParallaxLayerProps) => {
  
  // Force items-end to ensure images sit at the bottom of the container
  const containerStyles = fitType === "cover" ? "items-start h-full" : "items-end h-full";
  
  // Force images to be full width
  const imageStyles = fitType === "cover" 
    ? "h-full w-screen object-cover" 
    : "w-screen h-auto flex-shrink-0"; // h-auto preserves aspect ratio

  return (
    <div
      // Added 'absolute inset-x-0' to ensure full width
      // className passed here allows you to use 'bottom-0', 'bottom-10' etc.
      className={`absolute inset-x-0 bottom-0 top-0 flex overflow-hidden pointer-events-none ${containerStyles} ${className}`}
      style={{ zIndex }}
    >
      <motion.div
        className={`flex min-w-[200%] ${containerStyles}`}
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <img src={src} alt="" className={imageStyles} />
        <img src={src} alt="" className={imageStyles} />
      </motion.div>
    </div>
  );
};