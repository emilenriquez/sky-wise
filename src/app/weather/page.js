/**
 * Uses the lat, lon to fetch the weather forecast from one of the following APIs
 *
 * @returns
 *
 */
   'use client'
   import { Suspense, useState } from "react";
   import { useSession } from "next-auth/react";
   import { redirect } from 'next/navigation'
   import dayjs from "dayjs";

   import { useSearchParams } from 'next/navigation'
   import useFetchWeather from "@/hooks/forecast/useFetchWeather";
   import Clock from "@/components/Shared/Clock";

   function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }

  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  function kelvinToFahrenheit(kelvin) {
    const celsius = kelvinToCelsius(kelvin);
    return celsiusToFahrenheit(celsius);
  }

   export default function Weather() {
     const { data: session } = useSession();
     if (session === null) {
       redirect("/");
     }

    const searchParams = useSearchParams();
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    const { data: weatherData, isLoading} = useFetchWeather(lat, lon);

     return (
      <>
      {/* TODO: put the placeholder component */}
        <div className="w-full text-center mt-4">
          <h1 className="font-bold text-lg">{weatherData?.city.name} | <Clock/> </h1>
        </div>
        <Suspense fallback="Loading">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                          Date
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Temp(F)
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Description
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Main
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Pressure
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Humidity
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {weatherData?.list.map((weather) => (
                        <tr key={weather.dt}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {dayjs(weather.dt).format('MM/DD/YYYY')}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{kelvinToFahrenheit(weather.main.temp)}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{weather.weather[0].description}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{weather.weather[0].main}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{weather.main.pressure}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{weather.main.humidity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </>

     );
   }