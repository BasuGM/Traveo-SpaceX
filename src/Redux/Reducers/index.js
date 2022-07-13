// Library Imports
import { combineReducers } from "redux";

// Local Imports
import MainReducer from "./MainReducer";

const appReducer = combineReducers({
  MainData: MainReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
