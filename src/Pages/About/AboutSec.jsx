import React from 'react';
import { ImCheckmark2 } from "react-icons/im";
import { GoGoal } from "react-icons/go";
import { VscPinned } from "react-icons/vsc";

const AboutSec = () => {
    return ( 
        <>
        <div className='w-full flex flex-col gap-10  items-center overflow-hidden pt-[5rem]'>
        <div 
                       data-aos="fade-up"
                       data-aos-duration="1500"
                       style={{background:'url(/SharjahCard.jpg)', backgroundPosition:'center', backgroundSize:'cover',backgroundRepeat:'no-repeat'}}
                       className='rounded-3xl p-5 bg-white w-[94%] flex flex-col  items-center justify-center'>
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
                       <div className='w-[94%]  grid grid-cols-1 gap-y-8 md:grid-cols-2 justify-center items-center'>
                       <div
                          data-aos="fade-right"
                       className='about-card w-full h-auto px-2  md:h-[25rem] py-[2rem] lg:px-[4rem] gap-9 bg-white border-2 border-white rounded-3xl  flex flex-col justify-center text-black'>
                         <div>
                           <h2 className='text-3xl md:text-6xl font-extrabold '>Who We Are</h2>
                         </div> 
                         <div className='flex flex-col gap-5'>
                          <div className='flex gap-2 items-center justify-start'>
                            <span className='text-yellow-500'><ImCheckmark2 size={30}/></span>
                            <span className='font-medium text-xl'><i>Residential & Commercial Properties across the UAE</i></span>
                          </div> 
                         </div>
                         <div className='flex flex-col'>
                          <div className='flex gap-2 items-center justify-start'>
                            <span className='text-yellow-500'><ImCheckmark2 size={30}/></span>
                            <span className='font-medium text-xl'><i>Sales, Rentals, Property Management, and Investment Consultancy</i></span>
                          </div> 
                         </div>
                       </div>
                       <div
                          data-aos="fade-left"
                          data-aos-duration="1500"
                       className='about-card w-full h-auto px-8  md:h-[25rem] py-[2rem] lg:px-[4rem] gap-9 bg-black border-2 border-white rounded-3xl  flex flex-col justify-center text-white'>
                           <div>
                           <h2 className='text-3xl md:text-6xl font-extrabold'>Our Mission</h2>
                         </div> 
                         <div className='flex flex-col gap-5'>
                          <div className='flex gap-2 items-center justify-start'>
                            <span className='text-yellow-500'><GoGoal size={30}/></span>
                            <span className='font-medium text-xl'><i>Buying your dream home</i></span>
                          </div> 
                         </div>
                         <div className='flex flex-col'>
                          <div className='flex gap-2 items-center justify-start'>
                            <span className='text-yellow-500'><GoGoal size={30}/></span>
                            <span className='font-medium text-xl'><i>Investing in a commercial venture</i></span>
                          </div> 
                         </div>
                         <div className='flex flex-col'>
                          <div className='flex gap-2 items-center justify-start'>
                            <span className='text-yellow-500'><GoGoal size={30}/></span>
                            <span className='font-medium text-xl'><i>Looking for the perfect rental property</i></span>
                          </div> 
                         </div>
                          
                        </div>
                       <div
                          data-aos="fade-right"
                          data-aos-duration="1500"
                       className='about-card w-full h-auto px-8  md:h-[25rem] py-[2rem] lg:px-[4rem] gap-9 bg-black border-2 border-white rounded-3xl lg:mr-[15rem] flex flex-col justify-center text-white'>
                           <div>
                           <h2 className='text-3xl md:text-6xl font-extrabold'>Why Choose Us?</h2>
                         </div> 
                         <div className='flex flex-col gap-5'>
                          <div className='flex gap-2 items-center justify-start'>
                            <span className='text-yellow-500'><VscPinned size={30}/></span>
                            <span className='font-medium text-xl'><i><b> Market Expertise </b>We stay ahead with cutting-edge technology and real-time market insights.</i></span>
                          </div> 
                         </div>
                         <div className='flex flex-col'>
                          <div className='flex gap-2 items-center justify-start'>
                            <span className='text-yellow-500'><VscPinned size={30}/></span>
                            <span className='font-medium text-xl'><i><b>Dedicated Agents </b> Passionate professionals committed to integrity and excellence.</i></span>
                          </div> 
                         </div>
                         <div className='flex flex-col'>
                          <div className='flex gap-2 items-center justify-start'>
                            <span className='text-yellow-500'><VscPinned size={30}/></span>
                            <span className='font-medium text-xl'><i><b> Personalized Service </b> Every client receives customized solutions to meet their goals.</i></span>
                          </div> 
                         </div>
                          
                       </div> 
                       <div 
                          data-aos="fade-left"
                          data-aos-duration="1500"
                          className='h-[20rem] w-full md:w-[96%] bg-white rounded-3xl'>
                            <img src="/signature.png" className='w-full h-full' />
                          </div>
                       </div>

        </div>
        </>
     );
}
 
export default AboutSec;