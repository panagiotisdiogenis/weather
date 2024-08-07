import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchForecast = (location) => {
  return axios.get(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=7`
  );
};

export const fetchCurrentWeather = (location) => {
  return axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}`);
};
