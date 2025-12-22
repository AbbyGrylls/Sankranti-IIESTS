"use client";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export default function DhotiMerchCard() {
    const googleFormUrl = "https://forms.google.com/your-dhoti-form-link";
  return (
    <Link href={googleFormUrl} 
      target="_blank" 
    className="group relative w-full md:w-[320px] cursor-pointer">
      {/* Animated Glow Background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
      
      <div className="relative flex items-center gap-4 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl h-full hover:bg-black/70 transition-all">
        {/* Image Placeholder - Replace src with your actual image */}
        <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-yellow-500/30">
           {/* If you don't have an image yet, this div acts as a placeholder */}
           <div className="w-full h-full bg-gradient-to-br from-yellow-900 to-black flex items-center justify-center">
             <span className="text-2xl">👘</span>
           </div>
           {/* Uncomment below when you have the image
           <Image 
             src="/merch/dhoti.png" 
             alt="Dhoti" 
             fill 
             className="object-cover"
           /> 
           */}
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-yellow-100 font-[var(--font-cinzel)] text-sm font-bold">
              Official Merch
            </h3>
            <span className="text-[10px] px-2 py-0.5 bg-red-500/80 text-white rounded-full animate-pulse">
              Selling Fast
            </span>
          </div>
          <p className="text-gray-300 text-xs mt-1 leading-tight min-h-[40px] flex items-center">
            Premium Traditional Dhoti Set for Sankranti.
          </p>
          <div className="mt-2 flex items-center gap-2 text-yellow-400 text-xs font-semibold group-hover:translate-x-1 transition-transform">
            <ShoppingBag size={14} />
            <span>Pre-order Now &rarr;</span>
          </div>
        </div>
      </div>
    </Link>
  );
}