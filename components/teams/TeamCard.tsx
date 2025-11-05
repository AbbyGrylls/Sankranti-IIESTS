"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

type TeamCardProps = {
  name: string;
  role: string;
  phone?: string;
  image?: string;
};

export default function TeamCard({ name, role, phone, image }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
        relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]
        rounded-2xl overflow-hidden border border-[#1E3A8A]/40
        p-6 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.4)]
        hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300
      "
    >
      {/* Profile Image */}
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#3B82F6]/40 shadow-lg mb-4">
        <img
          src={image || "/default-profile.png"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name & Role */}
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
        {name}
      </h3>
      <p className="text-sm sm:text-base text-gray-300 font-medium mb-3">
        {role}
      </p>

      {/* Contact */}
      {phone && (
        <a
          href={`tel:${phone}`}
          className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition font-medium"
        >
          <User className="w-4 h-4" />
          {phone}
        </a>
      )}

      {/* Subtle glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
