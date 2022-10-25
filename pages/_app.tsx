import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-ui-react/dist/esm/src/components/Auth/UserContext'
import { AppProps } from 'next/app'
import { useState } from 'react'
import '../styles/globals.css'

function MyApp({
  Component,
  pageProps
}: AppProps<{
  initialSession: Session
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  
  return (
    <main className='dark'>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </main>
  )
}
export default MyApp
