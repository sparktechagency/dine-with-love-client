"use client";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";

interface FormCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | string[];
}

const FormCheckbox = React.forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ label, error, className, id, name, ...props }, ref) => {
    const checkboxId = id || name;

    return (
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id={checkboxId}
            name={name}
            ref={ref}
            className={cn(
              "size-4 border-gray-200 rounded-sm text-[#FF3AB3] focus:ring-[#FF3AB3] cursor-pointer",
              className,
            )}
            {...props}
          />
          {label && (
            <Label
              htmlFor={checkboxId}
              className="text-sm font-medium text-gray-700 cursor-pointer"
            >
              {label}
            </Label>
          )}
        </div>
        {error && (
          <p className="text-xs font-medium text-red-500 mt-1">
            {Array.isArray(error) ? error[0] : error}
          </p>
        )}
      </div>
    );
  },
);

FormCheckbox.displayName = "FormCheckbox";

export { FormCheckbox };
