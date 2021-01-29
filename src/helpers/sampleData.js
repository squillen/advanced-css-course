const links = [
  { ref: "icon-home", text: 'Hotel' },
  { ref: "icon-aircraft-take-off", text: 'Flight' },
  { ref: "icon-key", text: 'Car Rental' },
  { ref: "icon-map", text: 'Tour' },
]

const sampleHotel = {
  _id: '1234',
  images: [
    { src: "hotel-1", alt: "Nice hotel" },
    { src: "hotel-2", alt: "Really nice hotel" },
    { src: "hotel-3", alt: "Even nicer hotel" },
  ],
  location: 'Austin, TX',
  name: 'Super Sweet Hotel Name',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa in delectus eveniet sunt minus harum obcaecati. Illo vero ab ex quia unde perspiciatis aperiam quod aliquid numquam modi, similique vitae!',
  amenities: ['close to beach', 'close to mountains', 'close to city', 'close to buffets', 'HBO included', 'Pet friendly', 'Rentable dogs'],
}

const hotels = {
  '1234': {
    rating: 9.3,
    reviews: [
      { user: 'Tom', rating: 8.4, review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab vero non delectus perspiciatis ipsum!' },
      { user: 'Dick', rating: 9.4, review: 'Lorem ipsum dolor sit amet.' },
      { user: 'Harry', rating: 9.8, review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fuga vel corporis iure ratione distinctio maxime eum eligendi minus voluptatem amet, fugiat quos ex. Voluptatum commodi, explicabo alias molestias in aspernatur quia et vel, possimus inventore aliquam, blanditiis non. Aliquid.' },
    ]
  },
  '5678': {
    rating: 8.5,
    reviews: [
      { user: 'Tom', rating: 8.4, review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab vero non delectus perspiciatis ipsum!' },
      { user: 'Dick', rating: 8.4, review: 'Lorem ipsum dolor sit amet.' },
      { user: 'Harry', rating: 8.7, review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fuga vel corporis iure ratione distinctio maxime eum eligendi minus voluptatem amet, fugiat quos ex. Voluptatum commodi, explicabo alias molestias in aspernatur quia et vel, possimus inventore aliquam, blanditiis non. Aliquid.' },
    ]
  },
}

module.exports = { hotels, links, sampleHotel }