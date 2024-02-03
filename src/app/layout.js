import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Providers from './providers'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// AUTH
import { getServerSession } from "next-auth";
import { authOptions } from './api/auth/[...nextauth]/route'

// TODO: lazy load devtools in production


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'SkyWise | Weather Forecast | Emil Enriquez',
  description: 'A weather forecasting app!',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers session={session}>
        <Header />
        {/* NAVBAR */}
        {/* <NavBar className="my-4" /> */}

        {/* SEARCHBOX */}
        <div className='px-2 max-w-6xl 2xl:max-w-full mx-auto my-2'>
          {children}
        </div>

        {/* FOOTER */}
        <ReactQueryDevtools initialIsOpen />
      </Providers>
      </body>
    </html>
  )
}
