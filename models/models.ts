export interface IProject {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export interface IMember {
  id: number;
  user_id: number;
  project_id: number;
  role: "admin" | "moderator" | "member";
  createdAt: string;
  users: IUser;
}
