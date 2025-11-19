"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["About Us", "Changelog", "Features", "Reviews", "Pricing"];
  const featuresItems = ["Feature 1", "Feature 2", "Feature 3"];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-white/20"
            : "bg-background border-b border-white/10"
        }`}
      >
        <div className="max-w-full mx-auto flex items-center justify-between px-4 sm:px-6 py-4 md:py-6">
          {/* Left - Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/Logo.png"
              alt="Walakulu Logo"
              width={50}
              height={50}
              className="object-contain"
            />

            {/* Hide text logo on mobile */}
            <h1 className="hidden md:block text-white text-xl font-semibold">
              Walakulu
            </h1>
          </div>

          {/* Center - Desktop Navbar */}
          <nav className="hidden md:flex items-center gap-10 border border-white/20 rounded-full px-6 py-2 bg-background/50 backdrop-blur-sm">
            {navItems.map((item) =>
              item === "Features" ? (
                <div
                  key={item}
                  className="relative flex items-center gap-1 text-white/60 hover:text-white cursor-pointer transition-all"
                  onMouseEnter={() => setFeaturesOpen(true)}
                  onMouseLeave={() => setFeaturesOpen(false)}
                >
                  <span className="flex items-center gap-1">
                    {item}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        featuresOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>

                  {featuresOpen && (
                    <div className="absolute top-full mt-3 left-0 bg-background/90 border border-white/10 rounded-lg shadow-lg w-48 py-2 z-50 animation-fadeIn">
                      {featuresItems.map((feature) => (
                        <Link
                          key={feature}
                          href={`#${feature.toLowerCase().replace(" ", "-")}`}
                          className="px-4 py-2 text-white/60 hover:text-white block text-sm transition-colors"
                        >
                          {feature}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white/60 hover:text-white transition-all text-sm font-medium"
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          {/* Right Side Controls */}
          <div className="relative z-50 flex items-center gap-3">
            {/* Mobile Join Button (Option B) */}
            <button
              className="md:hidden text-white font-medium px-4 py-2 rounded-full text-sm transition-all duration-300 border max-md:hover:scale-105 max-md:hover:shadow-[0_0_12px_rgba(7,157,251,0.6)] max-md:hover:bg-[#079DFB80]"
              style={{
                backgroundColor: "#079DFB66",
                borderColor: "#FFFFFF26",
                borderWidth: "1px",
              }}
            >
              Join waitlist
            </button>

            {/* Desktop Join Button */}
            <div className="hidden md:block">
              <button className="bg-[#079DFB] hover:bg-[#0588DC] text-white font-medium px-5 py-2 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-md shadow-[#079DFB]/30">
                Join waitlist
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-background/90 backdrop-blur-lg border-t border-white/10 px-4 overflow-hidden transition-[max-height,opacity] duration-300 ${
            mobileMenuOpen
              ? "max-h-[500px] py-4 opacity-100 animation-fadeIn"
              : "max-h-0 py-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 items-center">
            {navItems.map((item) =>
              item === "Features" ? (
                <div key={item} className="flex flex-col w-full items-center">
                  <button
                    className="flex items-center gap-1 text-white/60 hover:text-white text-base font-medium w-full justify-center"
                    onClick={() => setFeaturesOpen(!featuresOpen)}
                  >
                    {item}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        featuresOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {featuresOpen && (
                    <div className="flex flex-col w-full items-center mt-2 gap-1 bg-background/50 backdrop-blur-sm rounded-lg py-2 animation-fadeIn">
                      {featuresItems.map((feature) => (
                        <Link
                          key={feature}
                          href={`#${feature.toLowerCase().replace(" ", "-")}`}
                          className="px-4 py-2 text-white/60 hover:text-white w-full text-center transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {feature}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white/60 hover:text-white text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>
      </header>

      {/* fade-in animation */}
      <style jsx global>{`
        .animation-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
