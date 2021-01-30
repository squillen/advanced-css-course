import { useEffect, useState } from 'react'
import makeSVG from './helpers/makeSVG.js'

export default function HotelHeader({ hotel, hotelRatings }) {
  const [stars, setStars] = useState(null)
  const { name, location } = hotel
  const { rating = 0, reviews = [] } = hotelRatings

  useEffect(() => {
    const noOfStars = Math.floor(rating / 2)
    const newStars = []
    for (let i = 0; i < noOfStars; i++) {
      newStars.push(makeSVG({ key: `icon-star-${i}`, className: 'overview__icon-star', ref: 'icon-star-outlined' }))
    }
    setStars(newStars)
  }, [rating])

  return (
    <div className="overview">
      <h1 className="overview__heading">{name}</h1>
      <div className="overview__stars">{stars}</div>
      <div className="overview__location">
        {makeSVG({ className: 'overview__icon-location', ref: 'icon-location-pin' })}
        <button className="btn-inline">{location}</button>
      </div>
      {
        rating && (
          <div className="overview__rating">
            <div className="overview__rating-average">{rating}</div>
            <div className="overview__rating-count">{reviews.length} votes</div>
          </div>
        )
      }
    </div>
  )
}