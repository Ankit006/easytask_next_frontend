import { register } from "module";

const backendBaseUrl = "http://localhost:3000";

export const backendAPI = {
  register: `${backendBaseUrl}/auth/register`,
  login: `${backendBaseUrl}/auth/login`,
  currentUser:`${backendBaseUrl}/users/current`,
  projects: {
    list: `${backendBaseUrl}/projects`,
    create: `${backendBaseUrl}/projects/create`,
  },
  member: {
    currentMember: (projectId: string) => {
      return `${backendBaseUrl}/members/${projectId}/member`;
    },
  },
};

export const HttpHeaders = {
  json: {
    "Content-Type": "application/json",
  },
};

export const HttpMethods = {
  POST: "POST",
};

export const cacheTags = {
  projects: "projects",
  currentMember: "currentMember",
};
