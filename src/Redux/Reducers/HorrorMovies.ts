import {
  FETCH_HORROR_LOADING,
  FETCH_HORROR_SUCCESS,
  FETCH_HORROR_FAILURE,
  Horror,
} from "../Types/Types";

export interface TopMoviesState {
  TopMovies: [];
  error: string;
  loading: boolean;
}

const initialState: TopMoviesState = {
  TopMovies: [],
  error: "",
  loading: false,
};

const reducer = (state = initialState, action: Horror) => {
  switch (action.type) {
    case FETCH_HORROR_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HORROR_SUCCESS:
      return {
        loading: false,
        TopMovies: action.Horror,
        error: "",
      };
    case FETCH_HORROR_FAILURE:
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
