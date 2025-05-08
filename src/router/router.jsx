import { createBrowserRouter } from "react-router";
import '../App.css'
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Profile from "../pages/profile";
import Error from "../pages/Error";
import AppDetails from "../pages/AppDetails";

import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";



const router= createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout/>,
            errorElement: <Error/>,
            children:[
                {
                    path:'/',
                    element: <Home/>,
                },
                {
                    path:'profile',
                    element: <Profile/>,
                },
               
            ]
        },
        {
            path:"/auth",
            element: <AuthLayout/>,
            children:[
                {
                    path:"/auth/login",
                    element: <Login/>
                },
                {
                    path:"/auth/register",
                    element: <Register/>
                },

            ]
        },
        {
            path:'/apps/:appId',
            element: <AppDetails/>,
            loader: () => fetch('/appData.json'),
        },
        
    ]
);

export default router;