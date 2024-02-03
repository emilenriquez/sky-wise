'use client'
import { ThemeProvider } from 'next-themes'
import { HydrationProvider } from "react-hydration-provider";
import { QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from "next-auth/react"


import { queryClient } from '@/utils';

export default function providers({children, session}) {
  return (
    <HydrationProvider>
      <ThemeProvider enableSystem attribute='class'>
        <SessionProvider session={session}>
          <div className='bg-slate-100 dark:bg-cyan-950 dark:text-slate-300 transition-colors duration-700 max-h-screen overflow-scroll h-screen'>
            <QueryClientProvider client={queryClient}>
            {children}

            </QueryClientProvider>
          </div>
        </SessionProvider>
      </ThemeProvider>
    </HydrationProvider>

  )
}
