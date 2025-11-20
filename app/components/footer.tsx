"use client";

import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const links = ["Company", "About Us", "Changelog", "Features", "Pricing"];

  const socialIcons = [
    {
      icon: <Facebook size={28} />,
      href: "https://www.facebook.com/getwalakulu",
    },
    {
      icon: <Instagram size={28} />,
      href: "https://www.instagram.com/getwalakulu",
    },
    {
      icon: <Linkedin size={28} />,
      href: "https://www.linkedin.com/company/walakulu/",
    },
  ];

  return (
    <footer className="w-full bg-background border-t border-white/30">
      <div className="max-w-full mx-auto flex flex-col items-center px-4 sm:px-6 py-10 gap-6 sm:gap-8">
        {/* Logo + Brand Name */}
        <div className="flex flex-col items-center gap-1">
          <Image
            src="/Logo.png"
            alt="Walakulu Logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <h1 className="text-white text-xl sm:text-2xl font-semibold">
            Walakulu
          </h1>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-white/60 hover:text-white transition-colors text-sm sm:text-base font-medium"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
          {socialIcons.map(({ icon, href }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              {icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-white text-xs sm:text-sm mt-6 text-center">
          © {new Date().getFullYear()} Walakulu AI, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
