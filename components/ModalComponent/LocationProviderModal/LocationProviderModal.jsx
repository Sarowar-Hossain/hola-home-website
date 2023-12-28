import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Button, useUI } from '@components/ui'
import toast from 'react-hot-toast'

const LocationProviderModal = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [coords, setCoords] = useState({ lat: null, lon: null }) // State for coordinates
  const [mapInstance, setMapInstance] = useState(null)
  const mapRef = useRef(null)
  const markerRef = useRef(null)
  const { setModalView, closeModal } = useUI()

  useEffect(() => {
    if (typeof window !== 'undefined' && !mapInstance) {
      const initialCoords = [51.505, -0.09]
      const map = L.map(mapRef.current).setView(initialCoords, 13)
      setMapInstance(map)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map)

      const marker = L.marker(initialCoords, { draggable: true }).addTo(map)
      markerRef.current = marker
      marker.on('dragend', onLocationChange)

      map.on('click', function (e) {
        marker.setLatLng(e.latlng)
        onLocationChange(e)
      })
    }
  }, [mapInstance])

  const onLocationChange = async (e) => {
    const latlng = e.latlng || markerRef.current.getLatLng()
    setCoords({ lat: latlng.lat, lon: latlng.lng }) // Update coordinates

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latlng.lat}&lon=${latlng.lng}`
      )
      setLocation(response.data.display_name)
    } catch (error) {
      console.error('Error during reverse geocoding:', error)
    }
  }

  const handleLocationInputChange = async (e) => {
    const value = e.target.value
    setLocation(value)
    if (value.length > 3) {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
        )
        setSuggestions(response.data)
      } catch (error) {
        console.error('Error during forward geocoding:', error)
      }
    } else {
      setSuggestions([])
    }
  }

  const handleSuggestionClick = async (suggestion) => {
    setLocation(suggestion.display_name)
    setSuggestions([])
    const newCoords = {
      lat: parseFloat(suggestion.lat),
      lon: parseFloat(suggestion.lon),
    }
    setCoords(newCoords) // Update coordinates

    if (mapInstance && markerRef.current) {
      mapInstance.setView(newCoords, 13)
      markerRef.current.setLatLng(newCoords)
    }
  }

  const handleSubmit = async () => {
    if (location === '') {
      toast.error('Please provide your location')
    } else {
      try {
        setLoading(true)
        const userId = localStorage.getItem('userId')
        const response = await axios.post(
          baseUrl + '/manageUsersApis/update-provided-location',
          {
            id: userId,
            location,
            coords,
          }
        )
        toast.success('Thanks, Your location added successfully!')
        setLoading(false)
        closeModal()
      } catch (error) {
        setLoading(false)
        console.error(error)
        toast.error('Failed to submit your location')
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div>
      <p className="text-2xl mb-5">Let us know where you are located</p>
      <div className="flex flex-col items-center justify-center md:min-w-[600px] mx-auto relative z-[1]">
        <input
          type="text"
          value={location}
          onChange={handleLocationInputChange}
          placeholder="Select a location or type here"
          className="w-full px-3 py-2 my-2 border border-gray-300 rounded-full shadow-sm bg-white absolute left-0 right-0 top-0 z-[5555] max-w-md mx-auto outline-none mt-5"
        />
        {suggestions.length > 0 && (
          <div className="absolute top-full mt-2 max-w-sm mx-auto bg-white border border-gray-300 rounded shadow-lg z-[5556]">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.display_name}
              </div>
            ))}
          </div>
        )}
        <div ref={mapRef} className="w-full h-96" />
      </div>
      <div className="text-center">
        <Button loading={loading} onClick={handleSubmit} className="mt-5">
          Submit
        </Button>
      </div>
    </div>
  )
}

export default LocationProviderModal
