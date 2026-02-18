"use client";

import { Mail, Phone, User, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const MatchingAdvisorContent = () => {
  const router = useRouter();
  const [dinnerType, setDinnerType] = useState("1:1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard/matching-advisor/payment");
  };

  const ignored = dinnerType;

  return (
    <div className="flex flex-col gap-6 p-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-primary">Matching Advisor</h1>
      </div>

      <Card className="rounded-lg">
        <CardHeader>
          <CardTitle>Service Description</CardTitle>
          <CardDescription>
            Your Matching Advisor helps you find the ideal dinner match based on
            your preferences. Tell us what you&apos;re looking for so we can create
            the perfect experience for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="preferenceDate">Preference Date Range</Label>
                <p className="text-sm text-muted-foreground">
                  When would you like to have dinner?
                </p>
                {/* Simplified keeping input for now, but ensure rounded-lg */}
                <Input
                  id="preferenceDate"
                  placeholder="Select dates"
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label>Prefer contact</Label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="phone" />
                    <Label
                      htmlFor="phone"
                      className="font-normal flex items-center gap-1"
                    >
                      <Phone className="h-4 w-4" /> Phone
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="mail" />
                    <Label
                      htmlFor="mail"
                      className="font-normal flex items-center gap-1"
                    >
                      <Mail className="h-4 w-4" /> Mail
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Dinner type</Label>
                <RadioGroup
                  defaultValue="1:1"
                  onValueChange={setDinnerType}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="relative">
                    <RadioGroupItem
                      value="1:1"
                      id="1:1"
                      name="dinnerType"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="1:1"
                      className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-popover p-4 peer-data-[state=checked]:border-[#D946EF] [&:has([data-state=checked])]:border-[#D946EF]"
                    >
                      <User className="mb-3 h-6 w-6" />
                      <div className="text-center font-semibold">
                        1:1 Dinner
                      </div>
                      <div className="text-center text-xs text-muted-foreground">
                        Intimate one-on-one experience
                      </div>
                    </Label>
                  </div>
                  <div className="relative">
                    <RadioGroupItem
                      value="group"
                      id="group"
                      name="dinnerType"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="group"
                      className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-popover p-4 peer-data-[state=checked]:border-[#D946EF] [&:has([data-state=checked])]:border-[#D946EF]"
                    >
                      <Users className="mb-3 h-6 w-6" />
                      <div className="text-center font-semibold">
                        Group Dinner
                      </div>
                      <div className="text-center text-xs text-muted-foreground">
                        Meet multiple people at once
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Additional Notes(Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any specific preferences or requirements?"
                  className="min-h-[100px] rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-lg"
              >
                Submit to advisor
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchingAdvisorContent;
