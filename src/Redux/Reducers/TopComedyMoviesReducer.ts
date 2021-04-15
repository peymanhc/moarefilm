import {
    FETCH_TOP_COMEDY_LOADING,
    FETCH_TOP_COMEDY_SUCCESS,
    FETCH_TOP_COMEDY_FAILURE,
    FetchTopComedyMovies
  } from "../Types/Types";
export interface topComediesState {
    Comedies: [];
    error: string;
    loading: boolean;
  }
  
  const initialState: topComediesState = {
    Comedies: [],
    error: '',
    loading: false,
  };
  
  const reducer = (state = initialState, action: FetchTopComedyMovies) => {
    switch (action.type) {
      case FETCH_TOP_COMEDY_LOADING:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TOP_COMEDY_SUCCESS:
        return {
          loading: false,
          Comedies: action.Comedies,
          error: '',
        };
      case FETCH_TOP_COMEDY_FAILURE:
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
