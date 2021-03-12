// constants
import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from "../constants";

// types
import { RegisterState, RegisterActionTypes } from "../types/";

const initState: RegisterState = {};

// authentication reducer
const registration = (
  state = initState,
  action: RegisterActionTypes
): RegisterState => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        registering: true
      };
    case REGISTER_SUCCESS:
      return {
        registered: true
      };
    case REGISTER_FAILURE:
      return {
        error: action.payload
      };
    default:
      return state;
  }
};

export default registration;