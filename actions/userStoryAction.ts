"use server";

import { IUserStoryFormState } from "./formState";
import { UserStoryFormError, userStoryFormValidation } from "./validation";

export async function createUserStoryAction(
  state: IUserStoryFormState,
  form: FormData
): Promise<IUserStoryFormState> {
  const payload = Object.fromEntries(form);
  const validFields = userStoryFormValidation.safeParse(payload);
  if (!validFields.success) {
    return {
      validation: validFields.error.flatten().fieldErrors as UserStoryFormError,
    };
  }
  return { message: "success" };
}
