"use client";

import FAQ from "@/components/layout/main/home/FAQ";
import Features from "@/components/layout/main/home/Features";
import HeroSection from "@/components/layout/main/home/HeroSection";
import HowItWorks from "@/components/layout/main/home/HowItWorks";
import MatchingAdvisor from "@/components/layout/main/home/MatchingAdvisor";
import SuccessStories from "@/components/layout/main/home/SuccessStories";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <HowItWorks />
      <MatchingAdvisor />
      <Features />
      <SuccessStories />
      <FAQ />
    </div>
  );
};

export default Home;
