import React from 'react'

const Success = ({ ...props }) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <circle cx="30" cy="30" r="30" fill="#219653" />
      <path
        d="M38.4202 23.6829L26.8413 35.2618L21.5781 29.9987"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default Success
