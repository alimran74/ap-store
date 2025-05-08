import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
        <div>
            
                <Navbar/>
               <div className='min-h-[calc(100vh-116px)]'>
                           <Outlet/>
                           </div>
                <Footer/>
                
                <ToastContainer position='top-center'></ToastContainer>
        </div>
        
    );
};

export default AuthLayout;