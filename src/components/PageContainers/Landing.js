'use client'
import { FaGithub } from 'react-icons/fa';
import { signIn } from "next-auth/react";

export default function Landing() {

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-center mb-4">
        Welcome to the weather forecast web app. Please login with your GitHub Account to use the application and view the weather in your city.
      </h2>
      <button
        className="bg-gray-800 hover:bg-gray-500 transition-colors text-white p-2 rounded-md flex items-center"
        onClick={() => signIn("github")}
        >
        <FaGithub className="h-5 w-5 mr-2" />
        Sign in with GitHub
      </button>
    </div>
  )
}
