import {
  DETAIL_TV_LOADING,
  DETAIL_TV_SUCCESS,
  DETAIL_TV_FAILURE,
  DetailTV,
} from "../Types/Types";
export interface DetailofTv {
  DetailofTv: [];
  error: string;
  loading: boolean;
}

const initialState: DetailofTv = {
  DetailofTv: [],
  error: "",
  loading: false,
};

const reducer = (state = initialState, action: DetailTV) => {
  switch (action.type) {
    case DETAIL_TV_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DETAIL_TV_SUCCESS:
      return {
        loading: false,
        DetailofTv: action.DetailofTv,
        error: "",
      };
    case DETAIL_TV_FAILURE:
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
