"use client";

interface RadioProps {
  label: string;
  name: string;
  isSelected: boolean;
  onSelect: (label: string) => void;
}

export default function RadioItem({
  label,
  name,
  isSelected,
  onSelect,
}: RadioProps) {
  return (
    <label className="flex items-center w-full h-[20px] gap-[8px] cursor-pointer group">
      <div className="relative flex items-center justify-center w-[18px] h-[18px] shrink-0">
        <input
          type="radio"
          name={name}
          className="absolute opacity-0 w-full h-full cursor-pointer z-10"
          checked={isSelected}
          onChange={() => onSelect(label)}
        />
        {/* Visual Circle */}
        <div
          className={`
          w-full h-full rounded-full border-2 flex items-center justify-center transition-all
          ${isSelected ? "bg-[#202632] border-[#202632]" : "bg-white border-[#E5E5E5]"}
        `}
        >
          {isSelected && (
            <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
              <path
                d="M1.09998 3.74706L3.74703 6.39412L9.04115 1.10001"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      </div>

      <span className="text-xs font-medium leading-5 text-[#1A1A1A] whitespace-nowrap">
        {label}
      </span>
    </label>
  );
}
