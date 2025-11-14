"use client";

export default function CustomerSupportSection() {
  return (
    <section className="relative w-full flex justify-center items-center py-24 px-6 rounded-3xl border border-white/30 overflow-hidden bg-background">
      {/* Blue glow only at top center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(7,157,251,0.8)_0%,rgba(7,157,251,0.4)_15%,rgba(0,0,0,1)_45%)]"></div>

      {/* Subtle white grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[80px_80px] opacity-40 pointer-events-none"></div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
          AI-driven Customer <br /> Support 24/7
        </h2>

        {/* Email input + button */}
        <div className="flex flex-col sm:flex-row items-center gap-2 bg-transparent border border-white/30 rounded-xl w-full max-w-md mb-4 p-1">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 bg-transparent text-white placeholder-white/60 px-5 py-3 outline-none text-sm rounded-l-lg"
          />
          <button className="bg-white text-black font-medium px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors">
            Join waitlist
          </button>
        </div>

        <p className="text-white/70 text-sm sm:text-base mt-2">
          Join the waitlist and be the first to access Walakulu’s private beta.
        </p>
      </div>
    </section>
  );
}
