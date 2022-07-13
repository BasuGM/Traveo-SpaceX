import { ActionTypes } from "../Actions/ActionTypes";

const initialState = {
  allCapsules: [],
  allCapsulesFlag: false,
};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ALL_CAPSULES_REFRESH:
      return {
        ...state,
        allCapsules: [],
        allCapsulesFlag: true,
      };
    case ActionTypes.ALL_CAPSULES:
      return {
        ...state,
        allCapsules: action.payload,
        allCapsulesFlag: false,
      };

    default:
      return state;
  }
};

export default DataReducer;
