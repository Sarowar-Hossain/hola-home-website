import React from 'react'

const FirePit = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 60 60"
      fill="none"
      {...props}
    >
      <g clip-path="url(#clip0_4648_30217)">
        <path
          d="M48.7825 49.8127L48.2348 49.6497L48.7825 49.4867C50.1131 49.09 51.2117 48.1988 51.8709 46.9769C52.5325 45.7549 52.679 44.3487 52.2835 43.0193C51.888 41.6875 50.9969 40.5888 49.7762 39.9273C48.5506 39.2632 47.1394 39.1192 45.8161 39.5171L30.0021 44.224L14.1852 39.5172C12.8594 39.1229 11.4508 39.2658 10.2251 39.9274C9.00439 40.5891 8.11329 41.6877 7.71778 43.0182C7.32227 44.3488 7.46876 45.7551 8.1304 46.977C8.78959 48.1989 9.88823 49.09 11.2188 49.4855L11.7684 49.6491L11.2188 49.8127C8.89564 50.5039 7.43325 52.6852 7.52372 55.0013C7.52372 55.0053 7.52255 55.0089 7.52255 55.0129H7.5236C7.54095 55.4338 7.59227 55.8572 7.7179 56.2788C8.11341 57.6106 9.00451 58.7093 10.2253 59.3708C10.9967 59.7883 11.8415 59.9995 12.6936 59.9995C13.1941 59.9995 13.6946 59.9275 14.1853 59.781L30.0015 55.0748L45.8164 59.781C46.3072 59.9275 46.81 60.0007 47.3081 60.0007C48.1626 60.0007 49.0073 59.7871 49.7787 59.3696C50.9995 58.708 51.8881 57.6106 52.2836 56.28C52.4093 55.8579 52.4605 55.4342 52.4779 55.0128H52.479C52.479 55.0088 52.4778 55.0052 52.4778 55.0012C52.5677 52.6848 51.1054 50.5039 48.7825 49.8127ZM46.5291 41.9123C47.2273 41.7097 47.9525 41.7866 48.5848 42.126C49.2195 42.4703 49.681 43.0391 49.8861 43.7312C50.0936 44.4222 50.0179 45.1533 49.6736 45.7881C49.3293 46.4216 48.7605 46.8843 48.0695 47.0894V47.0905L43.8532 48.3454L38.1656 46.6534L34.3836 45.528L46.5291 41.9123ZM12.8704 57.4427C12.369 57.4749 11.8696 57.4163 11.4166 57.1725C10.7818 56.8282 10.3204 56.2593 10.1153 55.5672C10.0456 55.3327 10.0579 55.0994 10.0523 54.8657C10.1326 53.5597 11.1953 52.513 12.5225 52.513C13.9019 52.513 15.0225 53.6348 15.0225 55.0129C15.0226 56.2679 14.0782 57.2662 12.8704 57.4427ZM17.318 56.2416C17.4378 55.8739 17.5226 55.477 17.5226 55.013C17.5226 53.4275 16.7666 52.029 15.6122 51.1124L16.1481 50.9529L25.6184 53.7716L17.318 56.2416ZM42.4788 55.0129C42.4788 55.477 42.5637 55.8737 42.6835 56.2414L11.9318 47.0894C11.2408 46.8843 10.672 46.4216 10.3277 45.7881C9.98338 45.1533 9.9078 44.4222 10.1152 43.7299C10.3203 43.039 10.7817 42.4702 11.4165 42.1259C12.0513 41.7865 12.7763 41.7096 13.4722 41.9122L44.389 51.1124C43.2347 52.0291 42.4788 53.4274 42.4788 55.0129ZM49.8861 55.5684C49.681 56.2593 49.2195 56.8282 48.5873 57.1712C48.1356 57.4172 47.6347 57.4753 47.1311 57.4426C45.9234 57.2662 44.9788 56.268 44.9788 55.0129C44.9788 53.6348 46.0995 52.513 47.4788 52.513C48.8062 52.513 49.8691 53.5599 49.9492 54.8663C49.9436 55.1002 49.9559 55.3336 49.8861 55.5684Z"
          fill="black"
        />
        <path
          d="M29.9977 39.9999C38.2669 39.9999 44.9954 33.2226 44.9954 24.8912C44.9954 24.4713 44.9685 24.0819 44.9392 23.6925L44.9124 23.3116C44.4558 17.3533 41.7239 13.6436 39.3117 10.3696C37.156 7.44237 35.2931 4.91544 35.2931 1.24968C35.2931 0.780927 35.0295 0.351198 34.6119 0.136392C34.1968 -0.0760704 33.6915 -0.0382187 33.3131 0.235299C29.2408 3.1711 26.7457 8.3957 25.8448 11.9785C25.1759 14.6494 25.0367 17.6096 25.0074 19.7496C22.3633 18.6289 21.5357 14.1295 21.526 14.0782C21.4577 13.6912 21.2134 13.3579 20.8619 13.1797C20.5128 13.0039 20.1001 12.9953 19.7461 13.1699C19.563 13.259 15.2637 15.46 15.0196 24.027C15 24.3138 15 24.6032 15 24.8912C15 33.2226 21.7286 39.9999 29.9977 39.9999ZM17.5172 24.1441C17.6344 20.0498 18.7233 17.7732 19.6266 16.5806C20.4566 18.9525 22.3488 22.4998 26.2502 22.4998C26.9411 22.4998 27.5002 21.9407 27.5002 21.2497C27.5002 18.5458 27.5588 15.4232 28.2717 12.5875C28.9723 9.79692 30.6569 6.2801 33.0422 3.78622C33.6794 6.93811 35.447 9.33918 37.2976 11.8526C39.6195 15.0021 42.0194 18.259 42.4173 23.4872L42.4442 23.8778C42.471 24.2074 42.4955 24.5358 42.4955 24.891C42.4955 31.8429 36.8901 37.4997 29.9979 37.4997C23.1057 37.4997 17.5002 31.8429 17.5002 24.891C17.5001 24.6568 17.5001 24.4238 17.5172 24.1441Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_4648_30217">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default FirePit
