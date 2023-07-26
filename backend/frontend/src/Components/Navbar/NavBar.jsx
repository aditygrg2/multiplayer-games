import React from 'react'
import { useNavigate } from "react-router-dom";
import LargeScreen from './LargeScreen';
import SmallScreen from './SmallScreen'

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <div className='h-20 lg:h-full lg:w-24 w-full overflow-hidden'>
            <LargeScreen />
            <SmallScreen/>
        </div>
    )
}

export default NavBar


