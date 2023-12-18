import BeginBookingForm from '@components/Home/Properties/BeginBookingForm'
import BeginHotelInfo from '@components/Home/Properties/BeginHotelInfo'
import { ArrowLeft } from '@components/icons'
import { GlobalContext } from 'Context/Context'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

const beginBooking = () => {
  const router = useRouter()
  const { bookingData, setBookingData } = useContext(GlobalContext)
  const { control, register, errors, trigger } = useForm()

  const onSubmit = (data) => {
    setBookingData({ ...bookingData, data })
  }

  const validateAndSubmit = async () => {
    const isValid = await trigger();
    if (isValid) {
      onSubmit();
    }
  };

  return (
    <div className="container mx-auto my-4 md:my-10">
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-around  px-4 gap-4 lg:gap-10">
        <div onClick={() => router.back()} className="cursor-pointer">
          <ArrowLeft />
        </div>
        <BeginBookingForm
          control={control}
          register={register}
          errors={errors}
          onSubmit={onSubmit}
          triggerValidation={trigger}
          validateAndSubmit={validateAndSubmit}
        />
        <BeginHotelInfo onSubmit={onSubmit}  validateAndSubmit={validateAndSubmit} />
      </div>
    </div>
  )
}

export default beginBooking
