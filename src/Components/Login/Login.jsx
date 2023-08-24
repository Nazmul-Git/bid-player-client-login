/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.init';


const Login = () => {
    const [user, setUser]=useState([])

    const auth= getAuth(app);
    // console.log(auth);
    const provider= new GoogleAuthProvider();
    const googleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const loadedUser=result.user;
            // console.log(loadedUser);
            setUser(loadedUser);
        })
        .catch(error=>{
            console.log('error', error);
        })
    }

    const signOutUser=()=>{
        signOut(auth)
        .then(result=>{
            // console.log(result);
            setUser(result);
        })
    }
    return (
        <div>
            {
                user ?
                <button onClick={signOutUser} className='bg-red-500 font-bold p-2 mt-48 ml-96 rounded-md'>Sign Out</button>:
                <button onClick={googleSignIn} className='bg-blue-500 font-bold p-2 text-center mt-48 ml-96 rounded-md'>Sign In</button >
            }
            {
                user && <div className='grid grid-cols-1 ml-96 mt-8'>
                    <img src={user.photoURL} alt="" />
                    <h2> {user.displayName} </h2>
                    <h2> {user.email} </h2>
                </div>
            }

        </div>
    );
};

export default Login;