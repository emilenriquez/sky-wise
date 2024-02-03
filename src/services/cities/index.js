import axios from 'axios';
import fp from 'lodash/fp';

// TODO: refactor generating ep with query
const geoApiEndpoint = 'http://api.openweathermap.org/geo/1.0/direct'
const limit = 5;

//TODO: this should be bundled together with the geoApiEndpoint refator
const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY
console.log(apiKey)

export const fetchCities = async (city = null) => {
  // TODO: improve to cater more filters
  const queryParam = city ? { city } : {}

  const cities = await axios.get(`${geoApiEndpoint}?q=${city}&limit=${limit}&appid=${apiKey}`);
  return fp.flow(fp.getOr({}, 'data'))(cities);
};
