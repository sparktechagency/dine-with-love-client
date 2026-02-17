import advisorImage from "@/assets/home/advisor.png";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const MatchingAdvisor = () => {
  const benefits = [
    "Personalized match recommendations",
    "Profile optimization and photo review",
    "Pre-date coaching and conversation tips",
    "24/7 support throughout your journey",
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="px-4 py-2 rounded text-sm font-bold mb-6 bg-[#F9E6E6] w-fit">
            <span className="inline-block bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-clip bg-clip-text text-transparent ">
              Premium Services
            </span>
          </div>
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
            {benefits?.map((benefit, index) => (
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

          <Button className="bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white px-8 h-12 cursor-pointer">
            Hire a Matching Advisor
          </Button>
        </div>

        <div className="order-1 lg:order-2">
          <Image
            src={advisorImage}
            alt="Advisor"
            className="w-full h-full object-cover object-center"
            width={520}
            height={580}
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default MatchingAdvisor;
