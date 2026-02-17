"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Your Age range?",
    options: [
      { id: "age-1", label: '13-18 years: "Focusing on school & friendships"' },
      { id: "age-2", label: '19-28 years: "Building a career & exploring"' },
      { id: "age-3", label: '29-40 years: "Looking for stability & growth"' },
      { id: "age-4", label: '41-65+ years: "Experienced & life-ready"' },
    ],
  },
  {
    id: 2,
    title: "Your personality?",
    options: [
      { id: "pers-1", label: "Shy Soul" },
      { id: "pers-2", label: "Introvert" },
      { id: "pers-3", label: "Bold Leader" },
      { id: "pers-4", label: "Open-Minded" },
    ],
  },
  {
    id: 3,
    title: "Your preferred restaurant's type?",
    options: [
      { id: "rest-1", label: "Coffee house" },
      { id: "rest-2", label: "Road restaurants" },
      { id: "rest-3", label: "Forest villa" },
      { id: "rest-4", label: "5-star hotel" },
    ],
  },
  {
    id: 4,
    title: "Your first date's style?",
    options: [
      { id: "date-1", label: "Walking in mirror of front" },
      { id: "date-2", label: "Heartwarming outdoor space" },
      { id: "date-3", label: "Intimate candle dinner" },
      { id: "date-4", label: "Fun & fast" },
    ],
  },
  {
    id: 5,
    title: "Preference event type",
    options: [
      { id: "event-1", label: "Group Dinner ( 4 to 6 ) people" },
      { id: "event-2", label: "One-on-One Dinners" },
      { id: "event-3", label: "Open to both" },
    ],
  },
];

const CompatibilityTest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState<Record<number, string>>({});

  const handleToggle = (stepId: number, optionId: string) => {
    setSelections((prev) => ({
      ...prev,
      [stepId]: optionId,
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log("Submit selections:", selections);
      alert("Test completed! We're finding your perfect match...");
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const currentStepData = steps[currentStep - 1];

  return (
    <section className="py-24 bg-[#F8F9FC] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        {/* Left Side: Form */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-between">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Compatibility Test
              </h2>

              {/* Progress Steps */}
              <div className="flex items-center gap-2 mb-12">
                {steps.map((step, index) => (
                  <React.Fragment key={step.id}>
                    <div
                      className={cn(
                        "size-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300",
                        currentStep >= step.id
                          ? "bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white"
                          : "bg-gray-100 text-gray-400",
                      )}
                    >
                      {step.id}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={cn(
                          "h-[2px] w-8 transition-all duration-300",
                          currentStep > step.id
                            ? "bg-[#FF3AB3]"
                            : "bg-gray-100",
                        )}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                {currentStepData.title}
              </h3>

              <div className="space-y-4">
                {currentStepData.options.map((option) => (
                  <div
                    key={option.id}
                    className={cn(
                      "group flex items-center p-4 rounded-xl border-2 cursor-pointer",
                      selections[currentStep] === option.id
                        ? "border-[#FF3AB3] bg-pink-50/10"
                        : "border-gray-50 bg-white",
                    )}
                    onClick={() => handleToggle(currentStep, option.id)}
                  >
                    <Checkbox
                      checked={selections[currentStep] === option.id}
                      onCheckedChange={() =>
                        handleToggle(currentStep, option.id)
                      }
                      className="size-5 border-gray-300 data-[state=checked]:bg-[#FF3AB3] data-[state=checked]:border-[#FF3AB3]"
                    />
                    <span className="ml-4 font-bold text-gray-700">
                      {option.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-12">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="h-14 px-10 border-[#FF3AB3] text-[#FF3AB3] font-bold rounded-xl disabled:opacity-30 flex items-center gap-2 shadow-none"
            >
              <ChevronLeft className="size-5" />
              Back
            </Button>
            <Button
              onClick={nextStep}
              disabled={!selections[currentStep]}
              className="h-14 px-12 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white font-bold rounded-xl flex items-center gap-2 shadow-none"
            >
              {currentStep === steps.length ? "Finish" : "Next"}
              {currentStep < steps.length && (
                <ChevronRight className="size-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Right Side: Image Overlay */}
        <div className="hidden lg:block w-5/12 relative min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
            alt="Happy Couple"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default CompatibilityTest;
