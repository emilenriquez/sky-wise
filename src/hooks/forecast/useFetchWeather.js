// useFetchOrganizations Hook
import { fetchWeather } from "@/services/forecast";
import { useQuery } from "@tanstack/react-query";

const useFetchWeather = (lat = null, lon = null) => {

  const weatherData = useQuery(
    ['weather', lat, lon],
    async () => {
      const res = await fetchWeather(lat, lon)
      return res;
    },
    //conf
    {
      staleTime: 1000 * 60 * 20, // retain for 20 mins
      networkMode: process.env.NODE_ENV === 'production' ? 'online' : 'always' // Cache for 20 minutes
    }
  );

  return weatherData;
}

export default useFetchWeather;