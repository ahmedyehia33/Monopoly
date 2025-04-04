import React from 'react';
import { useOutletContext } from "react-router-dom";
import HomeSection from '../../components/Homepage/HomeSection';
import OurListings from '../../components/Homepage/OurListings';
import OurTeam from '../../components/Homepage/OurTeam';
import Statics from '../../components/Homepage/Statics';
import WorkWithUs from '../../components/Homepage/WorkWithUs';
import Team from '../../components/Homepage/Team';



const HomePage = () => {
    const { selectedLanguage } = useOutletContext();
    return ( <>
        <div className='flex flex-col items-center content-center '>
            
            <HomeSection selectedLanguage={selectedLanguage}/>
            <OurListings selectedLanguage={selectedLanguage}/>
            <Statics selectedLanguage={selectedLanguage}/>
            <Team selectedLanguage={selectedLanguage}/>
            <WorkWithUs selectedLanguage={selectedLanguage}/>
            
        </div>
            </> );
}
 
export default HomePage;