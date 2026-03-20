"use client";

import React from "react";
import Image from "next/image";
import { useFormContext } from "../../context/FormContext";
import ActivityDetailsForm from "../form/ActivityDetailsForm";
import Header from "./Header";
import Footer from "./Footer";

export default function CreateActivityLayout() {
  const { currentStep, setCurrentStep } = useFormContext();

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Header />
      {/* Main Content Area - 2 Column Layout */}
      <main className="flex-grow py-12 px-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Left Side: Sidebar Navigation */}
        <div className="w-full md:w-64 flex-shrink-0">
          <h1 className="text-[32px] font-semibold text-gray-900 mb-8 leading-tight">
            Create new Activity
          </h1>

          <div className="flex flex-col space-y-2">
            <button
              onClick={() => setCurrentStep(1)}
              className={`flex items-center text-left px-4 py-3 text-[15px] font-medium rounded-lg transition-colors ${
                currentStep === 1
                  ? "bg-black text-white shadow-sm"
                  : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              Activity Details
            </button>

            <button
              // Ensure they can only click it if they are already on step 2
              onClick={() => currentStep === 2 && setCurrentStep(2)}
              className={`flex items-center text-left px-4 py-3 text-[15px] font-medium rounded-lg transition-colors ${
                currentStep === 2
                  ? "bg-black text-white shadow-sm"
                  : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              Location Details
            </button>
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className="flex-grow">
          <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 p-8">
            {/* Form Header */}
            <h2 className="text-xl font-semibold border-b border-gray-100 pb-4 mb-6">
              {currentStep === 1 ? "Activity Details" : "Location Details"}
            </h2>

            {currentStep === 1 && <ActivityDetailsForm />}
            {currentStep === 2 && (
              <div className="text-center py-10 text-gray-500">
                Location Details Form coming soon...
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
