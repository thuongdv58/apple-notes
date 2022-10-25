import { useEffect, useState, createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

export const RequireAuth = () => {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    console.log("session",user)
    if (!user) {
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
