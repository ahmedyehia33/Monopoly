import React, { useEffect, useState } from 'react';
import { GrNext, GrPrevious } from "react-icons/gr";
import './statics-card.css'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
ChartJS.register(ArcElement);

const StaticsCard = () => {
    const staticsData = {
                        total_market_size: "US$0.69 trillion (2025 projection)",
                        regions: [
                                    {
                                        name: "Dubai",
                                        market_share: "Approximately 60%",
                                        background: "/DubaiCarde.jpg" ,
                                        details: {
                                                    "2024_sales_transactions": "133,134 deals",
                                                    growth_from_previous_year: 38
                                                 }
                                    },
                                    {
                                        name: "Abu Dhabi",
                                        market_share: "Approximately 25%",
                                        background: "/AbuDhabiCarde.jpg" ,
                                        details: {
                                                    "2024_sales_transactions": "13,298 units",
                                                    growth_from_previous_year: 75
                                                 }
                                    },
                                    {
                                        name: "Sharjah",
                                        market_share: "Approximately 10%",
                                        background: "/SharjahCarde.jpg" ,
                                        details: {
                                                    "2024_sales_transactions": "69,078",
                                                    growth_from_previous_year: 47
                                                 }
                                    },
                                    {
                                        name: "Other Emirates",
                                        market_share: "Approximately 5%",
                                        background: "/OtherEmiratesCarde.jpg",
                                        details: {
                                                    note: "Includes regions such as Ajman, Fujairah, Ras Al Khaimah, and Umm Al Quwain.",
                                                    growth_from_previous_year: 26
                                                }
                                    }
                                 ]
                        };
  const [index , setIndex] = useState(0)
  const [selectedState , setSelectedState] = useState(staticsData.regions[index]);
  const chartData = {
                        labels: ["Market Share", "Remaining"],
                        datasets: [
                        {
                            data: [ 100 - selectedState.details.growth_from_previous_year, selectedState.details.growth_from_previous_year],
                            backgroundColor: ["#ffffff", "#000000"],
                            borderWidth: 0,
                        },
                        ],
                    };
  const chartOptions = {
                            responsive: true,
                            cutout: "80%",
                        };

  const handleNext = () => {
                                setIndex((currentIndex) =>{ 
                                        const nextIndex = currentIndex < staticsData.regions.length - 1 ? currentIndex + 1 : 0;
                                        setSelectedState(staticsData.regions[nextIndex]) ;
                                        return nextIndex;                   
                                                            }
                                );
                            };
const handlePrevious = ()=>{
                                setIndex((currentIndex) => {
                                      const prevIndex =  currentIndex === 0 ? staticsData.regions.length - 1 : currentIndex -1;
                                      setSelectedState(staticsData.regions[prevIndex]);
                                      return prevIndex;
                            })
                            }


    return ( 
           <>
                <div className='flex flex-col bg-white w-full pb-8'> 
                        <div className='w-full text-center flex flex-col gap-5 p-2'>
                            <h1 className='text-3xl sm:text-6xl tracking-wide sm:tracking-widest font-extrabold'>
                                Where to Invest ?
                            </h1>
                            <p className='text-gray-500 sm:text-2xl '>
                                let's take a  look at the real estate market in the
                                <span className='text-black font-semibold'> United Arab Emirates</span>
                            </p>
                        </div>
                    <div className='w-full flex justify-evenly bg-white content-center items-center py-5'>
                        <div>
                                <GrPrevious className='hover:cursor-pointer' size={40} onClick={handlePrevious}/>
                        </div>
                        <div id='statics-card' style={{backgroundImage:`url(${selectedState.background})`}} className='h-[auto] pt-8 p-5 pb-12  w-[75%] rounded-3xl text-white flex flex-col sm:flex-col md:flex-row items-center content-center gap-10'>
                            <div className="static-card-header w-full p-5   sm:p-2 sm:h-[12rem]  flex justify-center items-center text-5xl font-extrabold bg-black bg-opacity-50 rounded-lg text-center">
                                {selectedState.name}
                            </div>
                    
                    
                            <div className='static-card-info p-4 flex flex-col w-full h-[auto] items-center content-center justify-center text-center bg-black bg-opacity-50 rounded-lg'>
                                <div className='text-3xl'> Market Share <br/><span id='statics-card-span' className='text-black text-2xl font-extrabold'>{selectedState.market_share}</span></div>
                                <div className='text-3xl'>2024 sales transactions <br/><span id='statics-card-span' className='text-black text-2xl font-extrabold'>{selectedState.details['2024_sales_transactions']}</span> </div>
                            </div>
                            
                    
                            <div className=" w-[90%] h-[auto] md:w-[10rem] lg:w-[90%] flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg text-center">
                                <span className='text-xl text-white'>Growth from previous year</span>
                                <div className='h-[10rem] w-[10rem]'>
                                <Doughnut data={chartData} options={chartOptions} />
                                </div>
                                <div className='text-2xl text-white mt-2 text-center w-full '>{selectedState.details.growth_from_previous_year}%</div>
                            </div> 
                        </div>
                        <div>
                                <GrNext className='hover:cursor-pointer' size={40} onClick={handleNext}/>
                        </div>
                    </div>
                    <div className='w-full text-center flex flex-col gap-5 p-2'>
                        <h1 className='text-xl sm:text-4xl -tracking-normal sm:tracking-wide font-bold'>
                            You also can connect with us for a private consulation
                        </h1>
                        <div className='w-full flex flex-col gap-3 items-center justify-center'>
                            <div>
                                <span id="hurry" className="font-extrabold text-4xl sm:text-6xl">HURRY </span><span id="up" className="font-extrabold text-4xl sm:text-6xl">UP </span>
                            </div>
                            <div className='text-xl sm:text-2xl font-semibold text-gray-500'>
                                Take your free session with our experts
                            </div>
                            <div className='h-[5rem] w-[12rem] bg-black rounded-full text-white text-xl flex items-center justify-center border-2  border-double border-emerald-400 hover: cursor-pointer'>
                                CONTACT US
                            </div>
                            
                        </div>    
                    </div>
                </div>
           </>
            );
}
 
export default StaticsCard;