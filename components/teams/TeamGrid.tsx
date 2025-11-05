"use client";

import { motion } from "framer-motion";
import TeamCard from "./TeamCard";

type Member = {
  name: string;
  role: string;
  phone?: string;
  image?: string;
  section?: string;
};

type TeamGridProps = {
  members: Member[];
};

export default function TeamGrid({ members }: TeamGridProps) {
  return (
    <section
      className="
        relative py-20 px-6
        bg-gradient-to-b from-[#0B1320] via-[#0F172A] to-[#1E293B]
        overflow-hidden
      "
    >
      {/* Subtle animated background glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1)_0%,transparent_70%)]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid */}
      <motion.div
        className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {members.map((member, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <TeamCard {...member} />
          </motion.div>
        ))}
      </motion.div>

      {/* Subtle top light beam */}
      <motion.div
        className="absolute top-0 left-1/2 w-[120%] h-[120px] bg-gradient-to-b from-cyan-400/10 to-transparent -translate-x-1/2 blur-2xl"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
