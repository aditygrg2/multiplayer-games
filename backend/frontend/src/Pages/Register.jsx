import axios from 'axios';
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { BsEyeFill, BsEyeSlash } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import GameCardSlide from '../Components/Slide/GameCardSlide';
import { RxCross2 } from 'react-icons/rx';
import Login from './Login';
import Signup from './Signup';

const Register = () => {
    const loginref = useRef();
    const signupref = useRef();

    const [sliderPos, setSliderPos] = useState(false);
    const handleSlider = (e) => {
        if(e.currentTarget.classList.contains('active-black')) return;

        setSliderPos(prev => !prev);

        const sliderbar = document.getElementById('slider-bar').querySelectorAll('*');
        sliderbar.forEach((item) => {
            item.classList.remove('active-black');
        })

        if(e.target.id === "signup"){
            console.log(e.target.id);

            const loginbox = document.getElementById('loginbox');
            const signupbox = document.getElementById('signupbox');

            signupbox.classList.remove('translate-x-full');
            loginbox.classList.add('-translate-x-full');

        }else{

            const loginbox = document.getElementById('loginbox');
            const signupbox = document.getElementById('signupbox');

            loginbox.classList.remove('-translate-x-full');
            signupbox.classList.add('translate-x-full');
        }

        e.currentTarget.classList.add('active-black');
    }

    return (
        <div className='h-full w-full flex flex-col items-center justify-center lg:flex-row p-2'>
            <motion.div
                initial={{
                    scale: 0.6
                }}
                animate={{
                    scale: 1,
                }}
                className='h-full w-full flex items-center justify-center lg:h-[70%] lg:w-[55%] rounded-lg relative'>

                <div className='flex flex-col h-full w-full items-center justify-center space-y-8 p-4 login-form relative'>

                    <div className='h-12 w-full flex items-center justify-center'>

                        <div id='slider-bar' className='h-full w-72 flex items-center py-4 rounded-full relative border border-[rgb(211,250,80)]'>

                            <motion.div
                                initial={{
                                    left: 0,
                                }}
                                animate={{
                                    left: sliderPos == true ? '50%' : 0,
                                }}

                                transition={{
                                    type: 'spring',
                                    stiffness: 500,
                                    damping: '30'
                                }}

                                className='absolute bg-[rgb(211,250,80)] h-full w-[50%] rounded-full z-0'></motion.div>

                            <button onClick={handleSlider} id="login" className='h-full w-full tracking-wider bg-transparent flex items-center justify-center z-10 text-white active-black '>Login</button>
                            <button onClick={handleSlider} id="signup" className='h-full w-full tracking-wider bg-transparent flex items-center justify-center z-10 text-white'>Sign Up</button>

                        </div>

                    </div>

                    <div className='h-full w-full whitespace-nowrap overflow-x-scroll overflow-y-hidden scrollbar-hidden relative'>
                        <motion.div id="loginbox" className='absolute h-full w-full inline-block transition-all p-2 bg-black/10 rounded-lg'>
                            <Login />
                        </motion.div>

                        <motion.div id="signupbox" className='absolute h-full w-full inline-block translate-x-full p-2 transition-all bg-black/10 rounded-lg'>
                            <Signup />
                        </motion.div>
                    </div>
                </div>

                <div className='bg-overlay relative hidden lg:flex h-full w-[90%] overflow-hidden flex-col gap-2'>
                    <GameCardSlide pos={1} />
                    <GameCardSlide pos={2} />
                    <GameCardSlide pos={3} />
                </div>
            </motion.div>
        </div>
    )
}

export default Register