import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <>
            <Navbar/>
            <ToastContainer position='top-center'></ToastContainer>
            <div className='min-h-[calc(100vh-116px)]'>
            <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default HomeLayout;