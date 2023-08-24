/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const AllPlayers = ({player}) => {
    
    // eslint-disable-next-line react/prop-types
    const {id,name,image,position, price,country}=player;
    return (
        <div className=' m-20 relative'>
            <img src={image} alt="" className='h-48 w-60 rounded-md' />
             <p>{name}</p>
             <p>{position}</p>
             <p className='font-bold mb-14'>{price}</p>
             <div className=' absolute bottom-2 bg-blue-500 w-full text-center text-2xl font-bold rounded-md'>
                <Link to={`/players/${id}`}>Details</Link>
             </div>
        </div>
    );
};

export default AllPlayers;