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

export interface IError {
  message: string;
  error: string;
  statusCode: number;
}

export interface INotification {
  type: "invite";
  id: string;
  sender: IUser;
  project?: IProject;
  message?: string;
}

export interface IGroup {
  id: number;
  name: string;
  project_id: number;
  color?: string;
}
