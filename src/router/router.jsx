import { createBrowserRouter } from "react-router";
import '../App.css'
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Profile from "../pages/profile";



const router= createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout/>,
            errorElement: <h1>this is error</h1>,
            children:[
                {
                    path:'/',
                    element: <Home/>,
                },
                {
                    path:'profile',
                    element: <Profile/>
                }
            ]
        },
        
    ]
);

export default router;