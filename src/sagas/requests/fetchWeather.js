import weatherApi from '../../api/weatherApi';

const api = {
  key: '90d689951f066eafb8634a169911a8db',
};

export const fetchApiOfNameCity = async (nameCity) => {
  const data = await weatherApi.getDataOneDay({
    q: nameCity,
    units: 'metric',
    APPID: api.key,
  });
  return data;
};

export const fetchApiOfWeek = async (lat, lon) => {
  const data = await weatherApi.getDataWeek({
    lat: lat,
    lon: lon,
    units: 'metric',
    APPID: api.key,
  });
  return data;
};
