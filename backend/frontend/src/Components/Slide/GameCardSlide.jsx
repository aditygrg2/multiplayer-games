import React from 'react'
import { useEffect, useRef } from 'react'
import GameSlideCards from '../Cards/GameSlideCards'

const GameCardSlide = ({ pos }) => {
  const ref = useRef();

  useEffect(() => {
    const scrollSuggestedBox = setInterval(() => {
      const scrollSpeed = 0.5;
      const container = ref?.current;

      if (container && (pos % 2 === 1)) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth - container.offsetWidth) {
          container.scrollLeft = 0;
        }
      }

      if (container && (pos % 2 === 0)) {
        container.scrollLeft -= scrollSpeed;
        if (container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth - container.offsetWidth;
        }
      }

    }, 40);

    return () => clearInterval(scrollSuggestedBox);
  }, [])

  return (
    <div ref={ref} className='bg-overlay text-white h-full w-full overflow-y-hidden overflow-x-scroll scrollbar-hidden whitespace-nowrap'>
      <GameSlideCards />
      <GameSlideCards />
      <GameSlideCards />
    </div>
  )
}

export default GameCardSlide