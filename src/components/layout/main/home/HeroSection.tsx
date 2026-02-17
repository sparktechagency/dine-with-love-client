import heroImage from "@/assets/home/hero.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full relative flex items-center overflow-hidden bg-[#FFFFFF]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E5E7EB 1px, transparent 1px),
            linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 90%)",
        }}
      />
      <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="w-full space-y-5 md:space-y-7">
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900">
            Real Connections, One Dinner at a Time
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-600">
            Dine with Love redefines modern dating — replacing digital noise
            with meaningful moments. Meet compatible matches through exclusive
            dinners made for genuine conversations and true connection.
          </p>
          <Link href="/compatibility-test">
            <Button className="px-5 py-2 h-12 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-base font-medium rounded-lg">
              Take the Compatibility Test
            </Button>
          </Link>
        </div>

        {/* ── Right Column: Image ── */}
        <div className="relative flex justify-center lg:justify-end items-center w-full">
          <Image
            src={heroImage}
            alt="Couple on a romantic dinner date"
            className="object-cover object-center"
            width={580}
            height={480}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
