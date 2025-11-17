"use client";

import Image from "next/image";
import clsx from "clsx";

export default function OptimizeSection() {
  const cards = [
    {
      type: "dark",
      title: "24/7 Voice Agents",
      description:
        "Walakulu answers every call, every time. It greets customers, handles inquiries, and even closes leads, all in your brand’s voice.",
      image: "/Voice.png",
      span: "md:col-span-4",
    },
    {
      type: "gradient",
      title: "Smart Conversation Dashboard",
      description:
        "Listen, review, and refine your AI receptionist’s conversations in one place. Track calls, view messages, and sync with your CRM automatically.",
      image: "/Conversation.png",
      span: "md:col-span-8",
    },
    {
      type: "gradient",
      title: "Context Memory",
      description:
        "Walakulu remembers past interactions, ensuring every caller feels recognized and valued.",
      image: "/Widget.png",
      span: "md:col-span-8",
    },
    {
      type: "dark",
      title: "Smart Call Dashboard",
      description:
        "Track conversations, missed calls, and follow-ups, all synced automatically with your CRM.",
      image: "/Smart.png",
      span: "md:col-span-4",
    },
  ];

  return (
    <section className="w-full bg-black py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-12 sm:mb-16">
          Harness the power of AI, making <br />
          search engine optimization intuitive <br />
          and effective for all skill levels.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className={clsx(
                "relative rounded-2xl overflow-hidden border min-h-[320px] md:h-[330px] flex flex-col transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl",
                card.span,
                card.type === "dark"
                  ? "border-white/30 bg-black p-4 sm:p-6"
                  : "border-black bg-black"
              )}
            >
              {/* ---- GRADIENT CARD IMAGE FULL BACKGROUND ---- */}
              {card.type === "gradient" && (
                <>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain opacity-100"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#079DFB]/80"></div>
                  {/* Semi-transparent dark layer behind text for readability */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-black/30 z-20 rounded-t-lg text-left max-w-full animate-fadeUp">
                    <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed sm:max-w-md max-w-full">
                      {card.description}
                    </p>
                  </div>
                </>
              )}

              {/* ---- DARK CARD IMAGE ---- */}
              {card.type === "dark" && (
                <>
                  <div className="absolute left-1/2 -translate-x-1/2 top-3 sm:top-6">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={150}
                      height={150}
                      className="object-contain sm:w-36 sm:h-36"
                    />
                  </div>
                  {/* Text section for dark cards */}
                  <div className="absolute text-left left-6 right-6 bottom-6 sm:bottom-8 z-20">
                    <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
