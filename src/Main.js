import HotelPage from './HotelPage'
import Nav from './Nav'
import { sampleHotel } from './helpers/sampleData.js'

export default function Main({ user }) {
  return (
    <div className="content">
      <Nav />
      <HotelPage user={user} hotel={sampleHotel} />
    </div>       
  )
}