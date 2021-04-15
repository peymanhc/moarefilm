import {
    CAST_DETAIL_SUCCESS,
    CAST_DETAIL_LOADING,
    CAST_DETAIL_FAILURE,
  } from "../Types/Types";
  import axios from "../../shared/axios-datas";
  import { Dispatch } from "redux";
  
  export interface CastDetailLoadingAction {
    type: typeof CAST_DETAIL_LOADING;
  }
  export interface CastDetailSuccessAction {
    type: typeof CAST_DETAIL_SUCCESS;
    Cast: any;
  }
  export interface CastDetailFailureAction {
    type: typeof CAST_DETAIL_FAILURE;
    error: string;
  }
  export const CastDetailLoading = (): CastDetailLoadingAction => {
    return {
      type: CAST_DETAIL_LOADING,
    };
  };
  
  export const CastDetailSuccess = (
    Cast: any
  ): CastDetailSuccessAction => {
    return {
      type: CAST_DETAIL_SUCCESS,
      Cast,
    };
  };
  
  export const CastDetailFailure = (
    error: string
  ): CastDetailFailureAction => {
    return {
      type: CAST_DETAIL_FAILURE,
      error,
    };
  };
  
  export const fetchCastDetail = (cast_id: number) => {
    return (dispatch: Dispatch) => {
      dispatch(CastDetailLoading());
      axios
        .get(
          `person/${cast_id}?api_key=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          const CastDetail = response.data;
          dispatch(CastDetailSuccess(CastDetail));
        })
        .catch((error) => {
          dispatch(CastDetailFailure(error.message));
        });
    };
  };
  