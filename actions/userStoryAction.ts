"use server";

import { getSession } from "@/lib/server-utils";
import { IBasicFormState, IUserStoryFormState } from "./formState";
import { UserStoryFormError, userStoryFormValidation } from "./validation";
import { HttpHeaders, backendAPI, cacheTags } from "@/lib/constants";
import { revalidateTag } from "next/cache";

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

  revalidateTag(cacheTags.backlogs);

  return { message: body.message };
}

export async function updateUserStoryAction(
  id: number,
  projectId: number,
  state: IUserStoryFormState,
  form: FormData
) {
  const payload = Object.fromEntries(form);
  const validFields = userStoryFormValidation.safeParse(payload);
  if (!validFields.success) {
    return {
      validation: validFields.error.flatten().fieldErrors as UserStoryFormError,
    };
  }

  const session = await getSession();

  const res = await fetch(backendAPI.userStory.update(projectId), {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${session}`,
      ...HttpHeaders.json,
    },
    body: JSON.stringify({
      ...validFields.data,
      id,
    }),
  });

  const body = await res.json();

  if (!res.ok) {
    return { error: body.message };
  }

  revalidateTag(cacheTags.backlogs);

  return { message: body.message };
}

export async function assignToSprintAction(
  userStoryId: number,
  state: IBasicFormState,
  form: FormData
): Promise<IBasicFormState> {
  let sprintId: string | number = form.get("sprintId") as string;

  if (!sprintId) {
    return { validation: "Please select a sprint" };
  }

  sprintId = parseInt(sprintId);

  const session = await getSession();
  const res = await fetch(backendAPI.userStory.assignToSprint, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${session}`,
      ...HttpHeaders.json,
    },
    body: JSON.stringify({ sprintId, userStoryId }),
  });

  const body = await res.json();

  if (!res.ok) {
    return { error: body.message };
  }

  revalidateTag(cacheTags.backlogs);
  revalidateTag(cacheTags.sprintUserStory(sprintId));

  return { message: body.message };
}

export async function deleteUserStoryAction(
  userStoryId: number,
  projectId: number,
  state: IBasicFormState,
  form: FormData
): Promise<IBasicFormState> {
  const session = await getSession();
  const res = await fetch(
    backendAPI.userStory.deleteUserStory(userStoryId, projectId),
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${session}`,
      },
    }
  );

  const body = await res.json();
  if (!res.ok) {
    return { error: body.message };
  }

  return { message: body.message };
}
