import React, { useState } from 'react'
import { links } from './helpers/sampleData.js'

export default function Nav() {
  const [activeLink, setActiveLink] = useState(links[0].ref)

  function createListItem({ref, text}) {
    const className = activeLink === text ? 'side-nav__item side-nav__item--active' : 'side-nav__item'
    return (
      <li key={ref} onClick={() => setActiveLink(text)} className={className}>
        <a href="#" className="side-nav__link">
          <svg className="side-nav__icon">
            <use xlinkHref={`img/sprite.svg#${ref}`} />
          </svg>
          <span>{text}</span>
        </a>
      </li>
    )
  }

  return (
    <div className="content">
      <nav className="sidebar">
        <ul className="side-nav">
          {links.map(createListItem)}
        </ul>
        <div className="legal">
          &copy; 2021 SRQus, All rights reserved.
        </div>
      </nav>
    </div>       
  )
}