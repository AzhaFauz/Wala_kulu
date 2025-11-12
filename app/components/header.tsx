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

  // Detect scroll for shadow & blur
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
            ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-white/30"
            : "bg-background border-b border-white/30"
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
            <h1 className="text-white text-xl sm:text-2xl font-semibold">
              Walakulu
            </h1>
          </div>

          {/* Center - Navbar (Desktop) */}
          <nav className="hidden md:flex items-center gap-10 border border-white/30 rounded-full px-6 py-2 bg-background relative">
            {navItems.map((item) =>
              item === "Features" ? (
                <div
                  key={item}
                  className="relative flex items-center gap-1 text-white/60 hover:text-white transition-colors text-sm font-medium cursor-pointer"
                  onMouseEnter={() => setFeaturesOpen(true)}
                  onMouseLeave={() => setFeaturesOpen(false)}
                >
                  <span className="flex items-center gap-1">
                    {item}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        featuresOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>

                  {/* Dropdown */}
                  {featuresOpen && (
                    <div className="absolute top-full mt-2 left-0 bg-background border border-white/15 rounded-lg shadow-lg w-48 py-2 z-50 flex flex-col">
                      {featuresItems.map((feature) => (
                        <Link
                          key={feature}
                          href={`#${feature.toLowerCase().replace(" ", "-")}`}
                          className="px-4 py-2 text-white/60 hover:text-white text-sm transition-colors"
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
                  className="flex items-center gap-1 text-white/60 hover:text-white transition-colors text-sm font-medium"
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          {/* Right - Join Waitlist Button & Hamburger */}
          <div className="relative z-50 flex items-center gap-4">
            {/* Desktop Button */}
            <div className="relative group hidden md:block">
              <div className="absolute inset-0 rounded-xl border-2 border-white/15"></div>
              <button className="relative z-10 bg-[#079DFB] hover:bg-[#0588DC] text-white font-medium px-5 py-2 rounded-xl transition-colors duration-300">
                Join waitlist
              </button>
            </div>

            {/* Hamburger Menu (Mobile) */}
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
          className={`md:hidden bg-background/80 backdrop-blur-md border-t border-white/15 px-4 overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
          }`}
        >
          <nav className="flex flex-col gap-4 items-center">
            {navItems.map((item) =>
              item === "Features" ? (
                <div key={item} className="flex flex-col w-full items-center">
                  <button
                    className="flex items-center gap-1 text-white/60 hover:text-white text-base font-medium w-full justify-center transition-all"
                    onClick={() => setFeaturesOpen(!featuresOpen)}
                  >
                    {item}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        featuresOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Mobile Dropdown */}
                  {featuresOpen && (
                    <div className="flex flex-col w-full items-center mt-2 gap-1 bg-background/80 backdrop-blur-md rounded-lg">
                      {featuresItems.map((feature) => (
                        <Link
                          key={feature}
                          href={`#${feature.toLowerCase().replace(" ", "-")}`}
                          className="px-4 py-2 text-white/60 hover:text-white text-base w-full text-center transition-colors"
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
                  className="flex items-center gap-1 text-white/60 hover:text-white transition-colors text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            )}

            {/* Mobile Join Waitlist Button */}
            <button className="mt-2 bg-[#079DFB] hover:bg-[#0588DC] text-white font-medium px-4 sm:px-5 py-2 rounded-xl w-full transition-colors duration-300">
              Join waitlist
            </button>
          </nav>
        </div>
      </header>

      {/* Spacer div to prevent content overlap due to fixed header */}
      <div className="h-24 md:h-28" />
    </>
  );
}
