import {
    HORROR_TV_SHOWS_FAILURE,
    HORROR_TV_SHOWS_LOADING,
    HORROR_TV_SHOWS_SUCCESS
  } from "../Types/Types";
  import { Dispatch } from "redux";
  import fetchTvShow from '../../services/fetchTvShows';
  
  export interface fetchHorrorTvShowsLoadingAction {
    type: typeof HORROR_TV_SHOWS_LOADING;
  }
  export interface fetchHorrorTvShowsSuccessAction {
    type: typeof HORROR_TV_SHOWS_SUCCESS;
    horrorTvShows: any;
  }
  export interface fetchHorrorTvShowsFailureAction {
    type: typeof HORROR_TV_SHOWS_FAILURE;
    error: string;
  }
  export const fetchHorrorTvShowsLoading = (): fetchHorrorTvShowsLoadingAction => {
    return {
      type: HORROR_TV_SHOWS_LOADING,
    };
  };
  
  export const fetchHorrorTvShowsSuccess = (
    horrorTvShows: any
  ): fetchHorrorTvShowsSuccessAction => {
    return {
      type: HORROR_TV_SHOWS_SUCCESS,
      horrorTvShows,
    };
  };
  
  export const fetchHorrorTvShowsFailure = (
    error: string
  ): fetchHorrorTvShowsFailureAction => {
    return {
      type: HORROR_TV_SHOWS_FAILURE,
      error,
    };
  };
  
  export const fetchHorrorTvShows = (page:number = 1) => {
    return (dispatch: Dispatch) => {
      dispatch(fetchHorrorTvShowsLoading());
      return fetchTvShow(
        {},
        {
          page,
          with_genres: 27,
          sort_by: "popularity.desc",
        }
      )
        .then((response) => {
          const horrorTvShow = response.data.results;
          dispatch(fetchHorrorTvShowsSuccess(horrorTvShow));
        })
        .catch((error) => {
          dispatch(fetchHorrorTvShowsFailure(error.message));
        });
    };
  };
  