import { IUser } from "@/models/models";
import {
  CreateProjectFormEror,
  LoginFormError,
  SearchUserFormError,
  SprintFormError,
  TaskFormError,
  UserStoryFormError,
  registerFormError,
} from "./validation";

export interface IBasicFormState {
  message?: string;
  error?: string;
  validation?: string;
}

export interface IResgisterFormState {
  message?: string;
  error?: registerFormError;
}

export interface ILoginFromState {
  message?: string;
  error?: LoginFormError;
}

export interface ICreateProjectFormState {
  message?: string;
  error?: CreateProjectFormEror;
}

export interface ISearchUserFormState {
  error?: SearchUserFormError;
  user?: IUser;
  message?: string;
}

export interface IUserStoryFormState {
  error?: string;
  message?: string;
  validation?: UserStoryFormError;
}

export interface ISprintCreateState {
  error?: string;
  message?: string;
  validation?: SprintFormError;
}

export interface ITaskFormState {
  error?: string;
  message?: string;
  validation?: TaskFormError;
}
