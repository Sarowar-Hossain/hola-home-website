import { Star3 } from '@components/icons'
import { Text } from '@components/ui'
import Image from 'next/image'
import React from 'react'

const ReviewCard = ({ review, i }) => {
  return (
    <div className="max-w-3xl p-8 rounded-xl shadow-md" key={i}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src={review?.image}
            className="w-12 h-12 sm:w-20 sm:h-20"
            height={80}
            width={80}
            alt=""
          />
          <div>
            <Text className="leading-4 sm:text-xl font-semibold">
              {review?.name}
            </Text>
            <Text className="text-accent-5">{review?.date}</Text>
          </div>
        </div>
        <div className="bg-yellow-500 flex gap-2 items-center justify-center w-20 h-9 sm:w-24 sm:h-14 rounded-xl">
          <Star3 className="w-5 h-5 sm:w-8 sm:h-8" />
          <Text>5.0</Text>
        </div>
      </div>
      <Text className="sm:text-lg font-normal mt-3">{review?.details}</Text>
    </div>
  )
}

export default ReviewCard
