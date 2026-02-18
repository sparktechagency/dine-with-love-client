"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Textarea } from "@/components/ui/textarea";

export const ProfileSettings = () => {
  return (
    <Card className="rounded-md border shadow-none">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          Manage your profile information and how others see you on the
          platform.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                defaultValue="John Davis"
                className="rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                defaultValue="@john_davis"
                className="rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                placeholder="Tell us a little bit about yourself"
                defaultValue="Lorem ipsum dolor sit amet."
                className="rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-32 w-32 relative overflow-hidden rounded-full border">
              <Avatar className="h-full w-full">
                <AvatarImage
                  src="/placeholder-user.jpg"
                  alt="Profile Picture"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-md font-bold"
              >
                Remove
              </Button>
              <Button
                size="sm"
                className="bg-[#FF3AB3] text-white rounded-md font-bold"
              >
                Upload
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end border-t p-4">
        <Button className="bg-[#FF3AB3] text-white rounded-md font-bold px-8">
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  );
};
