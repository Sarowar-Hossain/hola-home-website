import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import { Oval } from 'react-loader-spinner'
import { useRouter } from 'next/router'
import axios from 'axios'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { Button, Text, useUI } from '@components/ui'
import { AuthContext } from 'Context/AuthProvider'
import { Cross } from '@components/icons'

const LoginPage = () => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState('password')
    const router = useRouter()
    const { providerLogin, signIn } = useContext(AuthContext);
    const [credential, setCredential] = useState({
        email: '',
        password: '',
    })

    const handleGoogleLogIn = () => {
        const loginProcess = new Promise((resolve, reject) => {
            providerLogin(googleProvider)
                .then((res) => {
                    const body = {
                        name: res?.user?.displayName,
                        email: res?.user?.email,
                        uid: res?.user?.uid,
                    }
                    localStorage.setItem('userId', res?.user?.uid)
                    axios
                        .post(
                            baseUrl + '/manageUsersApis/add-user-details-in-google-login',
                            body
                        )
                        .then((res) => {
                            resolve(res?.data)
                            router.push('/')
                        })
                        .catch((err) => {
                            console.error(err.message)
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
                localStorage.setItem('userId', res?.user?.uid)
                toast.success('Successfully logged in')
                router.push('/')
                setLoading(false)
            })
            .catch((err) => {
                if (err?.message === 'Firebase: Error (auth/wrong-password).') {
                    setError('Wrong password! please check again')
                }
                setLoading(false)
            })
    }

    const handleForgotPassword = () => {
        router.push('/forgot-password')
    }

    return (
        <div className="flex flex-col justify-center mt-5 w-full max-w-sm mx-auto px-2">
            <div className='mx-auto bg-[#FCCF12] p-2 rounded-md w-full'>
                <div className='w-full rounded-md h-48 relative mx-auto overflow-hidden'>
                    <Image className='object-contain' src="/mobile_auth_cover.png" fill alt='' />
                </div>
            </div>
            <Text className="text-3xl font-bold text-[#484C52] mt-5">Login</Text>
            <Text className="text-[#848484]">Login to continue to our website</Text>
            <form
                onSubmit={handleSignIn}
                className="mx-auto mt-12 w-full"
            >
                <div className="flex flex-col gap-3">
                    {error && (
                        <div className="flex items-center gap-1 border border-red-700 bg-red-200 px-1 text-start text-red">
                            <p className="">
                                {error}
                            </p>
                            <span
                                onClick={() => setError(false)}
                                className="cursor-pointer text-sm text-black"
                            >
                                <Cross className="h-5 w-5" />
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
                        className="w-full rounded border-2 border-[#E6E6E6] bg-white px-1 py-2 focus:bg-white outline-none"
                    />
                    <div className="relative w-full">
                        <input
                            onChange={(e) =>
                                setCredential({ ...credential, password: e.target.value })
                            }
                            value={credential?.password}
                            type={show}
                            placeholder="Password"
                            className="w-full rounded border-2 border-[#E6E6E6] bg-white px-1 py-2 focus:bg-white outline-none"
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
                </div>
                <div className="text-right">
                    <p
                        onClick={handleForgotPassword}
                        className="my-5 cursor-pointer font-semibold text-[#313C66]"
                    >
                        Forgot Password?
                    </p>
                </div>
                <Button
                    disabled={loading}
                    className="mt-10 w-full flex items-center justify-center mx-auto"
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
                        'Sign-In'
                    )}
                </Button>
                <p className="text-center my-5">
                    Don’t have an account?
                    <span
                        className="ml-1 cursor-pointer font-semibold text-[#FCCF12] hover:underline"
                        onClick={() => router.push("/sign-up")}
                    >
                        Sign up
                    </span>
                </p>
            </form>
            <div className="mb-5 flex justify-center gap-3">
                <Image
                    onClick={() => router.push('/phone-login')}
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

export default LoginPage
