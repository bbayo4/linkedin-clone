// constants
import {
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS
} from "../constants";

export interface UserRegisterRequestAction {
  type: typeof REGISTER_REQUEST;
}

export interface UserRegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
}

export interface UserRegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  payload: any;
}

export type RegisterActionTypes =
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailureAction;

  // auth state
export type RegisterState = {
  registering?: boolean;
  registered?: boolean;
  error?: any;
};
