const backendBaseUrl = "http://localhost:3000";
export const socketUrl = "http://localhost:3000";

export const backendAPI = {
  register: `${backendBaseUrl}/auth/register`,
  login: `${backendBaseUrl}/auth/login`,
  currentUser: `${backendBaseUrl}/users/current`,
  notifications: `${backendBaseUrl}/notifications`,
  projects: {
    list: `${backendBaseUrl}/projects`,
    create: `${backendBaseUrl}/projects/create`,
  },
  member: {
    currentMember: (projectId: string) => {
      return `${backendBaseUrl}/members/${projectId}/member`;
    },
    searchUser: `${backendBaseUrl}/members/user-search`,
    inviteUser: `${backendBaseUrl}/members/invite`,
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
};
