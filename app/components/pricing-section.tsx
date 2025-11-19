"use client";

export default function PricingSection() {
  const plans = [
    {
      title: "Startup",
      price: "$199",
      features: [
        "Handle up to 100 calls per month",
        "AI receptionist setup & training",
        "Email + text follow-up automation",
        "Basic CRM integration",
      ],
      highlight: false,
      buttonColor: "bg-gray-800 text-white hover:bg-gray-900",
    },
    {
      title: "Growth",
      price: "$599",
      features: [
        "Unlimited calls",
        "Meeting scheduling",
        "CRM + calendar sync",
        "Custom voice & tone configuration",
        "Analytics dashboard access",
        "Link Optimization",
      ],
      highlight: true,
      buttonColor: "bg-[#079DFB] text-white hover:bg-[#057ACC]",
    },
    {
      title: "Customise",
      price: "$1299",
      features: [
        "Dedicated AI voice model training",
        "Advanced CRM integrations",
        "Multi-language support",
        "Dedicated support engineer",
        "Priority feature access",
        "Link Optimization",
        "Multi-user access",
        "API Integration",
      ],
      highlight: false,
      buttonColor: "bg-gray-800 text-white hover:bg-gray-900",
    },
  ];

  return (
    <section className="relative w-full bg-background text-white flex flex-col items-center justify-center py-10 sm:py-20 px-4 sm:px-6 md:px-16 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
          Pricing
        </h2>
        <p className="text-white/90 text-sm sm:text-base md:text-xl max-w-md mx-auto">
          Choose a plan that fits your business and let Walakulu handle calls,
          scheduling, and follow-ups 24/7.
        </p>
      </div>

      {/* Blue Glow Under Cards */}
      <div
        className="absolute bottom-[-120px] sm:bottom-[-220px] left-1/2 -translate-x-1/2 
          w-[600px] sm:w-[1600px] h-[300px] sm:h-[900px] 
          bg-[radial-gradient(circle_at_center,rgba(7,157,251,0.55)_0%,rgba(7,157,251,0.25)_35%,rgba(0,0,0,1)_60%)] 
          blur-[80px] sm:blur-[180px] opacity-80 pointer-events-none"
      ></div>

      {/* Pricing Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl w-full">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative flex flex-col items-start text-left border border-white/20 
            rounded-2xl p-4 sm:p-6 md:p-10 transition-all duration-300 ease-out w-full
            transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl
            ${
              plan.highlight
                ? "overflow-hidden border-[#079DFB] shadow-[0_0_30px_rgba(7,157,251,0.4)] pulse-glow-hover"
                : "bg-transparent hover:shadow-lg hover:shadow-black/20"
            }`}
          >
            {/* Highlight BG */}
            {plan.highlight && (
              <>
                <div className="absolute inset-0 bg-linear-to-b from-black to-[#079DFB] opacity-90"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[80px_80px] opacity-30 pointer-events-none"></div>
              </>
            )}

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full w-full">
              <h3 className="text-lg sm:text-xl font-semibold mb-1">
                {plan.title}
              </h3>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                {plan.price}
              </p>

              {/* Gradient Horizontal Line */}
              <div className="relative w-full mb-4 sm:mb-6">
                <hr className="border-t border-white/10" />
                <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#079DFB]/20 to-transparent"></div>
              </div>

              {/* Features */}
              <ul className="space-y-1 sm:space-y-2 text-white/90 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base w-full">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white text-base leading-relaxed">
                      ✓
                    </span>
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-auto w-full rounded-xl px-4 sm:px-5 py-2 sm:py-3 font-medium text-xs sm:text-sm md:text-base transition-colors border border-white/30 ${plan.buttonColor}`}
              >
                Join waitlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
