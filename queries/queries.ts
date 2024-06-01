import { backendAPI, cacheTags } from "@/lib/constants";
import { getSession } from "@/lib/server-utils";
import { IMember, INotification, IProject, IUser } from "@/models/models";

export async function getProjects(): Promise<IProject[]> {
  const cookie = await getSession();
  const res = await fetch(backendAPI.projects.list, {
    next: { tags: [cacheTags.projects] },
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data as IProject[];
}

export async function getCurrentMember(projctId: string): Promise<IMember> {
  const cookie = await getSession();
  const res = await fetch(backendAPI.member.currentMember(projctId), {
    next: { tags: [`${cacheTags.currentMember}${projctId}`] },
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
}

export async function getUser(): Promise<IUser> {
  const cookie = await getSession();
  const res = await fetch(backendAPI.currentUser, {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
}

export async function getNotifications(): Promise<INotification[]> {
  const cookie = await getSession();

  const res = await fetch(backendAPI.notifications, {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
    next: { tags: [cacheTags.notificatons] },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
}

export async function getMembers(projectId: string): Promise<IMember[]> {
  const session = await getSession();
  const res = await fetch(backendAPI.member.memberList(projectId), {
    headers: {
      Authorization: `Bearer ${session}`,
    },
    next: { tags: [cacheTags.members] },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
