import React from 'react'
import { useState } from 'react'
import Game1 from '../../assets/Game1.jpg'
import { motion } from 'framer-motion'
import { BiCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import {AiFillPlayCircle} from 'react-icons/ai'


const GameCard = () => {
    const [details, setShowDetails] = useState(false);

    const navigate = useNavigate();

    return (
        <div style={{
            backgroundImage: `url(${Game1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} className='w-full md:w-80 h-96 rounded-md cursor-pointer inline-block ml-2 overflow-hidden'>
            <div onMouseEnter={() => { setShowDetails(prev => !prev) }} onMouseLeave={() => { setShowDetails(prev => !prev) }} className='h-full w-full overflow-hidden relative'>
                <motion.div
                initial={{
                    clipPath : 'circle(0% at 50% 100%)'
                }}
                animate={{
                    clipPath : details === true ? 'circle(80% at 50% 100%)' : 'circle(0% at 50% 100%)'
                }}
                className={`w-full h-56 bottom-0 flex flex-col items-center justify-end absolute overflow-hidden bg-black/70`}>
                    <p className='text-2xl font-dyna font-bold mb-4 tracking-widest'>Game Name</p>
                    <p className='text-sm text-gray-200 whitespace-normal text-center mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fuga iusto obcaecati ad.</p>
                    <button onClick={() => {
                        navigate('/game1')
                    }} className='bg-[rgb(211,250,80)] py-2 px-6 rounded-full text-black/80 mb-4 tracking-wider text-xl font-bold transition-all hover:scale-110 hover:-translate-y-2 flex items-center space-x-1'>
                        <AiFillPlayCircle className='text-2xl text-black/60'/>
                        <h1 className='text-xl'>Play</h1>
                    </button>
                </motion.div>
            </div>

        </div>
    )
}

export default GameCard