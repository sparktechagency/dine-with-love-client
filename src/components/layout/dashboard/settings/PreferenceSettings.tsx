"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const PreferenceSettings = () => {
  return (
    <Card className="rounded-md border shadow-none">
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
        <CardDescription>
          Manage your notifications and other preferences.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {[
          {
            id: "email",
            label: "Email Notifications",
            desc: "Receive emails about your account activity.",
            checked: true,
          },
          {
            id: "marketing",
            label: "Marketing Emails",
            desc: "Receive emails about new features and special offers.",
            checked: false,
          },
          {
            id: "visibility",
            label: "Profile Visibility",
            desc: "Allow others to find your profile.",
            checked: true,
          },
        ].map((pref) => (
          <div
            key={pref.id}
            className="flex items-center justify-between rounded-md border p-4 transition-colors hover:bg-gray-50/50"
          >
            <div className="space-y-0.5">
              <Label className="text-base font-bold text-gray-900">
                {pref.label}
              </Label>
              <div className="text-sm text-gray-500 font-medium">
                {pref.desc}
              </div>
            </div>
            <Switch defaultChecked={pref.checked} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
