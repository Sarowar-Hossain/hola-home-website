import BeginBookingInputs from '@components/Home/Properties/BeginBookingForm'
import BeginHotelInfo from '@components/Home/Properties/BeginHotelInfo'
import ConfirmAndPay from '@components/Home/Properties/ConfirmAndPay'
import PaymentMethod from '@components/Home/Properties/PaymentMethod'
import { ArrowLeft } from '@components/icons'
import { GlobalContext } from 'Context/Context'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'

const BeginBooking = () => {
  const router = useRouter()
  const { bookingData, setBookingData } = useContext(GlobalContext)

  const [components, setComponents] = useState({
    bookingForm: true,
    ConfirmAndPay: false,
    PaymentMethod: false,
  })
  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    email: '',
    dateOfBirth: '',
    phoneNo: '',
  })

  const [errors, setErrors] = useState({
    title: '',
    fullName: '',
    email: '',
    dateOfBirth: '',
    phoneNo: '',
  })

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
    setErrors({ ...errors, [field]: '' })
  }

  const validateForm = () => {
    let hasError = false
    const newErrors = {}

    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`
        hasError = true
      }
    })

    setErrors(newErrors)
    return !hasError
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form data submitted:', formData)
      setBookingData({ ...bookingData, ...formData })
      setComponents({
        bookingForm: false,
        ConfirmAndPay: true,
        PaymentMethod: false,
      })
    }
  }
  return (
    <div className="container mx-auto my-4 md:my-10">
      <form onSubmit={onSubmit}>
        <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-around px-4 gap-4 lg:gap-10">
          <div onClick={() => router.back()} className="cursor-pointer">
            <ArrowLeft />
          </div>

          {components.PaymentMethod && (
            <PaymentMethod
              components={components}
              setComponents={setComponents}
            />
          )}
          {components.ConfirmAndPay && (
            <ConfirmAndPay
              components={components}
              setComponents={setComponents}
            />
          )}
          {components.bookingForm && (
            <BeginBookingInputs
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
              handleInputChange={handleInputChange}
            />
          )}
          <BeginHotelInfo
            onSubmit={onSubmit}
            components={components}
            setComponents={setComponents}
          />
        </div>
      </form>
    </div>
  )
}

export default BeginBooking
