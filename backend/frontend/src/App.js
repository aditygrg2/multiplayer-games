import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WithoutUser from './Components/Games/Game1/WithoutUser'
import ValidPath from './Components/Games/Game1/ValidPath'
import Home from './Pages/Home'

const App = () => {
  return (
    <div className={`h-screen w-screen relative overflow-hidden flex flex-col bg-[#121212] text-white font-poppins`}>
      <Routes>
        <Route path='/' element ={ <Home/> } />
        <Route path='/game1' element={ <WithoutUser/> } />
        <Route path='/game1/play' element={ <ValidPath/> } />
      </Routes>
    </div>
  )
}

export default App
