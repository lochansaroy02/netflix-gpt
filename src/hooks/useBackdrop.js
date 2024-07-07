
// import  { useEffect } from 'react'
// import { OPTIONS } from '../utils/constant';
// import { useDispatch } from 'react-redux';
// import { addBackdrop } from '../utils/movieSlice';

// const useBackdrop = (id) => {


//     const dispatch = useDispatch();

// //
//     const getMovieData = async () => {

//         try {
//             const response = await fetch('https://api.themoviedb.org/3/movie/' + id + '/images', OPTIONS);

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const data = await response.json();

//             dispatch(addBackdrop(data))     
//             return data;
//         } catch (error) {
//             console.error("Error fetching movie data:", error);
//             throw error;
//         }
//     }

//     useEffect(() => {
//         getMovieData()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);
// }

// export default useBackdrop;
