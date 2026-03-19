"use client";

import React, { useState, ReactNode, useContext, createContext } from "react";
import { ActivityDetailsType } from "@/schemas/activitySchema";

interface FormData {
  activityDetails?: ActivityDetailsType;
  locationDetails?: any; // TODO: define later
}

interface FormContextType {
  formData: FormData;
  updateFormData: (step: keyof FormData, data: any) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  resetForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>({});
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (step: keyof FormData, data: any) => {
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
  throw context;
}
