export type priority = "low" | "medium" | "high";
export type status =
  | "new"
  | "active"
  | "completed"
  | "on hold"
  | "pending"
  | "canceled"
  | "under investigation";

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
  userId: number;
  projectId: number;
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
  projectId: number;
  color?: string;
}

export interface IUserStory {
  id: number;
  sprintId: number;
  projectId: number;
  title: string;
  description: string;
  priority: priority;
  status: status;
  estimateDate: string;
  createdAt: string;
}

export interface ISprint {
  id: number;
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  createdAt: string;
}

export interface ITask {
  id: number;
  task: string;
  status: status;
  priority: priority;
  userStoryId: number;
  createdAt: string;
}
