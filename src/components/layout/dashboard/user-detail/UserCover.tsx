"use client";

import Image from "next/image";

export const UserCover = () => {
  return (
    <div className="relative w-full h-[400px]">
      <Image
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop"
        alt="User Cover"
        fill
        className="object-cover"
      />
    </div>
  );
};
