import ToastError from '@components/icons/ToastError'
import ToastSuccess from '@components/icons/ToastSuccess'
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast'

export const CustomErrorToast = (message) => {
  const customToast = toast.custom((t) => {
    return (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-[200px] bg-white shadow-xl rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex justify-center items-center gap-4 p-3">
          <Image src={'/ToastError.png'} height={20} width={20} />
          <p>{message}</p>
        </div>
      </div>
    )
  })
  setTimeout(() => {
    toast.dismiss(customToast.id)
  }, 1000)

  return customToast
}

export default CustomErrorToast
