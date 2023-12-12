import Home from '@components/icons/Home'
import { useUI } from '@components/ui'
import { GlobalContext } from 'Context/Context'
import { useSession } from 'next-auth/react'
import React, { useContext } from 'react'

const PropertyPageModal = () => {
  const { data: user } = useSession()
  const { closeModal, setModalView, openModal, setUIView } = useUI()
  const { propertyPageLogModal, setPropertyPageLogModal } =
    useContext(GlobalContext)

  const handleSignUp = () => {}
  const handleLoginUp = () => {}

  return (
    <div className=" bg-white rounded-md flex flex-col justify-center items-center  gap-3 text-center">
      <Home />
      <h1 className="font-semibold text-xl text-black">Login/Signup</h1>
      <p className="text-[#828282] font-normal">
        Please login or signup to book properties
      </p>
      <div className="flex justify-center gap-10 mt-4 items-center">
        <button
          onClick={() => {
            user ? null : openModal()
            setModalView('LOGIN_VIEW')
            setUIView('SIGN_UP_VIEW')
          }}
          className="border  border-accent-6 px-8 py-1 hover:bg-primary  rounded-xl font-medium bg-white text-accent-7"
        >
          Signup
        </button>
        <button
          onClick={() => {
            user ? null : openModal()
            setModalView('LOGIN_VIEW')
            setUIView('SIGN_IN_VIEW')
          }}
          className="border  border-accent-6 px-8 py-1 hover:bg-primary  rounded-xl font-medium bg-white text-accent-7"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default PropertyPageModal
