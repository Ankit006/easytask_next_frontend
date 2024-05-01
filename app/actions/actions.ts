"use server";

import { backendAPI } from "@/lib/constants";
import { IResgisterFormState } from "./formState";
import { registerFormError, registerFormValidation } from "./validation";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function registerAction(
  currentState: IResgisterFormState,
  form: FormData
): Promise<IResgisterFormState> {
  const validFields = registerFormValidation.safeParse(
    Object.fromEntries(form.entries())
  );
  if (!validFields.success) {
    return {
      error: validFields.error.flatten().fieldErrors as registerFormError,
    };
  }

  const res = await fetch(backendAPI.login, {
    method: "POST",
    body: JSON.stringify(validFields.data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseData = await res.json();

  if (!res.ok) {
    return { message: responseData.message };
  }

  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  cookies().set("session", responseData.accessToken, {
    httpOnly: true,
    expires,
  });

  redirect("/dashboard");
}
