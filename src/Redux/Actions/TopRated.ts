import {
    TOP_RATED_MOVIES_LOADING,
    TOP_RATED_MOVIES_SUCCESS,
    TOP_RATED_MOVIES_FAILURE,
  } from "../Types/Types";
  
  import axios from "../../shared/axios-datas";
  import { Dispatch } from "redux";
  
  export interface TopRatedLoadingAction {
    type: typeof TOP_RATED_MOVIES_LOADING;
  }
  export interface TopRatedSuccessAction {
    type: typeof TOP_RATED_MOVIES_SUCCESS;
    TopRated: any;
  }
  export interface TopRatedFailureAction {
    type: typeof TOP_RATED_MOVIES_FAILURE;
    error: string;
  }
  export const TopRatedLoading = (): TopRatedLoadingAction => {
    return {
      type: TOP_RATED_MOVIES_LOADING,
    };
  };
  
  export const TopRatedSuccess = (
    TopRated: any
  ): TopRatedSuccessAction => {
    return {
      type: TOP_RATED_MOVIES_SUCCESS,
      TopRated,
    };
  };
  
  export const TopRatedFailure = (
    error: string
  ): TopRatedFailureAction => {
    return {
      type: TOP_RATED_MOVIES_FAILURE,
      error,
    };
  };
  
  export const FetchTopRated = () => {
    return (dispatch: Dispatch) => {
      dispatch(TopRatedLoading());
      axios
        .get(
          "/movie/top_rated?api_key=56569254f2ed605d15173d3dd6813887&language=en-US&page=1"
        )
        .then((response) => {
          const TopPopularMovies = response.data.results;
          dispatch(TopRatedSuccess(TopPopularMovies));
        })
        .catch((error) => {
          dispatch(TopRatedFailure(error.message));
        });
    };
  };
  