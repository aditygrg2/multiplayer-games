import React from 'react'
import { useState, useRef } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { BsEyeFill, BsEyeSlash } from 'react-icons/bs';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const passRef = useRef(null);

    const [passVisible, setPassVisible] = useState(false);

    return (
        <form className='h-full w-full flex flex-col items-center justify-center space-y-4'>
            <a className='bg-white p-2 text-black rounded-md flex items-center justify-center space-x-2 py-2 text-xl'>
                <FcGoogle />
            </a>
            <div className='w-full h-10 flex items-center justify-around space-x-4'>
                <div className='h-[1px] w-full bg-gray-500'></div>
                <div className=''>Or</div>
                <div className='h-[1px] w-full bg-gray-500'></div>
            </div>

            <div className='w-full p-2 border-[1px] border-gray-500 rounded-md h-10 flex items-center'>
                <input onChange={(e) => { setUsername(e.target.value) }} value={username} type="text" name="" id="" className='outline-none bg-transparent text-xs placeholder:text-xs h-full w-full' placeholder='Enter Username' />
            </div>

            <div className='w-full p-2 border-[1px] border-gray-500 rounded-md h-10 flex items-center relative'>
                <input ref={passRef} onChange={(e) => { setPass(e.target.value) }} value={pass} type="password" name="" id="" className='outline-none bg-transparent text-xs  placeholder:text-xs h-full w-full' placeholder='Enter Password' />

                {
                    passVisible ?
                        <BsEyeFill className='text-xl' onClick={() => {
                            setPassVisible(prev => !prev);
                            passRef.current.type = "password";
                        }} /> :
                        <BsEyeSlash className='text-xl' onClick={() => {
                            setPassVisible(prev => !prev);
                            passRef.current.type = "text";
                        }} />
                }
            </div>

            <input type="submit" value="Get Started" className='w-full bg-[rgb(211,250,80)] rounded-md text-sm cursor-pointer  text-black py-2 px-6 flex items-center justify-center tracking-wider' />
        </form>
    )
}

export default Signup
