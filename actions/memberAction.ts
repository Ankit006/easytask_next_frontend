"use server";

import {
  backendAPI,
  HttpMethods,
  HttpHeaders,
  cacheTags,
} from "@/lib/constants";
import { errorHandler, getSession } from "@/lib/server-utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { IBasicFormState, ISearchUserFormState } from "./formState";
import { searchUserValidation, SearchUserFormError } from "./validation";
import { revalidateTag } from "next/cache";

export async function searchUserAction(
  currentState: ISearchUserFormState,
  form: FormData
): Promise<ISearchUserFormState> {
  const validFields = searchUserValidation.safeParse(Object.fromEntries(form));

  if (!validFields.success) {
    return {
      error: validFields.error.flatten().fieldErrors as SearchUserFormError,
    };
  }
  const session = await getSession();
  const res = await fetch(
    `${backendAPI.member.searchUser}?email=${validFields.data.email}&projectId=${validFields.data.projectId}`,
    {
      headers: {
        Authorization: `Bearer ${session}`,
      },
      cache: "no-store",
    }
  );
  const body = await res.json();

  if (!res.ok) {
    if (body.statusCode === 401) {
      cookies().delete("session");
      redirect("/login");
    } else {
      return { message: body.message };
    }
  }
  return { user: body };
}

export async function inviteUserAction(
  userId: number,
  projectId: number,
  usercurrentState: { message?: string; error?: string },
  form: FormData
): Promise<{ message?: string; error?: string }> {
  const session = cookies().get("session");
  const res = await fetch(backendAPI.member.inviteUser, {
    method: HttpMethods.POST,
    body: JSON.stringify({ userId: userId, projectId: projectId }),
    headers: {
      Authorization: `Bearer ${session?.value}`,
      ...HttpHeaders.json,
    },
  });

  const body = await res.json();

  if (!res.ok) {
    return { error: body.message };
  }
  return { message: body.message };
}

export async function changeMemberRoleAction(
  memberId: number,
  projectId: number,
  state: IBasicFormState,
  form: FormData
): Promise<IBasicFormState> {
  const session = await getSession();
  const res = await fetch(backendAPI.member.changeRole, {
    method: "POST",
    body: JSON.stringify({
      member_id: memberId,
      projectId: projectId,
      role: form.get("role"),
    }),
    headers: {
      Authorization: `Bearer ${session}`,
      ...HttpHeaders.json,
    },
  });
  const body = await res.json();
  if (!res.ok) {
    revalidateTag(cacheTags.members);
    return errorHandler(body);
  }
  return { message: body.message };
}
