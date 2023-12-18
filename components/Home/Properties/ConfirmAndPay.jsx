import React from 'react'

const ConfirmAndPay = () => {
  return (
    <div className="mb-10 text-[#33363b]">
      <div className="space-y-6 px-4 md:px-10 ">
        <p className="text-2xl  font-medium">Confirm and pay</p>
        <p className="font-semibold text-lg">Policies</p>
        <p>
          <span className="font-semibold text-[#484C52]">
            Host's Cancellation Policy:
          </span>
          <br />
          <span className="text-[#484C52]">
            Your booking will not qualify for a refund based on your trip dates.
            Please make sure you are happy with the cancellation policy for this
            booking, which will also apply if you have to cancel due to any
            Covid-19 related issues.
          </span>
        </p>
        <p>
          <span className="font-semibold">Damage Policy:</span>
          <span className="font-normal text-[#484C52]">
            You will be responsible for any damage to the rental property caused
            by you or your party during your stay.
          </span>
        </p>
      </div>
    </div>
  )
}

export default ConfirmAndPay
