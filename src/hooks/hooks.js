import { useState, useEffect } from 'react'
import { hotels, users } from '../helpers/sampleData.js'

export function useHotelRatings(id) {
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

export function useUserReviews(arrayOfIDs) {
  // make request to DB to find users with matching IDs
  // users.find({ $in: arrayOfIDs })

  return users.filter(u =>  arrayOfIDs.includes(u._id))
}