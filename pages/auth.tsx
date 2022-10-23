import React from 'react'
import { AuthRedirect } from '../hooks/authUser'
import { Card, Typography, Space } from '@supabase/ui'
import Header from '../components/Header'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth } from '@supabase/auth-ui-react'

const AuthPage = () => {
  //AuthRedirect()
  //const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <>
      <Header />
      <div className="bg-black">
        <Card>
          <Space direction="vertical" size={8}>
            <div>
              <Typography.Title level={3}>Welcome</Typography.Title>
            </div>
            <Auth
              supabaseClient={supabase}
              providers={['google', 'github']}
              view={'sign_in'}
              socialLayout="horizontal"
              
            />
          </Space>
        </Card>
      </div>
    </>
  )
}

export default AuthPage
