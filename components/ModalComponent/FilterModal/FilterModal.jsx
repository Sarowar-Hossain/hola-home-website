import {
  ActivityArea,
  AirConditioner,
  BeachAccess,
  Cabin,
  CamperVan,
  CarbonMonoxideAlarm,
  Cross3,
  DedicatedWorkplace,
  FireExtinguisher,
  FirePit,
  FirstAidKit,
  Flat,
  GuestHouse,
  Gym,
  HotTub,
  Hotel,
  House,
  HouseBoat,
  IndoorFireplace,
  Kitchen,
  Parking,
  Patio,
  Pool,
  PoolTable,
  SmokeDetector,
  TV,
  Villa,
  WashingMachine,
  Wifi,
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
  const amenities = [
    {
      logo: <Wifi />,
      name: 'WIFI',
    },
    {
      logo: <TV />,
      name: 'TV',
    },
    {
      logo: <Kitchen />,
      name: 'Kitchen',
    },
    {
      logo: <WashingMachine />,
      name: 'Washing Machine',
    },
    {
      logo: <Parking />,
      name: 'Parking',
    },
    {
      logo: <AirConditioner />,
      name: 'Air Conditioner',
    },
    {
      logo: <DedicatedWorkplace />,
      name: 'Dedicated Workplace',
    },
    {
      logo: <Pool />,
      name: 'Pool',
    },
    {
      logo: <HotTub />,
      name: 'Hot Tub',
    },
    {
      logo: <Patio />,
      name: '',
    },
    {
      logo: <Patio />,
      name: 'Patio',
    },
    {
      logo: <FirePit />,
      name: 'Fire Pit',
    },
    {
      logo: <PoolTable />,
      name: 'Pool Table',
    },
    {
      logo: <IndoorFireplace />,
      name: 'Indoor Fireplace',
    },
    {
      logo: <Gym />,
      name: 'Gym',
    },
    {
      logo: <BeachAccess />,
      name: 'Beach access',
    },
    {
      logo: <ActivityArea />,
      name: 'Activity Area',
    },
    {
      logo: <FirstAidKit />,
      name: 'First Aid Kit',
    },
    {
      logo: <FireExtinguisher />,
      name: 'Fire Extinguisher',
    },
    {
      logo: <CarbonMonoxideAlarm />,
      name: 'Carbon monoxide alarm',
    },
    {
      logo: <SmokeDetector />,
      name: 'Smoke Detector',
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
                className={`w-[110px] h-[100px] hover:bg-[#FFF8DB] flex flex-col justify-center items-center border-2 hover:border-[#FCCF12] rounded-md transition-all duration-150 cursor-pointer ${
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
            <div className="flex gap-2 sm:gap-4">
              {Array.from({ length: 7 }).map((_, i) => {
                return (
                  <div
                    onClick={() => setSelectedMin(i)}
                    key={i}
                    className={`w-7 h-7 sm:w-8 sm:h-8 border-2 flex items-center justify-center rounded-lg cursor-pointer hover:border-[#FCCF12] hover:bg-[#FFF8DB] transition-all duration-150 ${
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
            <div className="flex gap-2 sm:gap-4">
              {Array.from({ length: 7 }).map((_, i) => {
                return (
                  <div
                    onClick={() => setSelectedMax(i)}
                    key={i}
                    className={`w-7 h-7 sm:w-8 sm:h-8 border-2 flex items-center justify-center rounded-lg cursor-pointer hover:border-[#FCCF12] hover:bg-[#FFF8DB] transition-all duration-150 ${
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
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark mt-[20%]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <Text>Hourly (Day Use)</Text>
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark mt-[20%]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </span>
            </label>
          </div>
        </div>
        <div className="mt-6 max-w-5xl">
          <Text variant="sectionHeading">Amenities</Text>
          <div className="flex flex-wrap gap-4">
            {amenities?.map((t, i) => (
              <div
                onClick={() => handleTypeClick(t)}
                key={i}
                className={`w-[110px] h-[100px] hover:bg-[#FFF8DB] flex flex-col justify-center items-center gap-1 border-2 hover:border-[#FCCF12] rounded-md transition-all duration-150 cursor-pointer ${
                  selectedType === t?.name
                    ? 'bg-[#FFF8DB] border-[#FCCF12]'
                    : 'bg-[#F7F8FA] border-accent-2'
                }`}
              >
                <div className="">{t?.logo}</div>
                <Text className="text-[14px] leading-4 text-center px-[2px]">{t?.name}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterModal
