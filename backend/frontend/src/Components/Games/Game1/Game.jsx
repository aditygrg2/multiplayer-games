import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Squares from './Squares';
import axios from 'axios'

const Game = ({grid}) => {
  const [gridArray, setGridArray] = useState([[1,1,3],[3,2,2],[1,1,4]]);

  const [count, setCount] = useState(0);

  const handleChangeGridArray = (row, col) => {
    setCount(prev => ++prev);

    var prevArray = [...gridArray];
    let value = prevArray[row][col];

    if( (value + 1 ) % 4 === 0){
      prevArray[row][col] = value + 1;
    }else{
      prevArray[row][col] = (value + 1) % 4;
    }

    setGridArray(prevArray);
  }

  return (
    <div id='game' className='h-full w-full overflow-x-hidden overflow-y-scroll'>

      <div className={`w-full md:w-96 m-auto aspect-square grid 

      ${
        grid == 3 && 'grid-cols-3'
      }
      ${
        grid == 4 && 'grid-cols-4'
      }
      ${
        grid == 5 && 'grid-cols-5'
      }
      ${
        grid == 6 && 'grid-cols-6'
      }
      ${
        grid == 7 && 'grid-cols-7'
      }
      ${
        grid == 8 && 'grid-cols-8'
      }

      border relative`}>
        {
          gridArray.map((row, indr) => {
            return row.map((col, indc) =>{
              return <Squares key={`sqr${indr}${indc}`} alignmentValue={col} row={indr} col={indc} onClick = {handleChangeGridArray} />
            })
          })
        }
      </div>
      <div className='flex items-center justify-center w-full space-x-6'>
        <p>Count {count}</p>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Game
