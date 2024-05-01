import { z } from "zod";

export const registerFormValidation = z.object({
  name: z.string().min(1, "Please provide your name"),
  email: z.string().email("Plase provide a valid email"),
  password: z.string().min(8, "Password must be at least 8 character"),
  confirm_password: z
    .string()
    .min(8, "Confirm password must be at least 8 character"),
});

export interface registerFormError {
  name: string[];
  email: string[];
  password: string[];
  confirm_password: string[];
}
