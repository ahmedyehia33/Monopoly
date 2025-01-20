import React, {useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import offset from './../node_modules/dom-helpers/esm/offset';

const Layout = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
           offset:100,   // Offset from the top of the viewport to trigger animations
          easing: 'ease-in-out', // Easing function
          once: true,     // Whether animation should happen only once
        });
      }, []);
    return ( <>
            <div className='flex flex-col gap-0 '>
                <Navbar/>
                <Outlet/>
                <Footer/>

            </div>
            </> );
}
 
export default Layout;