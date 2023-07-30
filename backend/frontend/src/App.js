import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import WithoutUser from './Components/Games/Game1/GameBox'
import Home from '../src/Pages/Home'
import TopBar from './Components/Navbar/TopBar'
import NavBar from './Components/Navbar/NavBar'
import Register from './Pages/Register'

const App = () => {
  const [user, setUser] = useState(false);
  const location = useLocation();

  const path = location.pathname;

  return (
    <div className={`h-screen w-screen flex flex-col relative overflow-hidden bg-[#121212] text-white`}>
      { !(path == '/register') && <TopBar />}
      <div className='overflow-hidden flex flex-col lg:flex-row h-full w-full'>
      { !(path == '/register') && <NavBar />}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/game1' element={<WithoutUser />} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
