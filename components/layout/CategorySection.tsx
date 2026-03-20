"use client";
import { useState } from "react";
import RadioItem from "./RadioItem";

interface CategorySectionProps {
  listType: "categories" | "activity" | "location";
  value?: string;
  onChange?: (value: string) => void;
}

export default function CategorySection({
  listType,
  value,
  onChange,
}: CategorySectionProps) {
  const [internalSelected, setInternalSelected] = useState(value || "");

  const lists = {
    categories: [
      "Adventure & Games",
      "Creative Expression",
      "Food & Drink",
      "Learning & Development",
      "Sports and Fitness",
      "Volunteering",
      "Other",
    ],
    activity: ["Indoor", "Outdoor", "Virtual"],
    location: ["Provider Location", "User Location"],
  };

  const handleSelect = (label: string) => {
    setInternalSelected(label);
    if (onChange) onChange(label);
  };

  const traverseList = lists[listType];

  return (
    <div className="flex flex-col gap-[14px] w-[596px]">
      <div className="flex flex-col gap-3">
        {traverseList?.map((item) => (
          <RadioItem
            key={item}
            label={item}
            name={listType} // Shared name makes them act as a radio group
            isSelected={internalSelected === item}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {listType === "categories" && internalSelected === "Other" && (
        <div className="mt-2 animate-in fade-in duration-200">
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
