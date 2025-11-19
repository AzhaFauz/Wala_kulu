"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function OurClientsSection() {
  const [visible, setVisible] = useState(false);

  // Simple scroll detection to trigger fade-in animation
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("clients-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="clients-section"
      className="relative w-full bg-background text-white flex flex-col items-center justify-center py-12 sm:py-16 px-4 sm:px-8 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[80px_80px] opacity-40 pointer-events-none"></div>

      {/* Subtle blue glow behind card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 sm:translate-y-10 w-[400px] sm:w-[700px] h-[250px] sm:h-[400px] bg-[radial-gradient(circle_at_center,rgba(7,157,251,0.15)_0%,rgba(0,0,0,1)_75%)] blur-2xl sm:blur-3xl pointer-events-none"></div>

      {/* Section Heading */}
      <div className="relative text-center mb-10 sm:mb-16 z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Our Clients
        </h2>
        <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto">
          Hear how businesses use Walakulu to stay connected, close more leads,
          and never miss a call.
        </p>
      </div>

      {/* Testimonial Card */}
      <div
        className={`relative z-10 w-full max-w-md sm:max-w-4xl rounded-2xl border border-[#079DFB]/30 
                    bg-[linear-gradient(135deg,rgba(7,157,251,0.05)_0%,rgba(255,255,255,0.05)_50%,rgba(7,157,251,0.05)_100%)] 
                    p-6 sm:p-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 backdrop-blur-sm 
                    transition-transform duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105 
                    hover:shadow-lg hover:shadow-[#079DFB]/30
                    ${
                      visible
                        ? "opacity-100 translate-y-0 transition-all duration-700"
                        : "opacity-0 translate-y-10"
                    }`}
      >
        {/* Client Image with Blue Glow */}
        <div className="relative w-20 h-20 sm:w-45 sm:h-45 rounded-2xl overflow-hidden shrink-0">
          {/* Glow */}
          <div className="absolute inset-0 z-10 rounded-2xl bg-[radial-gradient(circle,rgba(7,157,251,0.3)_100%,rgba(0,0,0,0)_60%)] blur-md sm:blur-lg"></div>

          {/* Client Image */}
          <Image
            src="/client.png"
            alt="Client"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Client Text */}
        <div className="text-center sm:text-left">
          <p className="text-white text-base sm:text-xl leading-relaxed mb-2 sm:mb-4">
            “Walakulu feels like a real part of our team. It answers calls,
            books meetings, and talks to clients just like we would. It’s the
            first AI that truly understands our business.”
          </p>
          <h4 className="font-semibold text-base sm:text-lg text-white/80">
            Talia Treyer
          </h4>
          <p className="text-white/60 text-xs sm:text-sm">
            Operations Director @ Quantum Hospitality
          </p>
        </div>
      </div>
    </section>
  );
}
