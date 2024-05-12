import { backendAPI, cacheTags } from "@/lib/constants";
import { IMember, IProject } from "@/models/models";
import { cookies } from "next/headers";

export async function getProjects(): Promise<IProject[]> {
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
  return data as IProject[];
}

export async function getCurrentMember(projctId: string): Promise<IMember> {
  const cookie = cookies().get("session");
  const res = await fetch(backendAPI.member.currentMember(projctId), {
    next: { tags: [cacheTags.currentMember] },
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
