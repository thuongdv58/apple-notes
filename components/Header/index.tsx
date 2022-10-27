import React from 'react'
import { default as HeadContainer } from 'next/head'
import ProfileMenu from './profileMenu'
import LoginButton from './loginButton'
import { useUser } from '@supabase/auth-helpers-react'

export default function Header() {
  return (
    <>
      <HeadContainer>
        <title>Apple Notes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </HeadContainer>
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center text-white">
                <a href="/">
                  <img className="h-8 w-auto" src="logo.png" alt="APnotes" />
                </a>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              { useUser() ? <ProfileMenu /> : <LoginButton />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
