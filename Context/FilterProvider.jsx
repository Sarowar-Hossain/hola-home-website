import React, { createContext, useState } from 'react'

export const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const [selectedPropertyType, setSelectedPropertyType] = useState(null)
  const [amenitiesSelected, setAmenitiesSelected] = useState([])
  const [selectedBedRooms, setSelectedBedRooms] = useState(1)
  const [selectedBathRooms, setSelectedBathRooms] = useState(1)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(500)
  const [stayType, setStayType] = useState('overnight')
  const [minRating, setMinRating] = useState(4)
  const info = {
    selectedPropertyType,
    setSelectedPropertyType,
    amenitiesSelected,
    setAmenitiesSelected,
    selectedBedRooms,
    setSelectedBedRooms,
    selectedBathRooms,
    setSelectedBathRooms,
    maxPrice,
    setMaxPrice,
    minPrice,
    setMinPrice,
    stayType,
    setStayType,
    minRating,
    setMinRating,
  }
  return (
    <FilterContext.Provider value={info}>{children}</FilterContext.Provider>
  )
}

export default FilterProvider
