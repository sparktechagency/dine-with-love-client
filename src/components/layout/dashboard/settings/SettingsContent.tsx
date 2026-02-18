"use client";

import { DeleteAccount } from "./DeleteAccount";
import { PaymentHistory } from "./PaymentHistory";
import { PreferenceSettings } from "./PreferenceSettings";
import { ProfileSettings } from "./ProfileSettings";
import { SecuritySettings } from "./SecuritySettings";

export const SettingsContent = () => {
  return (
    <div className="flex flex-col gap-8 p-2 animate-in fade-in duration-500">
      <div className="grid gap-8 pb-20">
        <ProfileSettings />
        <SecuritySettings />
        <PreferenceSettings />
        <PaymentHistory />
        <DeleteAccount />
      </div>
    </div>
  );
};
