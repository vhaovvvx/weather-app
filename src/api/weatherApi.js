import axiosClient from './axiosClient';

const api = {
  baseUrlWeather: 'https://api.openweathermap.org/data/2.5/weather',
  baseUrlOneCall: 'https://api.openweathermap.org/data/2.5/onecall',
};

const weatherApi = {
  getDataOneDay: async (params) => {
    const data = await axiosClient.get(api.baseUrlWeather, {
      params: params,
    });
    return data;
  },
  getDataWeek: async (params) => {
    const data = await axiosClient.get(api.baseUrlOneCall, {
      params: params,
    });
    return data;
  },
};

export default weatherApi;
