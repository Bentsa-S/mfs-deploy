const initialState = {
    color: 'black',
  };
  
  const styleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COLOR':
        return {
          ...state,
          color: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default styleReducer;
  