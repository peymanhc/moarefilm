import {
  FETCH_POPULAR_TV_SHOWS_LOADING,
  FETCH_POPULAR_TV_SHOWS_SUCCESS,
  FETCH_POPULAR_TV_SHOWS_FAILURE,
  fetchTVShowsActions,
} from '../Types/Types';

export interface tvShowsState {
  tvShows: [];
  error: string;
  loading: boolean;
}

const initialState: tvShowsState = {
  tvShows: [],
  error: '',
  loading: false,
};

const reducer = (state = initialState, action: fetchTVShowsActions) => {
  switch (action.type) {
    case FETCH_POPULAR_TV_SHOWS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POPULAR_TV_SHOWS_SUCCESS:
      return {
        loading: false,
        tvShows: action.tvShows,
        error: '',
      };
    case FETCH_POPULAR_TV_SHOWS_FAILURE:
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
