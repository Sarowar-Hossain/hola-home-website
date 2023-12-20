import ConfirmAndPay from '@components/Home/Properties/ConfirmAndPay'
import HotelInfoTwo from '@components/Home/Properties/HotelInfoTwo'
import { ArrowLeft } from '@components/icons'
import { useRouter } from 'next/router'
import React from 'react'

const confirmAndPay = () => {
  const router = useRouter()
  const { id } = router.query
  const handleNext = () => {
    router.push(`/properties/${id}/booking/payment-method`)
  }

  return (
    <div className="container mx-auto my-4 md:my-10">
      <div
        className={`w-full flex flex-col lg:flex-row justify-center lg:justify-around px-4 gap-4 lg:gap-10`}
      >
        <div onClick={() => router.back()} className="cursor-pointer">
          <ArrowLeft />
        </div>

        <ConfirmAndPay />

        <HotelInfoTwo handleNext={handleNext} />
      </div>
    </div>
  )
}

export default confirmAndPay
