import React from 'react'
import { AuthRedirect } from '../hooks/authUser'
import { Card, Typography, Space } from '@supabase/ui'
import Header from '../components/Header'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { darkThemes } from '@supabase/auth-ui-react/dist/esm/common/theming'

const customTheme = {
  default: {
    colors: {
      brand: 'white',
      brandAccent: '#afafaf',
      brandButtonText: 'black',
      defaultButtonBackground: '#8b5cf6',
      defaultButtonBorder: 'black',
      defaultButtonText: 'white',
      dividerBackground: 'black',
      inputBackground: 'transparent',
      inputBorder: 'gray',
      inputText: 'white',
      inputPlaceholder: '',
    },
  }
}

const AuthPage = () => {
  AuthRedirect()
  //const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <>
      <Header />
      <div className="auth-container max-w-md mx-auto mt-20">
        <Card>
          <Space direction="vertical" size={8}>
            <div>
              <Typography.Title level={3}>Welcome</Typography.Title>
            </div>
            <Auth
              supabaseClient={supabase}
              providers={['google', 'github']}
              view={'sign_in'}
              //theme="default"
              appearance={{ theme: ThemeSupa }}
              socialLayout="horizontal"
            />
          </Space>
        </Card>
      </div>
    </>
  )
}

export default AuthPage
