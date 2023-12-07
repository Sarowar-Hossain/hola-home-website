import { DummyFrame } from '@components/icons'
import { Button, Text, useUI } from '@components/ui'
import { useRouter } from 'next/router'
import React from 'react'

const LoginAlert = () => {
  const router = useRouter()
  const { closeModal } = useUI()
  const handleNavigate = () => {
    closeModal()
    router.push('/write-review')
  }
  return (
    <div className="flex flex-col justify-center items-center p-5 gap-3 md:w-[40vw]">
      <DummyFrame />
      <Text variant="sectionHeading" className="font-bold text-center">
        Login/Signup
      </Text>
      <Text className="text-lg mb-2 text-center">
        Please login or signup to to write a review
      </Text>
      <div className="flex gap-2 sm:gap-5 items-center justify-center">
        <Button onClick={handleNavigate} variant="naked">
          Signup
        </Button>
        <Button onClick={handleNavigate} variant="naked">
          Login
        </Button>
      </div>
    </div>
  )
}

export default LoginAlert
