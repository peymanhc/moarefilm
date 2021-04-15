import {
    COMEDY_TV_SHOW_FAILURE,
    COMEDY_TV_SHOW_LOADING,
    COMEDY_TV_SHOW_SUCCESS
  } from "../Types/Types";
  import { Dispatch } from "redux";
  import fetchTvShow from '../../services/fetchTvShows';
  
  export interface fetchComedyTvShowsLoadingAction {
    type: typeof COMEDY_TV_SHOW_LOADING;
  }
  export interface fetchComedyTvShowsSuccessAction {
    type: typeof COMEDY_TV_SHOW_SUCCESS;
    comedyTvShows: any;
  }
  export interface fetchComedyTvShowsFailureAction {
    type: typeof COMEDY_TV_SHOW_FAILURE;
    error: string;
  }
  export const fetchComedyTvShowsLoading = (): fetchComedyTvShowsLoadingAction => {
    return {
      type: COMEDY_TV_SHOW_LOADING,
    };
  };
  
  export const fetchComedyTvShowsSuccess = (
    comedyTvShows: any
  ): fetchComedyTvShowsSuccessAction => {
    return {
      type: COMEDY_TV_SHOW_SUCCESS,
      comedyTvShows,
    };
  };
  
  export const fetchComedyTvShowsFailure = (
    error: string
  ): fetchComedyTvShowsFailureAction => {
    return {
      type: COMEDY_TV_SHOW_FAILURE,
      error,
    };
  };
  
  export const fetchComedyTvShows = (page:number = 1) => {
    return (dispatch: Dispatch) => {
      dispatch(fetchComedyTvShowsLoading());
      return fetchTvShow(
        {},
        {
          page,
          with_genres: 35,
          sort_by: "popularity.desc",
        }
      )
        .then((response) => {
          const comedyTvShow = response.data.results;
          dispatch(fetchComedyTvShowsSuccess(comedyTvShow));
        })
        .catch((error) => {
          dispatch(fetchComedyTvShowsFailure(error.message));
        });
    };
  };
  