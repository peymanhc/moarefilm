import {
  FETCH_TOP_ACTION_MOVIES_LOADING,
  FETCH_TOP_ACTION_MOVIES_SUCCESS,
  FETCH_TOP_ACTION_MOVIES_FAILURE,
} from "../Types/Types";
import { Dispatch } from "redux";
import fetchMovies from '../../services/fetchMovies';

export interface fetchActionMoviesLoading {
  type: typeof FETCH_TOP_ACTION_MOVIES_LOADING;
}
export interface fetchActionMoviesSuccess {
  type: typeof FETCH_TOP_ACTION_MOVIES_SUCCESS;
  TopMovies: any;
}
export interface fetchActionMoviesFailure {
  type: typeof FETCH_TOP_ACTION_MOVIES_FAILURE;
  error: string;
}
export const fetchActionMoviesLoading = (): fetchActionMoviesLoading => {
  return {
    type: FETCH_TOP_ACTION_MOVIES_LOADING,
  };
};

export const fetchActionMoviesSuccess = (
  TopMovies: any
): fetchActionMoviesSuccess => {
  return {
    type: FETCH_TOP_ACTION_MOVIES_SUCCESS,
    TopMovies,
  };
};

export const fetchActionMoviesFailure = (
  error: any
): fetchActionMoviesFailure => {
  return {
    type: FETCH_TOP_ACTION_MOVIES_FAILURE,
    error,
  };
};

export const fetchActionMovies = (page:number = 1) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchActionMoviesLoading());
      return fetchMovies(
        {},
        {
          page,
          with_genres: 28,
          sort_by: "popularity.desc",
        }
      )
      .then((response:any) => {
        const TopActionMovies = response.data.results;
        dispatch(fetchActionMoviesSuccess(TopActionMovies));
        localStorage.setItem("TopActionMovies", JSON.stringify(TopActionMovies))
      })
      .catch((error:any) => {
        let movies = localStorage.getItem("TopActionMovies")
        dispatch(fetchActionMoviesSuccess(movies));
      });
  };
};