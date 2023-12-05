import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from "../types/AuthTypes";

const initialState = {
    user: null,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          error: null,
        };
      case LOGIN_ERROR:
        return {
          ...state,
          user: null,
          error: action.payload,
        };
      case LOGOUT:
        return {
          ...state,
          user: null,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  