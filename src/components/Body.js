import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse';


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
        }
    ])







    return (
        <RouterProvider router={AppRouter} />
    )
}

export default Body
