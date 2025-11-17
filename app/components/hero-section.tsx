"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-16 pt-24 overflow-hidden">
      {/* Soft Blue Glow Behind Content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[1600px] h-[1200px] rounded-full bg-[#079DFB]/40 blur-[200px]"></div>
      </div>

      {/* All Hero Content in One Division */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-5 sm:space-y-7 w-full max-w-5xl">
        {/* Label */}
        <div className="inline-flex items-center rounded-full overflow-hidden text-sm sm:text-base">
          <span className="bg-[#079DFB] text-black px-3 py-1 font-semibold">
            New
          </span>
          <span className="bg-black text-[#079DFB] px-3 py-1 font-semibold">
            Early access now open
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          Boost your Sales <br />
          <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-[#079DFB]">
            with a AI Receptionist
          </span>
          .
        </h1>

        {/* Subtext */}
        <p className="text-white text-sm sm:text-base md:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl">
          Walakulu AI voice agent answers calls, books meetings, and handles
          clients like a real receptionist, available around the clock. <br />
          It’s like having your best salesperson on duty, 24/7.
        </p>

        {/* Button with hover lift + glow */}
        <button
          className="bg-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base 
                     transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 
                     hover:shadow-lg hover:shadow-[#079DFB]/40"
        >
          Request a free demo
        </button>
      </div>

      {/* Hero Image with bottom fade */}
      <div className="relative w-full max-w-7xl mt-12 z-10">
        <Image
          src="/Hero.png"
          alt="Hero"
          width={1400}
          height={700}
          className="w-full h-auto z-10 object-cover"
          priority
        />

        {/* Bottom Fade Only (top + middle stay visible) */}
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
