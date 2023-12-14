import { DarkStar } from '@components/icons'
import { Button, Text } from '@components/ui'
import DatePicker from 'react-datepicker'
import React from 'react'

const BookingPrompt = ({
  startDate,
  endDate,
  selectedAdults,
  selectedChildren,
  selectedStayType,
  handleBookNow,
  isDateAvailableDates,
  setStartDate,
  setEndDate,
  setSelectedChildren,
}) => {
  return (
    <div className="max-w-[486px] mx-auto rounded-xl px-3 py-10 shadow-md h-[100%] flex flex-col gap-5">
      <div className="flex justify-between">
        <Text className="text-xl text-[#484C52] font-semibold">
          $208 <span className="font-normal text-base">night</span>
        </Text>
        <Text className="flex items-center gap-1">
          <DarkStar /> 4.85 · 20 reviews
        </Text>
      </div>
      <div className="flex border rounded-md py-2">
        <div className="border-r pl-2">
          <Text className="font-medium text-accent-6 leading-5 -mb-1">
            CHECK IN
          </Text>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
          />
        </div>
        <div className="pl-2">
          <Text className="font-medium text-accent-6 leading-5 -mb-1">
            CHECK OUT
          </Text>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
      </div>
      <div className="flex border rounded-md py-2">
        <div className="border-r pl-2 w-full">
          <Text className="font-medium text-accent-6 leading-5 -mb-[2px]">
            ADULTS
          </Text>
          <select
            className="bg-accent-0 outline-none w-full"
            name=""
            id=""
            value={selectedAdults}
            onChange={(e) => setSelectedAdults(parseInt(e.target.value, 10))}
          >
            <option defaultChecked value="0">
              0
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="pl-2 w-full">
          <Text className="font-medium text-accent-6 leading-5 -mb-[2px]">
            CHILDREN
          </Text>
          <select
            className="bg-accent-0 outline-none w-full"
            name=""
            id=""
            value={selectedChildren}
            onChange={(e) => setSelectedChildren(parseInt(e.target.value, 10))}
          >
            <option defaultChecked value="0">
              0
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="w-full border rounded-md px-2 py-1">
        <Text>STAY TYPE</Text>
        <select
          className="outline-none bg-accent-0 w-full"
          name=""
          id=""
          value={selectedStayType}
          onChange={(e) => setSelectedStayType(e.target.value)}
        >
          <option value="2 hours">2 hours</option>
          <option value="3 hours">3 hours</option>
          <option value="6 hours">6 hours</option>
          <option value="9 hours">9 hours</option>
          <option value="night Stay">night Stay</option>
        </select>
      </div>
      <Button
        className="w-full text-[#484C52]"
        variant=""
        onClick={handleBookNow}
      >
        Book Now
      </Button>
      {isDateAvailableDates && (
        <p className="text-[#5FC85DE5] text-center">
          Available for these dates.
        </p>
      )}
    </div>
  )
}

export default BookingPrompt
