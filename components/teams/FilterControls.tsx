"use client";

import { Category } from "@/public/teams/data/data";
import { useState, useRef, useEffect } from "react";

type FilterControlsProps = {
  categories: Category[];
  selected: Category;
  onSelectCategory: (category: Category) => void;
};

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

export function FilterControls({
  categories,
  selected,
  onSelectCategory,
}: FilterControlsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (category: Category) => {
    onSelectCategory(category);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="hidden md:flex justify-center items-center gap-8 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`pb-2 text-sm font-medium uppercase tracking-wider
              ${
                selected === category
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }
            `}
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="md:hidden mb-8 relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-2 border rounded-lg text-sm font-medium
                     bg-white/5 backdrop-blur-lg border-white/20 text-white
                     flex justify-between items-center
                     focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <span>{selected}</span>
          <span
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDownIcon />
          </span>
        </button>

        {isOpen && (
          <div
            className="absolute top-full left-0 w-full mt-2
                          bg-gray-900 border border-white/20 rounded-lg
                          overflow-hidden z-20 shadow-lg"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleSelect(category)}
                className={`w-full text-left p-3 text-white
                            ${
                              selected === category
                                ? "bg-black"
                                : "hover:bg-gray-700"
                            }
                          `}
              >
                <span>{category}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
