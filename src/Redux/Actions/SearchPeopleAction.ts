import {
    SEARCH_PEOPLE_LOADING,
    SEARCH_PEOPLE_SUCCESS,
    SEARCH_PEOPLE_FAILURE
  } from "../Types/Types";
  import { Dispatch } from "redux";
  import axios from "../../shared/axios-datas";
  
  export interface searchPeopleLoadingAction {
    type: typeof SEARCH_PEOPLE_LOADING;
  }
  export interface searchPeopleSuccessAction {
    type: typeof SEARCH_PEOPLE_SUCCESS;
    resultPeople: any;
  }
  export interface searchPeopleFailureAction {
    type: typeof SEARCH_PEOPLE_FAILURE;
    error: string;
  }
  export const searchPeopleLoading = (): searchPeopleLoadingAction => {
    return {
      type: SEARCH_PEOPLE_LOADING,
    };
  };
  
  export const searchPeopleSuccess = (
    resultPeople: any
  ): searchPeopleSuccessAction => {
    return {
      type: SEARCH_PEOPLE_SUCCESS,
      resultPeople,
    };
  };
  
  export const searchPeopleFailure = (
    error: string
  ): searchPeopleFailureAction => {
    return {
      type: SEARCH_PEOPLE_FAILURE,
      error,
    };
  };
  
  export const fetchSearchPeople = (query:string) => {
    return (dispatch: Dispatch) => {
      dispatch(searchPeopleLoading());
      axios
      .get(
        `search/person?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}`
      )
        .then((response) => {
          const person = response.data.results;
          dispatch(searchPeopleSuccess(person));
        })
        .catch((error) => {
          dispatch(searchPeopleFailure(error.message));
        });
    };
  };
  