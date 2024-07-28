const backendBaseUrl = "http://backend:3000";
export const socketUrl = "http://localhost:3000";

export const backendAPI = {
  register: `${backendBaseUrl}/auth/register`,
  login: `${backendBaseUrl}/auth/login`,
  currentUser: `${backendBaseUrl}/users/current`,
  joinProject: `${backendBaseUrl}/users/join`,
  notifications: `${backendBaseUrl}/notifications`,
  projects: {
    list: `${backendBaseUrl}/projects`,
    create: `${backendBaseUrl}/projects/create`,
  },
  member: {
    currentMember: (projectId: string) => {
      return `${backendBaseUrl}/members/${projectId}/member`;
    },
    memberList: (projectId: string) => {
      return `${backendBaseUrl}/members/${projectId}?projectId=${projectId}`;
    },
    searchUser: `${backendBaseUrl}/members/user-search`,
    inviteUser: `${backendBaseUrl}/members/invite`,
    changeRole: `${backendBaseUrl}/members/role`,
  },
  group: {
    create: `${backendBaseUrl}/groups`,
    getAll: (projectId: string | number) => {
      return `${backendBaseUrl}/groups/${projectId}`;
    },
    remove: (groupdId: number | string, projectId: string | number) => {
      return `${backendBaseUrl}/groups/${groupdId}?projectId=${projectId}`;
    },
    assignedGroups: (memberId: number | string) => {
      return `${backendBaseUrl}/groups/member/${memberId}`;
    },
    assignMemberToGroup: `${backendBaseUrl}/groups/member/assign`,
    unAssignMemberToGroup: `${backendBaseUrl}/groups/member/unassign`,

    unassignedGroups: (
      memberId: number | string,
      projectId: string | number
    ) => {
      return `${backendBaseUrl}/groups/${memberId}/${projectId}`;
    },
  },
  sprints: {
    create: `${backendBaseUrl}/sprints`,
    all: (projectId: number) => {
      return `${backendBaseUrl}/sprints/${projectId}`;
    },
    get: (sprintId: number) => {
      return `${backendBaseUrl}/sprints/sprint/${sprintId}`;
    },
    delete: (sprintId: number) => {
      return `${backendBaseUrl}/sprints/sprint/${sprintId}`;
    },
    userStory: (projectId: number, sprintId: number) => {
      return `${backendBaseUrl}/sprints/${projectId}/${sprintId}/userStory`;
    },
  },
  userStory: {
    create: `${backendBaseUrl}/user-stories`,
    update: (projectId: number) => {
      return `${backendBaseUrl}/user-stories?projectId=${projectId}`;
    },

    backlogs: (projectId: number) => {
      return `${backendBaseUrl}/user-stories/backlogs/${projectId}`;
    },

    assignToSprint: `${backendBaseUrl}/sprints/assign`,
    deleteUserStory: (
      userStoryId: string | number,
      projectId: string | number
    ) => {
      return `${backendBaseUrl}/user-stories/${userStoryId}?projectId=${projectId}`;
    },
  },
  tasks: {
    all: (userStoryId: number) => {
      return `${backendBaseUrl}/tasks/${userStoryId}`;
    },
    create: `${backendBaseUrl}/tasks`,
    changeStatus: `${backendBaseUrl}/tasks/status`,
  },
};

export const HttpHeaders = {
  json: {
    "Content-Type": "application/json",
  },
};

export const HttpMethods = {
  POST: "POST",
  PUT: "PUT",
};

export const cacheTags = {
  projects: "projects",
  currentMember: "currentMember",
  notificatons: "notifications",
  members: "members",
  groups: "groups",
  assignedGroups: "assignedGroups",
  unassignedGroups: "unassignedGroups",
  backlogs: "backlogs",
  sprints: "sprints",
  sprintUserStory: (sprintId: number) => `sprintUserStory-${sprintId}`,
  tasks: (userStoryId: number) => `tasks-${userStoryId}`,
};
