import React, { useState, useEffect } from 'react'

import Dots from '../Dots'
import { Slides, Slide } from './styles'

export default function Slideshow({ children, duration = 6.5 }) {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % children.length)

  const jumpTo = index => setCurrent(index)

  useEffect(() => {
    const intervalId = setInterval(next, duration * 1000)
    return () => clearInterval(intervalId)
  })

  return (
    <Slides>
      {children.map((child, index) => (
        <Slide active={index === current} key={index} duration={duration}>
          {child}
        </Slide>
      ))}
      <Dots {...{ current, length: children.length, onClick: jumpTo }} />
    </Slides>
  )
}
