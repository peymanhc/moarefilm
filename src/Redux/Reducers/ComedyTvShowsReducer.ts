import {
    COMEDY_TV_SHOW_SUCCESS,
    COMEDY_TV_SHOW_LOADING,
    COMEDY_TV_SHOW_FAILURE,
    ComedyTvShows
  } from '../Types/Types';
  
  export interface comedyTvShowsState {
    comedyTvShows: [];
    error: string;
    loading: boolean;
  }
  
  const initialState: comedyTvShowsState = {
    comedyTvShows: [],
    error: '',
    loading: false,
  };
  
  const reducer = (state = initialState, action: ComedyTvShows) => {
    switch (action.type) {
      case COMEDY_TV_SHOW_LOADING:
        return {
          ...state,
          loading: true,
        };
      case COMEDY_TV_SHOW_SUCCESS:
        return {
          loading: false,
          comedyTvShows: action.comedyTvShows,
          error: '',
        };
      case COMEDY_TV_SHOW_FAILURE:
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
  