import React from 'react';
import './about.css';
import Navbar from '../../components/Homepage/Navbar';

const About = () => {
    return (    <>
        <div className='flex flex-col gap-[30rem] w-full items-center content-center'>
            <div className='w-full'>
        <Navbar/>
        </div>
        <div id='about' className='h-[auto] w-[100%] bg-white flex flex-col  pb-[8rem] gap-10 ' >
            <div className='flex flex-col w-full items-center content-center pt-[5rem] gap-2'>
                <h2 className='text-black text-2xl sm:text-6xl '>
                    Explore Our Proprites
                </h2>
                <p className='text-sm font-extralight text-gray-500 sm:text-2xl '>explore our special unique proprites</p>
            </div>
            <div className='grid grid-cols-2 sm:flex sm:justify-center  md:flex w-full items-center content-center gap-5 p-5 sm:px-28 md:px-28  '>
                <div className='flex items-center  justify-center '>
                <div className="property-card text-white h-[15rem] w-[12rem] flex flex-col items-start content-start p-5 rounded-lg " id='property-card1'>
                    <p className='text-2xl font-semibold'>Town house</p>
                    <p>2 propties</p>
                </div>
                </div>
                <div className='flex items-center  justify-center '>
                <div className="property-card text-black h-[15rem] w-[12rem] flex flex-col items-start content-start p-2 rounded-lg " id='property-card1'>
                    <p className='text-2xl font-semibold'>Town house</p>
                    <p>2 propties</p>
                </div>
                </div>
                <div className='flex items-center  justify-center '>
                <div className="property-card text-white h-[15rem] w-[12rem] flex flex-col items-start content-start p-5 rounded-lg " id='property-card1'>
                    <p className='text-2xl font-semibold'>Town house</p>
                    <p>2 propties</p>
                </div>
                </div>
                <div className='flex items-center  justify-center '>
                <div className="property-card text-white h-[15rem] w-[12rem] flex flex-col items-start content-start p-5 rounded-lg " id='property-card1'>
                    <p className='text-2xl font-semibold'>Town house</p>
                    <p>2 propties</p>
                </div>
                </div>
                <div className='flex items-center  justify-center '>
                <div className="property-card text-white h-[15rem] w-[12rem] flex flex-col items-start content-start p-5 rounded-lg " id='property-card1'>
                    <p className='text-2xl font-semibold'>Town house</p>
                    <p>2 propties</p>
                </div>
                </div>
              
            </div>
        </div>
        </div>
                </>  );
}
 
export default About;