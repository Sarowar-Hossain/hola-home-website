import {
  Cabin,
  CamperVan,
  Cross3,
  Flat,
  GuestHouse,
  Hotel,
  House,
  HouseBoat,
  Villa,
} from '@components/icons'
import { Text, useUI } from '@components/ui'
import Image from 'next/image'
import React, { useState } from 'react'

const FilterModal = () => {
  const { closeModal } = useUI()

  const types = [
    {
      logo: <House />,
      name: 'House',
    },
    {
      logo: <Flat />,
      name: 'Flat',
    },
    {
      logo: <Villa />,
      name: 'Villa',
    },
    {
      logo: <GuestHouse />,
      name: 'Guest House',
    },
    {
      logo: <CamperVan />,
      name: 'Campervan',
    },
    {
      logo: <Hotel />,
      name: 'Hotel',
    },
    {
      logo: <Cabin />,
      name: 'Cabin',
    },
    {
      logo: <HouseBoat />,
      name: 'House Boat',
    },
  ]
  const [selectedType, setSelectedType] = useState('')
  const [selectedMin, setSelectedMin] = useState(0)
  const [selectedMax, setSelectedMax] = useState(0)

  const handleTypeClick = (t) => {
    setSelectedType(t?.name)
  }

  return (
    <div className="max-h-[100vh] min-h-[70vh] md:max-h-[80vh] xl:min-w-[900px] xl:min-h-[600px] overflow-y-auto pb-5">
      {/* <input type="text" className="sr-only" /> */}
      <div className="flex justify-between px-5 py-3">
        <Text className="" variant="pageHeading">
          Filters
        </Text>
        <div
          onClick={() => closeModal()}
          className="bg-black hover:bg-black/80 active:bg-black transition-all duration-150 w-7 h-7 rounded-full text-white cursor-pointer flex justify-center items-center"
        >
          <Cross3 />
        </div>
      </div>
      <div className="w-full h-[1px] bg-accent-4 mt-1" />
      <div className="mt-5 px-5">
        <Text variant="sectionHeading">Price range</Text>
        <div className="flex items-center max-w-xl gap-3 md:gap-5 xl:gap-8">
          <div className="border-2 border-[#FCCF12] px-3 rounded-lg md:w-full relative">
            <legend className="pt-1 text-[12px]">Minimum</legend>
            <input
              type="text"
              className="outline-none pb-[2px] w-full ps-[9px] text-lg bg-transparent"
              defaultValue={0}
            />
            <span className="absolute left-[11px] text-lg">$</span>
          </div>
          <div className="h-[2px] bg-black w-10 sm:w-20" />
          <div className="border-2 border-[#FCCF12] px-3 rounded-lg md:w-full relative">
            <legend className="pt-1 text-[12px]">Maximum</legend>
            <input
              type="text"
              className="outline-none pb-[2px] w-full ps-[9px] text-lg bg-transparent"
              defaultValue={500}
            />
            <span className="absolute left-[11px] text-lg">$</span>
          </div>
        </div>
        <div className="mt-5">
          <Text variant="sectionHeading">Property type</Text>
          <div className="flex flex-wrap gap-4">
            {types?.map((t, i) => (
              <div
                onClick={() => handleTypeClick(t)}
                key={i}
                className={`w-[100px] h-[100px] hover:bg-[#FFF8DB] flex flex-col justify-center items-center border-2 hover:border-[#FCCF12] rounded-md transition-all duration-150 cursor-pointer ${
                  selectedType === t?.name
                    ? 'bg-[#FFF8DB] border-[#FCCF12]'
                    : 'bg-[#F7F8FA] border-accent-2'
                }`}
              >
                <div className="">{t?.logo}</div>
                <Text className="text-[14px]">{t?.name}</Text>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-col md:flex-row gap-5 justify-between max-w-4xl">
          <div>
            <Text variant="sectionHeading">Minimum Bedrooms</Text>
            <div className="flex gap-4">
              {Array.from({ length: 7 }).map((_, i) => {
                return (
                  <div
                    onClick={() => setSelectedMin(i)}
                    key={i}
                    className={`w-8 h-8 border-2 flex items-center justify-center rounded-lg cursor-pointer hover:border-[#FCCF12] hover:bg-[#FFF8DB] transition-all duration-150 ${
                      selectedMin === i
                        ? 'bg-[#FFF8DB] border-[#FCCF12]'
                        : 'border-[#484C52]'
                    }`}
                  >
                    {i + 1}
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <Text variant="sectionHeading">Maximum Bedrooms</Text>
            <div className="flex gap-4">
              {Array.from({ length: 7 }).map((_, i) => {
                return (
                  <div
                    onClick={() => setSelectedMax(i)}
                    key={i}
                    className={`w-8 h-8 border-2 flex items-center justify-center rounded-lg cursor-pointer hover:border-[#FCCF12] hover:bg-[#FFF8DB] transition-all duration-150 ${
                      selectedMax === i
                        ? 'bg-[#FFF8DB] border-[#FCCF12]'
                        : 'border-[#484C52]'
                    }`}
                  >
                    {i + 1}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="mt-5 max-w-[200px]">
          <Text variant="sectionHeading">Stay Type</Text>
          <div className="flex items-center justify-between">
            <Text>Overnight</Text>
            <input type="checkbox" />
          </div>
          <div className="flex items-center justify-between">
            <Text>Hourly (Day Use)</Text>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterModal
