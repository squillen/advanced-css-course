export default function makeSVG({ key, className = "side-nav__icon", ref }) {
  return (
    <svg key={key} className={className}>
      <use xlinkHref={`img/sprite.svg#${ref}`} />
    </svg>
  )
}