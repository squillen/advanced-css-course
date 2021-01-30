import { useUserReviews } from './hooks/hooks.js'

export default function HotelBody({ user, hotel: { amenities }, hotelRatings }) {
  console.log('user :>> ', user);
  const { reviews = [] } = hotelRatings
  const userIDs = reviews.map(r => r.userID)
  const usersWhoReviewed = useUserReviews(userIDs)
  console.log('usersWhoReviewed :>> ', usersWhoReviewed);
  const friendsWhoReviewed = usersWhoReviewed.filter(f => user.friends.includes(f._id))
  console.log('friendsWhoReviewed :>> ', friendsWhoReviewed);
  return (
    <div className="detail">
      <div className="description">
        {reviews.map(r => (
          <p key={r._id} className="paragraph">{r.description}</p>
        ))}
        <ul className="list">
          {amenities.map(a => (
            <li className="list__item" key={a}>{a}</li>
          ))}
        </ul>
        <div className="recommend">
          <p className="recommend__count">
            {``}
          </p>
        </div>
      </div>
      <div className="user-reviews">testtt</div>
    </div>
  )
}