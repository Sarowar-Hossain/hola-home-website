import { Button, Text } from '@components/ui'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserBookingCard = ({ item }) => {
  // const { setAllScreenModalView, openAllScreenModal } = useUI();
  return (
    <div className="space-y-4 rounded-xl border border-[#FCCF12] p-3.5 text-black md:px-12 md:py-5">
      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="flex items-center justify-center">
          <Image
            src={item.image}
            sizes="100vw"
            alt="booking image"
            className="h-[184px] w-[330px] md:h-[108px] md:w-[193px]"
          />
        </div>
        <div className="mt-2 flex w-full items-end justify-between md:mt-0 md:items-end">
          <span className="space-y-1 md:space-y-2">
            <Text className="text-base md:text-xl font-medium text-black">
              {item.name}
            </Text>
            <Text className="pb-1 text-sm text-black">{item.address}</Text>
            <Text
              className={`${
                item.BookingStatus.toLowerCase() == 'upcoming booking'
                  ? 'border-[#9B51E0]'
                  : item.BookingStatus.toLowerCase() == 'active booking'
                  ? 'border-[#219653]'
                  : item.BookingStatus.toLowerCase() == 'completed booking'
                  ? 'border-[#2F80ED]'
                  : item.BookingStatus.toLowerCase() == 'cancelled booking'
                  ? 'border-[#F53D3D]'
                  : ''
              } rounded-md border px-2 text-center text-sm font-medium capitalize text-black w-[150px]`}
            >
              {item.BookingStatus}
            </Text>
          </span>
          <p className="text-xl font-semibold">${item.price}</p>
        </div>
      </div>
      <hr className="border-[#FCCF12]" />
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <Link href="/property/booking-success" className="w-full">
          <Button
            className="w-full p-0 py-1.5 text-sm font-medium md:w-[200px] md:text-base"
            variant="slim"
          >
            View Details
          </Button>
        </Link>
        <Button
          className={`${
            item.BookingStatus.toLowerCase() == 'upcoming booking'
              ? 'inline'
              : 'hidden'
          } w-full bg-[#FFF8DB] p-0 py-1.5 text-sm font-medium md:w-[200px] md:text-base`}
          variant="slim"
          //   onClick={() => {
          //     setAllScreenModalView('CANCEL_BOOKING')
          //     openAllScreenModal()
          //   }}
        >
          Cancel Booking
        </Button>
      </div>
    </div>
  )
}

export default UserBookingCard
