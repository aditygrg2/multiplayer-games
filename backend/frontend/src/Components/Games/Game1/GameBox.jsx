import React from 'react'
import { useState } from 'react'
import GameRules from './GameRules';
import Label1 from './Label1';
import Label2 from './Label2';
import Game from './Game';
import { useCallback } from 'react';

const WithoutUser = () => {
    const [opponet, setOpponent] = useState(true);
    const [selectedGridValue, setSelectedGridValue] = useState(3);

    const handleSelectedValue = (e) => {
        setSelectedGridValue(Number(e.target.value));
    }

    // console.log(selectedGridValue)

    const handleFindOpponent = useCallback( () => {
        setOpponent(prev => !prev);
    }, []);

    return (
        <div className='h-full w-full flex flex-col'>
            {
                opponet ? (
                    <>
                        <Label1 buttonClick={handleFindOpponent} handleSelectedValue={handleSelectedValue}/>
                        <GameRules />
                    </>
                ) :
                    (
                        <>
                            <Label2 />
                            <Game grid = { selectedGridValue } />
                        </>

                    )
            }
        </div>
    )
}

export default WithoutUser