import {
    CAST_TV_SHOWS_LOADING,
    CAST_TV_SHOWS_FAILURE,
    CAST_TV_SHOWS_SUCCESS,
    CastTvShows
  } from "../Types/Types";
  export interface CastMovie {
    CastTvShows: [];
    error: string;
    loading: boolean;
  }
  
  const initialState: CastMovie = {
    CastTvShows: [],
    error: "",
    loading: false,
  };
  
  const reducer = (state = initialState, action: CastTvShows) => {
    switch (action.type) {
      case CAST_TV_SHOWS_LOADING:
        return {
          ...state,
          loading: true,
        };
      case CAST_TV_SHOWS_SUCCESS:
        return {
          loading: false,
          CastTvShows: action.CastTvShows,
          error: "",
        };
      case CAST_TV_SHOWS_FAILURE:
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