import { backendAPI, cacheTags } from "@/lib/constants";
import { cookies } from "next/headers";

export async function getProjects() {
  const cookie = cookies().get("session");
  const res = await fetch(backendAPI.projects.list, {
    next: { tags: [cacheTags.projects] },
    headers: {
      Authorization: `Bearer ${cookie?.value}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
}
