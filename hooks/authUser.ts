import React, { useEffect, useState, createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

export const RequireAuth = () => {
  const user = useUser()
  const router = useRouter()
  useEffect(() => {
    if (!user && router.asPath.split('?')[0] != '/auth') {
      router.push('/auth')
    }
  }, [user, router])
}

export const AuthRedirect = () => {
  const session = useSession()
  const router = useRouter()
  if (session) {
    router.push('/')
  }
}

export function RouteGuard({ children }: any) {
  const session = useSession()
  const router = useRouter();
  
  const path = router.asPath.split('?')[0];
  if(path === '/auth') return children
  else if (session) {
    return children
  } 
  return false
}
