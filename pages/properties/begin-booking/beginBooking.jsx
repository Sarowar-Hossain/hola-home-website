import BeginBookingForm from '@components/Home/Properties/BeginBookingForm'
import BeginHotelInfo from '@components/Home/Properties/BeginHotelInfo'
import { ArrowLeft } from '@components/icons'
import { useRouter } from 'next/router'
import React from 'react'

const beginBooking = () => {
  const router = useRouter()
  return (
    <div className="container mx-auto my-10">
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-around items-start px-4 gap-4 lg:gap-10">
        <div onClick={() => router.back()} className='cursor-pointer'>
          <ArrowLeft />
        </div>
        <BeginBookingForm />
        <BeginHotelInfo />
      </div>
    </div>
  )
}

export default beginBooking
