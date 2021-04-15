import {
    ACCOUNT_SUCCESS,
    ACCOUNT_FAIL,
    ACCOUNT_LOADING,
    getAccountDetail,
  } from '../Types/Types';
  
  export interface AccountMovieState {
    Account: any;
    error: string;
    loading: boolean;
  }
  
  const initialState: AccountMovieState = {
    Account: null,
    error: '',
    loading: false,
  };
  
  const reducer = (state = initialState, action: getAccountDetail) => {
    switch (action.type) {
      case ACCOUNT_LOADING:
        return {
          ...state,
          loading: true,
        };
      case ACCOUNT_SUCCESS:
        return {
          loading: false,
          Account: action.Account,
          error: '',
        };
      case ACCOUNT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  