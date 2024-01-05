import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const BeginBookingInputs = ({
  formData,
  errors,
  handleInputChange,
  setErrors,
}) => {
  const titles = ['Mr', 'Mrs', 'Ms']
  const [isPhoneNoFocused, setIsPhoneNoFocused] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const validateName = (name) => {
    return name.trim() !== '' ? null : 'Name is required'
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email) ? null : 'Please enter a valid email'
  }

  const validateDateOfBirth = (dateOfBirth) => {
    return dateOfBirth.trim() !== '' ? null : 'Date of Birth is required'
  }

  const validatePhoneNumber = (phoneNo) => {
    return phoneNo && phoneNo.length >= 6
      ? null
      : 'Please enter a valid phone number'
  }

  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <p className="text-2xl text-[#484C52] font-normal">
          Begin your booking
        </p>
        <div className="w-full text-base font-medium">
          <div className=" flex justify-around items-center gap-4">
            {titles.map((title) => (
              <option
                key={title}
                onClick={() => handleInputChange('title', title)}
                className={`px-10 md:px-16 cursor-pointer border border-[#FCCF12] rounded-full ${
                  formData.title === title
                    ? 'bg-primary text-white'
                    : 'bg-[#FFF8DB]'
                }`}
              >
                {title}
              </option>
            ))}
          </div>
          <p>{errors?.title && <p className="text-red">{errors?.title}</p>}</p>
        </div>
        <div className="space-y-6">
          <div>
            <input
              defaultValue={formData?.fullName}
              type="text"
              placeholder="Full Name"
              className={`w-full placeholder:text-[#484C52] placeholder:font-medium font-medium rounded-lg border border-[#C4C4C4] bg-[#F7F8FA] px-3 py-2 focus:bg-white outline-none ${
                errors?.fullName ? 'border-red' : ''
              }`}
              onChange={(e) => {
                handleInputChange('fullName', e.target.value)
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  fullName: validateName(e.target.value),
                }))
              }}
            />
            {errors?.fullName && <p className="text-red">{errors?.fullName}</p>}
          </div>
          <div>
            <input
              defaultValue={formData?.email}
              type="email"
              placeholder="Email"
              className={`w-full placeholder:text-[#484C52] placeholder:font-medium font-medium rounded-lg border border-[#C4C4C4] bg-[#F7F8FA] px-3 py-2 focus:bg-white outline-none ${
                errors?.email ? 'border-red' : ''
              }`}
              onChange={(e) => {
                handleInputChange('email', e.target.value)
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  email: validateEmail(e.target.value),
                }))
              }}
            />
            {errors?.email && <p className="text-red">{errors?.email}</p>}
          </div>
          <div>
            <input
              required
              defaultValue={formData?.dateOfBirth}
              placeholder="Date of Birth"
              className={`w-full placeholder:text-[#484C52] placeholder:font-medium font-medium rounded-lg border border-[#C4C4C4] bg-[#F7F8FA] px-3 py-2 focus:bg-white outline-none ${
                errors?.dateOfBirth ? 'border-red' : ''
              }`}
              type={isFocused ? 'date' : 'text'}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(formData?.dateOfBirth !== '')}
              onChange={(e) => {
                handleInputChange('dateOfBirth', e.target.value)
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  dateOfBirth: validateDateOfBirth(e.target.value),
                }))
              }}
            />
            {errors?.dateOfBirth && (
              <p className="text-red">{errors?.dateOfBirth}</p>
            )}
          </div>
          <div>
            <PhoneInput
              placeholder="Enter Your Phone No."
              value={formData?.phoneNo}
              onFocus={() => setIsPhoneNoFocused(true)}
              onBlur={() => setIsPhoneNoFocused(false)}
              className={`w-full placeholder:text-[#484C52] px-4 placeholder:font-medium font-medium rounded-lg border border-[#C4C4C4] ${
                isPhoneNoFocused ? 'bg-white' : 'bg-[#F7F8FA]'
              } focus:bg-white ${errors?.phoneNo ? 'border-red' : ''}`}
              onChange={(value) => {
                handleInputChange('phoneNo', value)
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  phoneNo: validatePhoneNumber(value),
                }))
              }}
              numberInputProps={{
                className: `rounded-md px-4 py-2 focus:outline-none bg-[#F7F8FA] focus:bg-white`,
              }}
            />
            {errors?.phoneNo && <p className="text-red">{errors?.phoneNo}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeginBookingInputs
