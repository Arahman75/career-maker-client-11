import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            // {
            //     path: '/book/:id',
            //     element: <PrivateRoute><BookService></BookService></PrivateRoute>,
            //     loader: ({ params }) => fetch(`https://car-doctor-server-pf1uorald-abdur-rahmans-projects.vercel.app/services/${params.id}`)
            // },
            // {
            //     path: '/bookings',
            //     element: <PrivateRoute>
            //         <Bookings></Bookings>
            //     </PrivateRoute>
            // }
        ]
    },
]);



export default router;
