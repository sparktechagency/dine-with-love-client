"use client";

import { Mail, Phone, User, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ServiceDescriptionCard } from "./ServiceDescriptionCard";

const MatchingAdvisorContent = () => {
  const router = useRouter();
  const [_, setDinnerType] = useState("1:1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard/matching-advisor/payment");
  };

  return (
    <div className="flex flex-col gap-6 p-6 max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Matching Advisor</h1>
      </div>

      <ServiceDescriptionCard />

      <div className="bg-white rounded-md border border-gray-100">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="grid gap-2">
                <Label
                  htmlFor="preferenceDate"
                  className="font-bold text-gray-700"
                >
                  Preference Date Range
                </Label>
                <p className="text-sm text-gray-400 font-medium">
                  When would you like to have dinner?
                </p>
                <Input
                  id="preferenceDate"
                  placeholder="Select dates"
                  className="rounded-md h-12"
                />
              </div>

              <div className="space-y-3">
                <Label className="font-bold text-gray-700">
                  Prefer contact
                </Label>
                <div className="flex items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="phone" className="size-5" />
                    <Label
                      htmlFor="phone"
                      className="font-bold text-gray-500 flex items-center gap-2 cursor-pointer"
                    >
                      <Phone className="h-4 w-4" /> Phone
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="mail" className="size-5" />
                    <Label
                      htmlFor="mail"
                      className="font-bold text-gray-500 flex items-center gap-2 cursor-pointer"
                    >
                      <Mail className="h-4 w-4" /> Mail
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="font-bold text-gray-700">Dinner type</Label>
                <RadioGroup
                  defaultValue="1:1"
                  onValueChange={setDinnerType}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="relative">
                    <RadioGroupItem
                      value="1:1"
                      id="1:1"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="1:1"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-gray-100 bg-white p-6 cursor-pointer hover:bg-gray-50 transition-all peer-data-[state=checked]:border-[#FF3AB3] peer-data-[state=checked]:bg-pink-50/30"
                    >
                      <User className="mb-3 h-6 w-6 text-gray-400" />
                      <div className="text-center font-bold text-gray-900">
                        1:1 Dinner
                      </div>
                      <div className="text-center text-xs text-gray-400 font-medium mt-1">
                        Intimate one-on-one experience
                      </div>
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
                      className="flex flex-col items-center justify-between rounded-md border-2 border-gray-100 bg-white p-6 cursor-pointer hover:bg-gray-50 transition-all peer-data-[state=checked]:border-[#FF3AB3] peer-data-[state=checked]:bg-pink-50/30"
                    >
                      <Users className="mb-3 h-6 w-6 text-gray-400" />
                      <div className="text-center font-bold text-gray-900">
                        Group Dinner
                      </div>
                      <div className="text-center text-xs text-gray-400 font-medium mt-1">
                        Meet multiple people at once
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes" className="font-bold text-gray-700">
                  Additional Notes (Optional)
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Any specific preferences or requirements?"
                  className="min-h-[120px] rounded-md p-4"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                className="bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md h-12 px-8 font-bold shadow-none"
              >
                Submit to advisor
              </Button>
            </div>
          </form>
        </CardContent>
      </div>
    </div>
  );
};

export default MatchingAdvisorContent;
