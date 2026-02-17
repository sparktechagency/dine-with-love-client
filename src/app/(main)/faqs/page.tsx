import FAQ from "@/components/layout/home/FAQ";
import { Heart, Mail, MessageCircle, Phone } from "lucide-react";

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-10">
      <FAQ />

      {/* Support Options Section */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-500 text-lg">
              We&apos;re here to help you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Live Chat",
                text: "Available 24/7 in your dashboard.",
                button: "Open Chat",
              },
              {
                icon: Mail,
                title: "Email Support",
                text: "Response within 24 hours.",
                button: "Send Email",
              },
              {
                icon: Phone,
                title: "Phone Support",
                text: "Mon-Fri (9am - 5pm).",
                button: "Call us",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[30px] border border-gray-100 text-center"
              >
                <div className="size-14 rounded-2xl bg-pink-50 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-[#FF3AB3] size-7" />
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 mb-6">{item.text}</p>
                <button className="text-[#B131D4] font-bold hover:underline cursor-pointer">
                  {item.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-linear-to-r from-[#FF3AB3] to-[#5432C8] rounded-[40px] p-12 text-white flex flex-col md:flex-row items-center gap-8">
            <div className="size-20 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <Heart className="size-10 fill-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Community Values</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                At Dine With Love, we value respect, authenticity, and kindness.
                Our community is built on the foundation of safety and mutual
                understanding, ensuring that every member feels comfortable
                during their dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
