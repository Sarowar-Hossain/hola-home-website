import React from 'react'

const Bookmark = ({ fill, opacity, ...props }) => {
  return (
    <svg
      width="17"
      height="21"
      viewBox="0 0 17 21"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="path-1-inside-1_4635_123601" fill="white">
        <path d="M1.79036 0.916748H15.207C15.4612 0.916748 15.705 1.01771 15.8847 1.19744C16.0644 1.37716 16.1654 1.62092 16.1654 1.87508V20.2205C16.1655 20.3061 16.1426 20.3903 16.0991 20.4641C16.0557 20.538 15.9932 20.5988 15.9183 20.6403C15.8433 20.6818 15.7586 20.7024 15.6729 20.7C15.5873 20.6977 15.5038 20.6724 15.4313 20.6268L8.4987 16.2788L1.56611 20.6258C1.49363 20.6714 1.41028 20.6967 1.32471 20.6991C1.23915 20.7015 1.1545 20.6809 1.07956 20.6396C1.00463 20.5982 0.94215 20.5375 0.898619 20.4638C0.855088 20.3901 0.832095 20.3061 0.832031 20.2205V1.87508C0.832031 1.62092 0.932998 1.37716 1.11272 1.19744C1.29244 1.01771 1.5362 0.916748 1.79036 0.916748Z" />
      </mask>
      <path
        d="M1.79036 0.916748H15.207C15.4612 0.916748 15.705 1.01771 15.8847 1.19744C16.0644 1.37716 16.1654 1.62092 16.1654 1.87508V20.2205C16.1655 20.3061 16.1426 20.3903 16.0991 20.4641C16.0557 20.538 15.9932 20.5988 15.9183 20.6403C15.8433 20.6818 15.7586 20.7024 15.6729 20.7C15.5873 20.6977 15.5038 20.6724 15.4313 20.6268L8.4987 16.2788L1.56611 20.6258C1.49363 20.6714 1.41028 20.6967 1.32471 20.6991C1.23915 20.7015 1.1545 20.6809 1.07956 20.6396C1.00463 20.5982 0.94215 20.5375 0.898619 20.4638C0.855088 20.3901 0.832095 20.3061 0.832031 20.2205V1.87508C0.832031 1.62092 0.932998 1.37716 1.11272 1.19744C1.29244 1.01771 1.5362 0.916748 1.79036 0.916748Z"
        fill={fill}
        fill-opacity="0.7"
      />
      <path
        d="M1.79036 0.916748V-0.583252V0.916748ZM15.207 0.916748V-0.583252V0.916748ZM16.1654 20.2205H14.6654L14.6654 20.2223L16.1654 20.2205ZM15.4313 20.6268L16.2293 19.3567L16.2283 19.356L15.4313 20.6268ZM8.4987 16.2788L9.29568 15.0081L8.49879 14.5083L7.70184 15.008L8.4987 16.2788ZM1.56611 20.6258L0.769253 19.355L0.768114 19.3557L1.56611 20.6258ZM0.832031 20.2205H-0.667969L-0.667968 20.2216L0.832031 20.2205ZM1.79036 2.41675H15.207V-0.583252H1.79036V2.41675ZM15.207 2.41675C15.0634 2.41675 14.9256 2.35968 14.824 2.2581L16.9453 0.136777C16.4843 -0.324251 15.859 -0.583252 15.207 -0.583252V2.41675ZM14.824 2.2581C14.7224 2.15651 14.6654 2.01874 14.6654 1.87508H17.6654C17.6654 1.22309 17.4064 0.597806 16.9453 0.136777L14.824 2.2581ZM14.6654 1.87508V20.2205H17.6654V1.87508H14.6654ZM14.6654 20.2223C14.6651 20.0398 14.7139 19.8606 14.8064 19.7032L17.3918 21.225C17.5714 20.92 17.6658 20.5725 17.6654 20.2186L14.6654 20.2223ZM14.8064 19.7032C14.899 19.5459 15.0321 19.4163 15.1918 19.3279L16.6447 21.9527C16.9543 21.7813 17.2123 21.53 17.3918 21.225L14.8064 19.7032ZM15.1918 19.3279C15.3515 19.2395 15.532 19.1956 15.7145 19.2006L15.6314 22.1995C15.9851 22.2093 16.3351 22.124 16.6447 21.9527L15.1918 19.3279ZM15.7145 19.2006C15.897 19.2057 16.0747 19.2596 16.2293 19.3567L14.6333 21.8969C14.9329 22.0852 15.2776 22.1897 15.6314 22.1995L15.7145 19.2006ZM16.2283 19.356L9.29568 15.0081L7.70171 17.5496L14.6343 21.8975L16.2283 19.356ZM7.70184 15.008L0.769254 19.355L2.36298 21.8967L9.29556 17.5497L7.70184 15.008ZM0.768114 19.3557C0.922525 19.2587 1.10011 19.2048 1.28241 19.1997L1.36702 22.1985C1.72045 22.1885 2.06474 22.084 2.36411 21.8959L0.768114 19.3557ZM1.28241 19.1997C1.46471 19.1945 1.64505 19.2383 1.80468 19.3265L0.35445 21.9527C0.663944 22.1236 1.01358 22.2085 1.36702 22.1985L1.28241 19.1997ZM1.80468 19.3265C1.96431 19.4146 2.09742 19.5439 2.19017 19.701L-0.392932 21.2266C-0.213123 21.531 0.0449528 21.7817 0.35445 21.9527L1.80468 19.3265ZM2.19017 19.701C2.28291 19.858 2.3319 20.037 2.33203 20.2193L-0.667968 20.2216C-0.667705 20.5751 -0.572737 20.9222 -0.392932 21.2266L2.19017 19.701ZM2.33203 20.2205V1.87508H-0.667969V20.2205H2.33203ZM2.33203 1.87508C2.33203 2.01874 2.27496 2.15652 2.17338 2.2581L0.0520606 0.136777C-0.408966 0.597804 -0.667969 1.22309 -0.667969 1.87508H2.33203ZM2.17338 2.2581C2.0718 2.35968 1.93402 2.41675 1.79036 2.41675V-0.583252C1.13837 -0.583252 0.513087 -0.32425 0.0520606 0.136777L2.17338 2.2581Z"
        fill="white"
        mask="url(#path-1-inside-1_4635_123601)"
      />
    </svg>
  )
}

export default Bookmark
