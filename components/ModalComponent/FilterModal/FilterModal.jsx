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
import { Button, Text, useUI } from '@components/ui'
import { GlobalContext } from 'Context/Context'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'

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

const FilterModal = () => {
  const { closeModal } = useUI()
  const [selectedType, setSelectedType] = useState('')
  const [amenitiesSelected, setAmenitiesSelected] = useState([])
  const [selectedMin, setSelectedMin] = useState(0)
  const [selectedMax, setSelectedMax] = useState(0)
  const [limit, setLimit] = useState(8)
  const { setUiLoader } = useContext(GlobalContext)

  const handleTypeClick = (t) => {
    setSelectedType(t?.name)
  }

  const handleAmenitiesClick = (name) => {
    const isAlreadySelected = amenitiesSelected.includes(name)
    if (isAlreadySelected) {
      setAmenitiesSelected(amenitiesSelected.filter((type) => type !== name))
    } else {
      setAmenitiesSelected([...amenitiesSelected, name])
    }
  }

  const handleClearAll = () => {
    setSelectedType('')
    setAmenitiesSelected([])
    setSelectedMin(0)
    setSelectedMax(0)
    const inputFields = document.querySelectorAll('input[type="text"]')
    inputFields.forEach((input) => {
      input.value = ''
    })
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false
    })
  }

  const handleShowProperties = () => {
    if (
      selectedType ||
      amenitiesSelected.length > 0 ||
      selectedMin > 0 ||
      selectedMax > 0
    ) {
      setUiLoader(true)

      // Set uiLoader to false after 3 seconds
      setTimeout(() => {
        setUiLoader(false)
        closeModal()
      }, 3000)
    } else {
      toast.error('Please select at least one value')
      setUiLoader(false)
    }
  }

  return (
    <div className="max-h-[95vh] min-h-[70vh] md:max-h-[80vh] xl:min-w-[900px] xl:min-h-[580px] overflow-y-auto scroll-hidden">
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
      <div className="flex justify-between bg-[#FFFAE7] py-3 px-3 sm:hidden">
        <Button onClick={handleClearAll} variant="text">
          Clear all
        </Button>
        <Button onClick={handleShowProperties}>Show Properties</Button>
      </div>
      <div className="mt-5 px-5 pb-10 sm:pb-20 md:pb-24">
        <Text variant="sectionHeading">Price range</Text>
        <div className="flex items-center max-w-xl gap-3 md:gap-5 xl:gap-8">
          <div className="border-2 border-[#FCCF12] px-3 rounded-lg md:w-full relative">
            <legend className="pt-1 text-[12px]">Minimum</legend>
            <input
              type="number"
              className="outline-none pb-[2px] w-full ps-[10px] text-lg bg-transparent"
              defaultValue={0}
            />
            <span className="absolute left-[11px] text-lg">$</span>
          </div>
          <div className="h-[2px] bg-black w-10 sm:w-20" />
          <div className="border-2 border-[#FCCF12] px-3 rounded-lg md:w-full relative">
            <legend className="pt-1 text-[12px]">Maximum</legend>
            <input
              type="number"
              className="outline-none pb-[2px] w-full ps-[10px] text-lg bg-transparent"
              defaultValue={500}
            />
            <span className="absolute left-[11px] text-lg">$</span>
          </div>
        </div>
        <div className="mt-5">
          <Text variant="sectionHeading">Property type</Text>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
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
        <div className="mt-6 flex flex-col md:flex-row gap-5 justify-between max-w-4xl">
          <div>
            <Text variant="sectionHeading">Minimum Bedrooms</Text>
            <div className="flex gap-2 sm:gap-4 mt-3">
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
            <Text variant="sectionHeading">Minimum Bathrooms</Text>
            <div className="flex gap-2 sm:gap-4 mt-3">
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
        <div className="mt-6 max-w-[250px]">
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
          <div className="flex items-center justify-between max-w-[990px]">
            <Text variant="sectionHeading">Amenities</Text>
            <div>
              {limit === 8 ? (
                <>
                  <span
                    onClick={() => setLimit(amenities?.length)}
                    className="font-semibold cursor-pointer text-[#FCCF12] hover:text-yellow-500 underline"
                  >
                    Show more
                  </span>
                </>
              ) : (
                <>
                  <span
                    onClick={() => setLimit(8)}
                    className="font-semibold cursor-pointer text-[#FCCF12] hover:text-yellow-500 underline"
                  >
                    Show less
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3">
            {amenities?.slice(0, limit)?.map((t, i) => (
              <div
                onClick={() => handleAmenitiesClick(t?.name)}
                key={i}
                className={`w-[110px] h-[100px] hover:bg-[#FFF8DB] flex flex-col justify-center items-center gap-1 border-2 hover:border-[#FCCF12] rounded-md transition-all duration-150 cursor-pointer $${
                  amenitiesSelected.includes(t?.name)
                    ? 'bg-[#FFF8DB] border-[#FCCF12]'
                    : 'bg-[#F7F8FA] border-accent-2'
                }`}
              >
                <div className="">{t?.logo}</div>
                <Text className="text-[14px] leading-4 text-center px-[2px]">
                  {t?.name}
                </Text>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 max-w-[250px]">
          <Text variant="sectionHeading">Property Reviews</Text>
          <div className="flex items-center justify-between">
            <Text>4+ stars</Text>
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
            <Text>Rated highly for cleanness</Text>
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
            <Text>Rated highly for location</Text>
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
      </div>
      <div className="sm:flex justify-between mt-5 bg-[#FFFAE7] absolute bottom-0 left-0 right-0 py-3 sm:px-5 hidden">
        <Button onClick={handleClearAll} variant="text">
          Clear all
        </Button>
        <Button onClick={handleShowProperties}>Show Properties</Button>
      </div>
    </div>
  )
}

export default FilterModal
