import React from 'react';
import HomeSection from '../../components/Homepage/HomeSection';
//import Navbar from '../components/Navbar';
import OurProprties from '../../components/Homepage/OurProprties';

import StaticsCard from '../../components/Homepage/StaticsCard';
import OurTeam from '../../components/Homepage/OurTeam';
import WorkWithUs from '../../components/Homepage/WorkWithUs';
import Footer from '../../components/footer/Footer';
import WorkTwo from '../../components/Homepage/WorkWithUSTwo';


const HomePage = () => {
    return ( <>
        <div className='flex flex-col items-center content-center'>
            
            <HomeSection/>
            <OurProprties/>
            <StaticsCard/>
            <OurTeam/>
            <WorkWithUs/>
            <WorkTwo/>
            
        </div>
            </> );
}
 
export default HomePage;