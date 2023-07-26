import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const SmallScreen = () => {

    const [showNav, setShowNav] = useState(null)
    const navigate = useNavigate();

    const handleActive = (e) => {
        const navUlChild = document.getElementById("navUlSmall").querySelectorAll("*");

        navUlChild.forEach((child, index) => {
            if (index !== 0) {
                child.classList.remove("active");
            }

            e.currentTarget.classList.add("active");
        })

        setShowNav(null);
    }

    const location = useLocation();
    const homeRef = useRef(null);
    const blogRef = useRef(null);
    const publishRef = useRef(null);
    const profileRef = useRef(null);

    useEffect(() => {
        const { pathname } = location;

        if (pathname === '/') {
            homeRef.current?.click();
        } else if (pathname === '/blogs') {
            blogRef.current?.click();
        } else if (pathname === '/publish') {
            publishRef.current?.click();
        } else if (pathname === 'profile') {
            profileRef.current?.click();
        }

    }, [location])

    return (
        <div className="lg:hidden text-white flex items-center justify-between h-20 w-full px-4">
            <p>Logo</p>
            {
                <div onClick={() => { setShowNav(prev => !prev) }} className='flex flex-col space-y-4'>
                    <motion.div animate={{ rotate: showNav ? "45deg" : "0" }} className='h-[2px] w-6 bg-white origin-top-left'></motion.div>
                    <motion.div animate={{ rotate: showNav ? "-45deg" : "0" }} className='h-[2px] w-6 bg-white origin-top-left'></motion.div>
                </div>
            }

            <motion.div
                animate={{
                    width: showNav ? "100%" : "0",
                }}
                className='h-full absolute top-[4rem] right-0 overflow-y-scroll scrollbar-hidden z-[1000] bg-[#121212]'
            >
                <ul id="navUlSmall" className='flex flex-col items-center w-full h-full my-20 space-y-4 p-4'>
                    
                    {
                        true &&
                        <>
                            <li
                                ref={homeRef}
                                onClick={handleActive}
                                className='bg-transparent z-10 active whitespace-normal py-2 px-8 cursor-pointer text-gray-500'
                            >
                                <Link to="/" className='h-full w-full'>
                                    Home
                                </Link>
                            </li>
                        </>
                    }
                </ul>
            </motion.div>
        </div>
    )
}

export default SmallScreen