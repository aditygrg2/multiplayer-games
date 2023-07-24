import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

import { motion } from 'framer-motion'

const LargeScreen = () => {
    const navigate = useNavigate();

    const [hoverLeft, setHoverLeft] = useState(null);
    const [width, setWidth] = useState(null);

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
        } else if (pathname === '/profile') {
            publishRef.current?.click();
        }

    }, [location])


    const handleMouseOver = (e) => {
        const navUl = document.getElementById("largeNavLi");

        const netLeft = e.currentTarget.getBoundingClientRect().left - navUl.getBoundingClientRect().left;
        setHoverLeft(netLeft);
        setWidth(e.currentTarget.offsetWidth);
    }

    const handleMouseOut = (e) => {
        setHoverLeft(null);
        setWidth(null);
    }

    const handleActive = (e) => {
        const navUlChild = document.getElementById("largeNavLi").querySelectorAll("*");

        navUlChild.forEach((child, index) => {
            if (index !== 0) {
                child.classList.remove("active");
            }

            e.currentTarget.classList.add("active");
        })
    }

    const [page, setPage] = useState(false);

    return (
        <>
            { true && <nav className='hidden md:flex items-center justify-around h-full text-sm'>

                <ul id="largeNavLi" className='h-10 flex flex-row items-center relative'>
                    <motion.div
                        animate={{
                            left: hoverLeft ? hoverLeft : "0",
                            width: width ,
                            opacity: width ? "1" : "0",
                        }}
                        className={`absolute bg-white/5 h-full rounded-md z-0`}
                    ></motion.div>
                    <li ref={homeRef}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={handleActive}
                        className='bg-transparent z-10 active whitespace-normal py-2 px-8 cursor-pointer text-gray-500'
                    >
                        <button className='h-full w-full'>
                            Home
                        </button>
                    </li>
                    <li
                        ref={blogRef}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={handleActive}
                        className='bg-transparent z-10 whitespace-normal py-2 px-8 cursor-pointer text-gray-500'
                    >
                        <button className='h-full w-full'>
                            Play
                        </button>
                    </li>
                    <li
                        ref={publishRef}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={handleActive}
                        className='bg-transparent z-10 whitespace-normal py-2 px-8 cursor-pointer text-gray-500'
                    >
                        <button className='h-full w-full'>
                            Create
                        </button>
                    </li>
                </ul>

            </nav>}
        </>
    )
}

export default LargeScreen