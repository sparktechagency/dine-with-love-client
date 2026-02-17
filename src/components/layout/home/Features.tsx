import image1 from "@/assets/home/feature1.png";
import image2 from "@/assets/home/feature2.png";
import image3 from "@/assets/home/feature3.png";
import { Heart, MessageSquareHeart, Sparkles } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <MessageSquareHeart className="w-5 h-5" />,
    title: "Real Connections, In-Person",
    description:
      "At Dine With Love, we believe true chemistry can't be built through endless texts or swipes. Real connections happen when two people share meaningful conversations face-to-face. Each match leads to a curated dinner experience designed to spark genuine emotion, laughter, and warmth. By bringing people together in comfortable, real-world settings, Dine With Love turns ordinary dinners into unforgettable moments — creating trust, authenticity, and lasting bonds that go far beyond the digital world.",
    imageUrl: image1,
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Compatibility Test",
    description:
      "Our intelligent matching system goes beyond appearances to create truly meaningful connections. By analyzing personality traits, lifestyle choices, and dining preferences, Dine With Love ensures every match feels natural and comfortable. Whether you're drawn to candlelit Italian dinners, vibrant sushi nights, or relaxed vegan brunches, you'll be paired with someone who shares your tastes, values, and outlook on life. With thoughtful matching at its core, every dining experience becomes an opportunity for genuine compatibility and effortless conversation.",
    imageUrl: image2,
    reverse: true,
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Effortless, Curated Experiences",
    description:
      "At Dine With Love, we take the stress out of dating by creating seamless, thoughtfully planned experiences from start to finish. Every detail — from the reservations and group size to the ambiance and atmosphere — is carefully curated to ensure comfort and connection. You don't have to worry about planning, logistics, or awkward first meetings; simply arrive, relax, and let the evening unfold naturally. It's a premium yet effortless way to meet new people, share a meal, and discover where real chemistry might lead.",
    imageUrl: image3,
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Features of &quot;Dine With Love&quot;
          </h2>
          <p className="text-gray-500 leading-relaxed">
            More than just dating — it&apos;s about authentic moments shared
            over a meal. Our features bring together compatibility, comfort, and
            real-world connection.
          </p>
        </div>

        <div className="space-y-32">
          {features?.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div
                  className={`size-13 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-full flex items-center justify-center`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed ">
                  {feature.description}
                </p>
              </div>

              <div className="flex-1 w-full max-w-[500px] mx-auto lg:mx-0">
                <div className="relative h-[300px] sm:h-[400px] w-full rounded-[30px] overflow-hidden shadow-xl">
                  <Image
                    src={feature.imageUrl.src}
                    alt={feature.title}
                    className="w-full h-full object-cover object-center scale-110 hover:scale-100 transition-transform duration-700"
                    fill
                    quality={100}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
