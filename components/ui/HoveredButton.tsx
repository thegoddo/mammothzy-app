import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const HoverArrowButton = ({ text }: { text: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`
        relative inline-flex items-center justify-center
        h-12 px-10 gap-x-2
        rounded-full bg-slate-950
        font-semibold text-white
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-950
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center transition-all duration-300 ease-in-out">
        <span
          className={`
            transition-all duration-300 ease-in-out
            ${isHovered ? "pr-8" : "pr-0"}
          `}
        >
          {text}
        </span>

        <div
          className={`
            absolute right-10 flex items-center
            transition-all duration-300 ease-in-out
            ${isHovered ? "w-auto opacity-100 ml-4" : "w-0 opacity-0 ml-0"}
          `}
        >
          <ArrowRight className="size-5 text-white stroke-[2.5]" />
        </div>
      </div>
    </button>
  );
};

export default HoverArrowButton;
