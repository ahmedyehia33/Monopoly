import React, { useMemo, useState, useRef } from 'react';
import { motion } from "framer-motion";
import "./work-two.css";
import {cardsData , cardsDataArabic } from "../../index";

const WorkWithUs = ({selectedLanguage}) => {
    const [expandedID , setExpandedID] = useState([]);
    
    const textTrimmer=(text)=>{
                return text.length > 50 ? `${text.slice(0,80)}....`: text
    }
    const toggleContent = (id) => {
        setExpandedID((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    };
    return ( <>
            <div className='w-full bg-white flex justify-center'>
                <div className='flex flex-col w-[94%] h-[auto] bg bg-gray-300 rounded-3xl pt-[4rem] pb-[6rem]  gap-2 px-5'>
                <div 
                data-aos="fade-right"
                className='w-full text-center flex-col justify-center mb-5'>
                           {selectedLanguage? 
                           <h1 className='text-3xl sm:text-5xl md:text-8xl tracking-wide sm:tracking-wider pt-4 font-medium md:font-thin pl-4'>
                            Why Work <span className='text-white font-extrabold'>with</span> Us?
                            </h1>:
                            <h1 className='text-3xl sm:text-5xl md:text-8xl tracking-wide sm:tracking-wider pt-4 font-medium md:font-thin pl-4'>
                            لماذا تعمل <span className='text-white font-extrabold'>معنا</span> 
                            </h1>}
                        </div>
                <div id='work-cards-container' className='w-full flex flex-col overflow-x-hidden gap-2 sm:grid sm:grid-cols-2 md:gap-5 md:px-[3.5rem] items-center content-center'>
                    {(selectedLanguage? cardsData : cardsDataArabic).map((card)=>
                       (
                            <div key={card.id} className='card w-full h-[auto]   flex flex-col justify-center items-center md:flex-col lg:flex-row gap-1 ' >   
                                <div 
                                className='image w-[90%] h-[20rem]  bg-black flex items-center rounded-xl'
                                data-aos='fade-right'>
                                    <img src={card.img} loading='eager' alt={card.header} className='w-full h-full rounded-xl object-cover object-center'/>
                                </div>
                                <div 
                                className="flex flex-col h-[auto] justify-center  p-5 gap-4 md:min-h-[20rem] text-center w-full"
                                data-aos='fade-left'>
                                    <div className='text-2xl font-semibold tracking-wide'>
                                        {card.header}
                                    </div>
                                    <div className="flex flex-col items-center">
                                    <motion.div
                            initial={false}
                            animate={{ height: expandedID.includes(card.id) ? "auto" : "4rem", opacity: 1 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden text-xl  text-gray-800"
                        >
                            {expandedID.includes(card.id) ? card.content : textTrimmer(card.content)}
                        </motion.div>
                                       
                                        <span
                                            className="text-white h-[3rem] w-[10rem] rounded-2xl p-2 mt-2 bg-black cursor-pointer flex justify-center items-center"
                                            onClick={() => toggleContent(card.id)}
                                        >
                                            {expandedID.includes(card.id) ? "See less" : "See more"}
                                        </span>
                                        </div>
                                </div>
                            </div>
                        )
                    )}
                    
                </div>
                </div>
            </div>
            </> );
}
 
export default WorkWithUs;