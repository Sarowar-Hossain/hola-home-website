import BigFilterIcon from '@components/icons/BigFilterIcon'
import { Button } from '@components/ui'
import { GlobalContext } from 'Context/Context'
import { BookingFIlterData } from 'data/BookingFilterData'
import React, { useContext, useEffect, useRef } from 'react'

const UserBookingFilter = () => {
  const dropdownRef = useRef(null)
  const { isFilterShow, setIsFilterShow } = useContext(GlobalContext)

  const handleFiltering = () => {
    setIsFilterShow(!isFilterShow)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFilterShow(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setIsFilterShow])

  return (
    <div
      ref={dropdownRef}
      className="w-[250px] bg-white shadow-lg border rounded-md flex flex-col items-center pt-6 space-y-6"
    >
      <div className="flex justify-between items-center w-[80%]">
        <p className="font-medium text-2xl">FIlter</p>
        <div className="bg-white p-2 rounded-xl shadow-md">
          <BigFilterIcon />
        </div>
      </div>
      <div className="flex flex-col w-full ">
        {BookingFIlterData.map((item, index) => (
          <span className="bigcheck font-medium cursor-pointer hover:bg-[#FFF8DB] ps-10 py-2">
            <label className="bigcheck flex gap-1.5 items-center cursor-pointer">
              <input
                type="checkbox"
                className="bigcheck"
                name="cheese"
                value="yes"
              />
              <span className="bigcheck-target"></span>
              {item.name}
            </label>
          </span>
        ))}
      </div>
      <div className="bg-[#FFF8DB] w-full py-2 flex justify-center items-center">
        <div className="flex justify-between items-center w-[80%]">
          <button
            onClick={() => setIsFilterShow(false)}
            className="w-[90px] border-2 hover:border-yellow-500 rounded-md py-1"
          >
            Clear all
          </button>
          <button
            onClick={handleFiltering}
            className="w-[90px] bg-yellow-400 hover:bg-yellow-500 rounded-md py-1"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserBookingFilter
