import Card from '@components/common/Card/Card'
import { allProperty } from 'data/AllProperty'
import React from 'react'

const Properties = () => {
  return (
    <div className="flex flex-col items-center justify-center my-6">
      <div className="mt-10 grid grid-cols-1 gap-5 px-2 pb-10 md:grid-cols-2 lg:mt-0 lg:grid-cols-3 lg:py-10 xl:grid-cols-4 ">
        {allProperty.map((property, index) => (
          <Card property={property} key={index + 1} />
        ))}
      </div>
      <button className="hover:bg-primary px-6 py-2 rounded-full font-bold hover:text-accent-7 bg-white border-2 border-primary text-[#FCCF12]">
        Show More
      </button>
    </div>
  )
}

export default Properties
