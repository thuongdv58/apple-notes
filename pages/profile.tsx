import React from 'react'
import { RequireAuth } from '../hooks/authUser'
import { Card, Typography, Space } from '@supabase/ui'
import Header from '../components/Header'
import { useSession } from '@supabase/auth-helpers-react'

export default function Profile() {
  RequireAuth()

  const session = useSession()

  return (
    <>
      <Header />
      {session && (
        <div style={{ maxWidth: '620px', margin: '96px auto' }}>
          <Card>
            <Space direction="vertical" size={6}>
              <Typography.Text>you're signed in</Typography.Text>
              <Typography.Text strong>Email: {session.user.email}</Typography.Text>
            </Space>
          </Card>
        </div>
      )}
    </>
  )
}
