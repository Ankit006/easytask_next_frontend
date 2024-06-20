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
  projectId: z.string().transform((value) => parseInt(value)),
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

export const userStoryFormValidation = z.object({
  title: z.string().min(1, "Please provide a title"),
  description: z.string().min(1, "Please provide a description"),
  priority: z.string().min(1, "Please choose a priority"),
  estimateDate: z.string().min(1, "Plesae choose an estimate date"),
});

export interface UserStoryFormError {
  title: string[];
  description: string[];
  priority: string[];
  estimate_date: string[];
}

export const sprintFormValidation = z.object({
  title: z.string().min(1, "Title cannot be empty"),
  description: z.string().optional(),
  startDate: z.string().min(1, "Start date cannot be empty"),
  endDate: z.string().min(1, "End date cannot be empty"),
});

export interface SprintFormError {
  title: string[];
  description: string[];
  startDate: string[];
  endDate: string[];
}
