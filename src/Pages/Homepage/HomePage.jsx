import React from 'react';
import HomeSection from '../../components/Homepage/HomeSection';
//import Navbar from '../components/Navbar';
import About from '../../components/Homepage/About';

import StaticsCard from '../../components/Homepage/StaticsCard';
import OurTeam from '../../components/Homepage/OurTeam';
import WorkWithUs from '../../components/Homepage/WorkWithUs';
import Footer from '../../components/footer/Footer';


const HomePage = () => {
    return ( <>
        <div className='flex flex-col items-center content-center'>
            
            <HomeSection/>
            <About/>
            <StaticsCard/>
            <OurTeam/>
            <WorkWithUs/>
            
        </div>
            </> );
}
 
export default HomePage;