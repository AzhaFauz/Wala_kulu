"use client";

export default function TrustedBySection() {
  const categories = [
    "Architecture",
    "Software",
    "Cleaning",
    "Healthcare",
    "Hotels",
    "Real Estate",
    "Law",
    "E-commerce",
  ];

  return (
    <section className="w-full bg-background text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-16 py-8 sm:py-15">
      {/* Sub-sub-heading */}
      <h3 className="text-white/80 text-center text-sm sm:text-sm md:text-xl font-medium mb-8 sm:mb-12">
        Trusted by startups and everyday businesses in
      </h3>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl w-full">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center border border-white/30 rounded-xl py-4 sm:py-6 px-3 sm:px-6 text-center text-xs sm:text-sm md:text-xl font-medium hover:scale-105 transition-transform cursor-default"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}
