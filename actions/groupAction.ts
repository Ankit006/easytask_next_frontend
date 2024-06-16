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
      projectId: parseInt(projectId),
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

export async function assingGroupAction(
  projectId: number,
  memberId: number,
  state: IBasicFormState,
  form: FormData
): Promise<IBasicFormState> {
  const session = await getSession();

  let groupId = form.get("groupId") as string;

  if (!groupId || groupId === "") {
    return { error: "Please select a group" };
  }

  const res = await fetch(backendAPI.group.assignMemberToGroup, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session}`,
      ...HttpHeaders.json,
    },
    body: JSON.stringify({
      projectId,
      memberId,
      groupId: parseInt(groupId),
    }),
  });

  const body = await res.json();
  if (!res.ok) {
    return { error: body.message };
  }

  revalidateTag(`${cacheTags.assignedGroups}-${memberId}`);
  return { message: body.message };
}

export async function unAssignGroupAction(
  groupId: number,
  memberId: number
): Promise<IBasicFormState> {
  const session = await getSession();
  const res = await fetch(backendAPI.group.unAssignMemberToGroup, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session}`,
      ...HttpHeaders.json,
    },
    body: JSON.stringify({ memberId, groupId }),
  });
  const body = await res.json();
  if (!res.ok) {
    return { error: body.message };
  }
  revalidateTag(`${cacheTags.assignedGroups}-${memberId}`);
  return { message: body.message };
}
