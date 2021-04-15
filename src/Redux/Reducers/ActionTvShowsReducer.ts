import {
    ACTION_TV_SHOW_FAILURE,
    ACTION_TV_SHOW_LOADING,
    ACTION_TV_SHOW_SUCCESS,
    ActionTvShows
  } from '../Types/Types';
  
  export interface actionTvShowsState {
    actionTvShows: [];
    error: string;
    loading: boolean;
  }
  
  const initialState: actionTvShowsState = {
    actionTvShows: [],
    error: '',
    loading: false,
  };
  
  const reducer = (state = initialState, action: ActionTvShows) => {
    switch (action.type) {
      case ACTION_TV_SHOW_LOADING:
        return {
          ...state,
          loading: true,
        };
      case ACTION_TV_SHOW_SUCCESS:
        return {
          loading: false,
          actionTvShows: action.actionTvShows,
          error: '',
        };
      case ACTION_TV_SHOW_FAILURE:
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
  