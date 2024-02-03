// useFetchOrganizations Hook
import { fetchCities } from "@/services/cities";
import { useQuery } from "@tanstack/react-query";

const useFetchCities = (searchKey = '') => {

  const cities = useQuery(
    ['cities', searchKey],
    async () => {
      const res = await fetchCities(searchKey)
      return res;
    },
    //conf
    {
      staleTime: 1000 * 60 * 20, // retain for 20 mins
      networkMode: process.env.NODE_ENV === 'production' ? 'online' : 'always' // Cache for 20 minutes
    }
  );

  const options = cities.data
    ? cities?.data.map(({ lat, lon, name, state, country }) => ({ value: `${lat}:${lon}`, label: `${name} | ${state || ''} | ${country}` }))
    : [];



  return {
    ...cities,
    options
  }
}

export default useFetchCities;