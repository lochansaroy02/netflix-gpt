import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    
    const user = useSelector((store) => store.user)


    const navigate = useNavigate()

    const handleSignout = () => {


        signOut(auth).then(() => {
            navigate("/")
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (

        <div className=' flex justify-between   z-10 absolute bg-gradient-to-b from-black w-full '>
            <img className='w-40 h-20 ' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />


            {user && <div className=' mx-20 flex items-center  p-4'>
                <img className='h-12 w-12 rounded-full' src={user.photoURL} alt="" />
                <button onClick={handleSignout} className=' z-10 mx-5 bg-gray-700 p-2 rounded-lg text-white '>  Sign out</button>
            </div>}

        </div>
    )
}

export default Header
