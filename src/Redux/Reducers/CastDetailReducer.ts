import {
    CAST_DETAIL_LOADING,
    CAST_DETAIL_SUCCESS,
    CAST_DETAIL_FAILURE,
    CastDetail,
  } from "../Types/Types";
  export interface CastDetails {
    Cast: [];
    error: string;
    loading: boolean;
  }
  
  const initialState: CastDetails = {
    Cast: [],
    error: "",
    loading: false,
  };
  
  const reducer = (state = initialState, action: CastDetail) => {
    switch (action.type) {
      case CAST_DETAIL_LOADING:
        return {
          ...state,
          loading: true,
        };
      case CAST_DETAIL_SUCCESS:
        return {
          loading: false,
          Cast: action.Cast,
          error: "",
        };
      case CAST_DETAIL_FAILURE:
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
  