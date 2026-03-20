import React, { forwardRef } from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={`w-full h-[148px] p-4 bg-white border rounded-[10px] text-sm placeholder:text-[#9CA3AF] focus:outline-none resize-none transition-all ${
          error ? "border-red-500" : "border-[#E7ECF4]"
        } ${className || ""}`}
      />
    );
  },
);

TextArea.displayName = "TextArea";
export default TextArea;
