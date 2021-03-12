// constants
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from "../constants";
// import { alertActions } from './alert.actions';
// services
import { userService } from "../services/user.service";

// helpers
import { history }  from "../helpers";

// types
import { Dispatch } from "redux";
import { AppActions, User } from "../types/";
import { AppState } from "../reducers";

// user login action
const login = ({
  email,
  password,
  remember = false
}: {
    email: string;
    password: string;
    remember?: boolean;
  }) => {
  return (dispatch: Dispatch<AppActions>, useState: () => AppState) => {
    // logging in
    dispatch(request());

    // send login request to server
    userService.login({ email, password, remember }).then(
      user => {
        // login was successful
        dispatch(success(user));
        history.push("/feed");
      },
      error => {
        // login failed
        alert(error);
        dispatch(failure(error));
      }
    );

    function request(): AppActions {
      return { type: LOGIN_REQUEST };
    }
    function success(user: User): AppActions {
      return { type: LOGIN_SUCCESS, payload: user };
    }
    function failure(error: any): AppActions {
      return { type: LOGIN_FAILURE, payload: error };
    }
  };
};

// user register action
const register = ({
  firstName,
  lastName,
  email,
  password
}: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
  return (dispatch: Dispatch<AppActions>, useState: () => AppState) => {
    // logging in
    dispatch(request());

    // send login request to server
    userService.register({ firstName, lastName, email, password }).then(
      () => {
        // register was successful
        dispatch(success());
        history.push('/login');
        // dispatch(alertActions.success('Registration successful'));
      },
      error => {
        // register failed
        alert(error);
        dispatch(failure(error));
      }
    );

    function request(): AppActions {
      return { type: REGISTER_REQUEST };
    }
    function success(): AppActions {
      return { type: REGISTER_SUCCESS };
    }
    function failure(error: any): AppActions {
      return { type: REGISTER_FAILURE, payload: error };
    }
  };
};

// user logout action
const logout = () => {
  userService.logout();
  history.push("/");
  return { type: LOGOUT };
};

export const userActions: any = {
  login,
  register,
  logout
};