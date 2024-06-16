"use server";

import { getSession } from "@/lib/server-utils";
import { IUserStoryFormState } from "./formState";
import { UserStoryFormError, userStoryFormValidation } from "./validation";
import { HttpHeaders, backendAPI } from "@/lib/constants";

export async function createUserStoryAction(
  projectId: number,
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

  const session = await getSession();

  const res = await fetch(backendAPI.userStory.create, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session}`,
      ...HttpHeaders.json,
    },
    body: JSON.stringify({
      ...validFields.data,
      projectId,
    }),
  });

  const body = await res.json();

  if (!res.ok) {
    return { error: body.message };
  }

  return { message: body.message };
}
