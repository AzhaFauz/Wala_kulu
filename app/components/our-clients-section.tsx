"use client";

import Image from "next/image";

export default function OurClientsSection() {
  return (
    <section className="relative w-full bg-black text-white flex flex-col items-center justify-center py-16 px-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[80px_80px] opacity-40 pointer-events-none"></div>

      {/* Subtle blue glow behind card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-10 w-[700px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(7,157,251,0.2)_0%,rgba(0,0,0,1)_75%)] blur-3xl"></div>

      {/* Section Heading */}
      <div className="relative text-center mb-16 z-10">
        <h2 className="text-4xl sm:text-6xl font-bold mb-4">Our Clients</h2>
        <p className="text-white/70 text-sm sm:text-xl leading-relaxed">
          Hear how businesses use Walakulu to stay connected, close more leads,{" "}
          <br className="hidden sm:block" />
          and never miss a call.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="relative z-10 max-w-4xl w-full rounded-2xl border border-[#079DFB]/30 bg-[linear-gradient(135deg,rgba(7,157,251,0.05)_0%,rgba(255,255,255,0.05)_50%,rgba(7,157,251,0.05)_100%)] p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-10 backdrop-blur-sm">
        {/* Client Image */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0">
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
          <p className="text-white leading-relaxed mb-4 text-xl">
            “Walakulu feels like a real part of our team. It answers calls,
            books meetings, and talks to clients just like we would. It’s the
            first AI that truly understands our business.”
          </p>
          <h4 className="font-semibold text-lg text-white/80">Talia Treyer</h4>
          <p className="text-white/60 text-sm">
            Operations Director @ Quantum Hospitality
          </p>
        </div>
      </div>
    </section>
  );
}
