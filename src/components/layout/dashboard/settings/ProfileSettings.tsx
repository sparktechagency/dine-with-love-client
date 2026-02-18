"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ProfileSettings = () => {
  return (
    <Card className="rounded-[24px] border border-gray-100 shadow-sm p-8 transition-all hover:border-gray-200">
      <CardHeader className="px-0 pt-0 pb-8">
        <CardTitle className="text-xl font-bold text-gray-900">
          Profile
        </CardTitle>
        <CardDescription className="text-sm font-medium text-gray-500">
          Manage your account and applications preferences
        </CardDescription>
      </CardHeader>

      <CardContent className="px-0 pb-0">
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-start">
          {/* Form Fields */}
          <div className="flex-1 w-full space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-sm font-bold text-gray-900"
                >
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="Enter your name"
                  className="h-12 bg-white border-gray-100 rounded-lg px-4 text-sm font-medium focus-visible:ring-pink-100 placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="text-sm font-bold text-gray-900"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Enter your name"
                  className="h-12 bg-white border-gray-100 rounded-lg px-4 text-sm font-medium focus-visible:ring-pink-100 placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-bold text-gray-900"
                >
                  Enter Email Address
                </Label>
                <Input
                  id="email"
                  placeholder="Insert your email"
                  className="h-12 bg-white border-gray-100 rounded-lg px-4 text-sm font-medium focus-visible:ring-pink-100 placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="bio"
                  className="text-sm font-bold text-gray-900"
                >
                  About (optional)
                </Label>
                <Textarea
                  id="bio"
                  placeholder="About you text"
                  className="min-h-[120px] bg-white border-gray-100 rounded-xl p-4 text-sm font-medium resize-none focus-visible:ring-pink-100 placeholder:text-gray-300"
                />
              </div>
            </div>
          </div>

          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-6 shrink-0 w-full lg:w-48">
            <div className="size-40 relative rounded-full overflow-hidden border-4 border-gray-50 bg-gray-50 group">
              <Avatar className="h-full w-full">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                  alt="Profile Picture"
                  className="object-cover"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex items-center gap-3 w-full">
              <Button className="flex-1 h-10 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-lg font-bold text-xs shadow-none border-none transition-all hover:scale-[1.02] active:scale-[0.98]">
                Upload
              </Button>
              <Button
                variant="outline"
                className="flex-1 h-10 rounded-lg border-gray-100 text-gray-400 font-bold text-xs hover:bg-gray-50 hover:text-gray-900 transition-all shadow-none"
              >
                Remove
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-10">
          <Button className="h-11 px-8 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-lg font-bold text-sm shadow-none transition-all hover:scale-[1.02] active:scale-[0.98]">
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
