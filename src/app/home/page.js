/**
 * Home is the logged in page
 * Display the user's name and a link to their github page
   Display a text field and button which, when clicked, display's the weather at the city entered in the text field i..e opens up the weather screen.
   This should be a protected route. If the user has not logged in with GitHub, they should not be able to access this page/screen.
 * @returns
 *
 */
'use client'
import { Suspense, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from 'next/navigation'
import CitySearch from "@/components/CitySearch";


export default function Home() {
  const router = useRouter()
  const { data: session } = useSession();
  if (session === null) {
    redirect("/");
  }

  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const handleSelectedCity = (lat, lon) => {
    console.log('selected Option', {lat, lon});
    setLat(lat);
    setLon(lon);
  }

  return (
    <div className="flex flex-wrap justify-center content-center pt-4">
      {/* <p className="text-blue-600 w-full text-center">{session?.user?.name}</p> */}
      <div className="w-full">
        <Suspense fallback="Loading cities...">
          <CitySearch className="w-full" onSelectedCity={handleSelectedCity}/>
        </Suspense>
      </div>
      <div className="w-full text-center mt-2">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          disabled={!lat || !lon}
          onClick={() => console.log('test') || router.push(`/weather?lat=${lat}&lon=${lon}`)}
        >
          Display Weather
        </button>
      </div>
    </div>
  );
}