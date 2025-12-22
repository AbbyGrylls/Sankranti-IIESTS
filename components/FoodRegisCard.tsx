"use client";
import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";

export default function FoodRegistrationCard() {
  // Replace with your actual food registration form URL
  const googleFormUrl = "https://forms.google.com/your-food-form-link";

  return (
    <Link 
      href={googleFormUrl} 
      target="_blank" 
      className="group relative w-full md:w-[320px] cursor-pointer"
    >
      {/* Animated Glow Background - Green/Lime for Harvest/Banana Leaf theme */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-lime-500 rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
      
      <div className="relative flex items-center gap-4 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl h-full hover:bg-black/70 transition-all">
        {/* Icon/Visual */}
        <div className="relative w-16 h-16 shrink-0 rounded-lg bg-gradient-to-br from-green-900 to-black border border-green-500/30 flex items-center justify-center">
            {/* Using a Pot of Food/Leaf emoji to represent Pongal */}
             <span className="text-2xl">🥘</span>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-green-100 font-[var(--font-cinzel)] text-sm font-bold">
              Grand Pongal Feast
            </h3>
            <span className="text-[10px] px-2 py-0.5 bg-green-600/80 text-white rounded-full">
              Limited Seats
            </span>
          </div>
          
          <p className="text-gray-300 text-xs mt-1 leading-tight min-h-[40px] flex items-center">
            Experience an authentic South Indian culinary tradition served in classic festive style.
          </p>
          
          <div className="mt-2 flex items-center gap-2 text-green-400 text-xs font-semibold group-hover:translate-x-1 transition-transform">
            <UtensilsCrossed size={14} />
            <span>Join the Feast &rarr;</span>
          </div>
        </div>
      </div>
    </Link>
  );
}