/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';

const PlayerDetails = () => {
    const playerId= useParams();
    console.log(playerId.id);
    return (
        <div>
            
        </div>
    );
};

export default PlayerDetails;