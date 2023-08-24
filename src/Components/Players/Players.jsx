/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllPlayers from '../AllPlayers/AllPlayers';

const Players = () => {
    const players=useLoaderData();
    console.log(players);
    return (
        <div className='m-20'>
            <p>All Players</p>
            <div className='grid grid-cols-3'>
                {
                   players.map(player=><AllPlayers key={player.id} player={player}></AllPlayers>)
                }
            </div>
        </div>
    );
};

export default Players;