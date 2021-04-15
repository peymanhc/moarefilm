import {
    CREATORS_MOVIES_LOADING,
    CREATORS_MOVIES_SUCCESS,
    CREATORS_MOVIES_FAILURE,
    FetchCreators,
  } from '../Types/Types';
  
  export interface CreatorsMovieState {
    CreatorsMovie: [];
    error: string;
    loading: boolean;
  }
  
  const initialState: CreatorsMovieState = {
    CreatorsMovie: [],
    error: '',
    loading: false,
  };
  
  const reducer = (state = initialState, action: FetchCreators) => {
    switch (action.type) {
      case CREATORS_MOVIES_LOADING:
        return {
          ...state,
          loading: true,
        };
      case CREATORS_MOVIES_SUCCESS:
        return {
          loading: false,
          Creators: action.Creators,
          error: '',
        };
      case CREATORS_MOVIES_FAILURE:
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
  