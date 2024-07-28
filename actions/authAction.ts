"use server";

import { backendAPI, HttpMethods, HttpHeaders } from "@/lib/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { IResgisterFormState, ILoginFromState } from "./formState";
import {
  registerFormValidation,
  registerFormError,
  loginFormValidation,
  LoginFormError,
} from "./validation";

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

  const res = await fetch(backendAPI.register, {
    method: HttpMethods.POST,
    body: JSON.stringify(validFields.data),
    headers: HttpHeaders.json,
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

  redirect("/");
}

export async function loginAction(
  currentState: ILoginFromState,
  form: FormData
): Promise<ILoginFromState> {
  const validfields = loginFormValidation.safeParse(
    Object.fromEntries(form.entries())
  );

  if (!validfields.success) {
    return {
      error: validfields.error.flatten().fieldErrors as LoginFormError,
    };
  }

  const res = await fetch(backendAPI.login, {
    method: HttpMethods.POST,
    body: JSON.stringify(validfields.data),
    headers: HttpHeaders.json,
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

  redirect("/");
}
