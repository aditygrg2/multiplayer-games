import React from 'react'

const WithoutUser = () => {
    return (
        <div className='h-full w-full flex items-center justify-center'>
            <div className='flex items-center justify-center space-x-8'>
                <select className='text-black py-2 px-8'>
                    <option defaultValue={"Select Grid"}>Select Grid</option>
                    <option value={'3'}>3</option>
                    <option value={'4'}>4</option>
                    <option value={'5'}>5</option>
                </select>

                <button className='bg-white text-black py-2 px-6'>
                    Find User
                </button>
            </div>
        </div>
    )
}

export default WithoutUser