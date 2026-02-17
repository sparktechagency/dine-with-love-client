import { Heart, ShieldCheck, Users, Utensils } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                The Dine With Love Story
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                In an era of endless swiping and digital noise, we realized that
                something fundamental was missing: real, face-to-face
                connection. We started with a simple question: &quot;What if we
                could skip the small talk and jump straight into meaningful
                experiences?&quot;
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded by a group of passionate individuals who believe in the
                power of empathy and authenticity, Dine With Love was designed
                to nurture relationships in the most natural environment
                possible — over a beautifully curated dinner.
              </p>
            </div>
            <div className="bg-gray-100 h-[400px] rounded-[40px] overflow-hidden relative">
              {/* Image placeholder - normally you'd use a real image here */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Heart className="size-24 opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Authenticity",
                text: "We prioritize real emotions over digital filters.",
              },
              {
                icon: Users,
                title: "Community",
                text: "Building a safe space for meaningful interactions.",
              },
              {
                icon: Utensils,
                title: "Excellence",
                text: "Curating only the finest dining experiences.",
              },
              {
                icon: ShieldCheck,
                title: "Safety",
                text: "Your trust and security are our top priorities.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[30px] text-center border border-gray-100"
              >
                <div className="size-16 bg-pink-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-[#FF3AB3] size-8" />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-500 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { val: "50,000+", lab: "Matched Pairs" },
              { val: "200+", lab: "Premium Restaurants" },
              { val: "4.9/5", lab: "User Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-black text-gray-900 mb-2 font-rubik">
                  {stat.val}
                </div>
                <div className="text-gray-500 font-bold uppercase tracking-widest text-sm">
                  {stat.lab}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">
            Building a Future of Real Connections
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our vision is to become the global standard for meaningful human
            connection. We are constantly expanding our reach, partnering with
            more premium restaurants, and refining our compatibility algorithms
            to ensure that every Dine With Love experience is better than the
            last.
          </p>
        </div>
      </section>
    </main>
  );
}
