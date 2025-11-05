"use client";
import { useState } from "react";
import HeroSection from "@/components/teams/HeroSection";
import TabsSection from "@/components/teams/TabsSection";
import TeamGrid from "@/components/teams/TeamGrid";
import { sections, members } from "@/public/teams/data/data";

export default function TeamsPage() {
  const [activeSection, setActiveSection] = useState("Finance");

  
  const filteredMembers = members.filter(
    (m) => m.section === activeSection
  );

  return (
    <div
      className="
        min-h-screen 
        bg-black text-white 
        relative overflow-hidden
      "
    >
      {/* Glowing accent background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.1),transparent_60%)]" />

      <div className="relative z-10 p-8 space-y-16">
        <HeroSection />
        <TabsSection
         
          sections={sections.filter((s) => s !== "All")}
          activeSection={activeSection}
          onChange={setActiveSection}
        />
        <TeamGrid members={filteredMembers} />
      </div>
    </div>
  );
}
