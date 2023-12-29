import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

const Header = () => {
    const user = useSelector((store) => store.user)
    const navigate = useNavigate()
    const dispatch = useDispatch();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                const { uid, email, displayName, photoURL } = user;

                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }))

                navigate("/browse")

            } else {
                dispatch(removeUser())
                navigate("/")

            }
        });

        return () => unsubscribe();

    }, [])








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
            <img className='w-40 h-20 ' src={LOGO} alt="Logo" />


            {user && <div className=' mx-20 flex items-center  p-4'>
                <img className='h-12 w-12 rounded-md' src={user.photoURL} alt="" />
                <button onClick={handleSignout} className=' z-10 mx-5 bg-gray-700 p-2 rounded-lg text-white '>  Sign out</button>
            </div>}

        </div>
    )
}

export default Header
