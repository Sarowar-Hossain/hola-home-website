import { useUI } from '@components/ui'
import { AuthContext } from 'Context/AuthProvider'
import { GlobalContext } from 'Context/Context'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'

const LoginNavigate = () => {
  const { closeModal, setModalView, setUIView } = useUI()
  const { setIsLogoutModalShow } = useContext(GlobalContext)

  const handleLogin = () => {
    setModalView('LOGIN_VIEW')
    setUIView('SIGN_IN_VIEW')
  }

  const handleCancel = () => {
    closeModal()
    setIsLogoutModalShow(false)
  }
  return (
    <div className=" bg-white rounded-md flex flex-col justify-center items-center  gap-2 text-center py-10">
      <p className="text-accent-3">
        Account created successfully, please login
      </p>
      <div className="flex justify-center gap-10 items-center mt-4">
        <button
          onClick={handleCancel}
          className="border  border-accent-6 px-6  rounded-md font-medium bg-white text-accent-7"
        >
          Cancel
        </button>
        <button
          onClick={handleLogin}
          className=" px-6 py-0.5 rounded-md font-medium bg-primary text-accent-7"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default LoginNavigate
