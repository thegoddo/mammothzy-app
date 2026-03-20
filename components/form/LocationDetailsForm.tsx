"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  locationDetailsSchema,
  LocationDetailsType,
} from "../../schemas/activitySchema";
import { useFormContext } from "../../context/FormContext";

export default function LocationDetailsForm() {
  const { formData, updateFormData, resetForm, setCurrentStep } =
    useFormContext();
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LocationDetailsType>({
    resolver: zodResolver(locationDetailsSchema),
    defaultValues: formData.locationDetails || {},
  });

  const onSubmit = (data: LocationDetailsType) => {
    // 1. Combine data
    const finalSubmissionData = {
      ...formData.activityDetails,
      ...data,
    };

    // 2. Console log requirements
    console.log("=== FINAL FORM SUBMISSION ===");
    console.log(finalSubmissionData);

    // 3. Show Success Modal
    updateFormData("locationDetails", data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm(); // 4. Reset form state entirely
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address Line 1 *
          </label>
          <input
            {...register("addressLine1")}
            placeholder="House number and street name"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.addressLine1 && (
            <p className="text-red-500 text-sm mt-1">
              {errors.addressLine1.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address Line 2
          </label>
          <input
            {...register("addressLine2")}
            placeholder="Apartment, suite, unit, etc. (optional)"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City *
            </label>
            <input
              {...register("city")}
              placeholder="City"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State *
            </label>
            <input
              {...register("state")}
              placeholder="State"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">
                {errors.state.message}
              </p>
            )}
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Zip Code *
            </label>
            <input
              {...register("zipCode")}
              placeholder="ZIP"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.zipCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.zipCode.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={() => setCurrentStep(1)}
            className="text-gray-600 px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-50 transition font-medium"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition font-medium"
          >
            Submit Activity
          </button>
        </div>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
            <p className="text-gray-500 mb-6">
              Your activity has been successfully created. Data has been logged
              to the console.
            </p>
            <button
              onClick={handleCloseModal}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Return to Start
            </button>
          </div>
        </div>
      )}
    </>
  );
}
