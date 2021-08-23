import axios from 'axios';
import queryString from 'query-string';

//Set up default config for http requests here
// please have a look at here
// const PP_CURRENT_WEATHER_DATA = 'https://api.openweathermap.org/data/2.5/';
const axiosClient = axios.create({
  baseURL: '',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  //handle token here...
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    //handle errors
    throw error;
  }
);

export default axiosClient;
