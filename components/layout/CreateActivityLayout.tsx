"use client";

import React from "react";
import Image from "next/image";
import { useFormContext } from "../../context/FormContext";
import ActivityDetailsForm from "../form/ActivityDetailsForm";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

export default function CreateActivityLayout() {
  const { currentStep, setCurrentStep } = useFormContext();

  return (
    <div className="flex flex-col w-full max-w-[1440px] min-h-[1628px] bg-white mx-auto">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
