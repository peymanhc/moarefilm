import {
    FETCH_TOP_ACTION_MOVIES_LOADING,
    FETCH_TOP_ACTION_MOVIES_SUCCESS,
    FETCH_TOP_ACTION_MOVIES_FAILURE,
    TopActionMovies,
  } from '../Types/Types';
  
  export interface TopMoviesState {
    TopMovies: [];
    error: string;
    loading: boolean;
  }
  
  const initialState: TopMoviesState = {
    TopMovies: [],
    error: '',
    loading: false,
  };
  
  const reducer = (state = initialState, action: TopActionMovies) => {
    switch (action.type) {
      case FETCH_TOP_ACTION_MOVIES_LOADING:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TOP_ACTION_MOVIES_SUCCESS:
        return {
          loading: false,
          TopMovies: action.TopMovies,
          error: '',
        };
      case FETCH_TOP_ACTION_MOVIES_FAILURE:
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
  