import { ArrowLeft } from '@components/icons'
import CrossBookingDetails from '@components/icons/CrossBookingDetails'
import Success from '@components/icons/Success'
import { Button } from '@components/ui'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
const userBookingDetails = () => {
  const router = useRouter()
  const bookingStatus = router.query.status || ''
  return (
    <div className="container mx-auto px-4 space-y-6 flex flex-col justify-center pb-10">
      <div className="cursor-pointer" onClick={() => router.back()}>
        <ArrowLeft />
      </div>
      <p className="text-2xl font-semibold text-[#484C52]">Booking</p>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-[#484C52] flex flex-col gap-2">
          Booking ID <span className="font-medium">ADCA22124</span>
        </p>
        {bookingStatus === 'Cancelled Booking' ? (
          <CrossBookingDetails className="w-[30px] h-[30px] md:w-auto md:h-auto" />
        ) : (
          <Success className="w-[30px] h-[30px] md:w-auto md:h-auto" />
        )}
      </div>
      <div className="flex flex-col-reverse md:flex-row  justify-center md:justify-between  py-4 md:py-4 border-t-2 border-b-2 border-[#ECECEC]">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h1 className="text-xl md:text-2xl font-semibold text-[#484C52]">
              The Astin Villa Hotel
            </h1>
            <p className="text-xl text-[#484C52] inline-block md:hidden">
              1 Night
            </p>
          </div>
          <p className="text-[#484C52]">
            Hargovind Vihar Sir Chotu Ram Marg Pocket 2 Sector 4 Rohini Delhi
            Sector 2,
          </p>
        </div>
        <div className="flex justify-center items-center py-3">
          <Image
            src={'/bookingImage2.png'}
            height={140}
            width={260}
            alt="booking Image"
            className="w-full "
          />
        </div>
      </div>

      <div className="w-full space-y-6 md:space-y-0 flex flex-col md:flex-row justify-start md:justify-center border-b-2 border-[#ECECEC] pb-4 md:pb-4 px-4">
        <div className="space-y-3 w-full md:w-1/5">
          <p className="text-[#484C52] flex flex-col gap-2">
            Primary Guest <span className="font-semibold">User Name</span>
          </p>
          <p className="text-[#484C52] flex flex-col gap-2">
            Mobile Number <span className="font-semibold">7979795652</span>
          </p>
          <p className="text-[#484C52] flex flex-col gap-2">
            Email Address <span className="font-semibold">User@gmail.com</span>
          </p>
        </div>
        <div className="flex justify-between   md:w-1/5 w-full">
          <div className="space-y-3">
            <p className="text-[#484C52] flex flex-col gap-2">
              Check In <span className="font-semibold">2023-03-12</span>
            </p>
            <p className="text-[#484C52] flex flex-col gap-2">
              Check Out <span className="font-semibold">2023-03-12</span>
            </p>
          </div>
          <div className="space-y-3 md:hidden">
            <p className="text-[#484C52] flex flex-col gap-2">
              Check In Time <span className="font-semibold">12.00 PM</span>
            </p>
            <p className="text-[#484C52] flex flex-col gap-2">
              Check Out Time <span className="font-semibold">12.00 AM</span>
            </p>
          </div>
        </div>
        <div className="space-y-3 hidden md:inline-block w-1/5">
          <p className="text-[#484C52] flex flex-col gap-2">
            Check In Time <span className="font-semibold">12.00 PM</span>
          </p>
          <p className="text-[#484C52] flex flex-col gap-2">
            Check Out Time <span className="font-semibold">12.00 AM</span>
          </p>
        </div>
        <div className="space-y-3  md:w-1/5 w-full">
          <p className="text-[#484C52] flex flex-col gap-2">
            Guests <span className="font-semibold">10</span>
          </p>
          <p className="text-[#484C52] flex flex-col gap-2">
            Rooms <span className="font-semibold">4</span>
          </p>
        </div>
        <div className="space-y-3  md:w-1/5 w-full hidden md:inline-block">
          <p className="text-2xl font-semibold text-[#484C52]">1 Night</p>
        </div>
      </div>
      <div className="space-y-4 px-4">
        <h1 className="text-xl md:text-2xl font-semibold text-[#484C52]">
          Payment Details
        </h1>
        <div className="flex gap-0 md:gap-20 md:justify-start justify-between ">
          <p>Totoal Amount</p>
          <p>$30</p>
        </div>
      </div>
      {/* <div className="w-full flex justify-center items-center">
        <Button
          className="font-semibold text-[#484C52] bg-primary"
          variant="slim"
          onClick={() => router.push('/')}
        >
          Go to home page
        </Button>
      </div> */}
    </div>
  )
}

export default userBookingDetails
