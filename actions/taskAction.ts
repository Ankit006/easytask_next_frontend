"use server";

import { getSession } from "@/lib/server-utils";
import { IBasicFormState, ITaskFormState } from "./formState";
import {
  changeTaskStatusValidation,
  TaskFormError,
  taskFormvalidation,
} from "./validation";
import { backendAPI, cacheTags } from "@/lib/constants";
import { HttpHeaders } from "@/lib/constants";
import { revalidateTag } from "next/cache";

export async function createTaskAction(
  userStoryId: number,
  projectId: number,
  state: IBasicFormState,
  form: FormData,
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

export async function changeTaskStatusAction(
  userStoryId: number,
  state: IBasicFormState,
  form: FormData,
): Promise<IBasicFormState> {
  const session = await getSession();

  const payload = Object.fromEntries(form);

  const validData = changeTaskStatusValidation.safeParse(payload);

  if (!validData.success) {
    revalidateTag(cacheTags.tasks(userStoryId));
    return { error: "Wrong information provided" };
  }

  const res = await fetch(backendAPI.tasks.changeStatus, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${session}`,
      ...HttpHeaders.json,
    },
    body: JSON.stringify({
      taskId: parseInt(validData.data.taskId),
      status: validData.data.status,
    }),
  });

  const body = await res.json();

  if (!res.ok) {
    revalidateTag(cacheTags.tasks(userStoryId));
    return { error: body.message };
  }

  return { message: "Task status is changed" };
}
