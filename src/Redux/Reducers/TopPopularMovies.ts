import {
    FETCH_POPULAR_TOP_MOVIES_LOADING,
    FETCH_POPULAR_TOP_MOVIES_SUCCESS,
    FETCH_POPULAR_TOP_MOVIES_FAILURE,
    PopularTopMovies,
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
  
  const reducer = (state = initialState, action: PopularTopMovies) => {
    switch (action.type) {
      case FETCH_POPULAR_TOP_MOVIES_LOADING:
        return {
          ...state,
          loading: true,
        };
      case FETCH_POPULAR_TOP_MOVIES_SUCCESS:
        return {
          loading: false,
          TopMovies: action.TopMovies,
          error: '',
        };
      case FETCH_POPULAR_TOP_MOVIES_FAILURE:
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
  