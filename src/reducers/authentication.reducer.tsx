// constants
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT
} from "../constants";

// types
import { User, AuthActionTypes, AuthState } from "../types/";

let user: User | null = null;

// check if user exists in the storages
const userStorage: string | null =
  localStorage.getItem("user") || sessionStorage.getItem("user");

// if user does not exists user = null
user = userStorage ? JSON.parse(userStorage) : null;

const initState: AuthState = user ? { loggedIn: true, user } : {};

// authentication reducer
const authentication = (
  state = initState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload
      };
    case LOGIN_FAILURE:
      return {
        loggedIn: false,
        error: action.payload
      };
    case LOGOUT:
      return {
        loggedIn: false
      };
    default:
      return state;
  }
};

export default authentication;