import {
    CAST_MOVIES_FAILURE,
    CAST_MOVIES_LOADING,
    CAST_MOVIES_SUCCESS,
    CastMovies
  } from "../Types/Types";
  export interface CastMovie {
    CastMovies: [];
    error: string;
    loading: boolean;
  }
  
  const initialState: CastMovie = {
    CastMovies: [],
    error: "",
    loading: false,
  };
  
  const reducer = (state = initialState, action: CastMovies) => {
    switch (action.type) {
      case CAST_MOVIES_LOADING:
        return {
          ...state,
          loading: true,
        };
      case CAST_MOVIES_SUCCESS:
        return {
          loading: false,
          CastMovies: action.CastMovies,
          error: "",
        };
      case CAST_MOVIES_FAILURE:
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