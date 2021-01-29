export default function makeSVG({ className = "side-nav__icon", ref }) {
  return (
    <svg className={className}>
      <use xlinkHref={`img/sprite.svg#${ref}`} />
    </svg>
  )
}