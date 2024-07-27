"use server";

import {
  backendAPI,
  HttpMethods,
  HttpHeaders,
  cacheTags,
} from "@/lib/constants";
import { errorHandler, getSession } from "@/lib/server-utils";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { IBasicFormState, ICreateProjectFormState } from "./formState";
import {
  createProjectFromValidation,
  CreateProjectFormEror,
} from "./validation";

export async function createProjectAction(
  currentState: ICreateProjectFormState,
  form: FormData
): Promise<ICreateProjectFormState> {
  const validFields = createProjectFromValidation.safeParse(
    Object.fromEntries(form.entries())
  );
  if (!validFields.success) {
    return {
      error: validFields.error.flatten().fieldErrors as CreateProjectFormEror,
    };
  }

  const session = await getSession();
  const res = await fetch(backendAPI.projects.create, {
    method: HttpMethods.POST,
    body: JSON.stringify(validFields.data),
    headers: {
      Authorization: `Bearer ${session}`,
      ...HttpHeaders.json,
    },
  });

  const body = await res.json();
  if (!res.ok) {
    return { message: body.message };
  }
  revalidateTag(cacheTags.projects);
  return { message: "Project is created" };
}

export async function redirectProjectAction(form: FormData) {
  redirect(`/project/${form.get("projectId")}`);
}

export async function joinProjectAction(
  projectId: number,
  state: IBasicFormState,
  form: FormData
): Promise<IBasicFormState> {
  const session = await getSession();
  const res = await fetch(backendAPI.joinProject, {
    method: "POST",
    body: JSON.stringify({
      projectId: projectId,
      notification: form.get("notification"),
    }),
    headers: {
      Authorization: `Bearer ${session}`,
      ...HttpHeaders.json,
    },
  });
  const body = await res.json();
  if (!res.ok) {
    return errorHandler(body);
  }
  revalidateTag(cacheTags.projects);
  revalidateTag(cacheTags.notificatons);
  return { message: body.message };
}
