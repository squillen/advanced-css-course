import { useState, useEffect } from 'react'
import { hotels } from '../helpers/sampleData.js'

export default function useHotelRatings(id) {
  const [hotelRatings, setHotelRatings] = useState({})

  useEffect(() => {
    // make call to DB for latest hotel ratings
    let hotel = {}
    try {
      hotel = hotels[id]
    } catch (e) {
      console.error(e);
    }
    setHotelRatings(hotel)
  }, [id])
  return hotelRatings
}