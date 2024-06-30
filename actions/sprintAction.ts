"use server";
import { getSession } from "@/lib/server-utils";
import { IBasicFormState, ISprintCreateState } from "./formState";
import { redirect } from "next/navigation";
import { HttpHeaders, backendAPI, cacheTags } from "@/lib/constants";
import { revalidateTag } from "next/cache";
import { SprintFormError, sprintFormValidation } from "./validation";

export async function createSprint(
  projectId: number,
  state: ISprintCreateState,
  form: FormData
): Promise<ISprintCreateState> {
  const payload = Object.fromEntries(form);
  const validFields = sprintFormValidation.safeParse(payload);
  if (!validFields.success) {
    return {
      validation: validFields.error.flatten().fieldErrors as SprintFormError,
    };
  }

  const session = await getSession();

  const res = await fetch(backendAPI.sprints.create, {
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

  revalidateTag(cacheTags.sprints);
  return { message: body.message };
}

export async function UpdateSprintAction(
  id: number,
  projectId: number,
  state: ISprintCreateState,
  form: FormData
): Promise<ISprintCreateState> {
  const payload = Object.fromEntries(form);
  const validFields = sprintFormValidation.safeParse(payload);
  if (!validFields.success) {
    return {
      validation: validFields.error.flatten().fieldErrors as SprintFormError,
    };
  }

  const session = await getSession();

  const res = await fetch(backendAPI.sprints.create, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${session}`,
      ...HttpHeaders.json,
    },
    body: JSON.stringify({
      ...validFields.data,
      id,
      projectId,
    }),
  });

  const body = await res.json();
  if (!res.ok) {
    return { error: body.message };
  }

  revalidateTag(cacheTags.sprints);
  return { message: body.message };
}

export async function removeSprintAction(
  sprintId: number,
  projectId: number,
  state: IBasicFormState
): Promise<IBasicFormState> {
  const session = await getSession();

  const res = await fetch(backendAPI.sprints.delete(sprintId), {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${session}`,
    },
  });
  const body = await res.json();
  if (!res.ok) {
    return { error: body.message };
  }
  revalidateTag(cacheTags.backlogs);
  redirect(`/projects/${projectId}/sprints`);
}
