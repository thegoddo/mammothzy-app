"use client";

import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormContext } from "../../context/FormContext";

// Constants
import { INDIAN_STATES } from "@/constants/state";
import { COUNTRY_CODES } from "@/constants/countries";

// Modular UI components
import FormField from "../ui/FormField";
import TextInput from "../ui/TextInput";
import HoverArrowButton from "../ui/HoveredButton";

// Schema
import {
  locationDetailsSchema,
  LocationDetailsType,
} from "@/schemas/locationSchema";

interface LocationDetailsFormProps {
  onComplete: () => void;
}

export default function LocationDetailsForm({ onComplete }: LocationDetailsFormProps) {
  const { formData, updateFormData, setCurrentStep } = useFormContext();

  // --- Custom Phone Dropdown State ---
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(
    COUNTRY_CODES.find(
      (c) => c.code === (formData.locationDetails?.countryCode || "+1"),
    ) || COUNTRY_CODES[0],
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCountryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = COUNTRY_CODES.filter(
    (c) =>
      c.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.code.includes(countrySearch),
  );

  // --- Form Initialization ---
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<LocationDetailsType>({
    resolver: zodResolver(locationDetailsSchema),
    defaultValues: formData.locationDetails || {},
  });

  // Sync country code to react-hook-form state
  useEffect(() => {
    setValue("countryCode", selectedCountry.code);
  }, [selectedCountry, setValue]);

  // --- Submission Logic ---
  const onSubmit = (data: LocationDetailsType) => {
    // 1. Update the global context with the final validated data
    updateFormData("locationDetails", data);
    
    // 2. Trigger the Success overlay in Main.tsx
    onComplete();
  };

  const goBack = () => {
    // Save current draft to context before switching back to Step 1
    updateFormData("locationDetails", getValues());
    setCurrentStep(1);
  };

  return (
    <div className="flex flex-col w-[596px] bg-white rounded-xl shrink-0">
      <div className="flex flex-col w-full mb-6">
        <h3 className="font-sans font-bold text-[18px] leading-6 text-[#2E2B2B]">
          Location Details
        </h3>
        <p className="text-sm text-[#9CA3AF] mt-1">
          Please provide the contact information for this location.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-6">
        {/* Address Fields */}
        <FormField label="Address Line 1" required error={errors.address1?.message}>
          <TextInput
            {...register("address1")}
            placeholder="House number and street name"
            error={!!errors.address1}
          />
        </FormField>

        <FormField label="Address Line 2" error={errors.address2?.message}>
          <TextInput
            {...register("address2")}
            placeholder="Apartment, suite, unit, etc. (optional)"
          />
        </FormField>

        <FormField label="Zip Code" required error={errors.zip?.message}>
          <TextInput
            {...register("zip")}
            placeholder="Eg: 123 467"
            error={!!errors.zip}
          />
        </FormField>

        {/* City & State Row */}
        <div className="flex gap-4 w-full">
          <div className="flex-1">
            <FormField label="City" required error={errors.city?.message}>
              <TextInput
                {...register("city")}
                placeholder="Eg: Bhopal"
                error={!!errors.city}
              />
            </FormField>
          </div>

          <div className="flex-1">
            <FormField label="State / Province" required error={errors.state?.message}>
              <div className="relative w-full h-[42px]">
                <input
                  {...register("state")}
                  list="state-options"
                  placeholder="Eg: Madhya Pradesh"
                  className={`w-full h-full pl-4 pr-10 bg-white border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all ${
                    errors.state ? "border-red-500" : "border-[#E5E5E5]"
                  }`}
                />
                <datalist id="state-options">
                  {INDIAN_STATES.map((state) => (
                    <option key={state} value={state} />
                  ))}
                </datalist>
              </div>
            </FormField>
          </div>
        </div>

        <div className="w-full h-px bg-[#E9E9EB] my-2" />

        {/* Contact Details */}
        <div className="flex flex-col w-full gap-6">
          <h3 className="font-sans font-bold text-[18px] text-[#2E2B2B]">Contact Details</h3>
          
          <div className="flex items-center w-full gap-4">
            {/* Custom Phone Input */}
            <div className="flex-1 relative flex items-center h-[42px] bg-white border border-[#E5E5E5] rounded-full focus-within:ring-1 focus-within:ring-black">
              <div
                ref={dropdownRef}
                className="relative flex items-center h-full pl-4 pr-2 cursor-pointer border-r border-[#E5E5E5]"
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              >
                <span className="text-lg mr-2">{selectedCountry.flag}</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
                </svg>

                {showCountryDropdown && (
                  <div className="absolute top-[48px] left-0 w-[240px] bg-white border border-[#E5E5E5] rounded-xl shadow-xl z-50 overflow-hidden">
                    <div className="p-2 bg-gray-50 border-b">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-3 py-1 text-sm border rounded"
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <div className="max-h-[200px] overflow-y-auto">
                      {filteredCountries.map((item) => (
                        <div
                          key={item.code}
                          className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                          onClick={() => {
                            setSelectedCountry(item);
                            setShowCountryDropdown(false);
                          }}
                        >
                          {item.flag} {item.country} ({item.code})
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <input
                type="tel"
                placeholder="Contact Number *"
                className="flex-1 h-full bg-transparent px-4 text-sm outline-none"
                {...register("phoneNumber")}
              />
            </div>

            <div className="flex-1">
              <TextInput
                {...register("contactName")}
                placeholder="Contact Name"
                className="h-[42px]"
                error={!!errors.contactName}
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center w-full pt-8 border-t border-[#E5E5E5] mt-6">
          <button
            type="button"
            onClick={goBack}
            className="px-8 py-3 rounded-full border border-[#E5E5E5] text-[#1A1A1A] font-medium text-sm hover:bg-gray-50 transition-colors h-12"
          >
            Previous
          </button>
          <HoverArrowButton text="Submit" />
        </div>
      </form>
    </div>
  );
}