import {
    SEARCH_MOVIE_LOADING,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_FAILURE
  } from "../Types/Types";
  import { Dispatch } from "redux";
  import axios from "../../shared/axios-datas";
  
  export interface searchMoviesLoadingAction {
    type: typeof SEARCH_MOVIE_LOADING;
  }
  export interface searchMoviesSuccessAction {
    type: typeof SEARCH_MOVIE_SUCCESS;
    resultMovies: any;
  }
  export interface searchMoviesFailureAction {
    type: typeof SEARCH_MOVIE_FAILURE;
    error: string;
  }
  export const searchMoviesLoading = (): searchMoviesLoadingAction => {
    return {
      type: SEARCH_MOVIE_LOADING,
    };
  };
  
  export const searchMoviesSuccess = (
    resultMovies: any
  ): searchMoviesSuccessAction => {
    return {
      type: SEARCH_MOVIE_SUCCESS,
      resultMovies,
    };
  };
  
  export const searchMoviesFailure = (
    error: string
  ): searchMoviesFailureAction => {
    return {
      type: SEARCH_MOVIE_FAILURE,
      error,
    };
  };
  
  export const fetchSearchMovies = (query:string) => {
    return (dispatch: Dispatch) => {
      dispatch(searchMoviesLoading());
      axios
      .get(
        `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}`
      )
        .then((response) => {
          const movies = response.data.results;
          dispatch(searchMoviesSuccess(movies));
        })
        .catch((error) => {
          dispatch(searchMoviesFailure(error.message));
        });
    };
  };
  