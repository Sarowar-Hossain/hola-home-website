import React from 'react'

const BeachAccess = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 60 60"
      fill="none"
      {...props}
    >
      <g clip-path="url(#clip0_4648_30277)">
        <path
          d="M34.0156 37.9773C34.0156 43.4964 38.4898 47.9706 44.0089 47.9706C49.5277 47.9706 54.0018 43.4964 54.0018 37.9773C54.0018 32.4585 49.5277 27.9844 44.0089 27.9844C38.4922 27.9904 34.0217 32.461 34.0156 37.9773ZM44.0089 29.9828C48.4242 29.9828 52.0034 33.562 52.0034 37.9773C52.0034 42.3926 48.4242 45.9718 44.0089 45.9718C39.5936 45.9718 36.0144 42.3926 36.0144 37.9773C36.0193 33.5644 39.5956 29.9876 44.0089 29.9828Z"
          fill="black"
        />
        <path
          d="M38.2969 57.9648H49.7181V59.9633H38.2969V57.9648Z"
          fill="black"
        />
        <path
          d="M34.0156 53.9668H54.0022V55.9656H34.0156V53.9668Z"
          fill="black"
        />
        <path
          d="M12.0312 53.9668H14.0301V55.9656H12.0312V53.9668Z"
          fill="black"
        />
        <path
          d="M6.03516 55.9648H8.03357V57.9637H6.03516V55.9648Z"
          fill="black"
        />
        <path
          d="M12.1279 48.3439C17.3458 39.2561 20.6198 29.1834 21.7422 18.7643L31.036 28.0029C31.2219 28.188 31.4731 28.2924 31.7355 28.2936C31.7895 28.294 31.844 28.2896 31.8972 28.2807C32.214 28.2291 32.4866 28.0283 32.6297 27.7413C34.5136 23.9811 33.7759 19.4368 30.799 16.466L29.9818 15.6484H37.0107C37.5626 15.6488 38.0105 15.2017 38.0105 14.6498C38.011 14.5417 37.9932 14.4345 37.9593 14.3325C36.6322 10.3413 32.8974 7.64986 28.6913 7.65389H27.3924L32.383 2.63426C32.7724 2.2432 32.7708 1.61066 32.3797 1.22122C32.3039 1.14583 32.2169 1.08294 32.1213 1.03536C28.3595 -0.850575 23.8128 -0.113213 20.84 2.86527L19.8857 3.81952C19.5745 4.13277 19.2854 4.46658 19.0193 4.81893C18.7565 4.46658 18.4694 4.13277 18.1606 3.81952L17.2064 2.86527C14.2359 -0.111197 9.69162 -0.848559 5.93224 1.03536C5.43838 1.28209 5.23802 1.88238 5.48475 2.37584C5.53232 2.47139 5.59521 2.55847 5.6706 2.63426L10.6668 7.65389H9.35499C5.14892 7.64986 1.41373 10.3413 0.0869602 14.3325C-0.0880073 14.8558 0.194601 15.4218 0.718294 15.5968C0.820291 15.631 0.92753 15.6484 1.03557 15.6484H8.05765L7.24047 16.466C4.2636 19.4368 3.52584 23.9811 5.40936 27.7413C5.55288 28.0283 5.82541 28.2291 6.14188 28.2807C6.1955 28.2896 6.24952 28.294 6.30395 28.2936C6.56801 28.2936 6.82119 28.1892 7.00825 28.0029L15.6627 19.3997C14.5911 28.9757 10.9845 38.0926 5.21463 45.8097C3.87134 45.4569 2.50949 45.1792 1.13556 44.9784L0.511075 44.9155L0.311112 46.9051L0.893665 46.9619C1.89308 47.105 2.88604 47.307 3.87376 47.5356C3.67379 47.7863 3.47383 48.0411 3.26701 48.2883L4.79979 49.5703C12.4794 40.4397 17.0576 29.1043 17.8732 17.2013L19.0234 16.0584L19.8845 16.9147C18.8339 29.6442 14.4645 41.8762 7.21225 52.3903L8.84904 53.5357C9.63478 52.4141 10.3842 51.2502 11.1107 50.0641C15.7852 52.3 19.9127 55.5337 23.2024 59.5374L24.7481 58.2711C22.8029 55.9062 20.5743 53.7893 18.1118 51.9686H59.9952V49.9698H15.1511C14.1714 49.3784 13.1603 48.8426 12.1279 48.3439ZM31.3686 25.5135L20.8101 15.0158C23.5108 14.2095 26.4361 14.9412 28.4389 16.9243L29.3932 17.879C31.3924 19.8746 32.1487 22.7987 31.3686 25.5135ZM35.486 13.65H27.2118C25.2847 12.7328 23.1105 12.4732 21.0218 12.9114C22.4759 10.8666 24.8295 9.65231 27.3387 9.65271H28.6877C31.5126 9.64828 34.1165 11.1794 35.486 13.65ZM21.2955 5.23257L22.2502 4.27831C24.2474 2.27868 27.1726 1.52197 29.8887 2.30247L23.9648 8.26144C22.0421 8.96897 20.3916 10.2647 19.2471 11.964C18.7823 9.51927 19.5491 7.002 21.2987 5.23257H21.2955ZM15.7905 4.27831L16.7447 5.23257C17.1898 5.68692 17.576 6.19569 17.8941 6.7464C17.4414 7.79903 17.183 8.92422 17.1306 10.0684C16.2336 9.28464 15.2003 8.67265 14.0827 8.26144L8.15764 2.30247C10.8729 1.52237 13.7973 2.27908 15.7933 4.27831H15.7905ZM9.35177 9.65271H10.7011C13.2119 9.65029 15.5688 10.8642 17.0245 12.9102C14.937 12.4736 12.7636 12.7332 10.8378 13.65H2.56029C3.92939 11.1807 6.53133 9.64989 9.35499 9.65271H9.35177ZM6.67767 25.5135C5.89757 22.7987 6.65429 19.8746 8.65351 17.879L9.60777 16.9243C11.0454 15.4903 12.995 14.6877 15.0261 14.6941C15.7756 14.6945 16.521 14.8014 17.2406 15.0118L6.67767 25.5135Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_4648_30277">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default BeachAccess
