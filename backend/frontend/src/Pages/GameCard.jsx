import React from 'react'
import { useState } from 'react'
import Game1 from '../assets/Game1.jpg'

const GameCard = () => {
    const [details, setShowDetails] = useState(false);

    return (
        <div style={{
            backgroundImage: `url(${Game1})`,
            backgroundSize: 'cover', // Set the background size as needed
            backgroundPosition: 'center', // Set the background position as needed
        }} className='w-full md:w-80 h-96 rounded-md cursor-pointer inline-block ml-2 overflow-hidden'>

            <div className='h-full w-full overflow-hidden hover:backdrop-blur-sm'>
                <div className='h-full w-full clip_path bg-white/20'>

                </div>
            </div>
        </div>
    )
}

export default GameCard