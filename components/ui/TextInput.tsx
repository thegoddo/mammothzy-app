import React, { forwardRef } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={`w-full h-[42px] px-4 bg-white border rounded-full text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-black transition-all ${
          error ? "border-red-500" : "border-[#E5E5E5]"
        } ${className || ""}`}
      />
    );
  },
);

TextInput.displayName = "TextInput";
export default TextInput;
