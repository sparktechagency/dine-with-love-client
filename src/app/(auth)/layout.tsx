import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-20 bg-white min-h-screen">
        <div className="w-full max-w-[480px]">{children}</div>
      </div>
      <div className="hidden lg:flex w-1/2 bg-gray-900 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop"
          alt="Fine Dining Experience"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white p-12 text-center">
          <Link href="/" className="mb-8 flex flex-col items-center group">
            <div className="size-24 border-4 border-white rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <div className="size-12 text-white fill-white">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
            <h1 className="text-6xl font-black tracking-tighter uppercase leading-none">
              Dine <br /> <span className="text-white/80">With Love</span>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
