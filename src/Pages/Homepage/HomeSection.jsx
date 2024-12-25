import React from 'react';
import './home-section.css';
import Typewriter from 'typewriter-effect';


const HomeSection = () => {
    return ( <>
    <div id='home-section' className='h-[40rem] w-full flex  items-center content-center justify-center'>
       <div className='w-[70%] broder-2 border-white flex  flex-col items-center content-center justify-center' >
        <div id='logo' className='w-[100%] sm:w-[60%] md:w-[50%] flex items-center justify-center content-center'>
            <img src="monopoly-high-resolution-log.png" alt="monopoly-logo" className='w-full opacity-70'/>

        </div>
        <div>
        <h1 className="text-4xl font-bold text-center text-gray-900">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Welcome to the Real Estate Market in the Emirates!')
              .pauseFor(1500)
              .deleteAll()
              .typeString('Find the best properties here!')
              .pauseFor(1500)
              .start();
          }}
          options={{
            loop: true, // This makes the typing effect loop
            delay: 75, // Adjust typing speed (in ms)
          }}
        />
      </h1>
      </div>


       </div>

    </div>
            </> );
}
 
export default HomeSection;