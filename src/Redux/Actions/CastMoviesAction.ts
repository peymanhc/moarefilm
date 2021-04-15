import {
    CAST_MOVIES_FAILURE,
    CAST_MOVIES_LOADING,
    CAST_MOVIES_SUCCESS
  } from "../Types/Types";
  import { Dispatch } from "redux";
  import axios from "../../shared/axios-datas";
  
  export interface castMoviesLoadingAction {
    type: typeof CAST_MOVIES_LOADING;
  }
  export interface castMoviesSuccessAction {
    type: typeof CAST_MOVIES_SUCCESS;
    CastMovies: any;
  }
  export interface castMoviesFailureAction {
    type: typeof CAST_MOVIES_FAILURE;
    error: string;
  }
  export const castMoviesLoading = (): castMoviesLoadingAction => {
    return {
      type: CAST_MOVIES_LOADING,
    };
  };
  
  export const castMoviesSuccess = (CastMovies: any): castMoviesSuccessAction => {
    return {
      type: CAST_MOVIES_SUCCESS,
      CastMovies,
    };
  };
  
  export const castMoviesFailure = (error: string): castMoviesFailureAction => {
    return {
      type: CAST_MOVIES_FAILURE,
      error,
    };
  };
  
  export const fetchCastMovies = (person_id: number) => {
    return (dispatch: Dispatch) => {
      dispatch(castMoviesLoading());
      axios
        .get(
          `person/${person_id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        .then((response) => {
          const CastMovie = response.data.cast;
          dispatch(castMoviesSuccess(CastMovie));
        })
        .catch((error) => {
          dispatch(castMoviesFailure(error.message));
        });
    };
  };
  