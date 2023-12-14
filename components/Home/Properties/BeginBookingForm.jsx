import { GlobalContext } from 'Context/Context'
import React, { useContext, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const BeginBookingForm = () => {
  const { userData, setBookingData } = useContext(GlobalContext)
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm()

  const [selectedTitle, setSelectedTitle] = useState('')
  const titles = ['Mr', 'Mrs', 'Ms']

  const [isPhoneNoFocused, setIsPhoneNoFocused] = useState(false)
  const [phoneNo, setPhoneNo] = useState()

  const onSubmit = (data) => {
    setBookingData(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <div className="space-y-6">
        <p className="text-2xl text-[#484C52] font-normal">
          Begin your booking
        </p>
        <div className="w-full text-base font-medium flex justify-around items-center gap-4">
          {titles.map((title) => (
            <button
              key={title}
              onClick={() => setSelectedTitle(title)}
              className={`px-10 md:px-16 border border-[#FCCF12] rounded-full ${
                selectedTitle === title
                  ? 'bg-primary text-white'
                  : 'bg-[#FFF8DB]'
              }`}
            >
              {title}
            </button>
          ))}
        </div>
        <div className="space-y-6">
          <div>
            <input
              defaultValue={userData?.fullName}
              type="text"
              placeholder="Full Name"
              className="w-full placeholder:text-[#484C52] placeholder:font-medium font-medium rounded-lg border border-[#C4C4C4] bg-[#F7F8FA] px-3 py-2 focus:bg-white outline-none"
              {...register('fullName', {
                required: 'Full Name is required',
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Invalid name format',
                },
              })}
            />
            <p>
              {errors.fullName && (
                <p className="text-red ">{errors.fullName.message}</p>
              )}
            </p>
          </div>
          <div>
            <input
              defaultValue={userData?.email}
              type="email"
              placeholder="Email"
              className="w-full placeholder:text-[#484C52] placeholder:font-medium font-medium rounded-lg border border-[#C4C4C4] bg-[#F7F8FA] px-3 py-2 focus:bg-white outline-none"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            <p>
              {errors.email && (
                <p className="text-red">{errors.email.message}</p>
              )}
            </p>
          </div>

          <div>
            <input
              required
              defaultValue={userData?.dateOfBirth}
              placeholder="Date of Birth"
              className="w-full placeholder:text-[#484C52] placeholder:font-medium font-medium rounded-lg border border-[#C4C4C4] bg-[#F7F8FA] px-3 py-2 focus:bg-white outline-none"
              type="date"
              {...register('dateOfBirth', {
                required: 'Date of Birth is required',
              })}
            />
            <p>
              {errors.dateOfBirth && (
                <p className="text-red">{errors.dateOfBirth.message}</p>
              )}
            </p>
          </div>

          <div>
            <Controller
              name="phoneNo"
              control={control}
              defaultValue={userData?.phoneNo}
              render={({ field }) => (
                <PhoneInput
                  placeholder="Enter Your Phone No."
                  value={field.value}
                  onFocus={() => setIsPhoneNoFocused(true)}
                  onBlur={() => setIsPhoneNoFocused(false)}
                  className={`w-full placeholder:text-[#484C52] px-4 placeholder:font-medium font-medium rounded-lg border border-[#C4C4C4] ${
                    isPhoneNoFocused ? 'bg-white' : 'bg-[#F7F8FA]'
                  } focus:bg-white`}
                  onChange={(value) =>
                    field.onChange(value) && setPhoneNo(value)
                  }
                  numberInputProps={{
                    className: `rounded-md px-4 py-2 focus:outline-none bg-[#F7F8FA] focus:bg-white`,
                  }}
                />
              )}
              rules={{
                required: 'Phone number is required',
                pattern: {
                  value: /^\+(?:[0-9]●?){6,14}[0-9]$/,
                  message: 'Invalid phone number',
                },
              }}
            />
            <p>
              {errors.phoneNo && (
                <p className="text-red">{errors.phoneNo.message}</p>
              )}
            </p>
          </div>
        </div>
      </div>
    </form>
  )
}

export default BeginBookingForm
