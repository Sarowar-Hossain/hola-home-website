import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic'
import { LoadingDots, useUI } from '@components/ui'

const Loading = () => (
  <div className="flex h-80 w-80 items-center justify-center p-3 text-center">
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: Loading,
}
const LoginModal = ({ closeModal }) => {
  const { uiView } = useUI()
  const Login = dynamic(() => import('./LoginView'), {
    ...dynamicProps,
    ssr: true,
  })
  const SignUp = dynamic(() => import('./SignUpView'), {
    ...dynamicProps,
    ssr: true,
  })
  const ForgotPassword = dynamic(() => import('./ForgotPassword'), {
    ...dynamicProps,
    ssr: true,
  })
  return (
    <>
      {(uiView === 'SIGN_IN_VIEW' || uiView === 'SIGN_UP_VIEW') && (
        <div className="w-full rounded-xl bg-white lg:flex">
          <div className="md:w-[45vw] xl:w-[40vw] 2xl:w-[30vw]">
            <div className="max-h-[80vh] overflow-y-auto">
              {uiView === 'SIGN_IN_VIEW' && <Login closeModal={closeModal} />}
              {uiView === 'SIGN_UP_VIEW' && <SignUp />}
            </div>
          </div>
          <div className="hidden max-w-[500px] ms-5 flex-col items-center justify-center rounded-xl bg-[#FCCF12] lg:flex px-5">
            <Image
              src="/auth_banner.png"
              height={400}
              width={400}
              alt="Your door to future is here!"
              className=""
            />
          </div>
        </div>
      )}
      {uiView === 'FORGOT_PASSWORD_VIEW' && <ForgotPassword />}
    </>
  )
}

export default LoginModal
