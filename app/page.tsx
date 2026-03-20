"use client";
import { FormProvider } from "../context/FormContext";
import CreateActivityLayout from "../components/layout/CreateActivityLayout";

export default function Home() {
  return (
    <main>
      <FormProvider>
        <CreateActivityLayout />
      </FormProvider>
    </main>
  );
}
