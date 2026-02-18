"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const UserDetail = () => {
  const router = useRouter();

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-3 text-gray-900 font-bold hover:text-primary transition-colors cursor-pointer"
      >
        <ArrowLeft className="size-6" />
        <span className="text-xl">View Detail</span>
      </button>

      <div className="bg-white rounded-md border border-gray-100 overflow-hidden flex flex-col gap-8 pb-8 shadow-none">
        <div className="relative w-full h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop"
            alt="User Cover"
            fill
            className="object-cover"
          />
        </div>

        <div className="px-8 space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-900">Sara Zamin</h3>
            <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-3xl">
              Sweet smile, sarcastic mind Love deep talks, late-night snacks,
              and random adventures. Let&apos;s see if we vibe or just blame the
              algorithm.
            </p>
          </div>

          <div className="flex items-center gap-12">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-gray-400">
                Match 97%
              </span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-[#FF3AB3] to-[#5432C8]"
                  style={{ width: `87%` }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase">
                Distance
              </span>
              <span className="text-sm font-bold text-gray-900">3km away</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900">
              Common Interests
            </h4>
            <div className="flex flex-wrap gap-3">
              {["Coffee", "Movies", "Road restaurants", "Nature"].map(
                (interest) => (
                  <div
                    key={interest}
                    className="px-4 py-2 rounded-md border border-gray-200 text-xs font-bold text-gray-500 bg-gray-50/30"
                  >
                    {interest}
                  </div>
                ),
              )}
            </div>
          </div>

          <Button className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-semibold border-none shadow-none">
            Connection Request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
