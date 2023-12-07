import { CheckLarge } from '@components/icons'
import { Button, Text, useUI } from '@components/ui'
import React from 'react'

const ReviewSubmitModal = () => {
  const { closeModal } = useUI()

  const handleClose = () => {
    closeModal()
  }
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <CheckLarge />
      <Text className="text-xl">Thank You</Text>
      <Text className="text-lg text-center">
        Your review submission has been received.
      </Text>
      <Button className="w-[80%] mx-auto" onClick={handleClose}>
        Close
      </Button>
    </div>
  )
}

export default ReviewSubmitModal
