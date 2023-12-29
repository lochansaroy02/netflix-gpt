import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import Browse from './Browse';


const Body = () => {
    const dispatch = useDispatch();

    const AppRouter = createBrowserRouter([


        {
            path: '/',
            element: <Login />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ])


    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                const { uid, email, displayName, photoURL } = user;

                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }))



            } else {
                dispatch(removeUser())

            }
        });
    }, [])




    return (
        <RouterProvider router={AppRouter} />
    )
}

export default Body
