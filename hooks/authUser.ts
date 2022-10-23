import { useEffect, useState, createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

export const SignOut = async () => {
  const supabase = useSupabaseClient()
  await supabase.auth.signOut()
}

export const RequireAuth = () => {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/auth')
    }
  }, [session, router])
}

export const AuthRedirect = () => {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push('/')
    }
  }, [session, router])
}

