import React from 'react'
import Header from '../components/Header'
import { Card, Typography, Space } from '@supabase/ui'
import { useUser } from '@supabase/auth-helpers-react'

export default function Profile() {
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
