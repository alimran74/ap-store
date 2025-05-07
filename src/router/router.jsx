import { createBrowserRouter } from "react-router";
import '../App.css'
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Profile from "../pages/profile";
import Error from "../pages/Error";
import AppDetails from "../pages/AppDetails";



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
                {
                    path:'/app-details',
                    element: <AppDetails/>,
                    loader: () => fetch('../app.json'),
                }
            ]
        },
        
    ]
);

export default router;