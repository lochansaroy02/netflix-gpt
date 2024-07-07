import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
import { toggleGPTState } from '../utils/gptSlice';
import { LANG_CONFIG } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';
import { IoMdLogOut } from "react-icons/io";
import { MdHome } from "react-icons/md";

const Navbar = () => {
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
    // const handleLangChange = (e) => {
    //     dispatch(changeLanguage(e.target.value))
    // }



    return (
        <div className='flex bg-black  justify-between items-center md:h-fit '>
            <div className=' flex justify-center'>
                <img className='w-40 h-20' src={LOGO} alt="Logo" />

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
                </div>

        




            {/* {!gpt && <select className='md:mx-4 mx-0  px-4  rounded-md text-white bg-gray-500 py-2' onChange={handleLangChange}>
                    {
                        LANG_CONFIG.map((lang) => <option value={lang.identifer} key="this">{lang.name}</option>
                        )
                    }
                </select>} */}






        </div>
    )
}

export default Navbar;
