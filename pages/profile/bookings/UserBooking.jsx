import MyBooking from '@components/UserBooking/MyBooking'
import UserBookingCard from '@components/UserBooking/UserBookingCard'
import UserBookingFilter from '@components/UserBooking/UserBookingFilter'
import { DownArrow, Filter } from '@components/icons'
import { Text } from '@components/ui'
import { GlobalContext } from 'Context/Context'
import { UserBookingData } from 'data/UserBookingData'
import React, { useContext } from 'react'

const UserBooking = () => {
  const { isFilterShow, setIsFilterShow } = useContext(GlobalContext)

  const bookingChildrenAsProps = UserBookingData.map((item, index) => (
    <UserBookingCard key={index} item={item} />
  ))
  const propertyChildrenAsProps = []

  return (
    <div className="container mx-auto my-10 space-y-8 text-[#484C52] px-4">
      <div className="flex justify-between items-center relative">
        <Text className="text-3xl font-semibold">Bookings</Text>
        <div
          onClick={() => setIsFilterShow(!isFilterShow)}
          className="flex justify-center items-center gap-2 text-sm border border-[#DDD] hover:border-[#b8b8b8] active:border-[#DDD] px-4 py-1 rounded-lg cursor-pointer"
        >
          <Filter />
          <Text>Filters</Text>
          <DownArrow />
        </div>
        <div className="absolute top-10 right-0">
          {isFilterShow && <UserBookingFilter />}
        </div>
      </div>
      <MyBooking
        bookingChildrenAsProps={bookingChildrenAsProps}
        propertyChildrenAsProps={propertyChildrenAsProps}
      />
    </div>
  )
}

export default UserBooking
