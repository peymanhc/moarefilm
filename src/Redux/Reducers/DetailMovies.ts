import {
  DETAIL_MOVIES_LOADING,
  DETAIL_MOVIES_SUCCESS,
  DETAIL_MOVIES_FAILURE,
  DetailMovies,
} from "../Types/Types";
export interface DetailMovie {
  DetailMovie: [];
  error: string;
  loading: boolean;
}

const initialState: DetailMovie = {
  DetailMovie: [],
  error: "",
  loading: false,
};

const reducer = (state = initialState, action: DetailMovies) => {
  switch (action.type) {
    case DETAIL_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DETAIL_MOVIES_SUCCESS:
      return {
        loading: false,
        DetailMovie: action.DetailMovie,
        error: "",
      };
    case DETAIL_MOVIES_FAILURE:
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
