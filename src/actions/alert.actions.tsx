// import { ThunkDispatch as Dispatch } from "redux-thunk";
import * as constants from "../constants/index";

export interface ISuccess {
  type: constants.ALERT_SUCCESS;
  message
}

export interface IError {
  type: constants.ALERT_ERROR;
  message
}

export interface IClear {
  type: constants.ALERT_CLEAR;
}

export function success(message): ISuccess {
  return {
    type: constants.ALERT_SUCCESS,
    message
  };
}

export function error(message): IError {
  return {
    type: constants.ALERT_ERROR,
    message
  };
}

export function clear(): IClear {
  return {
    type: constants.ALERT_CLEAR
  };
}

export type AlertActions = ISuccess | IError | IClear;
export const alertActions = {
  success,
  error,
  clear
};