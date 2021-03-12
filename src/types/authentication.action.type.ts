// constants
import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT
} from "../constants";

// types
import { User } from "./user.type";

// action type for login request
export interface UserLoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

// action type for login success 
export interface UserLoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}

// action type for login failure
export interface UserLoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: any;
}

// action type for logout
export interface UserLogoutAction {
  type: typeof LOGOUT;
}

// auth action types
export type AuthActionTypes =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginFailureAction
  | UserLogoutAction;

// auth state
export type AuthState = {
  loggedIn?: boolean;
  loggingIn?: boolean;
  user?: User;
  error?: any;
};
