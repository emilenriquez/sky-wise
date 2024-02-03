'use client'
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import LandingPageContainer from '@/components/PageContainers/Landing';

export default function Landing() {
  //protect the landing route
  const { data: session } = useSession();
  if (session) {
    redirect("/home");
  }

  return (
    <main className=''>
      <LandingPageContainer />
    </main>
  )
}
