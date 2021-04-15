import {
  DETAIL_MOVIES_LOADING,
  DETAIL_MOVIES_SUCCESS,
  DETAIL_MOVIES_FAILURE,
} from "../Types/Types";
import axios from "../../shared/axios-datas";
import { Dispatch } from "redux";

export interface DetailMoviesLoadingAction {
  type: typeof DETAIL_MOVIES_LOADING;
}
export interface DetailMoviesSuccessAction {
  type: typeof DETAIL_MOVIES_SUCCESS;
  DetailMovie: any;
}
export interface DetailMoviesFailureAction {
  type: typeof DETAIL_MOVIES_FAILURE;
  error: string;
}
export const DetailMoviesLoading = (): DetailMoviesLoadingAction => {
  return {
    type: DETAIL_MOVIES_LOADING,
  };
};

export const DetailMoviesSuccess = (
  DetailMovie: any
): DetailMoviesSuccessAction => {
  return {
    type: DETAIL_MOVIES_SUCCESS,
    DetailMovie,
  };
};

export const DetailMoviesFailure = (
  error: string
): DetailMoviesFailureAction => {
  return {
    type: DETAIL_MOVIES_FAILURE,
    error,
  };
};

export const DetailMovies = (movie_id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(DetailMoviesLoading());
    axios
      .get(
        `movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        const DetailMovie = response.data;
        dispatch(DetailMoviesSuccess(DetailMovie));
      })
      .catch((error) => {
        dispatch(DetailMoviesFailure(error.message));
      });
  };
};
