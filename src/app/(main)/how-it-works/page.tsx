import HowItWorks from "@/components/layout/home/HowItWorks";
import { Calendar, Search, Star } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <main className="min-h-screen">
      <HowItWorks />

      {/* Detailed Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-rubik">
                Our Mission: Making Connections Natural
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                In a world dominated by digital noise, Dine With Love was born
                from a simple belief: the best connections happen over a great
                meal. We&apos;ve removed the anxiety of small talk and the
                ambiguity of traditional dating.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Search,
                    title: "Deep Compatibility",
                    text: "Our test goes beyond surface level info.",
                  },
                  {
                    icon: Calendar,
                    title: "Hassle-Free Planning",
                    text: "We handle the restaurant and time for you.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="size-12 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
                      <item.icon className="text-[#FF3AB3] size-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-linear-to-br from-pink-50 to-purple-50 rounded-lg p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Why Dine With Love?</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Star className="size-4 text-yellow-400 fill-yellow-400" />
                    Verified profiles only
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="size-4 text-yellow-400 fill-yellow-400" />
                    Premium restaurant partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="size-4 text-yellow-400 fill-yellow-400" />
                    Safety first environment
                  </li>
                </ul>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 size-40 bg-white/40 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">The Dine Experience</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every dinner is a new story waiting to be told. Whether you meet
            your life partner or make a lifelong friend, the experience is
            designed to be enriching, comfortable, and memorable. We handle the
            details, you handle the conversation.
          </p>
        </div>
      </section>
    </main>
  );
};

export default HowItWorksPage;
