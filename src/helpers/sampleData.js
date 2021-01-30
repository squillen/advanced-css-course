export const users = [
  {
    _id: '12344441234',
    name: 'Sean',
    bio: 'Really cool guy.',
    session: 'asdfadff1234123asdf4',
    img: 'user-1',
    friends: ['123', '3456', '123456', '765', '1256', '7777'],
  },
  {
    _id: '123456',
    name: 'Tom',
    bio: 'Really cool guy.',
    session: 'fffffasdfasd',
    img: 'user-2',
    friends: ['123', '3456', '765', '1256', '7777'],
  },
  {
    _id: '1234',
    name: 'Dick',
    bio: 'Really cool guy.',
    session: 'asdfaasdf',
    img: 'user-3',
    friends: ['123', '3456', '765', '1256', '7777'],
  },
  {
    _id: '1256',
    name: 'Harry',
    bio: 'Really cool guy.',
    session: 'asdffffa',
    img: 'user-4',
    friends: ['123', '3456', '765', '7777'],
  },
  {
    _id: '3456',
    name: 'Jude',
    bio: 'Really cool guy.',
    session: '12341234',
    img: 'user-5',
    friends: ['123', '765', '12344441234', '7777'],
  },
  {
    _id: '13456',
    name: 'Law',
    bio: 'Really cool guy.',
    session: 'asdf',
    img: 'user-6',
    friends: ['123', '3456', '12344441234', '7777'],
  },
  {
    _id: '777',
    name: 'Judd',
    bio: 'Really cool guy.',
    session: 'asdffffffasdf',
    img: 'user-3',
    friends: ['123', '3456', '12344441234', '7777'],
  },

]

export const hotels = {
  '1234': {
    rating: 9.3,
    reviews: [
      { _id: '123', userID: '123456', rating: 8.4, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab vero non delectus perspiciatis ipsum!' },
      { _id: '12', userID: '1234', rating: 9.4, description: 'Lorem ipsum dolor sit amet.' },
      { _id: '124', userID: '1256', rating: 9.8, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fuga vel corporis iure ratione distinctio maxime eum eligendi minus voluptatem amet, fugiat quos ex. Voluptatum commodi, explicabo alias molestias in aspernatur quia et vel, possimus inventore aliquam, blanditiis non. Aliquid.' },
    ]
  },
  '5678': {
    rating: 8.5,
    reviews: [
      { _id: '1', userID: '3456', rating: 8.4, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab vero non delectus perspiciatis ipsum!' },
      { _id: '13', userID: '13456', rating: 8.4, description: 'Lorem ipsum dolor sit amet.' },
      { _id: '14', userID: '123456', rating: 8.7, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam fuga vel corporis iure ratione distinctio maxime eum eligendi minus voluptatem amet, fugiat quos ex. Voluptatum commodi, explicabo alias molestias in aspernatur quia et vel, possimus inventore aliquam, blanditiis non. Aliquid.' },
    ]
  },
}

export const links = [
  { ref: "icon-home", text: 'Hotel' },
  { ref: "icon-aircraft-take-off", text: 'Flight' },
  { ref: "icon-key", text: 'Car Rental' },
  { ref: "icon-map", text: 'Tour' },
]

export const sampleHotel = {
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