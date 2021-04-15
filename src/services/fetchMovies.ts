import axios from '../shared/axios-datas';

export type Data = any 

export type Params = any

export default (data: Data, params: Params) => {
    return axios.get(`discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: "en-US",
        ...params,
      },
      data,
    });
  };