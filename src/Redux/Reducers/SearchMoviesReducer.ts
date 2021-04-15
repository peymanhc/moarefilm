import {
    SEARCH_MOVIE_LOADING,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_FAILURE,
    SearchMovies
  } from '../Types/Types';
  
  export interface resultMoviesState {
    resultMovies: [];
    error: string;
    loading: boolean;
  }
  
  const initialState: resultMoviesState = {
    resultMovies: [],
    error: '',
    loading: false,
  };
  
  const reducer = (state = initialState, action: SearchMovies) => {
    switch (action.type) {
      case SEARCH_MOVIE_LOADING:
        return {
          ...state,
          loading: true,
        };
      case SEARCH_MOVIE_SUCCESS:
        return {
          loading: false,
          resultMovies: action.resultMovies,
          error: '',
        };
      case SEARCH_MOVIE_FAILURE:
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
  