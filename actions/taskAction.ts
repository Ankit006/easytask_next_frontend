"use server";

import { getSession } from "@/lib/server-utils";
import { IBasicFormState, ITaskFormState } from "./formState";
import { TaskFormError, taskFormvalidation } from "./validation";
import { backendAPI, cacheTags } from "@/lib/constants";
import { HttpHeaders } from "@/lib/constants";
import { revalidateTag } from "next/cache";

export async function createTaskAction(
  userStoryId: number,
  projectId: number,
  state: IBasicFormState,
  form: FormData
): Promise<ITaskFormState> {
  const payload = Object.fromEntries(form);
  const validFields = taskFormvalidation.safeParse(payload);

  if (!validFields.success) {
    return {
      validation: validFields.error.flatten().fieldErrors as TaskFormError,
    };
  }

  const session = await getSession();

  const res = await fetch(backendAPI.tasks.create, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session}`,
      ...HttpHeaders.json,
    },
    body: JSON.stringify({
      ...validFields.data,
      userStoryId,
      projectId,
    }),
  });

  const body = await res.json();
  if (!res.ok) {
    return { error: body.message };
  }

  revalidateTag(cacheTags.tasks(userStoryId));

  return { message: body.message };
}
