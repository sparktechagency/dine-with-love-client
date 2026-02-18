"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DeleteAccount = () => {
  return (
    <Card className="rounded-[24px] border border-gray-100 shadow-sm p-8 transition-all hover:border-gray-200">
      <CardHeader className="px-0 pt-0 pb-8">
        <CardTitle className="text-xl font-bold text-gray-900">
          Delete Account
        </CardTitle>
      </CardHeader>

      <CardContent className="px-0 pb-0">
        <div className="rounded-2xl border border-gray-100 p-8 space-y-6">
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-gray-900">Delete Account:</h4>
            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-2xl">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
          </div>

          <div className="flex justify-start">
            <Button className="h-10 px-8 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-lg font-bold text-xs shadow-none transition-all hover:scale-[1.02] active:scale-[0.98]">
              Delete account
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
