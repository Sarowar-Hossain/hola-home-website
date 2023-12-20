import HotelInfoTwo from '@components/Home/Properties/HotelInfoTwo'
import PaymentMethod from '@components/Home/Properties/PaymentMethod'
import { ArrowLeft } from '@components/icons'
import { useRouter } from 'next/router'
import React from 'react'

const paymentMethod = () => {
  const router = useRouter()
  const { id } = router.query

  const handleNext = () => {
    router.push(`/properties/${id}/booking/payment-success`)
  }
  return (
    <div className="container mx-auto my-4 md:my-10">
      <div
        className={`w-full flex flex-col lg:flex-row justify-center lg:justify-around px-4 gap-4 lg:gap-10`}
      >
        <div onClick={() => router.back()} className="cursor-pointer">
          <ArrowLeft />
        </div>

        <PaymentMethod />

        <HotelInfoTwo handleNext={handleNext} />
      </div>
    </div>
  )
}

export default paymentMethod
