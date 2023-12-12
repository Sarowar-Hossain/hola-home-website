import { Cross, GoBack, ModalBack } from '@components/icons'
import { Button, Text, useUI } from '@components/ui'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import toast from 'react-hot-toast'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const PhoneLoginPage = () => {
    const [OTPView, setOTPView] = useState(false)
    const router = useRouter()
    const { closeModal, setUIView } = useUI()

    const {
        handleSubmit,
        control,
        register,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        setOTPView(true)
    }
    const [otp, setOtp] = useState(['', '', '', ''])
    const refs = [useRef(), useRef(), useRef(), useRef()]

    const handleOtpChange = (index, value) => {
        const sanitizedValue = value.replace(/\D/g, '')
        setOtp((prevOtp) => {
            const newOtp = [...prevOtp]
            newOtp[index] = sanitizedValue
            return newOtp
        })

        if (sanitizedValue === '' && index > 0) {
            refs[index - 1].current.focus()
        } else if (sanitizedValue !== '' && index < 3) {
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

    const handleOTPSubmit = (e) => {
        e.preventDefault()
        const fullOtp = otp.join('')
        if (fullOtp.length === 4) {
            router.push('/')
            toast.success('OTP Submitted Successfully')
        } else {
            toast.error('Failed to submit an OTP')
        }
    }

    const handleBackModal = () => {
        setOTPView(false)
    }

    return (
        <div className="flex flex-col items-center justify-center relative mt-10 w-full max-w-sm mx-auto">
            {OTPView ? (
                <>
                    <div className='w-full mt-12 px-2'>
                        <span
                            className="absolute top-0 left-0 cursor-pointer"
                            onClick={handleBackModal}
                        >
                            <GoBack />
                        </span>
                        <div>
                            <Text className="text-2xl font-bold">Login</Text>
                            <Text className="">OTP shared on 88*****755</Text>
                        </div>
                        <Text className="mt-8">OTP</Text>
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
                                <Button className="w-full">Submit OTP</Button>
                            </div>
                        </form>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex flex-col justify-center items-center w-full px-2">
                        <span
                            onClick={() => router.back()}
                            className="absolute -top-3 left-0 cursor-pointer"
                        >
                            <GoBack />
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
                                    className={`w-full rounded border-2 border-[#E6E6E6] bg-white px-1 py-2 focus:bg-white outline-none ${errors.name ? 'border-red' : ''
                                        }`}
                                    type="text"
                                />
                                {errors.name && (
                                    <p className="text-red">{errors.name.message}</p>
                                )}
                            </div>
                            <div className="">
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
                                                className={`w-full rounded border-2 border-[#E6E6E6] bg-white px-1 py-2 focus:bg-white outline-none ${errors.phone ? 'border-red' : ''
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
                            <div className="text-center mt-14">
                                <Button className="w-full" >Get OTP & Create account</Button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </div>
    )
}

export default PhoneLoginPage