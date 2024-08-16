import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGPTState } from '../utils/gptSlice';
import { IoMdLogOut } from "react-icons/io";
import { MdHome } from "react-icons/md";
import logo from './images/logo.png'

const Navbar = () => {
    const user = useSelector((store) => store.user)
    const gpt = useSelector((store) => store.gpt.gptState)
    const watchlist = useSelector((store) => store.movie.watchlist);
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


    const handleToggle = () => {
        dispatch(toggleGPTState())
    }





    const handleSignout = () => {
        signOut(auth).then(() => {
            navigate("/")
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    // const handleLangChange = (e) => {
    //     dispatch(changeLanguage(e.target.value))
    // }

 

    const handleClick  = ()=>{
        navigate('/')
    }

    const handleWatchlist = ()=> {
        navigate("/watchlist")
    }

    return (
        <div className='flex bg-black  w-full md:w-screen z-40  fixed justify-between items-center md:h-fit '>
            <div onClick={handleClick} className=' cursor-pointer flex justify-center'>
                <img  className='w-32' src={logo} alt="Logo" />

            </div>


                <div className=' w-fit   flex gap-2 px-6 h-full items-center  '>
                    <button onClick={handleToggle} className='w-fit  ml-0   text-2xl z-10 mx-0  md:mx-5 bg-gray-700  p-1 md:p-4  md:textlg   rounded-lg text-white'> 
                    {
                        gpt ? <MdHome /> :  <  IoMdSearch />
                    } </button>
                    {user && <div className='flex  '>
                        <img className='h-12 w-12  hidden  md:inline-block rounded-md' src={user.photoURL} alt="" />
                        <button onClick={handleSignout} className='w-fit  ml-0  flex  items-center gap-2  z-10 mx-0 md:px-4  md:ml-4 bg-gray-700 py-1 px-2 md:text-xl  text-md rounded-lg text-white '> 
                        Logout <IoMdLogOut /></button>
                    </div>}
                        <div onClick={handleWatchlist} className='text-white text-sm md:text-xl cursor-pointer bg-neutral-600  rounded-lg md:p-4 px-4 py-1  '>
                            <h1>Watchlist ({watchlist.length}) </h1>
                        </div>
                    </div>
        </div>
    )
}

export default Navbar;
