import { z } from "zod";

export const registrationSchema = z
  .object({
    first_name: z.string().min(1, { message: "Firstname is required" }),
    last_name: z.string().min(1, { message: "Lastname is required" }),
    citizen_id: z
      .string()
      .regex(new RegExp(/^\d{13}$/), { message: "citizen id can only be 13 digits long" }),
    is_thai: z.boolean(),
    banking_name: z.string().optional(),
    banking_number: z.string().optional(),
  })
  .superRefine((val, ctx) => {
    if (!val.is_thai) return;

    if (val.banking_name === undefined || val.banking_name.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        type: "string",
        inclusive: true,
        message: "Bank name is requied",
        minimum: 1,
        path: ["banking_name"],
      });
    }

    if (val.banking_number === undefined || val.banking_number.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        type: "string",
        inclusive: true,
        message: "Bank number is requied",
        minimum: 1,
        path: ["banking_number"],
      });
    } else if (!new RegExp(/^\d{10}$/).test(val.banking_number)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Bank number can only be 10 digits long",
        path: ["banking_number"],
      });
    }
  });
