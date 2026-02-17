"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    rating: 5,
    text: "I met my partner through DineMatch! The dinner setting made everything feel natural and real.",
    author: "Dana Jones",
    avatar: "/placeholder-avatar.jpg",
  },
  {
    rating: 4,
    text: "Finally, a dating app that gets people off their phones and into real conversations.",
    author: "Morgan Jahn",
    avatar: "/placeholder-avatar.jpg",
  },
  {
    rating: 5,
    text: "The compatibility test really works. Every dinner has been with genuinely interesting people.",
    author: "Olivia Manson",
    avatar: "/placeholder-avatar.jpg",
  },
  {
    rating: 5,
    text: "I met my partner through DineMatch! The dinner setting made everything feel natural and real.",
    author: "Dana Jones",
    avatar: "/placeholder-avatar.jpg",
  },
  {
    rating: 4,
    text: "Finally, a dating app that gets people off their phones and into real conversations.",
    author: "Morgan Jahn",
    avatar: "/placeholder-avatar.jpg",
  },
  {
    rating: 5,
    text: "The compatibility test really works. Every dinner has been with genuinely interesting people.",
    author: "Olivia Manson",
    avatar: "/placeholder-avatar.jpg",
  },
];

const SuccessStories = () => {
  return (
    <section className="w-full py-24 bg-[#FDF2F2]/50">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-gray-500 font-medium">
            Real people Real connection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-transparent p-6 rounded-2xl flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "fill-[#A16262] text-[#A16262]" : "fill-gray-200 text-gray-200"}`}
                  />
                ))}
              </div>
              <p className="text-[#6D2E2E] font-bold text-lg leading-snug">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden" />
                <span className="text-gray-800 font-bold text-sm tracking-wide">
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
