import {
    HORROR_TV_SHOWS_LOADING,
    HORROR_TV_SHOWS_SUCCESS,
    HORROR_TV_SHOWS_FAILURE,
    HorrorTvShows
  } from '../Types/Types';
  
  export interface horrorTvShowsState {
    horrorTvShows: [];
    error: string;
    loading: boolean;
  }
  
  const initialState: horrorTvShowsState = {
    horrorTvShows: [],
    error: '',
    loading: false,
  };
  
  const reducer = (state = initialState, action: HorrorTvShows) => {
    switch (action.type) {
      case HORROR_TV_SHOWS_LOADING:
        return {
          ...state,
          loading: true,
        };
      case HORROR_TV_SHOWS_SUCCESS:
        return {
          loading: false,
          horrorTvShows: action.horrorTvShows,
          error: '',
        };
      case HORROR_TV_SHOWS_FAILURE:
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
  