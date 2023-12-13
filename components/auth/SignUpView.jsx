import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import { Oval } from 'react-loader-spinner'
import { useRouter } from 'next/router'
import { Eye, EyeOff } from 'lucide-react'
import { GoogleAuthProvider } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button, useUI } from '@components/ui'

const SignUpView = () => {
  const signUpSchema = z
    .object({
      firstName: z
        .string()
        .min(5, { message: 'Name must contain at least 5 characters' }),
      lastName: z
        .string()
        .min(5, { message: 'Name must contain at least 5 characters' }),
      email: z
        .string()
        .email({ message: 'Please enter a valid email address.' }),
      password: z.string().min(5, { message: 'Min. 5 characters req.' }),
      confirmPassword: z.string().min(5, { message: 'Min. 5 characters req.' }),
      agreement: z.boolean(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Password do not match',
      path: ['confirmPassword'],
    })
    .refine((data) => data.agreement === true, {
      message: 'You must agree to the terms and conditions',
      path: ['agreement'],
    })

  const { setUIView, closeModal, setModalView } = useUI()
  const [userStatus, setUSerStatus] = useState('student')
  const [isError, setIserror] = useState()
  const [loading, setLoading] = useState(false)
  const [isChecked, setIsChecked] = useState(true)
  const router = useRouter()
  const [passwordType, setPasswordType] = useState('password')
  const [confirmPasswordType, setConfirmPasswordType] = useState('password')

  const togglePasswordVisibility = () => {
    setPasswordType((prevType) =>
      prevType === 'password' ? 'text' : 'password'
    )
  }

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordType((prevType) =>
      prevType === 'password' ? 'text' : 'password'
    )
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  })

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleLogIn = () => {}

  const onSubmit = (data) => {}

  const handleTerm = () => {}

  const handlePrivacy = () => {}

  return (
    <div className="my-2 text-center">
      <p className="text-3xl font-bold text-black">Create account</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-10 px-5">
        <>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 lg:gap-7 lg:flex-row">
              <div className="flex w-full flex-col items-start">
                <label htmlFor="" className="text-[#2D3748]">
                  First name
                </label>
                <input
                  {...register('firstName')}
                  id="firstName"
                  placeholder="Enter your first name"
                  className="w-full rounded border-2 border-[#E6E6E6] bg-white px-1 py-2 focus:bg-white outline-none"
                  type="text"
                />
                {errors.firstName && (
                  <span className="text-red text-left" role="alert">
                    {errors.firstName?.message}
                  </span>
                )}
              </div>
              <div className="flex w-full flex-col items-start">
                <label htmlFor="" className="text-[#2D3748]">
                  Last name
                </label>
                <input
                  {...register('lastName')}
                  id="lastName"
                  placeholder="Enter your last name"
                  className="w-full rounded border-2 border-[#E6E6E6] bg-white px-1 py-2 focus:bg-white outline-none"
                  type="text"
                />
                {errors.lastName && (
                  <span className="text-red text-left" role="alert">
                    {errors.lastName?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:gap-7 lg:flex-row">
              <div className="flex w-full flex-col items-start">
                <label htmlFor="" className="text-[#2D3748]">
                  Email
                </label>
                <input
                  {...register('email')}
                  id="email"
                  className="w-full rounded border-2 border-[#E6E6E6] bg-white px-1 py-2 focus:bg-white outline-none"
                  type="email"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="text-red" role="alert">
                    {errors.email?.message}
                  </span>
                )}
              </div>
              <div className="flex w-full flex-col items-start">
                <label htmlFor="" className="text-[#2D3748]">
                  Date of birth
                </label>
                <input
                  {...register('dateOfBirth')}
                  id="dateOfBirth"
                  required
                  placeholder="Enter your date of birth"
                  className="w-full rounded border-2 border-[#E6E6E6] bg-white px-1 py-2 focus:bg-white outline-none"
                  type="date"
                />
                {errors.dateOfBirth && (
                  <span className="text-red" role="alert">
                    {errors.dateOfBirth?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:gap-7 lg:flex-row">
              <div className="flex w-full flex-col items-start">
                <label htmlFor="password" className="text-[#2D3748]">
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    id="password"
                    {...register('password')}
                    className="w-full rounded border-2 border-[#E6E6E6] bg-white px-1 py-2 focus:bg-white outline-none"
                    type={passwordType}
                    placeholder="Password"
                  />
                  <span className="absolute right-2 top-2 cursor-pointer text-[#BBBFC4]">
                    {passwordType === 'password' ? (
                      <span onClick={togglePasswordVisibility}>
                        <EyeOff />
                      </span>
                    ) : (
                      <span onClick={togglePasswordVisibility}>
                        <Eye />
                      </span>
                    )}
                  </span>
                </div>
                {errors.password && (
                  <span className="text-start text-red" role="alert">
                    {errors.password?.message}
                  </span>
                )}
              </div>
              <div className="flex w-full flex-col items-start">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="relative w-full">
                  <input
                    id="confirmPassword"
                    {...register('confirmPassword')}
                    className="w-full rounded border-2 border-[#E6E6E6] bg-white px-1 py-2 focus:bg-white outline-none"
                    type={confirmPasswordType}
                    placeholder="Confirm Password"
                  />
                  <span className="absolute right-2 top-2 cursor-pointer text-[#BBBFC4]">
                    {confirmPasswordType === 'password' ? (
                      <span onClick={toggleConfirmPasswordVisibility}>
                        <EyeOff />
                      </span>
                    ) : (
                      <span onClick={toggleConfirmPasswordVisibility}>
                        <Eye />
                      </span>
                    )}
                  </span>
                </div>
                {errors.confirmPassword && (
                  <span className="text-start text-red" role="alert">
                    {errors.confirmPassword?.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </>
        <div className="mt-8">
          <div className="flex items-center gap-2 text-sm md:text-base">
            <input type="checkbox" {...register('remember')} />
            <p>Remember me</p>
          </div>
          {errors.remember && (
            <span className="text-start text-red" role="alert">
              {errors.remember?.message}
            </span>
          )}
          <div className="mt-2 flex items-start gap-2 text-sm md:text-base ">
            <input
              type="checkbox"
              checked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              {...register('agreement')}
              className="mt-1"
            />
            <p className="text-start">
              I agree to all the{' '}
              <span
                className="cursor-pointer font-semibold  text-[#313C66]"
                onClick={handleTerm}
              >
                Terms
              </span>{' '}
              and{' '}
              <span
                className="cursor-pointer font-semibold text-[#313C66]"
                onClick={handlePrivacy}
              >
                Privacy policy
              </span>{' '}
            </p>
          </div>
          {errors.agreement && (
            <span className="text-start text-red" role="alert">
              {errors.agreement?.message}
            </span>
          )}
        </div>
        {isError && <p className="text-red">{isError}</p>}
        <Button className="mt-10 w-full max-w-xs flex items-center justify-center mx-auto">
          {loading ? (
            <>
              <Oval
                height={22}
                width={22}
                color="#FFFFFF"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#ffffff"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </>
          ) : (
            'Create Account'
          )}
        </Button>
      </form>
      <p className="my-2">
        Already have an account?
        <span
          className="ml-1 cursor-pointer font-semibold text-yellow-500 hover:underline"
          onClick={() => setUIView('SIGN_IN_VIEW')}
        >
          Login
        </span>
      </p>

      <div className="mb-5 flex justify-center gap-3">
        <Image
          onClick={() => setUIView('PHONE_LOGIN_VIEW')}
          src="/phone.png"
          height={30}
          width={30}
          className="cursor-pointer"
          alt="Logo"
        />
        <Image
          src="/google.png"
          height={30}
          width={30}
          className="cursor-pointer"
          alt="Logo"
        />
      </div>
    </div>
  )
}

export default SignUpView
