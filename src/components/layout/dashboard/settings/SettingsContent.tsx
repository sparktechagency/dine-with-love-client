"use client";

import { DeleteAccount } from "./DeleteAccount";
import { PaymentHistory } from "./PaymentHistory";
import { PreferenceSettings } from "./PreferenceSettings";
import { ProfileSettings } from "./ProfileSettings";
import { SecuritySettings } from "./SecuritySettings";

export const SettingsContent = () => {
  return (
    <div className="flex flex-col gap-6 p-6 max-w-4xl mx-auto animate-in fade-in duration-500">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      <div className="grid gap-6 pb-20">
        <ProfileSettings />
        <SecuritySettings />
        <PreferenceSettings />
        <PaymentHistory />
        <DeleteAccount />
      </div>
    </div>
  );
};
