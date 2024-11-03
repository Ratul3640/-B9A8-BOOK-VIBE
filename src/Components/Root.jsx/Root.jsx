import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <div className='h-20'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-80px)]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;