import React, { useState } from 'react'

export const Header = (): JSX.Element => {
  const [hovered, setHovered] = useState(false)

  const handleHover = (): void => setHovered(true)

  const handleUnHover = (): void => setHovered(false)

  return (
    <header>
      <link
        href="/"
        title="Flights"
        className={`logo ${hovered ? 'hovered' : ''}`}
        onMouseMove={handleHover}
        onMouseLeave={handleUnHover}
      ></link>
    </header>
  )
}
