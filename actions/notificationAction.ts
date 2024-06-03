"use server";

import {
  backendAPI,
  cacheTags,
  HttpMethods,
  HttpHeaders,
} from "@/lib/constants";
import { errorHandler, getSession } from "@/lib/server-utils";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function clearNotifications(state: {
  error?: string;
  message?: string;
}): Promise<{ error?: string; message?: string }> {
  const session = cookies().get("session");
  const res = await fetch(backendAPI.notifications, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${session?.value}`,
    },
  });
  const body = await res.json();

  if (!res.ok) {
    return errorHandler(body);
  }
  revalidateTag(cacheTags.notificatons);
  return { message: "notifications is cleared" };
}

export async function clearSingleNotificationAction(
  state: {
    error?: string;
  },
  form: FormData
): Promise<{
  error?: string;
}> {
  const session = await getSession();
  const entires = Object.fromEntries(form);
  const res = await fetch(backendAPI.notifications, {
    method: HttpMethods.PUT,
    body: JSON.stringify(entires),
    headers: {
      Authorization: `Bearer ${session}`,
      ...HttpHeaders.json,
    },
  });
  const body = await res.json();

  if (!res.ok) {
    return errorHandler(body);
  }
  revalidateTag(cacheTags.notificatons);
  return {};
}
