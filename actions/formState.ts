import { IUser } from "@/models/models";
import {
  CreateProjectFormEror,
  LoginFormError,
  SearchUserFormError,
  registerFormError,
} from "./validation";

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
