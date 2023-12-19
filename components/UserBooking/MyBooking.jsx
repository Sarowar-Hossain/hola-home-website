import { Button, Text } from '@components/ui'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const MyBooking = ({ bookingChildrenAsProps, propertyChildrenAsProps }) => {
  const router = useRouter()
  const [isMyBookingTrue, setIsMyBookingTrue] = useState(false)
  return (
    <div className="my-10 min-h-[80vh]">
      <div className="my-10 grid grid-cols-2 gap-3 text-center">
        <Button
          onClick={() => {
            setIsMyBookingTrue(false)
          }}
          variant="slim"
          className={`${
            !isMyBookingTrue ? 'bg-[#FCCF12]' : 'bg-[#FFF8DB]'
          } rounded-md border-2 border-[#FCCF12]  py-2 text-center text-sm font-medium text-[#484C52] md:text-xl`}
        >
          My Properties - Listed
        </Button>
        <Button
          onClick={() => {
            setIsMyBookingTrue(true)
          }}
          variant="slim"
          className={`${
            isMyBookingTrue ? 'bg-[#FCCF12]' : 'bg-[#FFF8DB]'
          } rounded-md border-[#FCCF12] py-2 text-sm font-medium text-[#484C52] md:text-xl`}
        >
          My Bookings - Traveling
        </Button>
      </div>
      {isMyBookingTrue && (
        <div>
          {bookingChildrenAsProps && bookingChildrenAsProps?.length !== 0 ? (
            <div className="text-center">
              <Image
                src={'/404.png'}
                height={250}
                width={350}
                alt="booking image"
                className="mx-auto"
              />
              <Text className="text-lg font-medium text-[#0F172A] md:text-xl ">
                You have no bookings
              </Text>
              <Text className="my-4  text-sm text-[#484C52] md:text-base opacity-95">
                All updates regarding your listed properties bookings are
                displayed here.
              </Text>
              <Text className="text-xl font-semibold text-[#0F172A md:text-xl">
                To Book Properties
              </Text>
              <Button
                onClick={() => router.push('/')}
                className="mt-6 w-full p-0 py-1.5 text-sm font-medium md:w-[200px] md:text-base"
                variant="slim"
              >
                Search Properties
              </Button>
            </div>
          ) : (
            <div className="space-y-4">{bookingChildrenAsProps}</div>
          )}
        </div>
      )}
      {!isMyBookingTrue && (
        <div>
          {propertyChildrenAsProps && propertyChildrenAsProps?.length == 0 ? (
            <div className="text-center">
              <Image
                src={'/404.png'}
                height={250}
                width={350}
                alt="booking image"
                className="mx-auto"
              />
              <Text className="text-lg font-medium text-[#0F172A] md:text-xl ">
                You have no bookings
              </Text>
              <Text className="my-4  text-sm text-[#484C52] md:text-base opacity-95">
                All updates regarding your listed properties bookings are
                displayed here.
              </Text>
              <Text className="text-xl font-semibold text-[#0F172A md:text-xl">
                To become a landlord
              </Text>
              <Button
                onClick={() => router.push('/profile')}
                className="mt-6 w-full p-0 py-1.5 text-sm font-medium md:w-[200px] md:text-base"
                variant="slim"
              >
                Go to profile page
              </Button>
            </div>
          ) : (
            <div className="space-y-4">{propertyChildrenAsProps}</div>
          )}
        </div>
      )}
    </div>
  )
}

export default MyBooking
