"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const SecuritySettings = () => {
  return (
    <Card className="rounded-md border shadow-none">
      <CardHeader>
        <CardTitle>Security</CardTitle>
        <CardDescription>
          Update your password and manage your account security.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="currentPassword">Current Password</Label>
          <Input id="currentPassword" type="password" className="rounded-md" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="newPassword">New Password</Label>
          <Input id="newPassword" type="password" className="rounded-md" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirmPassword">Confirm New Password</Label>
          <Input id="confirmPassword" type="password" className="rounded-md" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end border-t p-4">
        <Button className="bg-[#FF3AB3] text-white rounded-md font-bold px-8">
          Update Password
        </Button>
      </CardFooter>
    </Card>
  );
};
