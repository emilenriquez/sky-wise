import axios from 'axios';
import fp from 'lodash/fp';

// TODO: refactor generating ep with query
const geoApiEndpoint = 'http://api.openweathermap.org/data/2.5/forecast'

const limit = 20;

//TODO: this should be bundled together with the geoApiEndpoint refator
const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY

export const fetchWeather = async (lat, lon) => {
  const weather = await axios.get(`${geoApiEndpoint}?lat=${lat}&lon=${lon}&cnt=${limit}&appid=${apiKey}`);
  return fp.flow(fp.getOr({}, 'data'))(weather);
};
