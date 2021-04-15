import {
  FETCH_POPULAR_TOP_MOVIES_LOADING,
  FETCH_POPULAR_TOP_MOVIES_SUCCESS,
  FETCH_POPULAR_TOP_MOVIES_FAILURE,
} from "../Types/Types";
import fetchMovies from '../../services/fetchMovies';
import { Dispatch } from "redux";

export interface fetchPopularTopMoviesLoadingAction {
  type: typeof FETCH_POPULAR_TOP_MOVIES_LOADING;
}
export interface fetchPopularTopMoviesSuccessAction {
  type: typeof FETCH_POPULAR_TOP_MOVIES_SUCCESS;
  TopMovies: any;
}
export interface fetchPopularTopMoviesFailureAction {
  type: typeof FETCH_POPULAR_TOP_MOVIES_FAILURE;
  error: string;
}
export const fetchPopularTopMoviesLoading = (): fetchPopularTopMoviesLoadingAction => {
  return {
    type: FETCH_POPULAR_TOP_MOVIES_LOADING,
  };
};

export const fetchPopularTopMoviesSuccess = (
  TopMovies: any
): fetchPopularTopMoviesSuccessAction => {
  return {
    type: FETCH_POPULAR_TOP_MOVIES_SUCCESS,
    TopMovies,
  };
};

export const fetchPopularTopMoviesFailure = (
  error: any
): fetchPopularTopMoviesFailureAction => {
  return {
    type: FETCH_POPULAR_TOP_MOVIES_FAILURE,
    error,
  };
};

export const fetchPopularTopMovies = (page: number= 1) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchPopularTopMoviesLoading());
    return fetchMovies(
      {},
      {
        page,
        sort_by: "popularity.desc",
      }
    )
      .then((response) => {
        const TopPopularMovies = response.data.results;
        dispatch(fetchPopularTopMoviesSuccess(TopPopularMovies));
        localStorage.setItem("TopPopularMovies", JSON.stringify(TopPopularMovies))
      })
      .catch((error) => {
        let movies = localStorage.getItem("TopPopularMovies")
        dispatch(fetchPopularTopMoviesSuccess(movies));
      });
  };
};
