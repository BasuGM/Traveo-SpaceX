import { ActionTypes } from "./ActionTypes";
import store from "../store";

export const AddUser = (fullname, email, password) => {
  store.dispatch({
    type: ActionTypes.ADD_USER,
    payload: { fullname, email, password },
  });
};
