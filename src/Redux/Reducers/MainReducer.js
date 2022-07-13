const initialState = {
    isLoading: false,
  };
  
  const MainReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOADER_TRUE':
        return {
          ...state,
          isLoading: true,
        };
  
      case 'LOADER_FALSE':
        return {
          ...state,
          isLoading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default MainReducer;
  