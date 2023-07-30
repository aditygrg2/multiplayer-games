import React from 'react'
import { useState,useReducer } from 'react'
import Label1 from './Label1';
import Label2 from './Label2';
import Game from './Game';
import { useCallback } from 'react';
import RuleCards from '../../Cards/RuleCards';
import GameEngine from '../../../sockets/index';

const ActionTypes = {
    SET_OPPONENT: 'SET_OPPONENT',
    SET_SELECTED_GRID_VALUE: 'SET_SELECTED_GRID_VALUE',
    SET_SOCKET_STATUS: 'SET_SOCKET_STATUS',
    SET_JOIN_MESSAGE_STATUS: 'SET_JOIN_MESSAGE_STATUS',
};

const reducer = (state, action) => {
    switch (action.type) {
      case ActionTypes.SET_OPPONENT:
        return { ...state, opponent: action.payload };
      case ActionTypes.SET_SELECTED_GRID_VALUE:
        return { ...state, selectedGridValue: action.payload };
      case ActionTypes.SET_SOCKET_STATUS:
        return { ...state, socketStatus: action.payload };
      case ActionTypes.SET_JOIN_MESSAGE_STATUS:
        return { ...state, joinMessageStatus: action.payload };
      default:
        return state;
    }
};

const initialState = {
    opponent: true,
    selectedGridValue: 3,
    socketStatus: false,
    joinMessageStatus: false,
};

const WithoutUser = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { opponent, selectedGridValue, socketStatus, joinMessageStatus } = state;

    const handleSelectedValue = (value) => {
        dispatch({ type: ActionTypes.SET_SELECTED_GRID_VALUE, payload: value });
    }

    const toggleOpponent = () => {
        dispatch({ type: ActionTypes.SET_OPPONENT, payload: !opponent });
    };

    const toggleSocketStatus = () => {
        dispatch({ type: ActionTypes.SET_SOCKET_STATUS, payload: !socketStatus });
    };

    const toggleJoinMessageStatus = () => {
        dispatch({ type: ActionTypes.SET_JOIN_MESSAGE_STATUS, payload: !joinMessageStatus });
    };


    const handleFindOpponent = () => {
        let gameEngine = new GameEngine("Aditya", "uber6707@gmail.com");

        toggleJoinMessageStatus();

        gameEngine.io.on('GAME_JOIN_SUCCESSFUL', (data, gameName) => {
            toggleSocketStatus();
            
        })
        
        toggleOpponent();
    };

    return (
        <div className='h-full w-full px-4 overflow-y-scroll overflow-x-hidden scrollbar-hidden'>
            {
                opponent ? (
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
                            <Label1 buttonClick={handleFindOpponent}  handleSelectedValue={handleSelectedValue} />
                            {joinMessageStatus ? "Looking for player..." : ""}
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