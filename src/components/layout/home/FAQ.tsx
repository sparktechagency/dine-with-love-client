"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: 'How does "Dine in Love" work?',
    answer:
      "Dine in Love connects like-minded people through curated dining experiences. Simply create your profile, select your preferences, and we'll match you with someone who shares your taste and vibe.",
  },
  {
    question: "Is this a dating app or a dining platform?",
    answer:
      "It's both! We combine the intentionality of dating with the casual comfort of a shared meal in a premium restaurant setting.",
  },
  {
    question: "How do I book a dining experience?",
    answer:
      "Once you're matched, you'll receive available time slots and restaurant options. Just pick one and secure your booking through the platform.",
  },
  {
    question: "Can restaurants partner with Dine in Love?",
    answer:
      "Yes, we are always looking for premium dining venues to host our matches. Interested restaurants can contact us through our business portal.",
  },
  {
    question: "How are matches decided?",
    answer:
      "Our intelligent matching algorithm uses the compatibility test results, dining habits, and shared interests to find your ideal companion.",
  },
  {
    question: "How can I contact support?",
    answer:
      "Our support team is available 24/7 through the chat button in your dashboard or via email at support@dine-with-love.com.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            FAQs
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Everything you need to know about the product and billing.
            Can&apos;t find the answer you&apos;re looking for? Please{" "}
            <a href="#" className="underline font-bold text-gray-900">
              chat to our friendly team
            </a>
            .
          </p>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 pb-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left group py-2"
              >
                <span
                  className={`text-lg font-bold transition-all duration-300 ${openIndex === index ? "text-[#B131D4]" : "text-gray-800"}`}
                >
                  {index + 1}. {faq.question}
                </span>
                <div
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[#B131D4]" : "text-gray-400"}`}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden text-gray-500 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
