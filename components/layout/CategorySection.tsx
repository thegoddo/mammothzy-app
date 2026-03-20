"use client";
import CheckboxItem from "./CheckboxItem";
import { useState } from "react";

export default function CategorySection() {
  const [showOtherInput, setShowOtherInput] = useState(false);

  const categories = [
    "Adventure & Games",
    "Creative Expression",
    "Food & Drink",
    "Learning & Development",
    "Sports and Fitness",
    "Volunteering",
    "Other",
  ];

  const handleCheckboxChange = (label: string, isChecked: boolean) => {
    if (label === "Other") {
      setShowOtherInput(isChecked);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-[596px]">
      <label className="text-xs font-medium leading-5 text-[#1A1A1A]">
        Select the best category to describe your activity{" "}
        <span className="text-[#FF4D4F]">*</span>
      </label>

      <div className="flex flex-col gap-3">
        {categories.map((cat) => (
          <CheckboxItem key={cat} label={cat} onChange={handleCheckboxChange} />
        ))}
      </div>

      {/* Conditional Text Box - Using your Textfield spec */}
      {showOtherInput && (
        <div className="mt-2 transition-all duration-200 ease-in-out">
          <input
            type="text"
            placeholder="Specify the category"
            className="w-full h-[42px] px-4 py-2 bg-white border border-[#E5E5E5] rounded-full text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
      )}
    </div>
  );
}
