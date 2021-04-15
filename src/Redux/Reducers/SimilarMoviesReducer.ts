import {
    FETCH_SIMILAR_LOADING,
    FETCH_SIMILAR_SUCCESS,
    FETCH_SIMILAR_FAILURE,
    FetchSimilarMovies
  } from "../Types/Types";
export interface tvShowsState {
    Similars: [];
    error: string;
    loading: boolean;
  }
  
  const initialState: tvShowsState = {
    Similars: [],
    error: '',
    loading: false,
  };
  
  const reducer = (state = initialState, action: FetchSimilarMovies) => {
    switch (action.type) {
      case FETCH_SIMILAR_LOADING:
        return {
          ...state,
          loading: true,
        };
      case FETCH_SIMILAR_SUCCESS:
        return {
          loading: false,
          Similars: action.Similars,
          error: '',
        };
      case FETCH_SIMILAR_FAILURE:
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