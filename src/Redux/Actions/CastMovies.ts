import {
  CREATORS_MOVIES_LOADING,
  CREATORS_MOVIES_SUCCESS,
  CREATORS_MOVIES_FAILURE,
} from "../Types/Types";
import axios from "../../shared/axios-datas";
import { Dispatch } from "redux";
export interface CreatorsLoadingAction {
  type: typeof CREATORS_MOVIES_LOADING;
}
export interface CreatorsSuccessAction {
  type: typeof CREATORS_MOVIES_SUCCESS;
  Creators: any;
}
export interface CreatorsFailureAction {
  type: typeof CREATORS_MOVIES_FAILURE;
  error: string;
}
export const CreatorsLoading = (): CreatorsLoadingAction => {
  return {
    type: CREATORS_MOVIES_LOADING,
  };
};

export const CreatorsSuccess = (Creators: any): CreatorsSuccessAction => {
  return {
    type: CREATORS_MOVIES_SUCCESS,
    Creators,
  };
};

export const CreatorsFailure = (error: string): CreatorsFailureAction => {
  return {
    type: CREATORS_MOVIES_FAILURE,
    error,
  };
};

export const FetchCreators = (movie_id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(CreatorsLoading());
    axios
      .get(
        `movie/${movie_id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        const Creators = response.data;
        dispatch(CreatorsSuccess(Creators));
      })
      .catch((error) => {
        dispatch(CreatorsFailure(error.message));
      });
  };
};
