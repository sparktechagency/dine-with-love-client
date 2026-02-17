"use client";

import { ClipboardCheck, CreditCard, Users, Utensils, Zap } from "lucide-react";

const steps = [
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: "Take the test",
    description:
      "Complete our compatibility questionnaire to build your unique profile.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Get the Match",
    description: "Our algorithm pairs you with compatible dinner companions.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Book and Pay",
    description: "Select your preferred time slot and secure your spot.",
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Enjoy Dinner",
    description: "Meet at a curated restaurant for an authentic experience.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Connect",
    description: "Vote on chemistry and unlock chat with mutual matches.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-[#FDF2F2]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#6D2E2E] mb-4">How it Works</h2>
        <p className="text-[#A16262] mb-16 text-lg font-medium">
          Five simple steps to meaningful connections
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-[#8B3B3B] text-white rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#6D2E2E] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[200px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
