import axios from "../shared/axios-datas";

export type Data = any;

export type Params = any;

export default (data: Data, params: Params) => {
  return axios.get(`account/1/rated/movies`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      session_id: localStorage.getItem("session_id"),
      language: "en-US",
      ...params,
    },
    data,
  });
};
