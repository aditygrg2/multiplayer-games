import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WithoutUser from './Components/Games/Game1/GameBox'
import ValidPath from './Components/Games/Game1/Game'
import Home from '../src/Pages/Home'
import TopBar from './Components/Navbar/TopBar'
import NavBar from './Components/Navbar/NavBar'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

const App = () => {
  return (
    <div className={`h-screen w-screen flex flex-col relative overflow-hidden bg-[#121212] text-white font-poppins`}>
      <TopBar />
      <div className='overflow-hidden flex flex-col lg:flex-row h-full w-full'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/game1' element={<WithoutUser />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
