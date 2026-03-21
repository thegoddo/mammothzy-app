"use client";
import Image from "next/image";

interface SuccessProps {
  onClose?: () => void;
}

export function Success({ onClose }: SuccessProps) {
  return (
    <div className="relative flex flex-col items-center justify-center w-[510px] h-[211px] rounded-[16px] p-[32px] bg-white shadow-[20px_20px_20px_0px_#00000014] border border-[#E7E7E7]">
      <button
        title="success"
        onClick={onClose}
        className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#F2F2F2] hover:bg-gray-200 transition-colors"
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 3.88906L8.88906 0L10 1.11094L6.11094 5L10 8.88906L8.88906 10L5 6.11094L1.11094 10L0 8.88906L3.88906 5L0 1.11094L1.11094 0L5 3.88906Z"
            fill="#1A1A1A"
          />
        </svg>
      </button>

      <div className="flex flex-col items-center gap-[24px]">
        <div className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-[#DCE2FF]">
          <div className="relative w-[60px] h-[60px]">
            <Image
              src="/success.png"
              alt="Success"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <h3 className="font-sans font-bold text-[28px] leading-none text-[#1A1A1A] text-center">
          Form Submitted
        </h3>
      </div>
    </div>
  );
}
