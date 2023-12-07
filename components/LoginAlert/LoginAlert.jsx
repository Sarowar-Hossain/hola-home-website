import { DummyFrame } from '@components/icons'
import { Button, Text } from '@components/ui'
import { useRouter } from 'next/router'
import React from 'react'

const LoginAlert = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center p-5 gap-3 md:w-[40vw]">
      <DummyFrame />
      <Text variant="sectionHeading" className="font-bold">
        Login/Signup
      </Text>
      <Text className="text-lg mb-2">
        Please login or signup to to write a review
      </Text>
      <div className="flex gap-5 items-center justify-center">
        <Button onClick={() => router.push('/write-review')} variant="naked">
          Signup
        </Button>
        <Button onClick={() => router.push('/write-review')} variant="naked">
          Login
        </Button>
      </div>
    </div>
  )
}

export default LoginAlert
