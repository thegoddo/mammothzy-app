"use client";
import { useState } from "react";
interface CheckboxProps {
  label: string;
  onChange: (label: string, checked: boolean) => void;
}

export default function CheckboxItem({ label, onChange }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    onChange(label, newState);
  };

  return (
    <label className="flex items-center w-[188px] h-[20px] gap-[8px] cursor-pointer group">
      <div className="relative flex items-center justify-center w-[18px] h-[18px]">
        <input
          type="checkbox"
          className="absolute opacity-0 w-full h-full cursor-pointer z-10"
          checked={isChecked}
          onChange={toggle}
        />
      </div>

      <div
        className={`
    relative w-[18px] h-[18px] rounded-full border-2 transition-all
    ${isChecked ? "bg-[#202632] border-[#202632]" : "bg-white border-[#E5E5E5]"}
  `}
      >
        {isChecked && (
          /* Use absolute centering to ensure it's perfectly mid-point */
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
              <path
                d="M1.09998 3.74706L3.74703 6.39412L9.04115 1.10001"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>
      <span className="text-xs font-medium leading-5 text-[#1A1A1A] whitespace-nowrap">
        {label}
      </span>
    </label>
  );
}
