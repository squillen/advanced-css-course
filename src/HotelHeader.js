import { useEffect, useState } from 'react'
import makeSVG from './helpers/makeSVG.js'

export default function HotelHeader({
  hotel: { name, location },
  hotelRatings: { rating, reviews = [] },
}) {
  const [stars, setStars] = useState(null)

  useEffect(() => {
    const noOfStars = Math.floor(rating / 2)
    const newStars = []
    for (let i = 0; i < noOfStars; i++) {
      newStars.push(makeSVG({ className: 'overview__icon-star', ref: 'icon-star-outlined' }))
    }
    setStars(newStars)
  }, [rating])
  return (
    <div className="overview">
      <h1 className="overview__heading">{name}</h1>
      <div className="overview__stars">
        {stars}
      </div>
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