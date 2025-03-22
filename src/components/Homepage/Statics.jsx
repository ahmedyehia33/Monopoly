import React from 'react';
import './statics.css';
import { FaPhoneVolume } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { FaAngleDoubleUp } from "react-icons/fa";
import { motion } from 'framer-motion';
import { BiBuildingHouse } from "react-icons/bi";
import { PiBuildingApartmentBold } from "react-icons/pi";
import { GrMoney } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Statics = () => {
    const dubaiRealEstateStats = {
        title: "Dubai Real Estate Market 2024",
        totalTransactions: "180,900 transactions worth AED 522.1 billion ($142.1B)",
        transactionGrowth: "36% increase in volume, 27% increase in value from 2023",
        offPlanSales: "63% of total sales were off-plan properties",
        
        residentialSales: "75,543 residential transactions worth AED 191 billion",
        newUnits: "41,000 new units expected in 2025, rising to 42,000 in 2026",
        rentIncrease: "Rents have surged by over 20%, making Dubai the 15th most expensive city globally",
        sustainabilityFocus: "Shift toward eco-friendly and energy-efficient properties",
        source: "Data compiled from various Dubai real estate reports",
    };

    return (
            <>
            <div id='statics-card-container 'className='flex w-full justify-center bg-white '>
                <div className='flex flex-col bg-gray-300 w-[94%] overflow-hidden gap-2 pt-[3rem] pb-[6rem] rounded-3xl px-[2rem]'> 
                        <div 
                        data-aos="fade-right"
                        className='w-full text-center flex flex-col gap-5 p-2 pt-10'>
                            <h1 className='text-3xl sm:text-5xl md:text-8xl tracking-wide sm:tracking-wider pt-4 font-medium md:font-thin pl-4'>
                                Where <span className='text-white font-extrabold'>to</span> Invest ?
                            </h1>
                            <p className='text-gray-500 sm:text-2xl '>
                                let's take a  look at the real estate market in 
                                <span className='text-black font-semibold'> Dubai</span>
                            </p>
                        </div>
                        <div 
                        data-aos="fade-left"
                        id="dubai-card" className='w-full p-6 rounded-3xl flex flex-col justify-center items-center gap-2'>
                            <div className='flex w-full justify-center text-3xl md:text-6xl text-white font-extralight text-center mb-8'>
                                <h2>{dubaiRealEstateStats.title}</h2>
                            </div>
                            <div className='flex flex-col md:flex-row md:flex-wrap w-full md:justify-evenly justify-center gap-2'> 
                                <div className='flex border-2 p-5 rounded-2xl border-white w-full md:w-[auto] lg:w-[35%] items-center'>
                                    <motion.div 
                                    animate={{ rotate: [0, 180, 360] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className='text-yellow-500'>
                                    <GrTransaction size={70}/>
                                    </motion.div>
                                    <div className='flex flex-col gap-3 text-white w-full justify-center'>
                                        <p className='text-2xl md:text-2xl font-extralight w-full text-center'>Total Transaction</p>
                                        <p className='text-4xl md:text-5xl w-full text-center'> 180,900 </p>
                                    </div>
                                </div>
                                <div className='flex border-2 border-white rounded-2xl p-5 gap-3 w-full md:w-[auto] lg:w-[30%] items-center'>
                                    <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className='text-yellow-500'>
                                    <FaAngleDoubleUp  size={70}/>
                                    </motion.div>
                                    <div className='flex flex-col gap-3 text-white w-full justify-center'>
                                        <p className='text-2xl md:text-2xl font-extralight w-full text-center'>Transaction Growth</p>
                                        <p className='text-4xl md:text-5xl font-medium  w-full text-center'> 36% </p>
                                    </div>
                                </div>
                                <div className='flex border-2 border-white rounded-2xl p-5 gap-3 w-full md:w-[auto] lg:w-[30%] items-center'>
                                    <motion.div 
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    className='text-yellow-500'>
                                    <BiBuildingHouse size={70}/>
                                    </motion.div>
                                    <div className='flex flex-col w-full justify-center gap-3 text-white'>
                                        <p className='text-2xl md:text-2xl font-extralight w-full text-center'>Off Plan sales</p>
                                        <p className='text-4xl md:text-5xl font-medium  w-full text-center'> 63% </p>
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col md:flex-row w-full md:justify-evenly justify-center gap-5'>
                                <div className='flex border-2 border-white rounded-2xl p-5 gap-3 w-full md:w-[auto] lg:w-[40%] items-center'>
                                    <motion.div 
                                    animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className='text-yellow-500'>
                                    <PiBuildingApartmentBold size={70}/>
                                    </motion.div>
                                    <div className='flex flex-col w-full justify-center gap-3 text-white'>
                                        <p className='text-2xl md:text-2xl font-extralight w-full text-center'>New Units</p>
                                        <p className='text-4xl md:text-5xl font-medium  w-full text-center'> 41,000 </p>
                                    </div>
                                </div>
                                <div className='flex border-2 border-white rounded-2xl p-5 gap-3 w-full md:w-[auto] lg:w-[40%] items-center'>
                                    <motion.div 
                                    animate={{ x: [-2, 2, -2] }}
                                    transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
                                    className='text-yellow-500'>
                                    <GrMoney size={70}/>
                                    </motion.div>
                                    <div className='flex flex-col w-full justify-center gap-3 text-white'>
                                        <p className='text-2xl md:text-2xl font-extralight w-full text-center'>Rent Increase</p>
                                        <p className='text-4xl md:text-5xl font-medium  w-full text-center'> 20% </p>
                                    </div>
                                </div>
                            </div>

                        </div>
               
                    <div 
                    data-aos="fade-up"
                    className='w-full text-center flex flex-col gap-20 p-2 pt-10 '>
                        <h1 className='text-xl sm:text-4xl -tracking-normal sm:tracking-wide font-bold'>
                            You also can connect with us for a private consulation
                        </h1>
                        <div className='w-full flex flex-col gap-3 items-center justify-center rounded-b-3xl'>
                            <div>
                                <span id="hurry" className="font-extrabold text-4xl sm:text-6xl">HURRY </span><span id="up" className="font-extrabold text-4xl sm:text-6xl">UP </span>
                            </div>
                            <div className='text-xl sm:text-2xl font-semibold text-gray-500'>
                                Take your free session with our experts
                            </div>
                            <Link to="/contact">
                            <div className='h-[5rem] w-[15rem] bg-black rounded-full text-white text-xl flex items-center justify-center border-2  border-double border-emerald-400 hover: cursor-pointer'>
                               <motion.div 
                               animate={{ x: [-2, 2, -2] }}
                               transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
                               className='mr-2'><FaPhoneVolume size={40} /></motion.div> <div>CONTACT US</div>
                            </div>
                            </Link>
                        </div>    
                    </div>
                </div>
            </div>
            </>
    
    
             );
}
 
export default Statics;