import ImageCarousel from './ImageCarousel'
import HotelHeader from './HotelHeader'
import useHotelRatings from './hooks/useHotelRatings.js'

export default function HotelInfo({ hotel }) {
  const { images, _id } = hotel
  const hotelRatings = useHotelRatings(_id)
  return (
    <main className="hotel-view">
      <ImageCarousel images={images} />
      <HotelHeader hotel={hotel} hotelRatings={hotelRatings} />
    </main>
  )
}