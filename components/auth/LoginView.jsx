import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import { Oval } from 'react-loader-spinner'
import { useRouter } from 'next/router'
import axios from 'axios'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { Button, Text, useUI } from '@components/ui'
import { GoogleAuthProvider } from 'firebase/auth'
import { AuthContext } from 'Context/AuthProvider'
import { Cross } from '@components/icons'

const LoginView = () => {
  const [error, setError] = useState(false)
  const { setUIView, closeModal } = useUI()
  const { providerLogin, user, signIn, logOut } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState('password')
  const router = useRouter()
  const [credential, setCredential] = useState({
    email: '',
    password: '',
  })
  const googleProvider = new GoogleAuthProvider()

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

  const handleGoogleLogIn = () => {
    const loginProcess = new Promise((resolve, reject) => {
      providerLogin(googleProvider)
        .then((res) => {
          const userId = res?.user?.uid
          const body = {
            name: res?.user?.displayName,
            email: res?.user?.email,
            uid: userId,
          }
          localStorage.setItem('userId', userId)
          axios
            .post(
              baseUrl + '/manageUsersApis/add-user-details-in-google-login',
              body
            )
            .then((res) => {
              if (userId) {
                try {
                  const response = axios.post(
                    baseUrl + '/manageUsersApis/remove-deletion-request',
                    {
                      id: userId,
                    }
                  )
                  closeModal()
                  setUIView('SIGN_UP_VIEW')
                  resolve(res?.data)
                } catch (error) {
                  console.log(error)
                }
              }
            })
            .catch((err) => {
              console.error(err.message)
              logOut()
              reject(err.message)
            })
        })
        .catch((err) => {
          console.error(err.message)
          reject(err.message)
        })
    })
    toast.promise(loginProcess, {
      loading: 'Logging in...',
      success: 'Successfully logged in!',
      error: (err) => `Login failed: ${err}`,
    })
  }

  const handleSignIn = (e) => {
    setError('')
    e.preventDefault()
    setLoading(true)
    signIn(credential?.email, credential?.password)
      .then((res) => {
        const userId = res?.user?.uid
        localStorage.setItem('userId', userId)
        if (userId) {
          try {
            const response = axios.post(
              baseUrl + '/manageUsersApis/remove-deletion-request',
              {
                id: userId,
              }
            )
            closeModal()
            toast.success('Successfully logged in')
            setUIView('SIGN_UP_VIEW')
            setLoading(false)
          } catch (error) {
            console.log(error)
          }
        }
      })
      .catch((err) => {
        console.log(err?.message)
        if (err?.message === 'Firebase: Error (auth/wrong-password).') {
          setError('invalid password! please check again')
          toast.error('invalid password! please check again')
        }
        if (err?.message === 'Firebase: Error (auth/user-not-found).') {
          setError('invalid email! please check again')
          toast.error('invalid email! please check again')
        }
        setLoading(false)
      })
  }

  const handleForgotPassword = () => {
    setUIView('FORGOT_PASSWORD_VIEW')
  }

  return (
    <div className="text-center flex flex-col justify-center items-center">
      <Text className="text-3xl font-bold text-[#484C52]">Login</Text>
      <Text className="text-[#848484]">Login to continue to our website</Text>
      <form
        onSubmit={handleSignIn}
        className="mx-auto mt-12 sm:px-5 w-full max-w-md"
      >
        <div className="flex flex-col gap-3 login-container">
          <input
            onChange={(e) =>
              setCredential({ ...credential, email: e.target.value })
            }
            value={credential?.email}
            type="Email"
            placeholder="Email"
            className={`w-full rounded border-2 ${
              error ? 'border-red' : 'border-[#E6E6E6]'
            } bg-white px-1 py-2 focus:bg-white outline-none`}
          />
          <div className="relative w-full">
            <input
              onChange={(e) =>
                setCredential({ ...credential, password: e.target.value })
              }
              value={credential?.password}
              type={show}
              placeholder="Password"
              className={`w-full rounded border-2 ${
                error ? 'border-red' : 'border-[#E6E6E6]'
              } bg-white px-1 py-2 focus:bg-white outline-none`}
            />
            <span className="absolute right-2 top-2 cursor-pointer text-[#BBBFC4]">
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
          {error && (
            <div className="flex items-center gap-1 bg-red-200 px-1 text-start text-red ">
              <p className="">{error}</p>
            </div>
          )}
        </div>
        <div className="text-right">
          <p
            onClick={handleForgotPassword}
            className="my-5 cursor-pointer font-semibold text-[#313C66]"
          >
            Forgot Password?
          </p>
        </div>
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
            'Sign In'
          )}
        </Button>
        <p className="my-2">
          Don’t have an account?
          <span
            className="ml-1 cursor-pointer font-medium text-[#FCCF12] hover:underline"
            onClick={() => setUIView('SIGN_UP_VIEW')}
          >
            Sign up
          </span>
        </p>
      </form>
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
          onClick={handleGoogleLogIn}
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

export default LoginView
