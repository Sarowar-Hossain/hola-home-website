import { GoBack } from '@components/icons'
import { Button, useUI } from '@components/ui'
import { AuthContext } from 'Context/AuthProvider'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { Oval } from 'react-loader-spinner'

const ForgotPassword = () => {
  const [messageView, setMessageView] = useState(false)
  const [error, setError] = useState()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const { setUIView } = useUI()
  const { forgotPassword } = useContext(AuthContext)
  const handleEmailSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (email.trim() !== '' && emailRegex.test(email)) {
      forgotPassword(email)
        .then((res) => {
          setError('Please, Check your email')
          setLoading(false)
          setMessageView(true)
        })
        .catch((err) => {
          console.error(err.message)
          setError('email is not registered')
          setLoading(false)
        })
    } else {
      toast.error('Invalid Email Address')
      setError('Please add your email')
      setLoading(false)
    }
  }

  return (
    <div className="my-10 min-w-[50vw] min-h-[45vh] flex items-center justify-center">
      {messageView ? (
        <>
          <div className="flex gap-1 sm:gap-3 flex-col items-center justify-center text-center">
            <div className="p-3 bg-[#FFF8DB] rounded-full">
              <div className="bg-[#FCCF12] p-3 rounded-full">
                <Mail />
              </div>
            </div>
            <p className="text-[20px] sm:text-[28px] font-bold">
              Check your email
            </p>
            <p className="sm:text-lg text-[#828282]">
              We sent a password resent link to <br /> {email}
            </p>
            <span
              onClick={() => setUIView('SIGN_IN_VIEW')}
              className="flex items-center gap-2 text-[#FCCF12] cursor-pointer sm:text-[18px]"
            >
              <GoBack className="w-5 h-5 sm:w-7 sm:h-7" /> Back to log in
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="w-full max-w-md border-2 p-5 rounded">
            <p className="mb-5 text-xl text-[#5A5A5A] font-medium">
              Forgot password?
            </p>
            <form onSubmit={handleEmailSubmit}>
              <label htmlFor="" className="text-[#878A99]">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="mb-2 mt-2 w-full rounded-md border-2 px-2 py-2 outline-none bg-white"
                placeholder="Enter Email Address"
              />
              {error && <p className="my-2 text-red">{error}</p>}

              <Button
                disabled={loading}
                className="mt-3 w-full flex items-center justify-center mx-auto"
              >
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
                  'Continue'
                )}
              </Button>
            </form>
            <p className="my-2 text-[#5A5A5A]">
              Remembered your password?
              <span
                className="ml-1 cursor-pointer font-semibold text-[#FCCF12] hover:underline"
                onClick={() => setUIView('SIGN_IN_VIEW')}
              >
                Login
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default ForgotPassword
