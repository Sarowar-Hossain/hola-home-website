import { LargeLoader } from '@components/icons'
import React from 'react'

const CommonLoader = () => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden'

    // Cleanup function to remove the class when the component is unmounted
    return () => {
      document.body.style.overflow = ''
    }
  }, [])
  return (
    <div className="flex justify-center items-center z-[9999] fixed inset-0 bg-white">
      <div className="animate-spin">
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>
            {`
          .spinner_DupU {
            animation: spinner_sM3D 1.2s infinite; fill: #FCCF12;
          }
          .spinner_GWtZ { animation-delay: .1s; fill: #FCCF12; }
          .spinner_dwN6 { animation-delay: .2s; fill: #FCCF12; }
          .spinner_46QP { animation-delay: .3s; fill: #FCCF12; }
          .spinner_PD82 { animation-delay: .4s; fill: #FCCF12; }
          .spinner_eUgh { animation-delay: .5s; fill: #FCCF12; }
          .spinner_eUaP { animation-delay: .6s; fill: #FCCF12; }
          .spinner_j38H { animation-delay: .7s; fill: #FCCF12; }
          .spinner_tVmX { animation-delay: .8s; fill: #FCCF12; }
          .spinner_DQhX { animation-delay: .9s; fill: #FCCF12; }
          .spinner_GIL4 { animation-delay: 1s; fill: #FCCF12; }
          .spinner_n0Yb { animation-delay: 1.1s; fill: #FCCF12; }
          
          @keyframes spinner_sM3D {
            0%, 50% {
              animation-timing-function: cubic-bezier(0, 1, 0, 1);
              r: 0;
            }
            10% {
              animation-timing-function: cubic-bezier(.53, 0, .61, .73);
              r: 2px;
            }
          }
        `}
          </style>
          <circle className="spinner_DupU" cx="12" cy="3" r="0" />
          <circle
            className="spinner_DupU spinner_GWtZ"
            cx="16.50"
            cy="4.21"
            r="0"
          />
          <circle
            className="spinner_DupU spinner_n0Yb"
            cx="7.50"
            cy="4.21"
            r="0"
          />
          <circle
            className="spinner_DupU spinner_dwN6"
            cx="19.79"
            cy="7.50"
            r="0"
          />
          <circle
            className="spinner_DupU spinner_GIL4"
            cx="4.21"
            cy="7.50"
            r="0"
          />
          <circle
            className="spinner_DupU spinner_46QP"
            cx="21.00"
            cy="12.00"
            r="0"
          />
          <circle
            className="spinner_DupU spinner_DQhX"
            cx="3.00"
            cy="12.00"
            r="0"
          />
          <circle
            className="spinner_DupU spinner_PD82"
            cx="19.79"
            cy="16.50"
            r="0"
          />
          <circle
            className="spinner_DupU spinner_tVmX"
            cx="4.21"
            cy="16.50"
            r="0"
          />
          <circle
            className="spinner_DupU spinner_eUgh"
            cx="16.50"
            cy="19.79"
            r="0"
          />
          <circle
            className="spinner_DupU spinner_j38H"
            cx="7.50"
            cy="19.79"
            r="0"
          />
          <circle className="spinner_DupU spinner_eUaP" cx="12" cy="21" r="0" />
        </svg>
      </div>
    </div>
  )
}

export default CommonLoader
