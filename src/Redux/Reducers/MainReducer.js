import { ActionTypes } from "../Actions/ActionTypes";

const initialState = {
  userArray: [],
  loginData: {
    loginSuccess: false,
    loginAccount: {
      email: "",
    },
  },
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        ...state,
        userArray: [...state.userArray, action.payload],
      };

    case ActionTypes.USER_LOGIN:
      return {
        ...state,
        loginData: {
          loginSuccess: true,
          loginAccount: {
            email: action.payload.email,
          },
        },
      };
    case ActionTypes.USER_LOGOUT:
      return {
        ...state,
        loginData: {
          loginSuccess: false,
          loginAccount: {
            email: "",
          },
        },
      };

    default:
      return state;
  }
};

export default MainReducer;
