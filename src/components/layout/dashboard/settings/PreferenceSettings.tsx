"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const PreferenceSettings = () => {
  return (
    <Card className="rounded-[24px] border border-gray-100 shadow-sm p-8 transition-all hover:border-gray-200">
      <CardHeader className="px-0 pt-0 pb-10">
        <CardTitle className="text-xl font-bold text-gray-900">
          Preference
        </CardTitle>
      </CardHeader>

      <CardContent className="px-0 pb-0 space-y-8">
        {/* Stay in find */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-50">
          <div className="space-y-1">
            <Label className="text-[15px] font-bold text-gray-900">
              Stay in Find
            </Label>
          </div>
          <Switch
            defaultChecked
            className="data-[state=checked]:bg-[#FF3AB3]"
          />
        </div>

        {/* Face Verification */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-50">
          <div className="space-y-1">
            <Label className="text-[15px] font-bold text-gray-900">
              Face Verification
            </Label>
            <p className="text-xs text-gray-400 font-medium">
              Verify your self
            </p>
          </div>
          <Button
            variant="ghost"
            className="text-xs font-bold text-primary hover:bg-pink-50 rounded-md h-8 px-4"
          >
            Edit
          </Button>
        </div>

        {/* Unplaced Time */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-50">
          <div className="space-y-1">
            <Label className="text-[15px] font-bold text-gray-900">
              Unplaced Time
            </Label>
            <p className="text-xs text-gray-400 font-medium">Over 2h (GMT)</p>
          </div>
          <Button
            variant="ghost"
            className="text-xs font-bold text-primary hover:bg-pink-50 rounded-md h-8 px-4"
          >
            Edit
          </Button>
        </div>

        {/* Match type */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label className="text-[15px] font-bold text-gray-900">
              Match type
            </Label>
            <p className="text-xs text-gray-400 font-medium">
              Multiple choice for daily individual
            </p>
          </div>
          <Button
            variant="ghost"
            className="text-xs font-bold text-primary hover:bg-pink-50 rounded-md h-8 px-6"
          >
            Change Match Type
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
