import {
  CreateProjectFormEror,
  LoginFormError,
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
