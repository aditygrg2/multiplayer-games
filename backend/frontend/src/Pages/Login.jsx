import axios from 'axios';
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { BsEyeFill, BsEyeSlash } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const passRef = useRef(null);
    const [err, setErr] = useState(null);

    const [passVisible, setPassVisible] = useState(false);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     blgctx.setLoading(prev => !prev);
    //     try {
    //         const result = await axios.post(`${ServerUrl}/login`, {
    //             username: username,
    //             password: pass,
    //         }, {
    //             withCredentials: true,
    //             credentials: 'include'
    //         })

    //         console.log(result);

    //         if (result.data.authStatus) {
    //             console.log("inside result")
    //             blgctx.fetchAuthInfo();
    //             blgctx.setLoading(prev => !prev);
    //             navigate('/');
    //             return;
    //         }else{
    //             setErr(true);
    //         }
    //     } catch (error) {

    //         if (error.response) {
    //             // The request was made and the server responded with a non-2xx status code
    //             const { data } = error.response;

    //             console.log("Error msg" , data);
    //           } else {
    //             // Error occurred while making the request
    //             console.log(error);
    //         }
            
    //         console.log(error);
    //     }
    //     blgctx.setLoading(prev => !prev);
    // }


    return (
        <div className='h-full w-full flex items-center justify-center p-2 lg:pb-0 pb-20'>

            <div className='flex flex-col lg:flex-row lg:h-[60vh] lg:w-[60%] space-y-4 w-full h-full'>

                <div className='flex items-center justify-center h-full w-full'>
                    <p className='text-3xl text-center'>
                        Get Started with NITJ BLOGGERS
                    </p>
                </div>


                <div className='flex flex-col lg:items-center lg:justify-center h-full w-full space-y-4 lg:p-2'>
                    <a className='bg-white p-2 text-black rounded-md flex items-center justify-center space-x-2 py-2 text-xl'>
                        <FcGoogle /><span>Login with Google</span>
                    </a>

                    <div className='w-full h-10 flex items-center justify-around space-x-4'>
                        <div className='h-[1px] w-full bg-gray-500'></div>
                        <div className=''>Or</div>
                        <div className='h-[1px] w-full bg-gray-500'></div>
                    </div>

                    <form className='h-full w-full flex flex-col lg:items-center space-y-3'>
                        <div className='w-full p-2 border-[1px] border-gray-500 rounded-md h-14 flex items-center'>
                            <input onChange={(e) => { setUsername(e.target.value) }} value={username} type="text" name="" id="" className='outline-none bg-transparent text-sm h-full w-full' placeholder='Enter Username' />
                        </div>
                        {
                            err && <small className='text-xs'>Username or password is incorrect</small>
                        }

                        <div className='w-full p-2 border-[1px] border-gray-500 rounded-md h-14 flex items-center'>
                            <input ref={passRef} onChange={(e) => { setPass(e.target.value) }} value={pass} type="password" name="" id="" className='outline-none bg-transparent text-sm h-full w-full' placeholder='Enter Password' />
                            {
                                passVisible ?  
                                <BsEyeFill className='text-xl' onClick={() => {
                                    setPassVisible(prev => !prev);
                                    passRef.current.type = "password";
                                }}/> :
                                <BsEyeSlash className='text-xl' onClick={() => {
                                    setPassVisible(prev => !prev);
                                    passRef.current.type = "text";
                                }}/>
                            }
                        </div>
                        <input type="submit" value="Log In" className='bg-indigo-500 text-white py-2 rounded-md text-xl w-full cursor-pointer' />
                    </form>
                    <button onClick={() => {navigate('/signup')}}>New here ? </button>
                </div>
            </div>
        </div>
    )
}

export default Login