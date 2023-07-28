import React from 'react'
import { useState } from 'react'
import Label1 from './Label1';
import Label2 from './Label2';
import Game from './Game';
import { useCallback } from 'react';
import RuleCards from '../../Cards/RuleCards';

const WithoutUser = () => {
    const [opponet, setOpponent] = useState(true);
    const [selectedGridValue, setSelectedGridValue] = useState(3);

    const handleSelectedValue = (e) => {
        setSelectedGridValue(Number(e.target.value));
    }

    const handleFindOpponent = () => {
        setOpponent(prev => !prev);
    }

    return (
        <div className='h-full w-full px-4 overflow-y-scroll overflow-x-hidden scrollbar-hidden'>
            {
                opponet ? (
                    <div className='h-full w-full space-y-8'>

                        <div className={`conic_effect2 h-20 lg:h-32 w-full rounded-lg relative`}>
                            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} className='h-full w-full z-100 text-4xl lg:text-6xl flex items-center justify-center'>
                                <h1 className='text-shadow font-dyna tracking-widest text-clip'>Game Name</h1>
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center space-y-4'>
                            <div className='h-full w-full whitespace-nowrap overflow-x-scroll text-center scrollbar-hidden'>
                                <RuleCards index={1}/>
                                <RuleCards index={2}/>
                                <RuleCards index={3}/>
                            </div>
                            <Label1 buttonClick={handleFindOpponent} handleSelectedValue={handleSelectedValue} />
                        </div>
                    </div>
                ) :
                    (
                        <>
                            <Label2 />
                            <Game grid={selectedGridValue} />
                        </>

                    )
            }
        </div>
    )
}

export default WithoutUser