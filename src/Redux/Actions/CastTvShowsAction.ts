import {
    CAST_TV_SHOWS_FAILURE,
    CAST_TV_SHOWS_LOADING,
    CAST_TV_SHOWS_SUCCESS,
  } from "../Types/Types";
  import { Dispatch } from "redux";
  import axios from "../../shared/axios-datas";
  
  export interface castTvShowsLoadingAction {
    type: typeof CAST_TV_SHOWS_LOADING;
  }
  export interface castTvShowsSuccessAction {
    type: typeof CAST_TV_SHOWS_SUCCESS;
    CastTvShows: any;
  }
  export interface castTvShowsFailureAction {
    type: typeof CAST_TV_SHOWS_FAILURE;
    error: string;
  }
  export const castTvShowsLoading = (): castTvShowsLoadingAction => {
    return {
      type: CAST_TV_SHOWS_LOADING,
    };
  };
  
  export const castTvShowsSuccess = (CastTvShows: any): castTvShowsSuccessAction => {
    return {
      type: CAST_TV_SHOWS_SUCCESS,
      CastTvShows,
    };
  };
  
  export const castTvShowsFailure = (error: string): castTvShowsFailureAction => {
    return {
      type: CAST_TV_SHOWS_FAILURE,
      error,
    };
  };
  
  export const fetchCastTvShow = (person_id: number) => {
    return (dispatch: Dispatch) => {
      dispatch(castTvShowsLoading());
      axios
        .get(
          `person/${person_id}/tv_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        .then((response) => {
          const CastTvShow = response.data.cast;
          dispatch(castTvShowsSuccess(CastTvShow));
        })
        .catch((error) => {
          dispatch(castTvShowsFailure(error.message));
        });
    };
  };
  