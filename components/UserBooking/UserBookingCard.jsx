import { Button, Text, useUI } from '@components/ui'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const UserBookingCard = ({ item }) => {
  const { setModalView, openModal } = useUI()
  const router = useRouter()

  const handleViewDetails = (status) => {
    router.push({
      pathname: '/profile/bookings/user-booking-details',
      query: { status: status },
    })
  }
  const handleCancelBooking = () => {
    openModal()
    setModalView('CANCEL_BOOKING')
  }
  return (
    <div className="space-y-4 rounded-xl border border-[#FCCF12] p-3.5 text-black md:px-12 md:py-5">
      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="flex items-center justify-center">
          <Image
            src={item.image}
            sizes="100vw"
            alt="booking image"
            className="h-[184px] w-full object-cover rounded-xl md:h-[108px] md:w-[193px]"
          />
        </div>
        <div className="mt-2 flex w-full items-end justify-between md:mt-0 md:items-end">
          <span className="space-y-1 md:space-y-2 pt-2 md:pt-0">
            <h1
              title={item.name}
              className="text-base md:text-xl font-medium text-[#484C52]"
            >
              {item.name.slice(0, 50)}
            </h1>
            <Text className="pb-1 text-sm text-[#484C52]">
              {item.address.slice(0, 40)}
            </Text>
            <Text
              className={`${
                item.BookingStatus.toLowerCase() == 'upcoming booking'
                  ? 'border-[#9B51E0] bg-[#9B51E01A]'
                  : item.BookingStatus.toLowerCase() == 'active booking'
                  ? 'border-[#219653] bg-[#2196531A]'
                  : item.BookingStatus.toLowerCase() == 'completed booking'
                  ? 'border-[#2F80ED] bg-[#2F80ED1A]'
                  : item.BookingStatus.toLowerCase() == 'cancelled booking'
                  ? 'border-[#F53D3D] bg-[#F53D3D1A]'
                  : ''
              } rounded-md border px-2 text-center text-sm font-medium capitalize text-black w-[150px]`}
            >
              {item.BookingStatus}
            </Text>
          </span>
          <p className="text-xl font-semibold">${item.price}</p>
        </div>
      </div>
      <hr className="border-[#FFE471]" />
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <Button
          onClick={() => handleViewDetails(item?.BookingStatus)}
          className="w-full p-0 py-1.5 text-sm font-medium md:w-[200px] md:text-base"
          variant="slim"
        >
          View Details
        </Button>
        <Button
          className={`${
            item.BookingStatus.toLowerCase() == 'upcoming booking'
              ? 'inline'
              : 'hidden'
          } w-full bg-[#FFF8DB] border border-primary p-0 py-1.5 text-sm font-medium md:w-[200px] md:text-base`}
          variant="slim"
          onClick={handleCancelBooking}
        >
          Cancel Booking
        </Button>
      </div>
    </div>
  )
}

export default UserBookingCard
