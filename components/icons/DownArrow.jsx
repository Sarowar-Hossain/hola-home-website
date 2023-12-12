import React from 'react'

const DownArrow = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
      {...props}
    >
      <path
        d="M5.55859 5.5L10.5586 0.5L0.558594 0.5L5.55859 5.5Z"
        fill="#484848"
      />
    </svg>
  )
}

export default DownArrow
