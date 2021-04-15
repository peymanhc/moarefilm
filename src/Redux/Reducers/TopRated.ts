import {
    TOP_RATED_MOVIES_LOADING,
    TOP_RATED_MOVIES_SUCCESS,
    TOP_RATED_MOVIES_FAILURE,
    TopRated,
  } from '../Types/Types';
  
  export interface TopRatedState {
    TopRated: [];
    error: string;
    loading: boolean;
  }
  
  const initialState: TopRatedState = {
    TopRated: [],
    error: '',
    loading: false,
  };
  
  const reducer = (state = initialState, action: TopRated) => {
    switch (action.type) {
      case TOP_RATED_MOVIES_LOADING:
        return {
          ...state,
          loading: true,
        };
      case TOP_RATED_MOVIES_SUCCESS:
        return {
          loading: false,
          TopRated: action.TopRated,
          error: '',
        };
      case TOP_RATED_MOVIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  