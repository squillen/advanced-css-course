import HotelHeader from './HotelHeader.js'
import HotelBody from './HotelBody.js'
import ImageCarousel from './ImageCarousel'
import { useHotelRatings } from './hooks/hooks.js'

export default function HotelPage({ user, hotel }) {
  const { images, _id } = hotel
  const hotelRatings = useHotelRatings(_id)
  return (
    <main className="hotel-view">
      <ImageCarousel images={images} />
      <HotelHeader hotel={hotel} hotelRatings={hotelRatings} />
      <HotelBody user={user} hotel={hotel} hotelRatings={hotelRatings} />
    </main>
  )
}