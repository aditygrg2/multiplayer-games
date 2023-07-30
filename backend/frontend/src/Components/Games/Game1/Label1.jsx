import React from 'react'
import { useState } from 'react'

const Label1 = ({buttonClick, handleSelectedValue}) => {
    const gridValue = [3, 4, 5, 6, 7, 8]

    return (
        <div className='flex items-center justify-center space-x-8 h-20 w-full bg-overlay rounded-md'>
            <div className='flex space-x-2 items-center border  border-[rgb(211,250,80)] py-2 px-8 rounded-md'>
                <p>Change Level</p>
                <select onChange={ (e) => { handleSelectedValue(e.target.value) } } className='bg-transparent text-white outline-none'>
                    {
                        gridValue.map((value, index) => {
                            if(index == 0){
                                return <option defaultValue={value}> {value} </option>
                            }

                            return (  
                                <option value={value}>{value}</option>
                            )
                        })
                    }
                </select>
            </div>
            <button onClick={buttonClick} className='py-2 px-6 bg-[rgb(211,250,80)] rounded-md text-black/80 font-dyna font-bold text-xl tracking-wider'>
                Find Opponent
            </button>
        </div>
    )
}

export default Label1
