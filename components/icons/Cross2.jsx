import React from 'react'

const Cross2 = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      {...props}
    >
      <path
        d="M14.4941 26.6024L26.6044 14.4956M14.4941 14.4956L26.6044 26.6024"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  )
}

export default Cross2
