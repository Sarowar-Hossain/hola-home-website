import { Button } from '@components/ui'
import Image from 'next/image'
import React from 'react'

const paymentFailed = () => {
  return (
    <div className="container mx-auto flex flex-col items-center space-y-4 text-center px-4">
      <Image src={'/paymentError.png'} alt="success" height={450} width={675} />
      <p className="text-[#0F172A] text-2xl font-semibold">Payment failed!</p>
      <p className="text-[#515151] text-xl pb-4">
        The payment was unsuccessful due to abnormality. <br /> Please try again
        or use other payment method
      </p>
      <Button
        className="text-xl w-full md:w-[180px] font-medium text-[#484C52] bg-primary"
        variant="slim"
      >
        Retry
      </Button>
      <Button
        className="text-xl w-full md:w-[180px] font-medium text-[#484C52] bg-[#FFF8DB] border-[#FCCF12]"
        variant="slim"
      >
        Cancel
      </Button>
    </div>
  )
}

export default paymentFailed
