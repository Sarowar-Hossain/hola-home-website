import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import { Oval } from 'react-loader-spinner'
import { useRouter } from 'next/router'
import axios from 'axios'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useUI } from '@components/ui'

const LoginView = () => {
  const [error, setError] = useState(false)
  const { setUIView, closeModal } = useUI()
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState('password')
  const router = useRouter()
  const [credential, setCredential] = useState({
    email: '',
    password: '',
  })

  const handleGoogleLogIn = () => {}

  const handleSignIn = (e) => {
    // e.preventDefault()
    // setError(false)
    // setLoading(true)
    // signIn(credential?.email, credential?.password)
    //   .then((res) => {
    //     try {
    //       axios
    //         .post(
    //           'https://us-central1-edlighten-cf76e.cloudfunctions.net/manageUsersApis/check-user',
    //           {
    //             id: res?.user?.uid,
    //           }
    //         )
    //         .then((response) => {
    //           setLoading(false)
    //         })
    //         .catch((error) => {
    //           setLoading(false)
    //           console.error('Error:', error)
    //         })
    //     } catch (error) {
    //       setLoading(false)
    //     }
    //   })
    //   .catch((error) => {
    //     setError(true)
    //     console.error(error.status)
    //     setLoading(false)
    //   })
  }

  const handleForgotPassword = () => {
    setUIView('FORGOT_PASSWORD_VIEW')
  }

  return (
    <div className="text-center">
      <p className="text-2xl font-bold">Sign In</p>
      <p>Sign in to continue to our website</p>
      <form onSubmit={handleSignIn} className="mx-auto mt-5 px-5">
        <div className="flex flex-col gap-3">
          {error && (
            <div className="flex items-center gap-1 border border-red-700 bg-red-200 px-1 text-start text-red-600">
              <p className="">
                {error && 'Incorrect Username or Password, Please try again!'}
              </p>
              <span
                onClick={() => setError(false)}
                className="cursor-pointer text-sm text-black"
              >
                <CrossIcon />
              </span>
            </div>
          )}
          <input
            onChange={(e) =>
              setCredential({ ...credential, email: e.target.value })
            }
            value={credential?.email}
            type="Email"
            placeholder="Email"
            className="w-full rounded border-2 border-[#E6E6E6] bg-white px-1 py-2 focus:bg-white focus:outline-[#E6E6E6]"
          />
          <div className="relative w-full">
            <input
              onChange={(e) =>
                setCredential({ ...credential, password: e.target.value })
              }
              value={credential?.password}
              type={show}
              placeholder="Password"
              className="w-full rounded border-2 border-[#E6E6E6] bg-white px-1 py-2 focus:bg-white focus:outline-[#E6E6E6]"
            />
            <span className="absolute right-2 top-2 cursor-pointer">
              {show === 'password' ? (
                <span onClick={() => setShow('text')}>
                  <EyeOffIcon />
                </span>
              ) : (
                <span onClick={() => setShow('password')}>
                  <EyeIcon />
                </span>
              )}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p
            onClick={handleForgotPassword}
            className="my-5 cursor-pointer font-semibold text-[#B20310]"
          >
            Forgot Password?
          </p>
        </div>
        <button
          disabled={loading}
          type="submit"
          className="mt-5 flex w-full items-center justify-center rounded bg-[#B20310] py-2 text-xl text-white"
        >
          {loading ? (
            <>
              <Oval
                height={22}
                width={22}
                color="#B20310"
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
            'Sign-In'
          )}
        </button>
        <p className="my-2">
          Not a member yet?
          <span
            className="ml-1 cursor-pointer font-semibold text-[#B20310]"
            onClick={() => setUIView('SIGN_UP_VIEW')}
          >
            Sign up
          </span>
        </p>
      </form>
      <div className="mb-5 flex justify-center gap-3">
        <Image
          onClick={handleGoogleLogIn}
          src="/icons/google.png"
          height={30}
          width={30}
          className="cursor-pointer"
          alt="Logo"
        />
      </div>
    </div>
  )
}

export default LoginView
