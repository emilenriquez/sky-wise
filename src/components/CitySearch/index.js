'use client'
import { useState } from "react";
import SearchSelect from "../Shared/SearchSelect"
import { fetchCities } from "@/services/cities";


export default function CitySearch({onSelectedCity}) {
  // const [cityQuery, setCityQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //TODO: use react-query for better data caching capabilities
  // const { data: cities, isLoading, isFetching, options } = useFetchCities(cityQuery);

  const fetchOptions = async (searchInputValue) => {
    // setCityQuery(searchInputValue);

    // if (organizations?.isStale && !isFetching) {
    //   await organizations?.refetch();
    // }

    const cities = await fetchCities(searchInputValue);
    console.log(cities);

    const options = cities
    ? cities?.map(({ lat, lon, name, state, country }) => ({ value: `${lat}:${lon}`, label: `${name} | ${state || ''} | ${country}` }))
    : [];

    console.log({
      searchInputValue,
      cities,
      options
    })

    return options;
  }

  const loadCitiesSelectOptions = async () => {
    return options;

    // const filteredOptions = cities.filter(option => option.label.toLowerCase().includes(inputValue.toLowerCase()))
    // return options;
  };

  const handleSelectCity = (selectedOption) => {
    setSelectedCity(selectedOption);

    const [lat, lon] = selectedOption.value.split(':')
    onSelectedCity(lat, lon)
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-center mb-4">
        Search City
      </h2>

      <SearchSelect
        // fetchOptions={loadOrganizationSelectOptions}
        fetchOptions={fetchOptions}
        onChange={handleSelectCity}
        value={selectedCity}
        defaultOptions={[]}
        isLoading={isLoading}
      />

    </div>
  )
}
