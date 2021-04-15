import {
    SEARCH_PEOPLE_LOADING,
    SEARCH_PEOPLE_SUCCESS,
    SEARCH_PEOPLE_FAILURE,
    SearchPeople
  } from '../Types/Types';
  
  export interface resultPeopleState {
    resultPeople: [];
    error: string;
    loading: boolean;
  }
  
  const initialState: resultPeopleState = {
    resultPeople: [],
    error: '',
    loading: false,
  };
  
  const reducer = (state = initialState, action: SearchPeople) => {
    switch (action.type) {
      case SEARCH_PEOPLE_LOADING:
        return {
          ...state,
          loading: true,
        };
      case SEARCH_PEOPLE_SUCCESS:
        return {
          loading: false,
          resultPeople: action.resultPeople,
          error: '',
        };
      case SEARCH_PEOPLE_FAILURE:
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
  