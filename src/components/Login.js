import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import { checkValidation } from '../utils/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Login, setLogin] = useState(true);
    const [error, setError] = useState(null);
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const handleLogin = () => {
        setLogin(!Login)

    }

    const handleValidation = () => {

        const errorMessage = checkValidation(email.current.value, password.current.value, name.current.value)
        setError(errorMessage)

        if (errorMessage) return;

        if (!Login) {
            //sign up logic

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value, name.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/104918582?v=4",
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL
                        }))

                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                    navigate("/browse")

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + "-" + errorMessage)
                    // ..
                });


        } else {
            // login logic

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + " " + errorMessage)
                });
        }

    }


    return (
        <>
            <div>

                <Header />
            </div>
            <div className='bg-black relative'>
                <img className='opacity-35 ' src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            </div>
            <form onSubmit={(e) => {
                e.preventDefault()
            }} className='px-4 py-11 absolute bg-black bg-opacity-70 rounded-2xl text-white flex flex-col h-[70vh] w-[50vh] m-auto top-0 bottom-0 left-0 right-0'>
                <h1 className='mt-4 p-2 text-2xl'>{Login ? "Sign in " : "Sign Up"} </h1>
                {!Login && <input ref={name} className="m-2 p-4 h-10 bg-neutral-800 rounded-md" type="text" placeholder='Name' />}
                <input ref={email} className="m-2 p-4 h-10 bg-neutral-800 rounded-md" type="text" placeholder='Email or phone number' />
                <input ref={password} className="m-2 p-4 h-10 bg-neutral-800 rounded-md" type="password" placeholder='Password' />

                <p className='px-2  mx-2 text-red-500 '>{error}</p>
                <button onClick={handleValidation} className='bg-red-600 mx-2 my-4 rounded-lg h-10'>{Login ? "Sign in " : "Sign Up"}</button>
                <p className='mx-4 text-lg'>{Login ? "New to Netflix?  " : "Already Registered?"} <span onClick={handleLogin} className='  cursor-pointer hover:underline'> {Login ? "Sign up now " : "Sign in"}</span></p>
            </form>

        </>
    )
}

export default Login
