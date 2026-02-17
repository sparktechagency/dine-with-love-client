"use client";

import FAQ from "@/components/layout/home/FAQ";
import Features from "@/components/layout/home/Features";
import HeroSection from "@/components/layout/home/HeroSection";
import HowItWorks from "@/components/layout/home/HowItWorks";
import MatchingAdvisor from "@/components/layout/home/MatchingAdvisor";
import SuccessStories from "@/components/layout/home/SuccessStories";

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
