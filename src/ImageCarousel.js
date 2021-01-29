export default function ImageCarousel({ images }) {
  return (
    <div className="gallery">
      {images.map(({ src, alt }) => (
        <figure key={alt} className="gallery__item">
          <img className="gallery__photo" src={`img/${src}.jpg`} alt={alt} />
        </figure>
      ))}
    </div>
  )
}