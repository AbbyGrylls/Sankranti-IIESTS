//footer to be added here
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0b0b12] via-[#050509] to-black text-gray-300 border-t border-yellow-500/20 shadow-xl shadow-black/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">

        {/* ---- TOP SECTION ---- */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* LOGO + BRAND */}
          <div className="flex items-start gap-4 max-w-sm mx-auto md:mx-0">
            <Image
              src="/LOGO.svg"
              alt="Sankranti Logo"
              width={70}
              height={70}
              className="rounded-full shadow-lg shadow-yellow-500/20"
            />

            <div>
              <h2 className="text-2xl font-bold text-yellow-400 tracking-wide">
                Sankranti Celebrations
              </h2>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                A celebration of tradition, harvest, culture, and unity.  
                Join us in cherishing the warmth and spirit of Sankranti.
              </p>

              {/* Social Icons */}
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-1">Follow us on</p>

                <Link
                  href="https://instagram.com/"
                  target="_blank"
                  className="inline-flex items-center gap-2 hover:text-yellow-400"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-pink-500"
                  >
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3a3 3 0 110-6zm4.5-.75a1.25 1.25 0 11-.001 2.501A1.25 1.25 0 0116.5 8.25z" />
                  </svg>
                  <span className="text-sm">Instagram</span>
                </Link>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start mx-auto md:mx-0">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/sankranti"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Sankranti
                </Link>
              </li>
            </ul>
          </div>

          {/* FEATURED */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start mx-auto md:mx-0">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">
              Featured
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/dhoti-merch"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Dhoti Merch
                </Link>
              </li>
              <li>
                <Link
                  href="/rampwalk"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Rampwalk Show
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ---- Decorative Separator ---- */}
        <div className="mt-12 flex justify-center">
          <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
        </div>

        {/* ---- BOTTOM COPYRIGHT ---- */}
        <div className="mt-6 text-center text-sm text-gray-500 tracking-wide">
          © {new Date().getFullYear()} Sankranti Celebrations. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

