import {
    ACTION_TV_SHOW_FAILURE,
    ACTION_TV_SHOW_SUCCESS,
    ACTION_TV_SHOW_LOADING,
  } from "../Types/Types";
  import { Dispatch } from "redux";
  import fetchTvShow from '../../services/fetchTvShows';
  
  export interface fetchActionTvShowsLoadingAction {
    type: typeof ACTION_TV_SHOW_LOADING;
  }
  export interface fetchActionTvShowsSuccessAction {
    type: typeof ACTION_TV_SHOW_SUCCESS;
    actionTvShows: any;
  }
  export interface fetchActionTvShowsFailureAction {
    type: typeof ACTION_TV_SHOW_FAILURE;
    error: string;
  }
  export const fetchActionTvShowsLoading = (): fetchActionTvShowsLoadingAction => {
    return {
      type: ACTION_TV_SHOW_LOADING,
    };
  };
  
  export const fetchActionTvShowsSuccess = (
    actionTvShows: any
  ): fetchActionTvShowsSuccessAction => {
    return {
      type: ACTION_TV_SHOW_SUCCESS,
      actionTvShows,
    };
  };
  
  export const fetchActionTvShowsFailure = (
    error: string
  ): fetchActionTvShowsFailureAction => {
    return {
      type: ACTION_TV_SHOW_FAILURE,
      error,
    };
  };
  
  export const fetchActionTvShows = (page:number = 1) => {
    return (dispatch: Dispatch) => {
      dispatch(fetchActionTvShowsLoading());
      return fetchTvShow(
        {},
        {
          page,
          with_genres: 28,
          sort_by: "popularity.desc",
        }
      )
        .then((response) => {
          const actionTvShow = response.data.results;
          dispatch(fetchActionTvShowsSuccess(actionTvShow));
        })
        .catch((error) => {
          dispatch(fetchActionTvShowsFailure(error.message));
        });
    };
  };
  