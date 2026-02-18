"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ServiceDescriptionCard = () => {
  return (
    <Card className="rounded-md border shadow-none">
      <CardHeader>
        <CardTitle className="text-gray-900 font-bold">
          Service Description
        </CardTitle>
        <CardDescription className="text-gray-500 font-medium leading-relaxed">
          Your Matching Advisor helps you find the ideal dinner match based on
          your preferences. Tell us what you&apos;re looking for so we can
          create the perfect experience for you.
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
