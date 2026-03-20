"use client";
import { Flag, MapPin } from "lucide-react";
import ActivityDetailsForm from "../form/ActivityDetailsForm";
import LocationDetailsForm from "../form/LocationDetailsForm";
import { useFormContext } from "../../context/FormContext";

export default function Main() {
  const { currentStep, setCurrentStep } = useFormContext();

  return (
    <main className="flex flex-col w-360 min-h-284.25 pt-8 pb-8 px-28 gap-15 bg-white border-b border-[#E7E7E7]">
      <div className="flex flex-col w-[1216px] h-[1073px] gap-8">
        <div className="flex w-[1216px] h-[31px] gap-[10px]">
          <h2 className="font-sans font-bold text-[24px] leading-[130%] align-middle text-[#1A1A1A]">
            Create new Activity
          </h2>
        </div>

        <div className="flex flex-row items-start gap-[32px]">
          {/* Sidebar */}
          <div className="sticky top-0 flex flex-col w-[212px] bg-white z-10 gap-2">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className={`flex w-full h-[48px] items-center px-4 py-2 gap-[12px] rounded-[8px] transition-all text-left ${
                currentStep === 1
                  ? "bg-[#FAFAFB] shadow-[0px_1px_2px_0px_#55494B0D] text-[#1A1A1A] font-bold"
                  : "bg-transparent text-[#8A8A8A] font-medium hover:bg-gray-50"
              }`}
            >
              <Flag className="w-5 h-5" />
              <span className="text-[15px] leading-6 whitespace-nowrap">
                Activity Details
              </span>
            </button>

            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className={`flex w-full h-[48px] items-center px-4 py-2 gap-[12px] rounded-[8px] transition-all text-left ${
                currentStep === 2
                  ? "bg-[#FAFAFB] shadow-[0px_1px_2px_0px_#55494B0D] text-[#1A1A1A] font-bold"
                  : "bg-transparent text-[#8A8A8A] font-medium hover:bg-gray-50"
              }`}
            >
              <MapPin className="w-5 h-5" />
              <span className="text-[15px] leading-6 whitespace-nowrap">
                Location Details
              </span>
            </button>
          </div>

          <div
            className="border-r border-[#E7E7E7] w-0 transition-all duration-500 ease-in-out shrink-0"
            style={{ height: currentStep === 1 ? "1010px" : "676px" }}
          />

          {currentStep === 1 && <ActivityDetailsForm />}
          {currentStep === 2 && <LocationDetailsForm />}
        </div>
      </div>
    </main>
  );
}
