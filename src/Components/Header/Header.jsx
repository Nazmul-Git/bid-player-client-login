/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-2xl flex gap-10 p-10'>
            <Link to='/'>Home</Link>
            <Link to='/players'>Players</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/login'>Sign Up/Sign In</Link>
        </div>
    );
};

export default Header;