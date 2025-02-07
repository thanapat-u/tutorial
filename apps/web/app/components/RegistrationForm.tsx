"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/components/Button";
import { Checkbox } from "@repo/ui/components/Checkbox";
import { Section } from "@repo/ui/components/Section";
import { Textfield } from "@repo/ui/components/Textfield";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    first_name: z.string().min(1, { message: "Firstname is required" }),
    last_name: z.string().min(1, { message: "Lastname is required" }),
    citizen_id: z
      .string()
      .regex(new RegExp(/\d+/), { message: "id must only contain numeric characters" })
      .length(13, { message: "id must be 13 characters long" }),
    is_thai: z.boolean(),
    banking_name: z.string().min(1, { message: "Bank name is required" }),
    banking_number: z
      .string()
      .regex(new RegExp(/\d+/), { message: "id must only contain numeric characters" }),
  })
  .required();

type InputType = z.infer<typeof schema>;

export default function RegistrationForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<InputType>({
    resolver: zodResolver(schema),
  });

  const [showSection, setShowSection] = useState<boolean>(false);

  const submitHandler: SubmitHandler<InputType> = (data) => {
    console.log(data);
  };

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
          {...register("is_thai")}
          label="is Thai"
          onChange={(e) => setShowSection(e.target.checked)}
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
      <Button variant="primary">Register</Button>
    </form>
  );
}
