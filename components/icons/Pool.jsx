import React from 'react'

const Pool = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 60 60"
      fill="none"
      {...props}
    >
      <path
        d="M1.36364 45.5864C1.80886 45.5827 2.25359 45.6249 2.69359 45.7126C2.72905 45.7256 2.76491 45.7318 2.80105 45.7411C3.74159 45.9856 4.63669 46.4618 5.43723 47.1438C7.05543 48.5281 8.963 49.2417 10.9045 49.1891C12.8259 49.248 14.7154 48.5482 16.3197 47.1834C16.3377 47.1713 16.355 47.1593 16.3729 47.1456C17.5692 46.086 18.9944 45.5404 20.4453 45.5864C21.8997 45.5442 23.328 46.0887 24.5309 47.1438C26.1439 48.5293 28.0478 49.2432 29.9854 49.1891C31.9268 49.2368 33.8337 48.5243 35.4545 47.1456C36.6508 46.0861 38.0759 45.5404 39.5268 45.5864C40.99 45.5461 42.4264 46.0966 43.635 47.1611C45.2494 48.5328 47.1487 49.24 49.0816 49.1891C50.3841 49.2261 51.6784 48.9148 52.8829 48.2747C53.4567 47.9478 54.0126 47.5708 54.5465 47.1463C55.7559 46.1045 57.1821 45.5605 58.6364 45.5864C58.998 45.5864 59.3449 45.4011 59.6006 45.0713C59.8563 44.7416 60 44.2943 60 43.8279C60 43.3616 59.8563 42.9143 59.6006 42.5845C59.3449 42.2548 58.998 42.0695 58.6364 42.0695C58.1062 42.0613 57.5764 42.1095 57.0524 42.2137C55.6665 42.4802 54.3414 43.1285 53.1672 44.1146C52.7336 44.4607 52.2826 44.7693 51.8172 45.0384C50.9501 45.4948 50.0181 45.7105 49.082 45.6715C47.6145 45.7192 46.1731 45.1655 44.9651 44.0899C43.8209 43.1375 42.5354 42.5027 41.1905 42.226L29.9542 21.0658L44.3523 11.7723C44.9856 11.3643 45.5417 10.782 45.9815 10.0666C46.4212 9.3511 46.7338 8.5199 46.8971 7.63163C47.0605 6.74335 47.0707 5.81966 46.927 4.92576C46.7833 4.03185 46.4892 3.18951 46.0654 2.45821C45.3858 1.32734 44.4297 0.525877 43.3524 0.183909C42.2751 -0.158059 41.1398 -0.0204514 40.1307 0.574394L20.2375 12.7169C19.5461 13.1394 18.9299 13.7414 18.4276 14.4854C17.9252 15.2294 17.5474 16.0992 17.318 17.0402C17.0885 17.9813 17.0124 18.9734 17.0943 19.9542C17.1761 20.9351 17.4143 21.8835 17.7938 22.74L20.4379 28.8035L2.79982 42.191C2.32359 42.1111 1.84388 42.0705 1.36364 42.0695C1.00198 42.0695 0.655131 42.2548 0.3994 42.5845C0.143668 42.9143 0 43.3616 0 43.8279C0 44.2943 0.143668 44.7416 0.3994 45.0713C0.655131 45.4011 1.00198 45.5864 1.36364 45.5864ZM21.8281 31.8278C22.4527 31.3524 22.9067 30.5787 23.0918 29.6745C23.2769 28.7702 23.1781 27.8083 22.8169 26.9974L20.1603 20.9921C19.9676 20.5563 19.8468 20.0739 19.8054 19.5751C19.7641 19.0762 19.8031 18.5718 19.92 18.0933C20.0368 17.6148 20.2291 17.1726 20.4847 16.7944C20.7404 16.4162 21.0538 16.1102 21.4054 15.8955L41.2946 3.75646C41.6529 3.53318 42.0531 3.44608 42.4483 3.50535C42.8436 3.56462 43.2176 3.76782 43.5266 4.09117C43.8356 4.41452 44.0668 4.84465 44.1931 5.33124C44.3195 5.81782 44.3357 6.34075 44.24 6.83883C44.1706 7.22391 44.0354 7.58411 43.8441 7.8931C43.6529 8.20209 43.4105 8.45205 43.1347 8.6247L28.7429 17.9149C28.3894 18.1379 28.0772 18.4564 27.8276 18.8487C27.5779 19.241 27.3967 19.6979 27.296 20.1885C27.1947 20.6846 27.1774 21.203 27.2452 21.7085C27.313 22.214 27.4643 22.6947 27.6889 23.1181L37.8776 42.2242C36.5196 42.5005 35.2224 43.1448 34.0715 44.1146C32.8714 45.1772 31.4412 45.7225 29.986 45.6722C28.5231 45.7173 27.0868 45.1636 25.8832 44.0906C24.2707 42.7236 22.3747 42.0189 20.4453 42.0695C18.5191 42.0153 16.6261 42.7208 15.0194 44.0917C14.9986 44.1056 14.9774 44.1209 14.9568 44.1364C13.766 45.1881 12.3472 45.7256 10.9045 45.6717C9.44808 45.7168 8.01758 45.1701 6.81545 44.1089C6.62455 43.9646 6.42614 43.8177 6.22309 43.6716L21.8281 31.8278Z"
        fill="black"
      />
      <path
        d="M58.6364 52.8776C56.6963 52.8264 54.7902 53.5387 53.1719 54.9195C51.9548 55.9383 50.5349 56.4804 49.084 56.4804C47.633 56.4804 46.2131 55.9383 44.996 54.9195C43.3615 53.5857 41.4669 52.8776 39.5325 52.8776C37.5981 52.8776 35.7035 53.5857 34.069 54.9195C32.8682 55.9793 31.4394 56.5254 29.9847 56.4804C28.5315 56.5253 27.1042 55.9791 25.9051 54.9195C24.2893 53.5387 22.3852 52.8264 20.4472 52.8776C18.5082 52.8264 16.6033 53.5387 14.9864 54.9195C13.7864 55.9793 12.3582 56.5254 10.9042 56.4804C9.45032 56.5253 8.02236 55.9792 6.82255 54.9195C5.20624 53.5389 3.30195 52.8266 1.36364 52.8776C1.00198 52.8776 0.655131 53.0628 0.3994 53.3926C0.143668 53.7224 0 54.1697 0 54.636C0 55.1024 0.143668 55.5497 0.3994 55.8794C0.655131 56.2092 1.00198 56.3945 1.36364 56.3945C2.81735 56.35 4.24507 56.8964 5.44459 57.9563C7.06119 59.337 8.96583 60.0493 10.9045 59.9982C12.8433 60.0493 14.7481 59.337 16.365 57.9563C17.565 56.8964 18.9931 56.3503 20.4472 56.3953C21.9004 56.3505 23.3277 56.8967 24.5268 57.9563C26.1426 59.3371 28.0467 60.0494 29.9847 59.9982C31.9242 60.0494 33.8297 59.3371 35.4472 57.9563C36.6635 56.9375 38.0828 56.3953 39.5331 56.3953C40.9835 56.3953 42.4027 56.9375 43.619 57.9563C45.2541 59.2901 47.1491 59.9982 49.0839 59.9982C51.0186 59.9982 52.9137 59.2901 54.5487 57.9563C55.7507 56.8962 57.1806 56.3499 58.6364 56.3945C58.998 56.3945 59.3449 56.2092 59.6006 55.8794C59.8563 55.5497 60 55.1024 60 54.636C60 54.1697 59.8563 53.7224 59.6006 53.3926C59.3449 53.0628 58.998 52.8776 58.6364 52.8776Z"
        fill="black"
      />
      <path
        d="M39.1172 27.6176C39.1173 30.103 39.6889 32.5326 40.7597 34.599C41.8306 36.6655 43.3526 38.2761 45.1333 39.2271C46.914 40.1781 48.8734 40.4269 50.7637 39.9419C52.654 39.4569 54.3904 38.26 55.7532 36.5025C57.116 34.745 58.044 32.5058 58.4199 30.0682C58.7959 27.6305 58.6028 25.1039 57.8652 22.8077C57.1275 20.5115 55.8784 18.549 54.2758 17.1683C52.6732 15.7876 50.7891 15.0507 48.8617 15.0508C46.278 15.0543 43.8009 16.3795 41.974 18.7355C40.1472 21.0915 39.1197 24.2859 39.1172 27.6176ZM48.8617 18.5677C50.2496 18.5677 51.6063 19.0983 52.7602 20.0926C53.9142 21.0869 54.8136 22.5001 55.3448 24.1535C55.8759 25.8069 56.0149 27.6263 55.7442 29.3816C55.4735 31.1369 54.8053 32.7493 53.8239 34.0148C52.8426 35.2804 51.5923 36.1423 50.2312 36.4915C48.87 36.8408 47.4591 36.6617 46.1768 35.9769C44.8946 35.2922 43.7986 34.1325 43.0274 32.6445C42.2563 31.1566 41.8446 29.4071 41.8445 27.6175C41.8465 25.2183 42.5865 22.9181 43.902 21.2215C45.2175 19.525 47.0012 18.5705 48.8617 18.5677Z"
        fill="black"
      />
    </svg>
  )
}

export default Pool
