import {
  FETCH_HORROR_LOADING,
  FETCH_HORROR_SUCCESS,
  FETCH_HORROR_FAILURE,
} from "../Types/Types";
import fetchMovies from '../../services/fetchMovies';
import { Dispatch } from "redux";

export interface fetchHorrorLoadingAction {
  type: typeof FETCH_HORROR_LOADING;
}
export interface fetchHorrorSuccessAction {
  type: typeof FETCH_HORROR_SUCCESS;
  Horror: any;
}
export interface fetchHorrorFailureAction {
  type: typeof FETCH_HORROR_FAILURE;
  error: string;
}
export const fetchHorrorLoading = (): fetchHorrorLoadingAction => {
  return {
    type: FETCH_HORROR_LOADING,
  };
};

export const fetchHorrorSuccess = (Horror: any): fetchHorrorSuccessAction => {
  return {
    type: FETCH_HORROR_SUCCESS,
    Horror,
  };
};

export const fetchHorrorFailure = (error: string): fetchHorrorFailureAction => {
  return {
    type: FETCH_HORROR_FAILURE,
    error,
  };
};

export const fetchHorror = (page:number = 1) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchHorrorLoading());
    return fetchMovies(
      {},
      {
        page,
        with_genres: 27,
        sort_by: "popularity.desc",
      }
    )
      .then((response) => {
        const TopHorrorMovies = response.data.results;
        dispatch(fetchHorrorSuccess(TopHorrorMovies));
        localStorage.setItem("TopHorrorMovies", JSON.stringify(TopHorrorMovies))
      })
      .catch((error) => {
        let movies = localStorage.getItem("TopHorrorMovies")
        dispatch(fetchHorrorSuccess(movies));
      });
  };
};
