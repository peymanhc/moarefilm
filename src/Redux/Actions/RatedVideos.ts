import {
  FETCH_RATED_LOADING,
  FETCH_RATED_SUCCESS,
  FETCH_RATED_FAILURE,
} from "../Types/Types";
import fetchRatedMovies from "../../services/fetchRatedVideos";
import { Dispatch } from "redux";

export interface fetchRatedLoadingAction {
  type: typeof FETCH_RATED_LOADING;
}
export interface fetchRatedSuccessAction {
  type: typeof FETCH_RATED_SUCCESS;
  RatedMovies: any;
}
export interface fetchRatedFailureAction {
  type: typeof FETCH_RATED_FAILURE;
  error: string;
}
export const fetchRatedLoading = (): fetchRatedLoadingAction => {
  return {
    type: FETCH_RATED_LOADING,
  };
};

export const fetchRatedSuccess = (
  RatedMovies: any
): fetchRatedSuccessAction => {
  return {
    type: FETCH_RATED_SUCCESS,
    RatedMovies,
  };
};

export const fetchRatedFailure = (error: string): fetchRatedFailureAction => {
  return {
    type: FETCH_RATED_FAILURE,
    error,
  };
};

export const fetchRated = (page: number = 1) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchRatedLoading());
    return fetchRatedMovies(
      {},
      {
        sort_by: "created_at.asc",
        page,
      }
    )
      .then((response) => {
        const TopPopularMovies = response.data.results;
        dispatch(fetchRatedSuccess(TopPopularMovies));
      })
      .catch((error) => {
        dispatch(fetchRatedFailure(error.message));
      });
  };
};
