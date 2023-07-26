import React from 'react'
import { BsFire } from 'react-icons/bs'
import NavBar from '../Components/Navbar/NavBar'
import GameCard from './GameCard'

const Home = () => {
  return (
    <div className='h-full w-full px-1 lg:px-4 overflow-scroll pb-24 scrollbar-hidden'>
      <div className={`conic_effect h-96 w-full rounded-lg overflow-hidden relative`}>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} className='h-full w-full z-100'>


        </div>
      </div>
      <div className='w-full flex flex-col py-4'>
        <span className='h-12 aspect-square flex justify-start space-x-2'>
          <BsFire className='text-yellow-300 text-2xl'/>
          <p className='text-xl font-dyna'>Online Games</p>
        </span>
        <div className='overflow-x-scroll overflow-y-hidden w-full whitespace-nowrap scrollbar-hidden'>
            <GameCard/>
            <GameCard/>
            <GameCard/>
            <GameCard/>
            <GameCard/>
        </div>
      </div>
    </div>
  )
}

export default Home

