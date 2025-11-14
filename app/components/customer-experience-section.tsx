"use client";

import {
  LayoutDashboard,
  CalendarCheck,
  FileText,
  BadgeCheck,
  UserCheck,
  GitCompareArrows,
  PhoneCall,
  BellRing,
  BarChart3,
} from "lucide-react";

export default function CustomerExperienceSection() {
  const features = [
    {
      icon: <LayoutDashboard className="w-5 h-5 text-white" />,
      title: "Smart Call Dashboard",
      desc: "Monitor every call and message in one intuitive workspace.",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-white" />,
      title: "Lead Qualification",
      desc: "Identifies genuine prospects so your team focuses only on real buyers.",
    },
    {
      icon: <PhoneCall className="w-5 h-5 text-white" />,
      title: "Follow-up Automation",
      desc: "Sends texts and emails post-call, keeping your leads engaged without manual effort.",
    },
    {
      icon: <CalendarCheck className="w-5 h-5 text-white" />,
      title: "Automated Scheduling",
      desc: "Wakaluku books meetings directly to your calendar and updates your CRM instantly.",
    },
    {
      icon: <GitCompareArrows className="w-5 h-5 text-white" />,
      title: "Seamless Integrations",
      desc: "Connect with tools you already use from HubSpot to Slack in a few clicks.",
    },
    {
      icon: <BellRing className="w-5 h-5 text-white" />,
      title: "Automated alerts",
      desc: "Automatic notifications about your SEO health, including quick fixes.",
    },
    {
      icon: <FileText className="w-5 h-5 text-white" />,
      title: "Personalized Call Scripts",
      desc: "Train your AI receptionist to speak your brand’s language. Warm, clear, and persuasive.",
    },
    {
      icon: <BadgeCheck className="w-5 h-5 text-white" />,
      title: "Adaptive Learning",
      desc: "Improves daily with every interaction, adapting to your tone and customer behaviour.",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-white" />,
      title: "Insight Reports",
      desc: "View analytics on calls, conversions, and sentiment. Understand what drives results.",
    },
  ];

  return (
    <section
      className="w-full px-4 sm:px-8 lg:px-20 py-20 
    bg-linear-to-br from-[#0F6CBD] via-[#063b63] to-[#00070F] text-white"
    >
      <div className="max-w-7xl mx-auto text-left">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-14 text-left">
          Elevate your
          <br /> customer experience.
        </h2>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 text-left">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-2 max-w-sm text-left"
            >
              <div className="flex items-center gap-2 text-left">
                {item.icon}
                <h4 className="text-lg font-semibold">{item.title}</h4>
              </div>
              <p className="text-white/70 text-sm leading-relaxed text-left">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
