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

export const DeleteAccount = () => {
  return (
    <Card className="rounded-md border border-red-100 shadow-none">
      <CardHeader>
        <CardTitle className="text-red-500">Delete Account</CardTitle>
        <CardDescription>
          Permanently delete your account and all of your content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 font-medium">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end border-t p-4 border-red-50 bg-red-50/30 rounded-b-md">
        <Button variant="destructive" className="rounded-md font-bold">
          Delete Account
        </Button>
      </CardFooter>
    </Card>
  );
};
