import React from 'react'

const ToastSuccess = ({ ...props }) => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <path
        d="M40 20.6172C40 31.663 31.0458 40.6172 20 40.6172C8.95416 40.6172 0 31.663 0 20.6172C0 9.57135 8.95416 0.617188 20 0.617188C31.0458 0.617188 40 9.57135 40 20.6172Z"
        fill="#60DAA8"
      />
    </svg>
  )
}

export default ToastSuccess
