import React from 'react';
import HomeSection from './HomeSection';
//import Navbar from '../components/Navbar';
import About from './About';
import OurMission from './OurMission';


const HomePage = () => {
    return ( <>
        <div className='flex flex-col items-center content-center'>
            
            <HomeSection/>
            <About/>
            <OurMission/>
        </div>
            </> );
}
 
export default HomePage;