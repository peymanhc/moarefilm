import {
    SEARCH_TV_SHOWS_LOADING,
    SEARCH_TV_SHOWS_SUCCESS,
    SEARCH_TV_SHOWS_FAILURE
  } from "../Types/Types";
  import { Dispatch } from "redux";
  import axios from "../../shared/axios-datas";
  
  export interface searchTvShowsLoadingAction {
    type: typeof SEARCH_TV_SHOWS_LOADING;
  }
  export interface searchTvShowsSuccessAction {
    type: typeof SEARCH_TV_SHOWS_SUCCESS;
    resultTvShows: any;
  }
  export interface searchTvShowsFailureAction {
    type: typeof SEARCH_TV_SHOWS_FAILURE;
    error: string;
  }
  export const searchTvShowsLoading = (): searchTvShowsLoadingAction => {
    return {
      type: SEARCH_TV_SHOWS_LOADING,
    };
  };
  
  export const searchTvShowsSuccess = (
    resultTvShows: any
  ): searchTvShowsSuccessAction => {
    return {
      type: SEARCH_TV_SHOWS_SUCCESS,
      resultTvShows,
    };
  };
  
  export const searchTvShowsFailure = (
    error: string
  ): searchTvShowsFailureAction => {
    return {
      type: SEARCH_TV_SHOWS_FAILURE,
      error,
    };
  };
  
  export const fetchSearchTvShows = (query:string) => {
    return (dispatch: Dispatch) => {
      dispatch(searchTvShowsLoading());
      axios
      .get(
        `search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}`
      )
        .then((response) => {
          const tvShows = response.data.results;
          dispatch(searchTvShowsSuccess(tvShows));
        })
        .catch((error) => {
          dispatch(searchTvShowsFailure(error.message));
        });
    };
  };
  