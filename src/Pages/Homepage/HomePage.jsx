import React from 'react';
import HomeSection from '../../components/Homepage/HomeSection';
import OurListings from '../../components/Homepage/OurListings';
import OurTeam from '../../components/Homepage/OurTeam';
import Statics from '../../components/Homepage/Statics';
import WorkWithUs from '../../components/Homepage/WorkWithUs';



const HomePage = () => {
    return ( <>
        <div className='flex flex-col items-center content-center '>
            
            <HomeSection/>
            <OurListings/>
            <Statics/>
            <OurTeam/>
            <WorkWithUs/>
            
        </div>
            </> );
}
 
export default HomePage;