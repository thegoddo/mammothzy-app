import React from "react";

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

export default function FormField({
  label,
  required,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full shrink-0">
      <label className="font-sans font-medium text-xs leading-5 text-[#1A1A1A]">
        {label} {required && <span className="text-[#FF4D4F]">*</span>}
      </label>
      {children}
      {error && <span className="text-red-500 text-[10px] mt-1">{error}</span>}
    </div>
  );
}
