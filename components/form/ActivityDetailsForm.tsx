"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  activityDetailsSchema,
  ActivityDetailsType,
} from "../../schemas/activitySchema";
import { useFormContext } from "../../context/FormContext";
import CategorySection from "../layout/CategorySection";

export default function ActivityDetailsForm() {
  const { formData, updateFormData, setCurrentStep } = useFormContext();

  // Initialize react-hook-form with Zod validation and default values from context
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ActivityDetailsType>({
    resolver: zodResolver(activityDetailsSchema),
    defaultValues: formData.activityDetails || {}, // Retain data if user navigates back
  });

  const selectedCategory = watch("category");

  const onSubmit = (data: ActivityDetailsType) => {
    updateFormData("activityDetails", data);
    setCurrentStep(2);
  };

  return (
    <div className="flex flex-col w-[596px] h-[1010px] gap-[24px]">
      <div className="flex flex-col w-[596px] min-h-[1010px] rounded-md p-0 gap-8 bg-white opacity-100 rounded-[12px] shrink-0">
        <div className="flex flex-col w-full w-[596px] h-[934px] gap-[16px]">
          <div className="flex w-full h-[24px] gap-[20px]">
            <div className="flex w-full h-[24px] gap-[384px]">
              <h3 className="font-sans font-bold text-[18px] leading-6 text-[#2E2B2B]">
                Activity Details
              </h3>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full h-[894px] gap-[16px]"
          >
            <label className="font-sans font-medium text-xs leading-5 text-[#1A1A1A]">
              Activity Name <span className="text-[#FF4D4F]">*</span>
            </label>
            <input
              type="text"
              placeholder="Eg: Cooking class in Palo Alto"
              className="w-full h-[42px] px-4 py-2 bg-white border border-[#E5E5E5] rounded-full text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-black transition-all"
            />

            <label className="font-sans font-medium text-xs leading-5">
              Select the best category to describe your activity{" "}
              <span className="text-[#FF4D4F]">*</span>
            </label>
            <CategorySection />
            <div className="flex w-[158px] h-[52px] gap-[12px]"></div>
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition font-medium"
              >
                Save and Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
