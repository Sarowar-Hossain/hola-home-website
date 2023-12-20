import CancelBooking from '@components/icons/CancelBooking'
import { Button, Text, useUI } from '@components/ui'
import { useRouter } from 'next/router'
import React from 'react'

const BookingCancleModal = () => {
  const { closeModal } = useUI()
  const router = useRouter()

  const handleCancelBooking = (status) => {
    closeModal()
    router.push({
      pathname: '/profile/bookings/user-booking-details',
      query: { status: status },
    })
  }

  return (
    <div className="flex max-w-[425px] flex-col items-center justify-center space-y-5">
      <CancelBooking />
      <Text className="text-center font-semibold text-2xl text-[#FCCF12]">
        Cancel Booking
      </Text>
      <Text className="text-center">
        Are you sure you want to cancel this booking?
      </Text>
      <Button
        className="w-full rounded-md p-2 px-10 text-base font-medium text-[#484C52]"
        variant="slim"
        onClick={() => handleCancelBooking('Cancelled Booking')}
      >
        Cancel
      </Button>
      <Button
        className="w-full border border-primary rounded-md bg-[#FFF8DB] p-2 px-10 text-base font-medium text-[#484C52]"
        variant="slim"
        onClick={() => closeModal()}
      >
        No
      </Button>
    </div>
  )
}

export default BookingCancleModal
