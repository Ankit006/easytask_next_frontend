import { IUser } from "@/models/models";
import {
  CreateProjectFormEror,
  LoginFormError,
  SearchUserFormError,
  UserStoryFormError,
  registerFormError,
} from "./validation";

export interface IBasicFormState {
  message?: string;
  error?: string;
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
