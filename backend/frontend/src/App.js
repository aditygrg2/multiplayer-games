import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WithoutUser from './Components/Games/Game1/GameBox'
import ValidPath from './Components/Games/Game1/Game'
import Home from './Pages/Home'
import TopBar from './Components/Navbar/TopBar'
import NavBar from './Components/Navbar/NavBar'

const App = () => {
  return (
    <div className={`h-full w-full relative overflow-hidden bg-[#121212] text-white font-poppins`}>
      <TopBar />

      <div className='h-full w-full flex flex-col lg:flex-row'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game1' element={<WithoutUser />} />
          <Route path='/game1/play' element={<ValidPath />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
