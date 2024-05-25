"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function errorHandler(body: any) {
  if (body.statusCode === 401) {
    cookies().delete("session");
    redirect("/login");
  } else {
    return { error: body.message };
  }
}

export async function getSession() {
  const session = cookies().get("session");
  if (!session) {
    return redirect("/login");
  }
  return session.value;
}
