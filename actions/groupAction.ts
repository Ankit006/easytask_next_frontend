"use server";

import { getSession } from "@/lib/server-utils";
import { IBasicFormState } from "./formState";
import {
  HttpHeaders,
  HttpMethods,
  backendAPI,
  cacheTags,
} from "@/lib/constants";
import { revalidateTag } from "next/cache";

export async function createGroupAction(
  projectId: string,
  currentState: IBasicFormState,
  form: FormData
): Promise<IBasicFormState> {
  const payload = Object.fromEntries(form);

  if (payload.name === "") {
    return { error: "Please provide a group name" };
  }
  const session = await getSession();

  const res = await fetch(backendAPI.group.create, {
    headers: {
      Authorization: `Bearer ${session}`,
      ...HttpHeaders.json,
    },
    method: HttpMethods.POST,

    body: JSON.stringify({
      project_id: parseInt(projectId),
      name: payload.name,
      color: payload.colorTag,
    }),
  });

  const body = await res.json();

  if (!res.ok) {
    return { error: body.message };
  }

  revalidateTag(cacheTags.groups);
  return { message: body.message };
}

export async function groupRemoveAction(
  groupId: number,
  projectId: number | string,
  currentState: IBasicFormState
): Promise<IBasicFormState> {
  const session = await getSession();
  const res = await fetch(backendAPI.group.remove(groupId, projectId), {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${session}`,
    },
  });

  const body = await res.json();
  if (!res.ok) {
    return { error: body.message };
  }

  revalidateTag(cacheTags.groups);
  return { message: body.message };
}
