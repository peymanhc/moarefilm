import {
  FETCH_TOP_COMEDY_LOADING,
  FETCH_TOP_COMEDY_SUCCESS,
  FETCH_TOP_COMEDY_FAILURE,
} from "../Types/Types";
import { Dispatch } from "redux";
import fetchMovies from '../../services/fetchMovies';


export interface fetchTopComedyLoadingAction {
  type: typeof FETCH_TOP_COMEDY_LOADING;
}
export interface fetchTopComedySuccessAction {
  type: typeof FETCH_TOP_COMEDY_SUCCESS;
  Comedies: any;
}
export interface fetchTopComedyFailureAction {
  type: typeof FETCH_TOP_COMEDY_FAILURE;
  error: any;
}
export const fetchTopComedyLoading = (): fetchTopComedyLoadingAction => {
  return {
    type: FETCH_TOP_COMEDY_LOADING,
  };
};

export const fetchTopComedySuccess = (
  Comedies: any
): fetchTopComedySuccessAction => {
  return {
    type: FETCH_TOP_COMEDY_SUCCESS,
    Comedies,
  };
};

export const fetchTopComedyFailure = (
  error: any
): fetchTopComedyFailureAction => {
  return {
    type: FETCH_TOP_COMEDY_FAILURE,
    error,
  };
};

export const fetchTopComedy = (page: number =1) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchTopComedyLoading());
    return fetchMovies(
      {},
      {
        page,
        with_genres: 35,
        sort_by: "popularity.desc",
      }
    )
      .then((response) => {
        const ComedyMovies = response.data.results;
        dispatch(fetchTopComedySuccess(ComedyMovies));
        localStorage.setItem("ComedyMovies", JSON.stringify(ComedyMovies))
      })
      .catch((error) => {
        let movies = localStorage.getItem("ComedyMovies")
        dispatch(fetchTopComedySuccess(movies));
      });
  };
};
