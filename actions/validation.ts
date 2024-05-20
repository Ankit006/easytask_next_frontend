import { z } from "zod";

export const registerFormValidation = z.object({
  name: z.string().min(1, "Please provide your name"),
  email: z.string().email("Plase provide a valid email"),
  password: z.string().min(8, "Password must be at least 8 character"),
  confirm_password: z
    .string()
    .min(8, "Confirm password must be at least 8 character"),
});

export const loginFormValidation = z.object({
  email: z.string().email("Plase provide a valid email"),
  password: z.string().min(8, "Password must be at least 8 character"),
});

export const createProjectFromValidation = z.object({
  title: z.string().min(1, "Please provide a project title"),
  description: z.string().refine((value) => value.trim() !== "", {
    message: "Please provide project description",
  }),
});

export const searchUserValidation = z.object({
  email: z.string().email("Please provide a valid email"),
});

export interface registerFormError {
  name: string[];
  email: string[];
  password: string[];
  confirm_password: string[];
}

export interface LoginFormError {
  email: string[];
  password: string[];
}

export interface CreateProjectFormEror {
  title: string[];
  description: string[];
}

export interface SearchUserFormError {
  email: string[];
}
