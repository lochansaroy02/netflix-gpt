import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
import { toggleGPTState } from '../utils/gptSlice';
import { LANG_CONFIG } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const user = useSelector((store) => store.user)
    const gpt = useSelector((store) => store.gpt.gptState)
   
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
    const handleLangChange =(e)=>{
        dispatch(changeLanguage(e.target.value))
    }

    

    return (
        <div className=' flex justify-between   z-1000 absolute  bg-gradient-to-b from-black w-full  opacity-100    '>
            <img className='w-40 h-20 ' src={LOGO} alt="Logo" />
            <div className='flex items-center'>

                <button onClick={handleToggle} className='text-white h-fit  px-4 py-2 rounded-lg  bg-gray-400'>{
                    !gpt ? "homepage" : "Search"
                } </button>

              { !gpt &&  <select className='mx-4 px-4  rounded-md text-white bg-gray-500 py-2' onChange={handleLangChange}>
                    {
                        LANG_CONFIG.map((lang)=> <option value={lang.identifer} key="this">{lang.name}</option>
                        )
                    }
                  
                </select>}

                {user && <div className=' mx-20 flex items-center  p-4'>
                    <img className='h-12 w-12 rounded-md' src={user.photoURL} alt="" />
                    <button onClick={handleSignout} className=' z-10 mx-5 bg-gray-700 p-2 rounded-lg text-white '>  Sign out</button>
                </div>}
            </div>

        </div>
    )
}

export default Header
