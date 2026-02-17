"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Grid Background Pattern - Large thin squares matching the image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F3F4F6 1px, transparent 1px),
            linear-gradient(to bottom, #F3F4F6 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Subtle Background Glows */}
      <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-[#FF3AB3]/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-[#5432C8]/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 py-12">
        {/* Left Column: Text Content */}
        <div className="max-w-xl space-y-10">
          <h1 className="text-5xl md:text-6xl font-bold text-[#8F3A3D] leading-[1.1] tracking-tight">
            Real Connections, One Dinner at a Time
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg font-medium">
            Dine with Love redefines modern dating — replacing digital noise
            with meaningful moments. Meet compatible matches through exclusive
            dinners made for genuine conversations and true connection.
          </p>
          <Link
            href="/test"
            className="inline-block bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-[0_10px_25px_rgba(255,58,179,0.3)] hover:shadow-[0_15px_35px_rgba(255,58,179,0.4)] transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Take the Compatibility Test
          </Link>
        </div>

        {/* Right Column: Image Container with Asymmetrical Rounding */}
        <div className="relative w-full max-w-[560px] mx-auto lg:ml-auto flex justify-end">
          {/* Main Image Container */}
          <div className="relative w-full max-w-[560px] h-[640px] overflow-hidden transition-all duration-500 rounded-tr-[120px] rounded-bl-[120px] bg-gray-100 group">
            {/* Actual Image - The URL from the user's design image logic */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
