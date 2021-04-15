import { ACCOUNT_SUCCESS, ACCOUNT_FAIL, ACCOUNT_LOADING } from "../Types/Types";
import axios from "../../shared/axios-datas";
import { Dispatch } from "redux";

export interface AccountLoadingAction {
  type: typeof ACCOUNT_LOADING;
}
export interface AccountSuccessAction {
  type: typeof ACCOUNT_SUCCESS;
  Account: any;
}
export interface AccountFailedAction {
  type: typeof ACCOUNT_FAIL;
  error: string;
}
export const AccountLoading = (): AccountLoadingAction => {
  return {
    type: ACCOUNT_LOADING,
  };
};

export const AccountSuccess = (Account: any): AccountSuccessAction => {
  return {
    type: ACCOUNT_SUCCESS,
    Account,
  };
};

export const AccountFailure = (error: string): AccountFailedAction => {
  return {
    type: ACCOUNT_FAIL,
    error,
  };
};

export const AccountDetail = () => {
  return (dispatch: Dispatch) => {
    dispatch(AccountLoading());
    const session_id = localStorage.getItem("session_id");
    axios
      .get(
        `/account?api_key=${process.env.REACT_APP_API_KEY}&session_id=${session_id}`
      )
      .then((response) => {
        const Account = response.data;
        dispatch(AccountSuccess(Account));
      })
      .catch((error) => {
        dispatch(AccountFailure(error.message));
      });
  };
};
