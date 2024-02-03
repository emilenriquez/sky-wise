'use client';
import { useSession, signOut } from "next-auth/react";
import { Disclosure } from '@headlessui/react'

import AnimatedLogo from "../AnimatedLogo";
import DarkmodeSwitch from "../DarkmodeSwitch";
import MenuItem from "./MenuItem";
import {GoHome } from "react-icons/go";






export default function Header() {
  const { data: session } = useSession();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl 2xl:max-w-full px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <AnimatedLogo width={25} height={25} />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <MenuItem title="SkyWise | Weather Forecast" link="/" Icon={GoHome} />
                  </div>
                </div>
              </div>
              <div className="sm:ml-6 sm:block">
                <div className="flex items-center">
                  <DarkmodeSwitch className="relative" />
                  {!!session ? <button
                    onClick={signOut}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded ml-4"
                  >
                    Logout
                  </button> : null}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )


  // return (
  //   <div className="flex justify-between items-center mx-auto max-w-lg sm:max-w-6xl">
  //     {/* MENU ITEMS */}
  //     <div className="flex py-4 space-x-4 font-semibold text-teal-900 dark:text-amber-400">
  //       <AnimatedLogo width={25} height={25} />
  //       <MenuItem title="Home" link="/" Icon={GoHome} />
  //       <MenuItem title="PROCESS LIST" link="/about" Icon={GoInfo} />
  //     </div>

  //     {/* LOGO */}
  //     <div className="flex items-center space-x-2">
  //       <DarkmodeSwitch className="mr-2" />
  //       <div className=" transition-colors duration-500 font-mono">
  //         <span className="bg-purple-900 dark:bg-amber-200 rounded px-2 py-1 text-amber-200 dark:text-black font-extrabold mr-0.5 tracking-wider text-2xl">SoundPlay</span>
  //         <span className="italic text-lg text-purple-950 dark:text-amber-400">Admin</span>
  //       </div>

  //     </div>

  //   </div>
  // )
}
