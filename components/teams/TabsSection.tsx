"use client";

import { motion } from "framer-motion";

type TabsSectionProps = {
  sections: string[];
  activeSection: string;
  onChange: (section: string) => void;
};

export default function TabsSection({
  sections,
  activeSection,
  onChange,
}: TabsSectionProps) {
  return (
    <div className="flex justify-center gap-3 sm:gap-4 mb-10 flex-wrap px-4">
      {sections.map((section) => {
        const isActive = activeSection === section;
        return (
          <motion.button
            key={section}
            onClick={() => onChange(section)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            animate={{
              scale: isActive ? 1.05 : 1,
              boxShadow: isActive
                ? "0px 0px 15px rgba(100, 200, 255, 0.7)"
                : "0px 0px 0px rgba(0,0,0,0)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 
              text-sm sm:text-base md:text-lg cursor-pointer
              ${
                isActive
                  ? "bg-gradient-to-r from-[#00B4D8] via-[#48CAE4] to-[#90E0EF] text-white shadow-lg"
                  : "bg-[#1E2A47] text-[#AFCBFF] hover:bg-[#24355A]"
              }`}
          >
            {section}

            {/* Subtle glowing ring for active tab */}
            {isActive && (
              <motion.span
                layoutId="activeTabGlow"
                className="absolute inset-0 rounded-full border border-cyan-300/50 shadow-[0_0_15px_rgba(100,200,255,0.5)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
