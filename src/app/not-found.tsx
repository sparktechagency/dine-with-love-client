import { Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      <div className="size-24 bg-pink-50 rounded-full flex items-center justify-center mb-8">
        <Search className="size-12 text-[#FF3AB3]" />
      </div>
      <h1 className="text-6xl font-black text-gray-900 mb-4 font-rubik">404</h1>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-gray-500 text-center max-w-md mb-10 leading-relaxed">
        Oops! The dinner table you&apos;re looking for has already been cleared.
        It seems this page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg text-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
}
