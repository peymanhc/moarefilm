import {
    FETCH_FAVORATE_LOADING,
    FETCH_FAVORATE_SUCCESS,
    FETCH_FAVORATE_FAILURE,
    FavorateMovies,
  } from "../Types/Types";
  
  export interface FavorateMoviesState {
    FavorateMovies: [];
    error: string;
    loading: boolean;
  }
  
  const initialState: FavorateMoviesState = {
    FavorateMovies: [],
    error: "",
    loading: false,
  };
  
  const reducer = (state = initialState, action: FavorateMovies) => {
    switch (action.type) {
      case FETCH_FAVORATE_LOADING:
        return {
          ...state,
          loading: true,
        };
      case FETCH_FAVORATE_SUCCESS:
        return {
          loading: false,
          FavorateMovies: action.FavorateMovies,
          error: "",
        };
      case FETCH_FAVORATE_FAILURE:
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
  