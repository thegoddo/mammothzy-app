"use client";

import React, { useState, ReactNode, useContext, createContext } from "react";
import { ActivityDetailsType } from "@/schemas/activitySchema";
import { LocationDetailsType } from "@/schemas/locationSchema";

interface FormData {
  activityDetails?: ActivityDetailsType;
  locationDetails?: LocationDetailsType;
}

interface FormContextType {
  formData: FormData;
  // This generic ensures that the data exactly matches the step you are updating
  updateFormData: <K extends keyof FormData>(
    step: K,
    data: FormData[K],
  ) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  resetForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>({});
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = <K extends keyof FormData>(
    step: K,
    data: FormData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [step]: data }));
  };

  const resetForm = () => {
    setFormData({});
    setCurrentStep(1);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        setCurrentStep,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}
