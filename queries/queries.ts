import { backendAPI, cacheTags } from "@/lib/constants";
import { getSession } from "@/lib/server-utils";
import {
  IGroup,
  IMember,
  INotification,
  IProject,
  ISprint,
  ITask,
  IUser,
  IUserStory,
} from "@/models/models";

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

export async function getGroups(projectId: string): Promise<IGroup[]> {
  const session = await getSession();
  const res = await fetch(backendAPI.group.getAll(projectId), {
    headers: {
      Authorization: `Bearer ${session}`,
    },
    next: { tags: [cacheTags.groups] },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
}

export async function getAssignedGroups(memberId: number): Promise<IGroup[]> {
  const session = await getSession();
  const res = await fetch(backendAPI.group.assignedGroups(memberId), {
    headers: {
      Authorization: `Bearer ${session}`,
    },
    next: { tags: [`${cacheTags.assignedGroups}-${memberId}`] },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
}

export async function getBacklogs(projectId: number): Promise<IUserStory[]> {
  const session = await getSession();
  const res = await fetch(backendAPI.userStory.backlogs(projectId), {
    headers: {
      Authorization: `Bearer ${session}`,
    },
    next: { tags: [cacheTags.backlogs] },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
}

export async function getSprints(projectId: number): Promise<ISprint[]> {
  const session = await getSession();
  const res = await fetch(backendAPI.sprints.all(projectId), {
    headers: {
      Authorization: `Bearer ${session}`,
    },
    next: { tags: [cacheTags.sprints] },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
}

export async function getSprint(sprintId: number): Promise<ISprint> {
  const session = await getSession();
  const res = await fetch(backendAPI.sprints.get(sprintId), {
    headers: {
      Authorization: `Bearer ${session}`,
    },
    next: { tags: [`${cacheTags.sprints}-${sprintId}`] },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
}

export async function getSprintUserStories(
  sprintId: number
): Promise<IUserStory[]> {
  const session = await getSession();
  const res = await fetch(backendAPI.sprints.userStory(sprintId), {
    headers: {
      Authorization: `Bearer ${session}`,
    },
    next: { tags: [cacheTags.sprintUserStory(sprintId)] },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
}

export async function getTasks(userStoryId: number): Promise<ITask[]> {
  const session = await getSession();
  const res = await fetch(backendAPI.tasks.all(userStoryId), {
    headers: {
      Authorization: `Bearer ${session}`,
    },
    next: { tags: [cacheTags.tasks(userStoryId)] },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
}
