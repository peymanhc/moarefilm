import {
  FETCH_POPULAR_TV_SHOWS_LOADING,
  FETCH_POPULAR_TV_SHOWS_SUCCESS,
  FETCH_POPULAR_TV_SHOWS_FAILURE,
} from "../Types/Types";
import { Dispatch } from "redux";
import fetchTvShow from '../../services/fetchTvShows';

export interface fetchPopularTvShowsLoadingAction {
  type: typeof FETCH_POPULAR_TV_SHOWS_LOADING;
}
export interface fetchPopularTvShowsSuccessAction {
  type: typeof FETCH_POPULAR_TV_SHOWS_SUCCESS;
  tvShows: any;
}
export interface fetchPopularTvShowsFailureAction {
  type: typeof FETCH_POPULAR_TV_SHOWS_FAILURE;
  error: string;
}
export const fetchPopularTvShowsLoading = (): fetchPopularTvShowsLoadingAction => {
  return {
    type: FETCH_POPULAR_TV_SHOWS_LOADING,
  };
};

export const fetchPopularTvShowsSuccess = (
  tvShows: any
): fetchPopularTvShowsSuccessAction => {
  return {
    type: FETCH_POPULAR_TV_SHOWS_SUCCESS,
    tvShows,
  };
};

export const fetchPopularTvShowsFailure = (
  error: any
): fetchPopularTvShowsFailureAction => {
  return {
    type: FETCH_POPULAR_TV_SHOWS_FAILURE,
    error,
  };
};

export const fetchPopularTvShows = (page:number = 1) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchPopularTvShowsLoading());
    return fetchTvShow(
      {},
      {
        page,
        sort_by: "popularity.desc",
      }
    )
      .then((response) => {
        const TvShows = response.data.results;
        dispatch(fetchPopularTvShowsSuccess(TvShows));
        localStorage.setItem("TvShows", JSON.stringify(TvShows))
      })
      .catch((error) => {
        let movies = localStorage.getItem("TopPopularMovies")
        dispatch(fetchPopularTvShowsSuccess(movies));
      });
  };
};
