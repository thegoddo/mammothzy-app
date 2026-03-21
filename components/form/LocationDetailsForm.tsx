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

// Schema
import {
  locationDetailsSchema,
  LocationDetailsType,
} from "@/schemas/locationSchema";
import HoverArrowButton from "../ui/HoveredButton";

export default function LocationDetailsForm() {
  const { formData, updateFormData, setCurrentStep } = useFormContext();

  // --- Custom Dropdown State ---
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(
    COUNTRY_CODES.find((c) => c.code === "+1") || COUNTRY_CODES[0],
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close custom dropdown if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowCountryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter countries based on search input
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
    formState: { errors },
  } = useForm<LocationDetailsType>({
    resolver: zodResolver(locationDetailsSchema),
    defaultValues: formData.locationDetails || {},
  });

  // Sync the local selected country state with react-hook-form
  useEffect(() => {
    setValue("countryCode", selectedCountry.code);
  }, [selectedCountry, setValue]);

  const onSubmit = (data: LocationDetailsType) => {
    updateFormData("locationDetails", data);
    setCurrentStep(3); // Move to next step
  };

  const goBack = () => setCurrentStep(1);

  return (
    <div className="flex flex-col w-[596px] bg-white rounded-xl shrink-0">
      {/* Header */}
      <div className="flex flex-col w-full mb-6">
        <h3 className="font-sans font-bold text-[18px] leading-6 text-[#2E2B2B]">
          Location Details
        </h3>
        <p className="text-sm text-[#9CA3AF] mt-1">
          Please provide the contact information for this location.
        </p>
      </div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-6"
      >
        {/* Address Lines */}
        <FormField
          label="Address Line 1"
          required
          error={errors.address1?.message}
        >
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
            error={!!errors.address2}
          />
        </FormField>

        {/* Zip Code */}
        <FormField label="Zip Code" required error={errors.zip?.message}>
          <TextInput
            {...register("zip")}
            placeholder="Eg: 123 467"
            error={!!errors.zip}
          />
        </FormField>

        {/* City and State Row */}
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
            <FormField
              label="State / Province"
              required
              error={errors.state?.message}
            >
              <div className="relative w-full h-10.5">
                {/* Editable Input with Datalist */}
                <input
                  {...register("state")}
                  list="state-options"
                  placeholder="Eg: Madhya Pradesh"
                  autoComplete="off"
                  className={`w-full h-full pl-4 pr-10 bg-white border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all ${
                    errors.state ? "border-red-500" : "border-[#E5E5E5]"
                  } [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-10 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer`}
                />

                {/* Custom Arrow Icon for State */}
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#1A1A1A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <datalist id="state-options">
                {INDIAN_STATES.map((state) => (
                  <option key={state} value={state} />
                ))}
              </datalist>
            </FormField>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-[596px] h-0 border-t border-[#E9E9EB] mt-2 mb-2" />

        {/* Contact Details Section */}
        <div className="flex flex-col w-full gap-[24px]">
          <div className="w-full">
            <h3 className="font-sans font-bold text-[18px] leading-6 text-[#2E2B2B]">
              Contact Details
            </h3>
            <p className="text-sm text-[#9CA3AF] mt-1">
              Please provide the contact information for this location.
            </p>
          </div>

          {/* Contact Row: Phone | Name */}
          <div className="flex items-center w-full gap-4">
            {/* Custom Phone Number Input with Searchable Country Code */}
            <div className="flex-1 relative flex items-center h-[42px] bg-white border border-[#E5E5E5] rounded-full transition-all focus-within:ring-1 focus-within:ring-black">
              {/* Custom Searchable Dropdown Trigger */}
              <div
                ref={dropdownRef}
                className="relative flex items-center h-full pl-4 pr-2 cursor-pointer"
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              >
                {/* Visual Representation */}
                <span className="text-lg mr-2">{selectedCountry.flag}</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* The Open Dropdown Menu */}
                {showCountryDropdown && (
                  <div
                    className="absolute top-[48px] left-0 w-[240px] bg-white border border-[#E5E5E5] rounded-[12px] shadow-lg z-50 overflow-hidden flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Search Input */}
                    <div className="p-2 border-b border-[#E5E5E5] bg-gray-50">
                      <input
                        type="text"
                        placeholder="Search country or code..."
                        className="w-full bg-white border border-[#E5E5E5] rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value)}
                        autoFocus
                      />
                    </div>

                    {/* Filtered List */}
                    <div className="max-h-[200px] overflow-y-auto">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((item) => (
                          <div
                            key={item.code + item.country}
                            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-[#1A1A1A] transition-colors"
                            onClick={() => {
                              setSelectedCountry(item);
                              setValue("countryCode", item.code);
                              setShowCountryDropdown(false);
                              setCountrySearch("");
                            }}
                          >
                            <span className="text-lg mr-3">{item.flag}</span>
                            <span className="font-medium mr-2">
                              {item.country}
                            </span>
                            <span className="text-[#9CA3AF] ml-auto">
                              {item.code}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-sm text-[#9CA3AF] text-center">
                          No countries found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Vertical Divider */}
              <div className="h-[20px] w-px bg-[#E5E5E5] mx-2"></div>

              {/* Phone Number Input */}
              <input
                type="tel"
                placeholder="Contact Number *"
                className="flex-1 h-full bg-transparent border-none focus:outline-none text-sm placeholder:text-[#1A1A1A] pr-4"
                {...register("phoneNumber")}
              />
            </div>

            {/* Contact Name Input */}
            <div className="flex-1">
              <TextInput
                {...register("contactName")}
                placeholder="Contact Name"
                className="h-[42px]"
                error={!!errors.contactName}
              />
            </div>
          </div>
          {/* Error messages for contact fields if needed */}
          {(errors.phoneNumber || errors.contactName) && (
            <div className="text-red-500 text-[10px] mt-[-16px]">
              Please ensure contact name and a valid phone number are provided.
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex w-[197px] h-[46px] gap-[10px]">
          <button
            type="button"
            onClick={goBack}
            className="px-8 py-3 rounded-full border border-[#E5E5E5] text-[#1A1A1A] hover:bg-gray-50 transition-all font-medium text-sm"
          >
            Previous
          </button>
          <HoverArrowButton text="Submit" />
        </div>
      </form>
    </div>
  );
}
