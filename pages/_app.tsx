import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-ui-react/dist/esm/src/components/Auth/UserContext'
import { AppProps } from 'next/app'
import { useState } from 'react'
import { RequireAuth, RouteGuard } from '../hooks/authUser'
import '../styles/globals.css'

function MyApp({
  Component,
  pageProps
}: AppProps<{
  initialSession: Session
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  // RequireAuth()
  return (
    <main>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>
      </SessionContextProvider>
    </main>
  )
}
export default MyApp
