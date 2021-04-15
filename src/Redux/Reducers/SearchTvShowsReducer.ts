import {
    SEARCH_TV_SHOWS_LOADING,
    SEARCH_TV_SHOWS_SUCCESS,
    SEARCH_TV_SHOWS_FAILURE,
    SearchTvShows
  } from '../Types/Types';
  
  export interface resultTvShowsState {
    resultTvShows: [];
    error: string;
    loading: boolean;
  }
  
  const initialState: resultTvShowsState = {
    resultTvShows: [],
    error: '',
    loading: false,
  };
  
  const reducer = (state = initialState, action: SearchTvShows) => {
    switch (action.type) {
      case SEARCH_TV_SHOWS_LOADING:
        return {
          ...state,
          loading: true,
        };
      case SEARCH_TV_SHOWS_SUCCESS:
        return {
          loading: false,
          resultTvShows: action.resultTvShows,
          error: '',
        };
      case SEARCH_TV_SHOWS_FAILURE:
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
  