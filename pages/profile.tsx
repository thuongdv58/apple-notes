import React from 'react'
import { RequireAuth } from '../hooks/authUser'
import { Card, Typography, Space } from '@supabase/ui'
import Header from '../components/Header'
import { useSession, useUser } from '@supabase/auth-helpers-react'
import { withPageAuth } from '@supabase/auth-helpers-nextjs'

export default function Profile() {
  //RequireAuth()
  const user = useUser()

  return (
    <>
      <Header />
      {user && (
        <div style={{ maxWidth: '620px', margin: '96px auto' }}>
          <Card>
            <Space direction="vertical" size={6}>
              <Typography.Text>you're signed in</Typography.Text>
              <Typography.Text strong>Email: {user.email}</Typography.Text>
            </Space>
          </Card>
        </div>
      )}
    </>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/auth' })

