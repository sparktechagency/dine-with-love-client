"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const SecuritySettings = () => {
  return (
    <Card className="rounded-[24px] border border-gray-100 shadow-sm p-8 transition-all hover:border-gray-200">
      <CardHeader className="px-0 pt-0 pb-8">
        <CardTitle className="text-xl font-bold text-gray-900">
          Security
        </CardTitle>
      </CardHeader>

      <CardContent className="px-0 pb-0 space-y-6">
        <div className="space-y-6 max-w-full lg:max-w-none">
          <div className="space-y-2">
            <Label
              htmlFor="currentPassword"
              title="Current Password"
              className="text-sm font-bold text-gray-900"
            >
              Current Password
            </Label>
            <Input
              id="currentPassword"
              type="password"
              placeholder="Enter current password"
              className="h-12 bg-white border-gray-100 rounded-lg px-4 text-sm font-medium focus-visible:ring-pink-100"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="newPassword"
              title="New Password"
              className="text-sm font-bold text-gray-900"
            >
              New Password
            </Label>
            <Input
              id="newPassword"
              type="password"
              placeholder="Enter new password"
              className="h-12 bg-white border-gray-100 rounded-lg px-4 text-sm font-medium focus-visible:ring-pink-100"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="confirmPassword"
              title="Confirm New Password"
              className="text-sm font-bold text-gray-900"
            >
              Confirm New Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Enter confirm new password"
              className="h-12 bg-white border-gray-100 rounded-lg px-4 text-sm font-medium focus-visible:ring-pink-100"
            />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button className="h-11 px-8 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-lg font-bold text-sm shadow-none transition-all hover:scale-[1.02] active:scale-[0.98]">
            Update Password
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
