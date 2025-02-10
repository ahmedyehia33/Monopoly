import React from 'react';
import HomeSection from '../../components/Homepage/HomeSection';
//import Navbar from '../components/Navbar';
import OurProprties from '../../components/Homepage/OurProprties';

import StaticsCard from '../../components/Homepage/StaticsCard';
//import OurTeam from '../../components/Homepage/OurTeam';


import WorkTwo from '../../components/Homepage/WorkWithUSTwo';
import OurTeamTwo from '../../components/Homepage/OurTeamTwo';
import Statics from '../../components/Homepage/Statics';


const HomePage = () => {
    return ( <>
        <div className='flex flex-col items-center content-center '>
            
            <HomeSection/>
            <OurProprties/>
            <Statics/>
            <OurTeamTwo/>
            
            <WorkTwo/>
            
        </div>
            </> );
}
 
export default HomePage;