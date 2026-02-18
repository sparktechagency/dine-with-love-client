"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormInput } from "@/components/ui/form-input";

export const SecuritySettings = () => {
  return (
    <Card className="rounded-md border border-gray-100 shadow-sm p-8 transition-all hover:border-gray-200">
      <CardHeader className="px-0 pt-0 pb-8">
        <CardTitle className="text-xl font-bold text-gray-900">
          Security
        </CardTitle>
      </CardHeader>

      <CardContent className="px-0 pb-0 space-y-6">
        <div className="space-y-6 max-w-full lg:max-w-none">
          <FormInput
            id="currentPassword"
            label="Current Password"
            type="password"
            placeholder="Enter current password"
            className="bg-white"
          />

          <FormInput
            id="newPassword"
            label="New Password"
            type="password"
            placeholder="Enter new password"
            className="bg-white"
          />

          <FormInput
            id="confirmPassword"
            label="Confirm New Password"
            type="password"
            placeholder="Enter confirm new password"
            className="bg-white"
          />
        </div>

        <div className="flex justify-end pt-4">
          <Button className="h-11 px-8 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold text-sm shadow-none transition-all hover:scale-[1.02] active:scale-[0.98]">
            Update Password
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
