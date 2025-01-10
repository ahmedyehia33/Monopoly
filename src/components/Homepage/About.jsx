import React from 'react';
import './about.css';
import Navbar from '../Navbar/Navbar';

const About = () => {
    return (    <>
        <div className='flex flex-col gap-[30rem] sm:gap-[40rem] w-full items-center content-center'>
            <div className='w-full'>
        <Navbar/>
        </div>
        <div id='about-container' className='w-full px-5 py-10 bg-white flex justify-center'>
        <div id='about' className='h-[auto] w-[94%] bg-gray-300 flex flex-col  pb-[8rem] gap-10 ' >
            <div className='flex flex-col w-full items-center content-center pt-[5rem] gap-5 text-center'>
                <h2 className='text-3xl sm:text-6xl tracking-wide sm:tracking-wide pt-4 font-extrabold'>
                    Explore Our Proprites
                </h2>
                <p className='text-sm font-extralight text-gray-500 sm:text-2xl '>explore our special unique proprites</p>
            </div>
            <div className='grid grid-cols-2 lg:flex lg:justify-center   w-full items-center content-center gap-5 p-2 sm:px-28 md:px-28  '>
                <div className='flex items-center  justify-center '>
                <div className="property-card text-white h-[15rem] w-[12rem] hover:h-[16rem] hover:w-[13rem] flex flex-col items-start content-start p-5 rounded-lg" id='property-card1'>
                    <p className='text-2xl font-semibold'>Villas</p>
                    
                </div>
                </div>
                <div className='flex items-center  justify-center '>
                <div className="property-card text-white h-[15rem] w-[12rem] flex flex-col items-start content-start p-2 rounded-lg " id='property-card2'>
                    <p className='text-2xl font-semibold'>Luxury apartments</p>
                    
                </div>
                </div>
                <div className='flex items-center  justify-center '>
                <div className="property-card text-white h-[15rem] w-[12rem] flex flex-col items-start content-start p-5 rounded-lg " id='property-card3'>
                    <p className='text-2xl font-semibold'>Offices</p>
                    
                </div>
                </div>
                <div className='flex items-center  justify-center '>
                <div className="property-card text-white h-[15rem] w-[12rem] flex flex-col items-start content-start p-5 rounded-lg " id='property-card1'>
                    <p className='text-2xl font-semibold'>Town house</p>
                    <p>2 propties</p>
                </div>
                </div>
                
              
            </div>
            <div className='flex flex-col w-full  justify-center text-center'>
                <h2 className='text-3xl font-semibold'>Find whatever you're looking for with us</h2> 
                <p className='text-gray-500 text-xl'>
                    it's our plesure to help you
                </p>
            </div>
        </div>
        </div>
        </div>
                </>  );
}
 
export default About;