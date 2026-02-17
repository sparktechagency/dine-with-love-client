"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const MatchingAdvisor = () => {
  const benefits = [
    "Personalized match recommendations",
    "Profile optimization and photo review",
    "Pre-date coaching and conversation tips",
    "24/7 support throughout your journey",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="inline-block bg-[#FDF2F2] text-[#FF56A5] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            Premium Services
          </span>
          <h2 className="text-4xl font-bold text-[#1F2937] mb-4 leading-tight">
            Hiring a Matching Advisor
          </h2>
          <p className="text-gray-800 font-bold text-lg mb-6">
            Need personalized help finding your perfect match?
          </p>
          <p className="text-gray-500 mb-8 leading-relaxed max-w-lg">
            Our expert advisors can guide you through compatibility insights,
            improve your profile, and help you prepare for your dinner
            experience. Get one-on-one support from certified relationship
            experts who understand what makes connections work.
          </p>

          <ul className="space-y-4 mb-10">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-gray-500 font-medium"
              >
                <CheckCircle2
                  className="w-6 h-6 text-[#374151]"
                  fill="#374151"
                  stroke="white"
                />
                {benefit}
              </li>
            ))}
          </ul>

          <Link
            href="/hire-advisor"
            className="inline-block bg-linear-to-r from-[#FF56A5] via-[#B131D4] to-[#4B39ED] text-white px-8 py-3 rounded-lg font-bold shadow-md hover:opacity-90 transition-opacity"
          >
            Hire a Matching Advisor
          </Link>
        </div>

        <div className="order-1 lg:order-2">
          <div className="rounded-[40px] overflow-hidden shadow-xl bg-gray-100 aspect-4/3 flex items-center justify-center border-4 border-white">
            <div className="text-gray-400 text-center">
              <p className="font-medium">Image of Advisor & Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchingAdvisor;
