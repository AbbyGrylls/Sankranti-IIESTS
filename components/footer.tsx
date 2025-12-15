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
                A celebration of tradition, harvest, culture, and unity. Join us
                in cherishing the warmth and spirit of Sankranti.
              </p>

              {/* Social Icons */}
              <div className="mt-4 flex flex-col gap-2">
                <div className="text-sm text-gray-400 mb-1">Follow us on</div>

                <Link
                  href="https://www.instagram.com/sankranti_iiests/"
                  target="_blank"
                  className="inline-flex items-center gap-2 hover:text-yellow-400"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint0_radial_87_7153)"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint1_radial_87_7153)"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="6"
                      fill="url(#paint2_radial_87_7153)"
                    />
                    <path
                      d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                      fill="white"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                      >
                        <stop stop-color="#B13589" />
                        <stop offset="0.79309" stop-color="#C62F94" />
                        <stop offset="1" stop-color="#8A3AC8" />
                      </radialGradient>
                      <radialGradient
                        id="paint1_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                      >
                        <stop stop-color="#E0E8B7" />
                        <stop offset="0.444662" stop-color="#FB8A2E" />
                        <stop offset="0.71474" stop-color="#E2425C" />
                        <stop
                          offset="1"
                          stop-color="#E2425C"
                          stop-opacity="0"
                        />
                      </radialGradient>
                      <radialGradient
                        id="paint2_radial_87_7153"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                      >
                        <stop offset="0.156701" stop-color="#406ADC" />
                        <stop offset="0.467799" stop-color="#6A45BE" />
                        <stop
                          offset="1"
                          stop-color="#6A45BE"
                          stop-opacity="0"
                        />
                      </radialGradient>
                    </defs>
                  </svg>
                  <span className="text-sm">Instagram</span>
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UC1F-SSOnr7lqu1pxAqonJVQ  "
                  target="_blank"
                  className="inline-flex items-center gap-2 hover:text-yellow-400"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <path
                      fill="red"
                      d="M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z"
                    />
                    <path
                      fill="#ffffff"
                      d="M6.593 10.11l3.644-2.098-3.644-2.11v4.208z"
                    />
                  </svg>
                  <span className="text-sm">Youtube</span>
                </Link>
                <Link
                  href="https://www.facebook.com/iiests.sankranti/"
                  target="_blank"
                  className="inline-flex items-center gap-2 hover:text-yellow-400"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <path
                      fill="#1877F2"
                      d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                    />
                    <path
                      fill="#ffffff"
                      d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                    />
                  </svg>
                  <span className="text-sm">Facebook</span>
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
          © {new Date().getFullYear()} Sankranti Celebrations. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
