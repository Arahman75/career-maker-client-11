import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ErrorPage from "../Pages/ErrorPage";
import Services from "../Pages/Services";
import MySchedules from "../Pages/MySchedules";
import MyServices from "../Pages/MyServices";
import AddServices from "../Pages/AddServices";
import ServiceDetail from "../Pages/ServiceDetail";
import PrivateRoute from "./PrivateRoute";

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
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services'),
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/my-schedules',
                element: <MySchedules></MySchedules>
            },
            {
                path: '/my-services',
                element: <MyServices></MyServices>
            },
            {
                path: '/add-services',
                element: <PrivateRoute>
                    <AddServices></AddServices>
                </PrivateRoute>
            },
            {
                path: '/service-detail/:id',
                element: <PrivateRoute>
                    <ServiceDetail></ServiceDetail>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }

        ]
    },
]);



export default router;
