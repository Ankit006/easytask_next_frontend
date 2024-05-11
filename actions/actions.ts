"use server";

import {
  HttpHeaders,
  HttpMethods,
  backendAPI,
  cacheTags,
} from "@/lib/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ICreateProjectFormState,
  ILoginFromState,
  IResgisterFormState,
} from "./formState";
import {
  CreateProjectFormEror,
  LoginFormError,
  createProjectFromValidation,
  loginFormValidation,
  registerFormError,
  registerFormValidation,
} from "./validation";

import { revalidateTag } from "next/cache";

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

  redirect("/projects");
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

  redirect("/projects");
}

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

  const session = cookies().get("session");
  const res = await fetch(backendAPI.projects.create, {
    method: HttpMethods.POST,
    body: JSON.stringify(validFields.data),
    headers: {
      Authorization: `Bearer ${session?.value}`,
      ...HttpHeaders.json,
    },
  });

  const body = await res.json();
  if (!res.ok) {
    return { message: body.message };
  }
  revalidateTag(cacheTags.projects);
  redirect("/projects");
}
