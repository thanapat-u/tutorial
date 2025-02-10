"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/components/Button";
import { Checkbox } from "@repo/ui/components/Checkbox";
import { Section } from "@repo/ui/components/Section";
import { Textfield } from "@repo/ui/components/Textfield";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationSchema, RegistrationType } from "../libs/schema/registration";
import { useMutation } from "@tanstack/react-query";
import { submitRegistration } from "../libs/services/submitRegistration";

export default function RegistrationForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegistrationType>({
    resolver: zodResolver(registrationSchema),
  });

  const [showSection, setShowSection] = useState<boolean>(false);

  const submitRegistrationMutation = useMutation({
    mutationKey: ["submitRegistration"],
    mutationFn: submitRegistration,
  });

  const submitHandler: SubmitHandler<RegistrationType> = (data) => {
    submitRegistrationMutation.mutate(data);
  };

  useEffect(() => {
    if (submitRegistrationMutation.isError) {
      console.error(submitRegistrationMutation.error);
    }
  }, [submitRegistrationMutation.isError, submitRegistrationMutation.error]);

  return (
    <form
      className="flex flex-col gap-4 max-w-[512px] w-full p-2"
      onSubmit={handleSubmit(submitHandler)}
    >
      <h1 className="font-semibold text-2xl">Registration</h1>
      <Section title="General" className="flex flex-col gap-2">
        <Textfield
          placeholder="John"
          label="Firstname"
          {...register("first_name")}
          error={errors.first_name?.message}
        />
        <Textfield
          placeholder="Doe"
          label="Lastname"
          {...register("last_name")}
          error={errors.last_name?.message}
        />
        <Textfield
          placeholder="x-xx-xx-xxxxx-xx-x"
          label="Citizen ID"
          {...register("citizen_id")}
          error={errors.citizen_id?.message}
        />
        <Checkbox
          label="is Thai citizen"
          {...register("is_thai", {
            onChange: (e) => setShowSection(e.target.checked),
          })}
        />
      </Section>
      {showSection && (
        <Section title="Banking" className="flex flex-col gap-2">
          <Textfield
            placeholder="John Doe"
            label="Bank name"
            {...register("banking_name")}
            error={errors.banking_name?.message}
          />
          <Textfield
            placeholder="xxx-x-xxxxx-x"
            label="Banking number"
            {...register("banking_number")}
            error={errors.banking_number?.message}
          />
        </Section>
      )}
      {submitRegistrationMutation.isError && (
        <div className="rounded-lg border-2 border-red-300 bg-red-100 p-2 w-full text-red-500 text-sm">
          {submitRegistrationMutation.error.message}
        </div>
      )}
      <Button variant="primary" disabled={submitRegistrationMutation.isPending}>
        Register
      </Button>
    </form>
  );
}
