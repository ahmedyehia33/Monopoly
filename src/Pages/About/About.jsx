import React from 'react';
import './about.css';
import { ImCheckmark2 } from "react-icons/im";
import { GoGoal } from "react-icons/go";


const About = () => {
    return (    <>
                <div className='flex justify-center items-center w-full bg-white pt-[4rem] '>
                    <div className='w-[94%]  rounded-3xl flex flex-col gap-6 justify-center items-center p-5'>
                       <div 
                       style={{background:'url(/SharjahCard.jpg)', backgroundPosition:'center', backgroundSize:'cover',backgroundRepeat:'no-repeat'}}
                       className='rounded-3xl p-5 bg-white w-[100%] flex flex-col  items-center justify-center'>
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
                       <div className='w-full flex flex-col md:flex-row items-center gap-5'>
                          <div className='flex flex-col w-full md:w-[60%]  '>
                          <div
                       className='about-card w-full h-auto px-2  md:h-[25rem] py-[2rem] lg:px-[4rem] gap-9 bg-gradient-to-r from-white to-gray-300 border-2 border-white rounded-3xl lg:mr-[15rem] flex flex-col justify-center text-black'>
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
                       
                       className='w-full h-auto px-2  md:h-[25rem] py-[2rem] lg:px-[4rem] gap-9 bg-gradient-to-r from-white to-gray-300 border-2 border-white rounded-3xl lg:mr-[15rem] flex flex-col justify-center text-black'>
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

                          </div>
                          <div className='h-[20rem] w-full md:w-[35%] border-2 bg-gradient-to-l rounded-3xl from-white to-gray-300'>
                            <img src="/signature.png" className='w-full h-full' />
                          </div>
                       </div>
                      
                  
                    </div>
               </div>
                </>  );
}
 
export default About;