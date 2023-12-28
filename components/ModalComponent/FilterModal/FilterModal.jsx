import { Cross3 } from '@components/icons'
import { Button, Text, useUI } from '@components/ui'
import { GlobalContext } from 'Context/Context'
import axios from 'axios'
import { amenities, types } from 'data/FilterData'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import useSWR from 'swr'

const FilterModal = () => {
  const { closeModal } = useUI()
  const [selectedPropertyType, setSelectedPropertyType] = useState(null)
  const [amenitiesSelected, setAmenitiesSelected] = useState([])
  const [selectedBedRooms, setSelectedBedRooms] = useState(0)
  const [selectedBathRooms, setSelectedBathRooms] = useState(0)
  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 500,
  })
  const [stayType, setStayType] = useState(null)
  const [limit, setLimit] = useState(8)
  const {
    setUiLoader,
    setFilterQuery,
    setIsThereIsAnyFilterQuery,
    queryURL,
    setQueryURL,
  } = useContext(GlobalContext)

  const handleTypeClick = (t) => {
    setSelectedPropertyType(t?.name)
  }

  const handleAmenitiesClick = (name) => {
    const isAlreadySelected = amenitiesSelected.includes(name)
    if (isAlreadySelected) {
      setAmenitiesSelected(amenitiesSelected.filter((type) => type !== name))
    } else {
      setAmenitiesSelected([...amenitiesSelected, name])
    }
  }

  const handleStayType = (value) => {
    setStayType(value)
  }

  const handleClearAll = () => {
    setSelectedPropertyType('')
    setAmenitiesSelected([])
    setSelectedBedRooms(0)
    setSelectedBathRooms(0)
    const inputFields = document.querySelectorAll('input[type="text"]')
    inputFields.forEach((input) => {
      input.value = ''
    })
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false
    })
    setQueryURL()
    closeModal()
  }

  const handleShowProperties = async () => {
    if (
      selectedPropertyType ||
      amenitiesSelected.length > 0 ||
      selectedBedRooms > 0 ||
      selectedBathRooms > 0 ||
      price?.maxPrice > 0 ||
      stayType
    ) {
      setFilterQuery({
        minPrice: price.minPrice,
        maxPrice: price.maxPrice,
        propertyType: selectedPropertyType,
        minBedrooms: selectedBedRooms,
        minBathRooms: selectedBathRooms,
        stayHourly: stayType,
      })

      const queryParams = []
      if (selectedPropertyType) {
        queryParams.push(
          `propertyType=${encodeURIComponent(selectedPropertyType)}`
        )
      }
      if (amenitiesSelected.length > 0) {
        const amenitiesQueryParam = amenitiesSelected.map(
          (amenity) => `amenities=${encodeURIComponent(amenity)}`
        )
        queryParams.push(...amenitiesQueryParam)
      }
      if (selectedBedRooms > 0) {
        queryParams.push(`minBedrooms=${selectedBedRooms}`)
      }
      if (selectedBathRooms > 0) {
        queryParams.push(`minBathRooms=${selectedBathRooms}`)
      }
      if (price.minPrice !== 0 || price.maxPrice !== 500) {
        queryParams.push(
          `minPrice=${price.minPrice}&maxPrice=${price.maxPrice}`
        )
      }
      if (stayType) {
        queryParams.push(`stayHourly=${stayType}`)
      }
      const queryURL = queryParams.length > 0 ? `&${queryParams.join('&')}` : '';
      setQueryURL(queryURL)
      setIsThereIsAnyFilterQuery(true)
      setUiLoader(false)
      closeModal()
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
              onInput={(e) =>
                setPrice({ ...price, minPrice: parseInt(e.target.value) })
              }
              className="outline-none pb-[2px] w-full ps-[10px] text-lg bg-transparent"
              defaultValue={price?.minPrice}
            />
            <span className="absolute left-[11px] text-lg">$</span>
          </div>
          <div className="h-[2px] bg-black w-10 sm:w-20" />
          <div className="border-2 border-[#FCCF12] px-3 rounded-lg md:w-full relative">
            <legend className="pt-1 text-[12px]">Maximum</legend>
            <input
              type="number"
              onInput={(e) =>
                setPrice({ ...price, maxPrice: parseInt(e.target.value) })
              }
              className="outline-none pb-[2px] w-full ps-[10px] text-lg bg-transparent"
              defaultValue={price?.maxPrice}
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
                  selectedPropertyType === t?.name
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
                    onClick={() => setSelectedBedRooms(i)}
                    key={i}
                    className={`w-7 h-7 sm:w-8 sm:h-8 border-2 flex items-center justify-center rounded-lg cursor-pointer hover:border-[#FCCF12] hover:bg-[#FFF8DB] transition-all duration-150 ${
                      selectedBedRooms === i
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
                    onClick={() => setSelectedBathRooms(i)}
                    key={i}
                    className={`w-7 h-7 sm:w-8 sm:h-8 border-2 flex items-center justify-center rounded-lg cursor-pointer hover:border-[#FCCF12] hover:bg-[#FFF8DB] transition-all duration-150 ${
                      selectedBathRooms === i
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
              <input type="checkbox" onClick={() => handleStayType(true)} />
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
