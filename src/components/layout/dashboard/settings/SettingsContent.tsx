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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const SettingsContent = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-bold text-primary">Settings</h1>

      <div className="grid gap-6">
        {/* Profile Section */}
        <Card className="rounded-md border">
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
                  <Button variant="outline" size="sm" className="rounded-md">
                    Remove
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary text-white rounded-md"
                  >
                    Upload
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end border-t p-4">
            <Button className="bg-[#D946EF] text-white rounded-md">
              Save Changes
            </Button>
          </CardFooter>
        </Card>

        {/* Security Section */}
        <Card className="rounded-md border">
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>
              Update your password and manage your account security.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input
                id="currentPassword"
                type="password"
                className="rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" className="rounded-md" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                className="rounded-md"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end border-t p-4">
            <Button className="bg-[#D946EF] text-white rounded-md">
              Update Password
            </Button>
          </CardFooter>
        </Card>

        {/* Preferences Section */}
        <Card className="rounded-md border">
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>
              Manage your notifications and other preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-md border p-4">
              <div className="space-y-0.5">
                <Label className="text-base">Email Notifications</Label>
                <div className="text-sm text-muted-foreground">
                  Receive emails about your account activity.
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-md border p-4">
              <div className="space-y-0.5">
                <Label className="text-base">Marketing Emails</Label>
                <div className="text-sm text-muted-foreground">
                  Receive emails about new features and special offers.
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between rounded-md border p-4">
              <div className="space-y-0.5">
                <Label className="text-base">Profile Visibility</Label>
                <div className="text-sm text-muted-foreground">
                  Allow others to find your profile.
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Payments Section */}
        <Card className="rounded-md border">
          <CardHeader>
            <CardTitle>Payments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-md border">
              <div className="flex items-center justify-between p-4 border-b last:border-0">
                <div>
                  <p className="font-medium">Dinner booking at Nobu</p>
                  <p className="text-sm text-muted-foreground">
                    November 10, 2023
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800">
                    Success
                  </span>
                  <p className="font-medium mt-1">$120.00</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border-b last:border-0">
                <div>
                  <p className="font-medium">Advisor Consultation</p>
                  <p className="text-sm text-muted-foreground">
                    November 05, 2023
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800">
                    Success
                  </span>
                  <p className="font-medium mt-1">$45.00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Delete Account Section */}
        <Card className="rounded-md border border-destructive/50">
          <CardHeader>
            <CardTitle className="text-destructive">Delete Account</CardTitle>
            <CardDescription>
              Permanently delete your account and all of your content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end border-t p-4 border-destructive/20 bg-destructive/5 rounded-b-lg">
            <Button variant="destructive" className="rounded-md">
              Delete Account
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SettingsContent;
