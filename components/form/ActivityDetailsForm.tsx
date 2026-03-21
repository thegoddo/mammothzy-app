"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  activityDetailsSchema,
  ActivityDetailsType,
} from "../../schemas/activitySchema";
import { useFormContext } from "../../context/FormContext";

import CategorySection from "../layout/CategorySection";
import FormField from "../ui/FormField";
import TextInput from "../ui/TextInput";
import TextArea from "../ui/TextArea";
import HoverArrowButton from "../ui/HoveredButton";

export default function ActivityDetailsForm() {
  const { formData, updateFormData, setCurrentStep } = useFormContext();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ActivityDetailsType>({
    resolver: zodResolver(activityDetailsSchema),
    defaultValues: formData.activityDetails || {},
  });

  const onSubmit = (data: ActivityDetailsType) => {
    updateFormData("activityDetails", data);
    setCurrentStep(2);
  };

  return (
    <div className="flex flex-col w-[596px] bg-white rounded-xl shrink-0">
      {/* Header */}
      <div className="flex w-full mb-6">
        <h3 className="font-sans font-bold text-[18px] leading-6 text-[#2E2B2B]">
          Activity Details
        </h3>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-6"
      >
        <FormField label="Activity Name" required error={errors.name?.message}>
          <TextInput
            {...register("name")}
            placeholder="Eg: Cooking class in Palo Alto"
            error={!!errors.name}
          />
        </FormField>

        <FormField
          label="Select the best category to describe your activity"
          required
          error={errors.category?.message}
        >
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <CategorySection
                listType="categories"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </FormField>

        <FormField
          label="About the Activity"
          required
          error={errors.about?.message}
        >
          <TextArea
            {...register("about")}
            placeholder="Activity Description"
            error={!!errors.about}
          />
        </FormField>

        <FormField
          label="Please select the activity type"
          required
          error={errors.activityType?.message}
        >
          <Controller
            name="activityType"
            control={control}
            render={({ field }) => (
              <CategorySection
                listType="activity"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </FormField>

        <FormField
          label="Please select the type of location"
          required
          error={errors.location?.message}
        >
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <CategorySection
                listType="location"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </FormField>

        <FormField label="How many members can take part in the activity?">
          <div className="flex items-center gap-[16px] w-full">
            <TextInput
              {...register("minMembers")}
              type="number"
              placeholder="Minimum Members"
              className="flex-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <span className="text-[#E5E5E5] font-bold">—</span>
            <TextInput
              {...register("maxMembers")}
              type="number"
              placeholder="Maximum Members"
              className="flex-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          {(errors.minMembers || errors.maxMembers) && (
            <span className="text-red-500 text-[10px] mt-1">
              Please enter a valid member range.
            </span>
          )}
        </FormField>

        <div className="flex  pt-4">
          <HoverArrowButton text="Save and Continue"></HoverArrowButton>
        </div>
      </form>
    </div>
  );
}
