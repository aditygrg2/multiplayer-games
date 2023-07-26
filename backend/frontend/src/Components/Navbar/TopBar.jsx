import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoMdAdd } from 'react-icons/io'
import { BsCurrencyRupee } from 'react-icons/bs'


const TopBar = () => {
    return (
        <div className='h-20 w-full hidden lg:flex items-center justify-between text-white px-8'>
            <p className='text-white'>Logo</p>

            <div className='flex items-center'>
                <div className='h-10 aspect-square rounded-full bg-[rgb(211,250,80)] flex items-center justify-center'>
                    <CgProfile className='text-gray-400 text-4xl'/>
                </div>

                <button className='flex text-black h-12 space-x-6 rounded-full px-4 items-center justify-between'>

                    <div className='flex flex-col items-start justify-start'>
                        <span className='text-[0.6rem] text-gray-500'>Balance</span>
                        <p className='flex text-[0.8rem] items-center text-white text-sm'>
                            {
                                14000
                            }
                            <BsCurrencyRupee />
                        </p>
                    </div>

                    <span className='h-4 bg-gray-300 aspect-square'>
                        <IoMdAdd className='text-black m-auto '/>
                    </span>
                </button>
            </div>

        </div>
    )
}

export default TopBar