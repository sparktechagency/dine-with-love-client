"use client";

import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { FormTextarea } from "@/components/ui/form-textarea";
import { toast } from "sonner";

export const SettingsContent = () => {
  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="space-y-12 pb-20 max-w-5xl mx-auto animate-in fade-in duration-500">
      {/* Payment Gateway */}
      <section className="space-y-6 bg-white rounded-md border border-gray-100 p-8 shadow-sm">
        <h3 className="text-xl font-black text-gray-900">Payment Gateway</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">
              Stripe Secret Key
            </label>
            <FormInput
              placeholder="Enter Stripe Secret Key"
              className="bg-white border-gray-100"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">
              Stripe Publishable Key
            </label>
            <FormInput
              placeholder="Enter Stripe Publishable Key"
              className="bg-white border-gray-100"
            />
          </div>
          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              className="h-10 px-8 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold text-xs shadow-md hover:opacity-90 active:scale-95 cursor-pointer"
            >
              Save Payment Settings
            </Button>
          </div>
        </div>
      </section>

      {/* App Config */}
      <section className="space-y-6 bg-white rounded-md border border-gray-100 p-8 shadow-sm">
        <h3 className="text-xl font-black text-gray-900">App config</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">
              1:1 Match Fee($)
            </label>
            <FormInput placeholder="115" className="bg-white border-gray-100" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">
              Group Match Fee($)
            </label>
            <FormInput placeholder="100" className="bg-white border-gray-100" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">
              Service Fee%
            </label>
            <FormInput placeholder="10" className="bg-white border-gray-100" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">
              Booking Deposit($)
            </label>
            <FormInput placeholder="10" className="bg-white border-gray-100" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={handleSave}
            className="h-10 px-8 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold text-xs shadow-md hover:opacity-90 active:scale-95 cursor-pointer"
          >
            Save Pricing
          </Button>
        </div>
      </section>

      {/* Admin Users */}
      <section className="space-y-6 bg-white rounded-md border border-gray-100 p-8 shadow-sm">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-black text-gray-900">Admin Users</h3>
          <Button
            variant="ghost"
            className="h-8 px-4 text-[#FF3AB3] font-bold text-xs bg-pink-50 hover:bg-pink-100 cursor-pointer"
          >
            Add New
          </Button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-md border border-gray-50">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-gray-900">John Admin</h4>
              <p className="text-xs text-gray-500 font-medium">
                john@admin.com
              </p>
            </div>
            <Button
              variant="ghost"
              className="h-6 px-3 text-[#5432C8] font-bold text-[10px] bg-purple-50 hover:bg-purple-100"
            >
              Edit
            </Button>
          </div>
          {/* Add more admin users here if needed */}
        </div>
      </section>

      {/* Notification Template */}
      <section className="space-y-6 bg-white rounded-md border border-gray-100 p-8 shadow-sm">
        <h3 className="text-xl font-black text-gray-900">
          Notification Template
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">
              Match Success Email
            </label>
            <FormInput
              placeholder="Enter Match success Email"
              className="bg-white border-gray-100"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">
              Booking Confirmation
            </label>
            <FormInput
              placeholder="Enter Booking Confirmation"
              className="bg-white border-gray-100"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">
              Custom Message
            </label>
            <FormTextarea
              placeholder="Enter Custom Message"
              className="bg-white border-gray-100 min-h-[100px]"
            />
          </div>
          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              className="h-10 px-8 bg-linear-to-r from-[#FF3AB3] to-[#5432C8] text-white rounded-md font-bold text-xs shadow-md hover:opacity-90 active:scale-95 cursor-pointer"
            >
              Save
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
