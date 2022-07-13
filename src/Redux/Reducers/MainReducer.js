import { ActionTypes } from "../Actions/ActionTypes";

const initialState = {
  userArray: []
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        ...state,
        userArray: [...state.userArray, action.payload],
      };

    default:
      return state;
  }
};

export default MainReducer;
