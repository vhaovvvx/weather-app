import { GET_DATA, FIND_CITY } from './actions';

export const getData = (lat, lon) => {
  return {
    type: GET_DATA,
    lat,
    lon,
  };
};

export const findCityByName = (nameCity) => {
  return {
    type: FIND_CITY,
    nameCity,
  };
};
