import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse';
import MoviePage from './MoviePage';


const Body = () => {


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
        },
        {
            path: '/movie/:id',
            element: <MoviePage/>
        }
    ])







    return (
        <RouterProvider router={AppRouter} />
    )
}

export default Body
