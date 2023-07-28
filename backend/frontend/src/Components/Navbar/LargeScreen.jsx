import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LiaHomeSolid } from 'react-icons/lia'
import { AiFillPlayCircle, AiOutlineTransaction } from 'react-icons/ai'
import { GrTransaction } from 'react-icons/gr'
import { BiSolidUser } from 'react-icons/bi'
import { PiSignIn } from 'react-icons/pi'

import { motion } from 'framer-motion'

const LargeScreen = () => {
    const navigate = useNavigate();

    const handleActive = (e) => {
        const navUlChild = document.getElementById("largeNavLi").querySelectorAll("*");

        navUlChild.forEach((child, index) => {
            if (index !== 0) {
                child.classList.remove("active");
            }

            e.currentTarget.classList.add("active");
        })
    }

    const navList = [
        {
            icon: <LiaHomeSolid className='text-2xl' />,
            list_name: 'Home',
        },
        {
            icon: <AiFillPlayCircle className='text-2xl' />,
            list_name: 'Play',
        },
        {
            icon: <AiOutlineTransaction className='text-2xl' />,
            list_name: 'Transactions',
        },
        {
            icon: <BiSolidUser className='text-2xl' />,
            list_name: 'Profile',
        },
    ];

    const [top, setTop] = useState(20);
    const handleMouseOver = (e) => {
        const navUlChild = document.getElementById("largeNavLi").getBoundingClientRect();
        const topDiff = e.currentTarget.getBoundingClientRect().top - navUlChild.top;
        setTop(topDiff - 14);
    }

    const handleMouseOut = (e) => {

    }

    const springConfig = {
        type: 'spring',
        stiffness: 500,
        damping: 30,
    };

    return (
        <nav className='h-full w-24 lg:flex flex-col pb-4 justify-between hidden'>
            <ul className='flex flex-col h-full w-full space-y-8 relative' id='largeNavLi'>
                <motion.div
                    initial={top}
                    animate={{
                        top: top,
                    }}
                    transition={springConfig}
                    className='h-20 w-[4px] bg-[rgb(211,250,80)] absolute right-0 blur-left rounded-full'>
                </motion.div>
                {
                    navList.map((list, ind) => {
                        return (
                            <li onClick={handleActive} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={`flex flex-col items-center text-gray-600 justify-center ${ind === 0 ? 'active' : ""}`}>
                                <button onClick={() => {
                                    {
                                        list.list_name === "Home" &&  navigate('/') ||
                                        list.list_name === "Play" && navigate('/gamelist') || 
                                        list.list_name === "Transactions" && navigate('/transaction')
                                    }
                                }} className={`flex flex-col items-center justify-center space-y-2`}>
                                    {
                                        list.icon
                                    }
                                    <p className='text-xs'>
                                        {
                                            list.list_name
                                        }
                                    </p>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={() => {navigate('/login')}} className='flex flex-col items-center justify-center space-y-1'>
                <PiSignIn className='text-xs text-gray-400'/>
                <p className='text-xs'>Sign In</p>
            </button>
        </nav>
    )
}

export default LargeScreen