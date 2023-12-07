import { useUI } from '@components/ui'
import { GlobalContext } from 'Context/Context'
import React, { useContext } from 'react'

const LogoutModal = () => {
  const { closeModal } = useUI()
  const { setIsLogoutModalShow } = useContext(GlobalContext)

  const handleLogOut = () => {
    closeModal()
    setIsLogoutModalShow(false)
  }

  const handleCancel = () => {
    closeModal()
    setIsLogoutModalShow(false)
  }
  return (
    <div className=" bg-white rounded-md flex flex-col justify-center items-center  gap-2 text-center">
      <h1 className="font-bold text-xl">Logout</h1>
      <p className="text-accent-3">Are you sure you want to logout?</p>
      <div className="flex justify-center gap-10 items-center mt-4">
        <button
          onClick={handleCancel}
          className="border  border-accent-6 px-6  rounded-md font-medium bg-white text-accent-7"
        >
          Cancel
        </button>
        <button
          onClick={handleLogOut}
          className=" px-6 py-0.5 rounded-md font-medium bg-primary text-accent-7"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default LogoutModal
