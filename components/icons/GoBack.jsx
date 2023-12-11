import React from 'react'

const GoBack = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      {...props}
    >
      <g clip-path="url(#clip0_4635_112609)">
        <path
          d="M25.8307 14.2082H10.1111L17.3316 6.98775L15.4974 5.1665L5.16406 15.4998L15.4974 25.8332L17.3186 24.0119L10.1111 16.7915H25.8307V14.2082Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_4635_112609">
          <rect width="31" height="31" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default GoBack
