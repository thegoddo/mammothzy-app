"use client";
import { Flag, MapPin } from "lucide-react";
import ActivityDetailsForm from "../form/ActivityDetailsForm";
import LocationDetailsForm from "../form/LocationDetailsForm";
import { useFormContext } from "../../context/FormContext";

export default function Main() {
  const { currentStep, setCurrentStep } = useFormContext();

  return (
    // Changed min-h to screen or a large value to allow scrolling
    <main className="flex flex-col w-full max-w-6xl min-h-screen pt-8 pb-8 px-28 gap-16 bg-white border-b border-[#E7E7E7] mx-auto">
      {/* REMOVED h-[1073px] - changed to h-auto to allow dynamic growth */}
      <div className="flex flex-col w-full h-auto gap-8">
        <div className="flex w-full h-auto gap-2.5">
          <h2 className="font-sans font-bold text-2xl leading-[130%] align-middle text-[#1A1A1A]">
            Create new Activity
          </h2>
        </div>
        <div className="flex flex-row items-start gap-8">
          <aside className="sticky top-[180px] flex flex-col w-56 bg-white z-10 gap-2 self-start">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className={`flex w-full h-12 items-center px-4 py-2 gap-3 rounded-lg transition-all text-left ${
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
              className={`flex w-full h-12 items-center px-4 py-2 gap-3 rounded-lg transition-all text-left ${
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
          </aside>
          <div className="w-px bg-[#E7E7E7] self-stretch" />
          <div className="flex-1">
            {currentStep === 1 && <ActivityDetailsForm />}
            {currentStep === 2 && <LocationDetailsForm />}
          </div>
        </div>
      </div>
    </main>
  );
}
