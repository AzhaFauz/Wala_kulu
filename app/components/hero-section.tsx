"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-background text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-16 pt-24 overflow-hidden">
      {/* Desktop/Tablet Blue Glow Behind Content */}
      <div className="hidden md:flex absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[1600px] max-w-full h-[1200px] max-h-full rounded-full bg-[#079DFB]/40 blur-[200px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4 sm:space-y-6 w-full max-w-full md:max-w-5xl">
        {/* Label */}
        <div className="inline-flex items-center rounded-full overflow-hidden text-xs sm:text-sm border border-white/30 md:border-0">
          <span className="bg-[#079DFB] text-black px-2 sm:px-3 py-1 font-semibold">
            New
          </span>
          <span className="bg-black text-[#079DFB] px-2 sm:px-3 py-1 font-semibold">
            Early access now open
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight max-w-full">
          Boost your Sales <br />
          <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-[#079DFB]">
            with a AI Receptionist.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-white text-xs sm:text-sm md:text-xl max-w-full sm:max-w-2xl md:max-w-3xl">
          Walakulu AI voice agent answers calls, books meetings, and handles
          clients like a real receptionist, available around the clock. <br />
          It’s like having your best salesperson on duty, 24/7.
        </p>

        {/* Button */}
        <button
          className="bg-white text-black font-semibold px-5 sm:px-8 py-2 sm:py-4 rounded-xl text-xs sm:text-base
                     transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 
                     hover:shadow-lg hover:shadow-[#079DFB]/40"
        >
          Request a free demo
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative w-full max-w-full mt-8 sm:mt-12 z-10">
        {/* Mobile Top-Circle Purple Glow */}
        <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 w-48 h-48 rounded-full bg-purple-400 blur-[100px] pointer-events-none -z-10"></div>

        <Image
          src="/Hero.png"
          alt="Hero"
          width={1400}
          height={700}
          className="w-full h-auto object-cover relative z-10"
          priority
        />

        {/* Bottom Fade */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%)",
          }}
        ></div>
      </div>
    </section>
  );
}
