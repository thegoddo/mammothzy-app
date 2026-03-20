"use client";
import { FormProvider } from "../context/FormContext";
import CreateActivityLayout from "../components/layout/CreateActivityLayout";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main>
      <FormProvider>
        <Header />
        <CreateActivityLayout />
      </FormProvider>
    </main>
  );
}
