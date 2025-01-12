import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';

const Layout = () => {
    return ( <>
            <div className='flex flex-col gap-0 '>
                <Navbar/>
                <Outlet/>
                <Footer/>

            </div>
            </> );
}
 
export default Layout;