import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <div>
                
            </div>
            <div className='min-h-[calc(100vh-80px)]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;