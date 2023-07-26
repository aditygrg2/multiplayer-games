import React from 'react'
import {AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineLeft} from 'react-icons/ai'

const Squares = ({alignmentValue, row, col, onClick}) => {
  return (
    <div onClick={ () => {
        onClick(row, col);
    }} className='border h-full w-full flex items-center justify-center'>
        {
            (alignmentValue === 1 && <AiOutlineArrowRight className='text-3xl'/>) || 
            (alignmentValue === 2 && <AiOutlineArrowDown className='text-3xl'/>) || 
            (alignmentValue === 3 && <AiOutlineArrowLeft className='text-3xl'/>) ||
            (alignmentValue === 4 && <AiOutlineArrowUp className='text-3xl'/>)
        }
    </div>
  )
}

export default Squares