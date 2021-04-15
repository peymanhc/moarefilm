import {
    FETCH_FAVORATE_LOADING,
    FETCH_FAVORATE_SUCCESS,
    FETCH_FAVORATE_FAILURE,
  } from "../Types/Types";
  import fetchFavorate from '../../services/fetchFavorate';
  import { Dispatch } from "redux";
  
  export interface fetchFavoratesLoadingAction {
    type: typeof FETCH_FAVORATE_LOADING;
  }
  export interface fetchFavoratesSuccessAction {
    type: typeof FETCH_FAVORATE_SUCCESS;
    FavorateMovies: any;
  }
  export interface fetchFavoratesFailureAction {
    type: typeof FETCH_FAVORATE_FAILURE;
    error: string;
  }
  export const fetchFavoratesLoading = (): fetchFavoratesLoadingAction => {
    return {
      type: FETCH_FAVORATE_LOADING,
    };
  };
  
  export const fetchFavoratesSuccess = (FavorateMovies: any): fetchFavoratesSuccessAction => {
    return {
      type: FETCH_FAVORATE_SUCCESS,
      FavorateMovies,
    };
  };
  
  export const fetchFavoratesFailure = (error: string): fetchFavoratesFailureAction => {
    return {
      type: FETCH_FAVORATE_FAILURE,
      error,
    };
  };
  
  export const fetchFavorates = (page:number = 1) => {
    return (dispatch: Dispatch) => {
      dispatch(fetchFavoratesLoading());
      return fetchFavorate(
        {},
        {
          sort_by: "created_at.asc",
          page,
        }
      )
        .then((response) => {
          const TopPopularMovies = response.data.results;
          dispatch(fetchFavoratesSuccess(TopPopularMovies));
        })
        .catch((error) => {
          dispatch(fetchFavoratesFailure(error.message));
        });
    };
  };
  