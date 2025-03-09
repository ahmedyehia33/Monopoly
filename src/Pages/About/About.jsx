import React from 'react';
import OurTeamTwo from '../../components/Homepage/OurTeamTwo';
import Statics from '../../components/Homepage/Statics';


const About = () => {
    return (    <>
                <div className='flex justify-center items-center w-full bg-white pt-[4rem] '>
                    <div className='w-[94%]  rounded-3xl flex flex-col p-5'>
                       <div className=' rounded-3xl p-5 bg-black w-[100%] flex flex-col  items-center justify-center'>
                            <div className='w-full flex flex-col items-center justify-center md:flex-row'>
                            <div className='text-white text-4xl md:text-6xl font-extrabold flex flex-col items-center text-center  gap-1 md:gap-5'>
                              <span>  ABOUT </span>
                              <span> MONOPOLY PRIME </span>
                            </div>
                            <div className=' h-[10rem] md:h-[20rem] w-[100%] md:w-[60%] '>
                                <img src='/FOR DARK BACKGROUND2.png' className='h-full w-full'/>
                            </div>
                            </div>
                            <div className='text-white text-xl font-extralight w-full text-center'>
                                  <i>  your premier partner in navigating the vibrant property market of the UAE. </i>
                            </div>
                       </div>

                    </div>
               </div>
                </>  );
}
 
export default About;