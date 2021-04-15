import {
  FETCH_RATED_LOADING,
  FETCH_RATED_SUCCESS,
  FETCH_RATED_FAILURE,
  RatedMovies,
} from "../Types/Types";

export interface RatedMoviesState {
  RatedMovies: [];
  error: string;
  loading: boolean;
}

const initialState: RatedMoviesState = {
  RatedMovies: [],
  error: "",
  loading: false,
};

const reducer = (state = initialState, action: RatedMovies) => {
  switch (action.type) {
    case FETCH_RATED_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RATED_SUCCESS:
      return {
        loading: false,
        RatedMovies: action.RatedMovies,
        error: "",
      };
    case FETCH_RATED_FAILURE:
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
