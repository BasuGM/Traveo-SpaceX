// Redux Imports
import { createStore } from "redux";

// Local Imports
import rootReducer from "./Reducers";

// Create Store
const store = createStore(rootReducer)

// Store Export
export default store
