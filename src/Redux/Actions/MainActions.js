import { ActionTypes } from "./ActionTypes";
import store from "../store";

export const AddUser = (fullname, email, password) => {
  store.dispatch({
    type: ActionTypes.ADD_USER,
    payload: { fullname, email, password },
  });
};

export const UserLogin = (email) => {
  store.dispatch({
    type: ActionTypes.USER_LOGIN,
    payload: { email },
  });
};

export const UserLogout = () => {
  store.dispatch({
    type: ActionTypes.USER_LOGOUT,
  });
};
