// Library Imports
import { combineReducers } from "redux";
import DataReducer from "./DataReducer";

// Local Imports
import MainReducer from "./MainReducer";

const appReducer = combineReducers({
  MainData: MainReducer,
  FetchData: DataReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
