//updates message state when message action is dispatched from anywhere in the application.
import * as constants from "../constants/index";
import { ISuccess, IError, IClear } from "../actions/alert.actions";
import {Alert}  from "../types/";

const initialState = {};

export default function alertReducer(
  state: Alert = {
    type: null,
    message: null,
  },
  action: ISuccess | IError | IClear,
): Alert {
  switch (action.type) {
    case constants.ALERT_SUCCESS:
      return { 
        ...state, 
        type: 'alert-success',
        message: action.message};
    case constants.ALERT_ERROR:
      return {
        ...state,
        type: 'alert-danger',
        message: action.message
      };
    case constants.ALERT_CLEAR:
      return {
        ...state
      };
  }
  return state;
}
// export default function (state = initialState, action) {
//   const { type, message } = action;

//   switch (type) {
//     case constants.ALERT_SUCCESS:
//       return {
//         type: 'alert-success',
//         message: message 
//       };

//     case constants.ALERT_ERROR:
//       return {
//         type: 'alert-danger',
//         message: message
//       };
//     case constants.ALERT_CLEAR:
//       return {};
//     default:
//       return state;
//   }
// }
