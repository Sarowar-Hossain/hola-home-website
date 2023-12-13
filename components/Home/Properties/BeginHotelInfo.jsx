import { Button } from '@components/ui'
import Image from 'next/image'
import React from 'react'

const BeginHotelInfo = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-center gap-4">
        <Image src={'/bookingPage.png'} width={220} height={130} />
        <Image src={'/bookingPage.png'} width={220} height={130} />
      </div>
      <div className="space-y-2 pt-3">
        <h1 className="text-2xl text-[#101010] font-semibold">
          The Astin Villa Hotel
        </h1>
        <p className="text-sm font-normal text-[#484C52]">Jaipur, RJ, IN</p>
      </div>
      <div className="border-2 min-w-[400px] min-h-[100px] rounded-xl">
        <div className="flex justify-between border-b-2 w-full">
          <div className="border-r-2 w-1/2 ps-4 py-1">
            <p className="text-xs text-[#848484]">Check In</p>
            <p className=" text-[#848484]">July 5</p>
          </div>
          <div className="w-1/2 ps-4 py-1">
            <p className="text-xs text-[#848484]">Check In</p>
            <p className="leading-6 text-[#848484] ">July 5</p>
          </div>
        </div>
        <div className="ps-4 py-1">
          <p className="text-xs text-[#848484]">Guests</p>
          <p className=" text-[#848484]">1 guests</p>
        </div>
      </div>

      <div className="w-full space-y-2 py-4 leading-5 font-medium">
        <p className="  text-[#484C52]  flex justify-between items-center">
          <span>$12.00 x 1 night</span>
          <span>$12.00 </span>
        </p>
        <p className=" text-[#484C52] flex justify-between items-center">
          <span className="underline">Service Fee</span>
          <span>$12.00 </span>
        </p>
        <p className=" text-[#484C52] flex justify-between items-center">
          <span className="underline">Tax</span>
          <span>$2.00 </span>
        </p>
        <div className="h-1px border-b-2 border-[#C4C4C4] w-full" />
        <p className="text-[#484C52] flex justify-between items-center">
          <span className="text-base font-medium">Total</span>
          <span className="font-medium text-xl">$26 </span>
        </p>
      </div>
      <div>
        <Button
          className="w-full text-xl font-medium text-[#000000]"
          variant="slim"
        >
          Agree & continue
        </Button>
      </div>
    </div>
  )
}

export default BeginHotelInfo
