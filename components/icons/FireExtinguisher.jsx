import React from 'react'

const FireExtinguisher = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 44 60"
      fill="none"
      {...props}
    >
      <path
        d="M42.5627 1.44374e-07H25.0501C24.9341 -6.61994e-05 24.8192 0.0227332 24.712 0.0670946C24.6048 0.111456 24.5074 0.176509 24.4254 0.258535C24.3434 0.340561 24.2783 0.43795 24.234 0.545135C24.1896 0.652319 24.1668 0.767197 24.1669 0.883199V2.61124C23.5538 2.72821 22.97 2.96544 22.4492 3.30924C21.9283 3.65305 21.4807 4.09661 21.1322 4.61434C16.2976 4.74015 11.703 6.74754 8.32586 10.2094C4.94877 13.6712 3.05584 18.3142 3.04985 23.1504V37.0242L2.33269 40.3289H1.43789C1.20365 40.3289 0.979003 40.4219 0.813371 40.5876C0.647739 40.7532 0.554688 40.9778 0.554688 41.2121V59.1168C0.554688 59.351 0.647739 59.5757 0.813371 59.7413C0.979003 59.9069 1.20365 60 1.43789 60H9.9383C10.0543 60.0001 10.1692 59.9773 10.2764 59.9329C10.3835 59.8885 10.4809 59.8235 10.563 59.7415C10.645 59.6594 10.71 59.562 10.7544 59.4549C10.7988 59.3477 10.8216 59.2328 10.8215 59.1168V41.2121C10.8216 41.0961 10.7988 40.9812 10.7544 40.874C10.71 40.7668 10.645 40.6694 10.563 40.5874C10.4809 40.5054 10.3835 40.4403 10.2764 40.396C10.1692 40.3516 10.0543 40.3288 9.9383 40.3289H9.04551L8.32835 37.0242V23.1297C8.33284 19.6921 9.67196 16.3906 12.0634 13.9211C14.4548 11.4516 17.7117 10.0072 21.1474 9.89233C21.2781 10.0819 21.4226 10.2616 21.5799 10.4298V14.0893C19.1697 14.3119 16.9294 15.4259 15.2973 17.2132C13.6652 19.0005 12.7588 21.3326 12.7554 23.753V56.5934C12.7564 57.4966 13.1156 58.3625 13.7543 59.0012C14.3929 59.6399 15.2589 59.9991 16.1621 60H33.9336C34.8368 59.9991 35.7027 59.6399 36.3414 59.0012C36.98 58.3625 37.3392 57.4966 37.3402 56.5934V23.753C37.3368 21.3324 36.4303 19.0003 34.798 17.2129C33.1657 15.4255 30.9251 14.3117 28.5147 14.0893V10.4298C29.1064 9.78912 29.5083 8.99652 29.6755 8.14057C33.4022 8.27301 37.0582 9.1954 40.4016 10.8467C40.6064 10.9605 40.848 10.9882 41.0732 10.9239C41.2985 10.8595 41.489 10.7083 41.6027 10.5035C41.7165 10.2987 41.7443 10.0571 41.6799 9.83186C41.6156 9.6066 41.4644 9.41613 41.2596 9.30236C38.8901 8.09439 36.3519 7.25098 33.7307 6.80063L42.8009 4.26106C42.9864 4.20891 43.1499 4.09756 43.2663 3.94395C43.3827 3.79035 43.4458 3.6029 43.4459 3.41016V0.886732C43.4463 0.770452 43.4238 0.655224 43.3796 0.547661C43.3355 0.440099 43.2705 0.342318 43.1884 0.259931C43.1064 0.177544 43.0088 0.112172 42.9015 0.067566C42.7941 0.0229604 42.6789 -7.8588e-07 42.5627 1.44374e-07ZM25.0501 4.28982C25.6337 4.28992 26.2042 4.46308 26.6894 4.78738C27.1746 5.11169 27.5527 5.5726 27.776 6.11181C27.9993 6.65102 28.0576 7.24433 27.9437 7.81672C27.8298 8.3891 27.5487 8.91486 27.136 9.32749C26.7233 9.74013 26.1975 10.0211 25.6251 10.1349C25.0527 10.2488 24.4594 10.1903 23.9202 9.96694C23.381 9.74358 22.9202 9.36536 22.596 8.88009C22.2717 8.39483 22.0987 7.82433 22.0987 7.24072C22.1 6.4589 22.4112 5.70949 22.964 5.15667C23.5168 4.60384 24.2663 4.29267 25.0481 4.29134L25.0501 4.28982ZM23.3493 14.0434V11.637C24.4422 12.0672 25.6575 12.0672 26.7504 11.637V14.0449L23.3493 14.0434ZM9.05661 58.2336H2.32109V42.0953H9.05661V58.2336ZM4.14048 40.3289L4.64516 38.0023H6.73304L7.23773 40.3289H4.14048ZM6.56296 23.1297V36.2359H4.81625V23.1504C4.82183 18.9079 6.43239 14.8246 9.32446 11.7206C12.2165 8.61653 16.1759 6.72169 20.4075 6.41657C20.2998 6.99448 20.3048 7.58776 20.4221 8.16379C16.6532 8.45838 13.1337 10.1623 10.565 12.9359C7.99624 15.7096 6.56696 19.3493 6.56195 23.1297H6.56296ZM35.5763 23.753V56.5934C35.5758 57.0282 35.4028 57.4451 35.0953 57.7526C34.7878 58.0601 34.3709 58.2331 33.9361 58.2336H16.1621C15.7272 58.2331 15.3103 58.0601 15.0028 57.7526C14.6954 57.4451 14.5224 57.0282 14.5218 56.5934V23.753C14.5243 21.6474 15.3618 19.6287 16.8508 18.1398C18.3397 16.651 20.3584 15.8136 22.4641 15.8113H27.6315C29.7376 15.8129 31.757 16.65 33.2465 18.1389C34.736 19.6279 35.5739 21.6469 35.5763 23.753ZM41.683 2.73842L29.6235 6.11678C29.4069 5.24098 28.9441 4.44548 28.2898 3.82429C27.6355 3.2031 26.8171 2.78217 25.9313 2.61124V1.7664H41.6774L41.683 2.73842Z"
        fill="black"
      />
      <path
        d="M16.5156 29.0082V45.036C16.5156 45.152 16.5384 45.2669 16.5827 45.3741C16.6271 45.4812 16.6921 45.5786 16.7742 45.6607C16.8562 45.7427 16.9536 45.8077 17.0608 45.8521C17.1679 45.8965 17.2828 45.9193 17.3988 45.9192H32.6933C32.9275 45.9192 33.1522 45.8261 33.3178 45.6605C33.4835 45.4949 33.5765 45.2702 33.5765 45.036V29.0082C33.5765 28.774 33.4835 28.5493 33.3178 28.3837C33.1522 28.2181 32.9275 28.125 32.6933 28.125H17.4013C17.2851 28.1246 17.17 28.1472 17.0625 28.1914C16.955 28.2356 16.8573 28.3006 16.7751 28.3826C16.6928 28.4647 16.6275 28.5622 16.583 28.6696C16.5384 28.7769 16.5156 28.892 16.5156 29.0082ZM18.282 29.8914H31.8101V44.1528H18.2845L18.282 29.8914Z"
        fill="black"
      />
    </svg>
  )
}

export default FireExtinguisher
