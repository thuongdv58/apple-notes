import React from 'react'
import { AuthRedirect } from '../hooks/authUser'
import { Card, Typography, Space } from '@supabase/ui'
import Header from '../components/Header'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'

const AuthPage = () => {
  AuthRedirect()
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
              //providers={['google', 'github']}
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
