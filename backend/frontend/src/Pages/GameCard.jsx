import React from 'react'
import Game1 from '../assets/Game1.jpg'

const GameCard = () => {
  return (
    <div style={{
        backgroundImage: `url(${Game1})`,
        backgroundSize: 'cover', // Set the background size as needed
        backgroundPosition: 'center', // Set the background position as needed
      }} className='w-full md:w-80 h-96 rounded-md cursor-pointer hover:bg-[position:200px_100px]'>
        
    </div>
  )
}

export default GameCard