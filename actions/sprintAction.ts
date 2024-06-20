import { getSession } from "@/lib/server-utils";
import { ISprintCreateState } from "./formState";

import { backendAPI, cacheTags } from "@/lib/constants";
import { HttpHeaders } from "@/lib/constants";
import { SprintFormError, sprintFormValidation } from "./validation";
import { revalidateTag } from "next/cache";
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
