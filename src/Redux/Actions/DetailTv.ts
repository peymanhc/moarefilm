import {
  DETAIL_TV_LOADING,
  DETAIL_TV_SUCCESS,
  DETAIL_TV_FAILURE,
} from "../Types/Types";
import axios from "../../shared/axios-datas";
import { Dispatch } from "redux";

export interface DetailTVLoadingAction {
  type: typeof DETAIL_TV_LOADING;
}
export interface DetailTVSuccessAction {
  type: typeof DETAIL_TV_SUCCESS;
  DetailofTv: any;
}
export interface DetailTVFailureAction {
  type: typeof DETAIL_TV_FAILURE;
  error: string;
}
export const DetailTVLoading = (): DetailTVLoadingAction => {
  return {
    type: DETAIL_TV_LOADING,
  };
};

export const DetailTVSuccess = (DetailofTv: any): DetailTVSuccessAction => {
  return {
    type: DETAIL_TV_SUCCESS,
    DetailofTv,
  };
};

export const DetailTVFailure = (error: string): DetailTVFailureAction => {
  return {
    type: DETAIL_TV_FAILURE,
    error,
  };
};

export const DetailTV = (movie_id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(DetailTVLoading());
    axios
      .get(
        `tv/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        const DetailofTv = response.data;
        dispatch(DetailTVSuccess(DetailofTv));
      })
      .catch((error) => {
        dispatch(DetailTVFailure(error.message));
      });
  };
};
