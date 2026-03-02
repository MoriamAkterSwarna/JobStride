import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <>
            <Navbar />
                {/* Main content will be rendered here */}
                <Outlet />

            <Footer />
        </>
    );
};

export default MainLayout;