import axios from 'axios';

const API_KEY = '7c0a2c5b6c7b55eaf26c95d5280575c4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WAETHER';

export function fetchWeather(city)
{
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
  console.log('Request:', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}