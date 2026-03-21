"use client";
import React, { useState } from "react";
import { Flag, MapPin } from "lucide-react";
import ActivityDetailsForm from "../form/ActivityDetailsForm";
import LocationDetailsForm from "../form/LocationDetailsForm";
import { Success } from "./Success";
import { useFormContext } from "../../context/FormContext";

export default function Main() {
  const { currentStep, setCurrentStep, resetForm, formData } = useFormContext();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCloseSuccess = () => {
    setIsSubmitted(false);
    resetForm();
    setCurrentStep(1);
  };

  return (
    <main className="relative flex flex-col w-[1440px] min-h-screen pt-8 pb-8 px-[112px] gap-[60px] bg-white border-b border-[#E7E7E7] mx-auto overflow-visible">
      {isSubmitted && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <Success onClose={handleCloseSuccess} />
        </div>
      )}

      <div className="flex flex-col w-[1216px] h-auto gap-[32px] overflow-visible">
        <div className="flex w-full h-auto gap-[10px]">
          <h2 className="font-sans font-bold text-[24px] leading-[130%] text-[#1A1A1A]">
            Create new Activity
          </h2>
        </div>

        <div className="flex flex-row items-stretch gap-8 overflow-visible">
          <aside className="sticky top-[100px] flex flex-col w-[212px] shrink-0 bg-white z-10 gap-2 self-start h-fit">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className={`flex w-full h-[48px] items-center px-4 py-2 gap-[12px] rounded-[8px] transition-all text-left ${
                currentStep === 1
                  ? "bg-[#F7F7F7] shadow-[0px_1px_2px_0px_#55494B0D]"
                  : "bg-transparent hover:bg-gray-50"
              }`}
            >
              <Flag
                className={`w-5 h-5 transition-colors ${currentStep === 1 ? "text-[#1A1A1A]" : "text-[#8A8A8A]"}`}
              />
              <span
                className={`text-[15px] leading-6 whitespace-nowrap transition-colors ${
                  currentStep === 1
                    ? "text-[#1A1A1A] font-bold"
                    : "text-[#8A8A8A] font-medium"
                }`}
              >
                Activity Details
              </span>
            </button>

            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className={`flex w-full h-[48px] items-center px-4 py-2 gap-[12px] rounded-[8px] transition-all text-left ${
                currentStep === 2
                  ? "bg-[#F7F7F7] shadow-[0px_1px_2px_0px_#55494B0D]"
                  : "bg-transparent hover:bg-gray-50"
              }`}
            >
              <MapPin
                className={`w-5 h-5 transition-colors ${currentStep === 2 ? "text-[#1A1A1A]" : "text-[#8A8A8A]"}`}
              />
              <span
                className={`text-[15px] leading-6 whitespace-nowrap transition-colors ${
                  currentStep === 2
                    ? "text-[#1A1A1A] font-bold"
                    : "text-[#8A8A8A] font-medium"
                }`}
              >
                Location Details
              </span>
            </button>
          </aside>

          <div
            className="w-px bg-[#E7E7E7] transition-all duration-500 ease-in-out shrink-0"
            style={{ height: currentStep === 1 ? "1010px" : "676px" }}
          />

          <div className="flex-1 min-w-0">
            {currentStep === 1 && <ActivityDetailsForm />}
            {currentStep === 2 && (
              <LocationDetailsForm onComplete={() => setIsSubmitted(true)} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
