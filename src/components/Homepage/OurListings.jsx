import React from 'react';
import './our-lisitngs.css';


const OurListings = () => {
    return (    
        <>
        <div className='flex flex-col pt-[35rem] sm:pt-[40rem] w-full items-center content-center'>
            <div id='about-container' className='w-full   py-10 bg-white flex justify-center'>
                <div id='about' className='h-[auto] w-[94%] bg-gray-300 flex flex-col overflow-hidden pt-[3rem] pb-[6rem] gap-4 px-2' >
                    <div 
                    className='flex flex-col  w-full items-center content-center pt-[5rem] gap-2 text-center'
                    data-aos="fade-right"
                    >
                        <h2  className='text-3xl sm:text-5xl md:text-8xl tracking-wide sm:tracking-wide pt-4 font-medium md:font-thin pl-4'>
                            Explore <span className='font-extrabold text-white' >Our</span> Listings
                        </h2>
                        <p className='text-sm font-extralight text-gray-500 sm:text-2xl'>
                            explore our special unique Listings
                        </p>
                    </div>
                    <div
                    className='grid grid-cols-2 lg:flex lg:justify-center   w-full items-center content-center gap-5 p-2 sm:px-28 md:px-28 py-10 '
                    data-aos="fade-left"
                    >
                         <a href='https://www.bayut.com/companies/monopoly-prime-properties-105666/?category=residential&beds=0&activeTab=active_listings' target='_blank'>
                            <div className='flex items-center  justify-center '>
                                <div 
                                className="property-card text-white h-[15rem] w-[12rem] md:h-[20rem] md:w-[18rem] lg:w-[13.5rem]  flex flex-col items-start content-start p-5 rounded-lg"
                                id='property-card1'>
                                    <p className='text-3xl font-semibold'>
                                        Studio
                                    </p>    
                                </div>
                            </div>
                        </a>
                        <a href='https://www.bayut.com/companies/monopoly-prime-properties-105666/?category=residential&beds=1&activeTab=active_listings' target='_blank'  rel="noreferrer"> 
                            <div className='flex items-center  justify-center '>
                                    <div
                                    className="property-card text-white h-[15rem] w-[12rem] md:h-[20rem] md:w-[18rem] lg:w-[13.5rem] flex flex-col items-start content-start p-5 rounded-lg " 
                                    id='property-card2'>
                                        <p className='text-3xl font-semibold'>
                                            One Bed
                                        </p>
                                
                                    </div>
                            </div>
                        </a>
                        <a href='https://www.bayut.com/companies/monopoly-prime-properties-105666/?category=residential&beds=2&activeTab=active_listings' target='_blank'>
                            <div className='flex items-center  justify-center '>
                                <div 
                                className="property-card text-white h-[15rem] w-[12rem] md:h-[20rem] md:w-[18rem] lg:w-[13.5rem] flex flex-col items-start content-start p-5 rounded-lg " 
                                id='property-card3'>
                                    <p className='text-3xl font-semibold'>
                                        Two Bed
                                    </p>
                                    
                                </div>
                            </div>
                        </a>
                        <a href='https://www.bayut.com/companies/monopoly-prime-properties-105666/?category=residential&beds=3&activeTab=active_listings' target='_blank'>
                            <div className='flex items-center  justify-center '>
                                <div 
                                className="property-card text-white h-[15rem] w-[12rem] md:h-[20rem] md:w-[18rem] lg:w-[13.5rem] flex flex-col items-start content-start p-5 rounded-lg "
                                id='property-card4'>
                                    <p className='text-3xl font-semibold'>
                                        Three Bed
                                    </p>
                                    
                                </div>
                            </div>
                        </a>
                        
                    </div>
                    <div className='flex flex-col w-full  justify-center text-center'>
                        <h2 
                        className='text-3xl font-semibold'
                        data-aos="fade-up">
                            Find whatever you're looking for with us
                            </h2> 
                        <p className='text-gray-500 text-xl'
                        data-aos="fade-up">
                            it's our plesure to help you
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>  );
}
 
export default OurListings;