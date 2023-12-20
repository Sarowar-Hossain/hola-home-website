import { Button } from '@components/ui'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const PaymentSuccess = () => {
  const router = useRouter()
  const { id } = router.query

  const handleNext = () => {
    router.push(`/properties/${id}/booking/success-booking-details`)
  }
  return (
    <div className="container mx-auto flex flex-col items-center space-y-4 text-center px-4">
      <Image
        src={'/paymentSuccess.png'}
        alt="success"
        height={450}
        width={675}
      />
      <p className="text-[#0F172A] text-2xl font-semibold">
        Payment Successful!
      </p>
      <p className="text-[#515151] text-xl pb-4">
        Hooray! You have completed your payment
      </p>
      <Button
        className="text-xl font-medium text-[#484C52] bg-primary"
        variant="slim"
        type="submit"
        onClick={handleNext}
      >
        View booking
      </Button>
    </div>
  )
}

export default PaymentSuccess
