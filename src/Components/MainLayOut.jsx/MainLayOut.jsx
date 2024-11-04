import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';



const MainLayOut = () => {
    return (
        <div className="container mx-auto ">

            <div className="h-20 ">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-80px)]">
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default MainLayOut;