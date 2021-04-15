import {
    FETCH_SIMILAR_LOADING,
    FETCH_SIMILAR_SUCCESS,
    FETCH_SIMILAR_FAILURE,
  } from "../Types/Types";
import axios from "../../shared/axios-datas";
import { Dispatch } from "redux";

export interface fetchSimilarLoadingAction {
  type: typeof FETCH_SIMILAR_LOADING;
}
export interface fetchSimilarSuccessAction {
  type: typeof FETCH_SIMILAR_SUCCESS;
  Similars: any;
}
export interface fetchSimilarFailureAction {
  type: typeof FETCH_SIMILAR_FAILURE;
  error: string;
}
export const fetchSimilarLoading = (): fetchSimilarLoadingAction => {
  return {
    type: FETCH_SIMILAR_LOADING,
  };
};

export const fetchSimilarSuccess = (Similars: any): fetchSimilarSuccessAction => {
  return {
    type: FETCH_SIMILAR_SUCCESS,
    Similars,
  };
};

export const fetchSimilarFailure = (error: string): fetchSimilarFailureAction => {
  return {
    type: FETCH_SIMILAR_FAILURE,
    error,
  };
};

export const fetchSimilar = (movie_id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchSimilarLoading());
    axios
      .get(
        `/movie/${movie_id}/similar?api_key=56569254f2ed605d15173d3dd6813887&language=en-US&page=1`
      )
      .then((response) => {
        const SimilarMovies = response.data.results;
        dispatch(fetchSimilarSuccess(SimilarMovies));
      })
      .catch((error) => {
        dispatch(fetchSimilarFailure(error.message));
      });
  };
};
