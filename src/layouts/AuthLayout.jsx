import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <Navbar/>
               <div className='min-h-[calc(100vh-116px)]'>
                           <Outlet/>
                           </div>
                <Footer/>
            </header>
        </div>
    );
};

export default AuthLayout;