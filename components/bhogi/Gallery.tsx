"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

const images = [
  "/bhogi/img1.jpg",
  "/bhogi/img2.jpg",
  "/bhogi/img3.jpg",
  "/bhogi/img4.jpg",
  "/bhogi/img5.jpg",
  "/bhogi/img6.jpg",
];

const filmReelImages = [...images, ...images, ...images];

export function Gallery() {
  const reelRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const initializedRef = useRef(false);
  const isClickRef = useRef(true);

  const [isDragging, setIsDragging] = useState(false);

  const checkLoop = useCallback(() => {
    const reel = reelRef.current;
    if (!reel) return;

    const itemWidth = reel.scrollWidth / 3;

    if (reel.scrollLeft <= itemWidth) {
      reel.scrollLeft += itemWidth;
      if (isDraggingRef.current) {
        scrollLeftStartRef.current += itemWidth;
      }
    } else if (reel.scrollLeft >= itemWidth * 2) {
      reel.scrollLeft -= itemWidth;
      if (isDraggingRef.current) {
        scrollLeftStartRef.current -= itemWidth;
      }
    }
  }, []);

  useEffect(() => {
    const reel = reelRef.current;
    if (!reel) return;

    if (!initializedRef.current) {
      const itemWidth = reel.scrollWidth / 3;
      reel.scrollLeft = itemWidth;
      initializedRef.current = true;
    }

    let animationFrameId: number;

    const autoScroll = () => {
      // Auto-scroll ALWAYS runs unless dragging
      if (!isDraggingRef.current && reel) {
        reel.scrollLeft += 0.5;
      }
      checkLoop();
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    autoScroll();

    return () => cancelAnimationFrame(animationFrameId);
  }, [checkLoop]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const reel = reelRef.current;
    if (!reel) return;

    isDraggingRef.current = true;
    isClickRef.current = true;
    setIsDragging(true);

    startXRef.current = e.pageX;
    scrollLeftStartRef.current = reel.scrollLeft;

    reel.style.cursor = "grabbing";
  };

  const handlePointerLeave = () => {
    // Stop dragging only
    isDraggingRef.current = false;
    setIsDragging(false);

    if (reelRef.current) {
      reelRef.current.style.cursor = "grab";
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);

    if (reelRef.current) {
      reelRef.current.style.cursor = "grab";
    }

    // MOBILE FIX — resume auto scroll after momentum scroll ends
    const reel = reelRef.current;
    if (reel) {
      let last = reel.scrollLeft;
      const checkStop = () => {
        if (!reel) return;

        const current = reel.scrollLeft;
        if (Math.abs(current - last) < 1) {
          // do nothing — auto scroll already active
        } else {
          last = current;
          requestAnimationFrame(checkStop);
        }
      };
      requestAnimationFrame(checkStop);
    }

    if (isClickRef.current) {
      router.push("/gallery");
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !reelRef.current) return;
    e.preventDefault();

    const reel = reelRef.current;
    const x = e.pageX;
    const walk = x - startXRef.current;

    if (Math.abs(walk) > 10 && isClickRef.current) {
      isClickRef.current = false;
    }

    reel.scrollLeft = scrollLeftStartRef.current - walk * 2;
    checkLoop();
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const reel = reelRef.current;
    if (!reel) return;

    e.preventDefault();
    reel.scrollLeft += e.deltaX;
    checkLoop();
  };

  return (
    <div className="relative z-10 w-full py-16">
      <h2 className="text-6xl md:text-7xl mb-12 text-center castoro-titling-regular font-black">
        Gallery
      </h2>

      <div className="relative w-full">
        <div
          ref={reelRef}
          className={`w-full h-64 md:h-80 overflow-x-hidden
                       select-none
                       ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
          onPointerMove={handlePointerMove}
          onWheel={handleWheel}
        >
          <div className="flex h-full" style={{ width: "fit-content" }}>
            {filmReelImages.map((src, index) => (
              <div key={index} className="h-full flex-shrink-0 p-2">
                <div className="relative h-full w-[426px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={src}
                    alt={`Bhogi image ${index + 1}`}
                    fill
                    className="object-cover pointer-events-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
