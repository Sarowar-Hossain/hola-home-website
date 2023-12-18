import { Cross, GoBack, ModalBack } from '@components/icons'
import { Button, Text, useUI } from '@components/ui'
import { AuthContext } from 'Context/AuthProvider'
import axios from 'axios'
import Image from 'next/image'
import { useContext, useRef, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import toast from 'react-hot-toast'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const PhoneLoginView = () => {
  const { OTPUser } = useContext(AuthContext)
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [userName, setUserName] = useState('')
  const [userNumber, setUserNumber] = useState('')
  const [loading, setLoading] = useState(false)
  const [otpObj, setOtpObj] = useState()
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()]
  const [OTPView, setOTPView] = useState(false)
  const { closeModal, setUIView } = useUI()
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setUserName(data?.name)
    setUserNumber(data?.phone)
    OTPUser(data.phone)
      .then((result) => {
        console.log(result)
        setOtpObj(result)
        setOTPView(true)
      })
      .catch((error) => {
        console.log(error)
        toast.error('Error sending OTP: ' + error.message)
      })
  }

  const handleOtpChange = (index, value) => {
    const sanitizedValue = value.replace(/\D/g, '')

    setOtp((prevOtp) => {
      const newOtp = [...prevOtp]
      newOtp[index] = sanitizedValue
      return newOtp
    })

    if (sanitizedValue === '' && index > 0) {
      refs[index - 1].current.focus()
    } else if (sanitizedValue !== '' && index < 5) {
      refs[index + 1].current.focus()
    }
  }

  const handleBackspace = (index) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp]
      newOtp[index] = ''
      return newOtp
    })

    if (index > 0) {
      refs[index - 1].current.focus()
    }
  }

  const handleOTPSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const fullOtp = otp.join('')
    if (fullOtp.length !== 6) {
      toast.error('Please enter a valid OTP')
      setLoading(false)
      return
    } else {
      try {
        const result = await otpObj.confirm(fullOtp)
        if (result?.user?.uid) {
          const phone = result?.user?.phoneNumber
          const uid = result?.user?.uid
          const data = {
            name: userName,
            phone: phone,
            uid: uid,
          }
          axios
            .post(
              baseUrl + '/manageUsersApis/add-user-details-in-phone-login',
              data
            )
            .then((res) => {
              closeModal()
              setUIView('SIGN_UP_VIEW')
              toast.success('OTP Verified Successfully')
              setLoading(false)
              setUserName('')
              setUserNumber('')
            })
            .catch((err) => {
              console.error(err.message)
            })
        } else {
          toast.error('OTP Verification Failed!')
        }
      } catch (err) {
        setLoading(false)
      }
    }
  }

  const handleBackModal = () => {
    setOTPView(false)
  }

  const handleCloseModal = () => {
    closeModal()
    setUIView('SIGN_UP_VIEW')
  }

  return (
    <div className="md:min-w-[40vw] xl:min-w-[25vw] min-h-[40vh] flex flex-col items-center justify-center relative">
      {OTPView ? (
        <>
          <div className="mt-5">
            <span
              className="absolute -top-5 -left-5 cursor-pointer"
              onClick={handleBackModal}
            >
              <ModalBack />
            </span>
            <div>
              <Text className="text-2xl font-bold">Login</Text>
              <Text className="">
                OTP shared on{' '}
                {userNumber.substring(0, 4) +
                  '*******' +
                  userNumber.substring(11)}
              </Text>
            </div>
            <Text className="mt-8 font-medium">OTP</Text>
            <form
              onSubmit={handleOTPSubmit}
              className="w-full flex flex-col gap-3"
            >
              <div className="flex justify-center items-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={refs[index]}
                    maxLength={1}
                    className="w-14 h-14 mx-1 text-center rounded border-2 border-[#E6E6E6] bg-white px-1 py-2 focus:bg-white outline-none"
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Backspace' || e.key === 'Delete') {
                        e.preventDefault()
                        handleBackspace(index)
                      }
                    }}
                  />
                ))}
              </div>
              <div className="text-center mt-16">
                <Button>Submit OTP</Button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center w-full">
            <span
              onClick={handleCloseModal}
              className="absolute -top-5 -left-5 cursor-pointer"
            >
              <Cross />
            </span>
            <div className="h-20 w-20 relative rounded-full overflow-hidden mb-8">
              <Image
                src="/user.jpeg"
                fill
                className="object-cover"
                alt="user"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-3"
            >
              <div className="">
                <Text>Name</Text>
                <input
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Enter your name"
                  className={`w-full rounded border-2 border-[#E6E6E6] bg-white px-1 py-2 focus:bg-white outline-none ${
                    errors.name ? 'border-red' : ''
                  }`}
                  type="text"
                />
                {errors.name && (
                  <p className="text-red">{errors.name.message}</p>
                )}
              </div>
              <div className="phone-number-input-container">
                <Text>Mobile Number</Text>
                <div className="flex flex-col">
                  <Controller
                    control={control}
                    name="phone"
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        placeholder="Enter your number"
                        defaultCountry="ZM"
                        className={`w-full rounded border-2 border-[#E6E6E6] bg-white px-1 py-2 focus:bg-white outline-none ${
                          errors.phone ? 'border-red' : ''
                        }`}
                      />
                    )}
                    rules={{ required: 'Mobile number is required' }}
                  />
                  {errors.phone && (
                    <p className="text-red">{errors.phone.message}</p>
                  )}
                </div>
              </div>
              <div id="recaptcha-container" />
              <div className="text-center mt-14">
                <Button>Get OTP & Create account</Button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default PhoneLoginView
