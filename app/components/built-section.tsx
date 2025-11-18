"use client";

export default function BuiltSection() {
  return (
    <section className="w-full bg-background flex flex-col items-center justify-center px-4 sm:px-6 lg:px-16 py-16">
      {/* Subheading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 text-white">
        Built for Founders, by Founders
      </h2>

      {/* Paragraphs */}
      <div className="max-w-6xl text-center space-y-6 sm:space-y-8 text-sm sm:text-base md:text-xl text-white/90">
        <p>
          Running multiple projects, handling clients, managing social media,
          sourcing talent, we built tech to make our own lives easier. Then we
          realised: every business struggles with the same thing. Being always
          on.
        </p>

        <p>So, we decided to fix it.</p>

        <p>
          Walakulu was born out of necessity. A personal need that grew into a
          product vision. What started as a simple AI receptionist has become a
          learning, thinking sales assistant that grows with your company.
        </p>

        <p className="font-semibold">And this is just the beginning.</p>
      </div>
    </section>
  );
}
