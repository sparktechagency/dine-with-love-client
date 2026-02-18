"use client";

import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FormInput } from "@/components/ui/form-input";
import { FormTextarea } from "@/components/ui/form-textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const MatchingAdvisorContent = () => {
  const router = useRouter();
  const [dinnerType, setDinnerType] = useState("1:1");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard/matching-advisor/payment");
  };

  return (
    <section className="w-full flex flex-col gap-6 p-2 animate-in fade-in duration-500">
      <div className="bg-white rounded-md border border-gray-100 p-10 space-y-10 min-h-[80vh]">
        {/* Service Description */}
        <div className="space-y-3">
          <h3 className="text-md font-bold text-gray-900">
            Service Description
          </h3>
          <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-4xl">
            Your Matching Advisor helps you find the ideal dinner match based on
            your preferences. Tell us what you&apos;re looking for so we can
            create the perfect experience for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="space-y-8">
            {/* Date Range */}
            <div className="max-w-sm">
              <FormInput
                label="Preference Date Range"
                placeholder="Date range"
                className="bg-gray-50/50"
              />
              <p className="text-xs text-gray-400 font-medium mt-1">
                When would you like to have dinner?
              </p>
            </div>

            {/* Prefer Contact */}
            <div className="space-y-4">
              <Label className="text-md font-bold text-gray-900">
                Prefer contact
              </Label>
              <div className="flex items-center gap-8">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="phone"
                    className="size-5 rounded-md border-gray-200 data-[state=checked]:bg-[#FF3AB3] data-[state=checked]:border-[#FF3AB3]"
                  />
                  <Label
                    htmlFor="phone"
                    className="text-sm font-bold text-gray-900 cursor-pointer"
                  >
                    Phone
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="mail"
                    className="size-5 rounded-md border-gray-200 data-[state=checked]:bg-[#FF3AB3] data-[state=checked]:border-[#FF3AB3]"
                  />
                  <Label
                    htmlFor="mail"
                    className="text-sm font-bold text-gray-900 cursor-pointer"
                  >
                    Mail
                  </Label>
                </div>
              </div>
            </div>

            {/* Dinner Type */}
            <div className="space-y-4">
              <Label className="text-md font-bold text-gray-900">
                Dinner Type
              </Label>
              <RadioGroup
                defaultValue="1:1"
                onValueChange={setDinnerType}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
              >
                <div className="relative">
                  <RadioGroupItem
                    value="1:1"
                    id="1:1"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="1:1"
                    className={cn(
                      "flex flex-col items-start justify-center rounded-md border-2 p-6 h-32 cursor-pointer transition-all bg-white",
                      dinnerType === "1:1"
                        ? "border-[#FF3AB3] bg-pink-50/10 shadow-sm"
                        : "border-gray-50",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "size-5 rounded-md border-2 flex items-center justify-center transition-all",
                          dinnerType === "1:1"
                            ? "border-[#FF3AB3] bg-[#FF3AB3]"
                            : "border-gray-200",
                        )}
                      >
                        {dinnerType === "1:1" && (
                          <Check className="size-3 text-white" />
                        )}
                      </div>
                      <span className="font-bold text-gray-900">
                        1:1 Dinner
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 font-medium mt-3 ml-8">
                      Intimate one-on-one Experience
                    </p>
                  </Label>
                </div>

                <div className="relative">
                  <RadioGroupItem
                    value="group"
                    id="group"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="group"
                    className={cn(
                      "flex flex-col items-start justify-center rounded-md border-2 p-6 h-32 cursor-pointer transition-all bg-white",
                      dinnerType === "group"
                        ? "border-[#FF3AB3] bg-pink-50/10 shadow-sm"
                        : "border-gray-50",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "size-5 rounded-md border-2 flex items-center justify-center transition-all",
                          dinnerType === "group"
                            ? "border-[#FF3AB3] bg-[#FF3AB3]"
                            : "border-gray-200",
                        )}
                      >
                        {dinnerType === "group" && (
                          <Check className="size-3 text-white" />
                        )}
                      </div>
                      <span className="font-bold text-gray-900">
                        Group Dinner
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 font-medium mt-3 ml-8">
                      Meet Multiple People at once.
                    </p>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Additional Notes */}
            <div className="space-y-4">
              <FormTextarea
                label="Additional Notes(Optional)"
                placeholder="Looking for someone who plays outdoor sports"
                className="min-h-[160px] bg-white border-gray-100"
              />
              <p className="text-xs text-gray-400 font-medium mt-1">
                Any specific preference or requirements?
              </p>
            </div>
          </div>

          <div className="flex justify-end pt-6">
            <Button
              type="submit"
              className="bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md h-12 px-12 font-bold shadow-none text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Submit to Advisor
            </Button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-md p-0 border-none rounded-md overflow-hidden bg-white shadow-2xl">
          <div className="p-12 flex flex-col items-center text-center space-y-6">
            <div className="size-20 rounded-full bg-green-50 flex items-center justify-center relative">
              <div className="size-16 rounded-full bg-linear-to-tr from-green-300 to-emerald-500 flex items-center justify-center">
                <Check className="size-8 text-white stroke-[3px]" />
              </div>
              <div className="absolute inset-0 rounded-full animate-ping bg-green-200/50 -z-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-black text-gray-900">
                Request Submitted!
              </h2>
              <p className="text-gray-500 font-medium text-sm leading-relaxed px-4">
                Thank you for your submission. Our advisor team will review your
                request and get back to you soon.
              </p>
            </div>

            <Button
              onClick={() => router.push("/dashboard/my-requests")}
              className="w-full h-14 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold text-md shadow-none"
            >
              View My Requests
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MatchingAdvisorContent;
