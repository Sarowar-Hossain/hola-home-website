import React from 'react'

const CrossBookingDetails = ({ ...props }) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="30" cy="30" r="30" fill="#F53D3D" />
      <path
        d="M21.5 39.2537L30.25 30.4794L39 39.2537M39 21.7051L30.2483 30.4794L21.5 21.7051"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default CrossBookingDetails
