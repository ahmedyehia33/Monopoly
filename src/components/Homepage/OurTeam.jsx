import React, {useEffect, useRef, useState} from 'react';
import './OurTeam.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation,EffectCoverflow } from "swiper/modules";
import offset from 'dom-helpers/esm/offset';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { teamMockup } from '../../index';


const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const teamContainerRef = useRef(null);
  const handleSlideChange = (swiper) => {
                                          setActiveIndex(swiper.activeIndex); 
                                          // Update activeIndex on slide change
                                        };
  const handleClick = (index, member) => {
    // Check if the real index of the active slide matches the clicked slide
                                            const swiperInstance = document.querySelector('.mySwiper').swiper; // Access the Swiper instance
                                            if (swiperInstance.realIndex === index) {
                                              setSelectedMember(member);
                                              teamContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }
                                          };
                     
  return (    
          <>
          <div ref={teamContainerRef} className='w-full bg-white flex justify-center py-[2.5rem] '>
              <div id='our-team-container' className='flex flex-col w-[94%] overflow-hidden bg-gray-300 px-[2rem] pt-[4rem] pb-[6rem]  rounded-3xl '>
              
                  <div id='our-team-header'
                  data-aos='fade-right'
                  className='w-full flex flex-col justify-center items-center gap-2' 
                  >
                        <h1 className='text-3xl text-center sm:text-5xl md:text-8xl tracking-wide sm:tracking-wider pt-4 font-medium md:font-thin pl-4'>
                            Meet <span className='text-white font-extrabold'>our</span> team
                        </h1>
                        <p className='text-xl md:text-2xl text-gray-500 text-center'>
                            The experts behind every dream home
                        </p>
                 </div>
              
                  <div id='our-team-swiper'
                  data-aos='fade-left'
                  data-aos-offset='300'
                  className=' border-opacity-50'
                  >
                                        <AnimatePresence mode="wait">
                                             {selectedMember? (
                                                                <motion.div
                                                                id="selected-member-card"
                                                                key="member-card"
                                                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                                                className="w-full gap-4 flex flex-col md:flex-row justify-between p-4"
                                                              >
                                                                    <div className="member-img h-[25rem] w-[full] md:w-[20rem] flex justify-center items-center rounded-3xl  border-2 border-white">
                                                                      <img src={selectedMember.image} alt='image of team member' className='w-full h-full rounded-3xl object-center object-cover'/>
                                                                    </div>
                                                                    <div className='flex flex-col gap-2 md:h-[25rem] bg-black text-white rounded-2xl p-10 justify-center md:w-[60%] border-2 border-black'>
                                                                      <div className='text-white text-5xl font-extrabold tracking-wide'>
                                                                        {selectedMember.name}
                                                                      </div>
                                                                      <div className='text-3xl '>
                                                                        {selectedMember.role}
                                                                      </div>
                                                                      <div className='border-2 border-gray-800 rounded-xl p-4 text-xl w-full text-center mt-[4rem] font-light'>
                                                                        {selectedMember.bio}
                                                                      </div>
                                                                    </div>
                                                                    <motion.div 
                                                                    whileTap={{ scale: 0.9, rotate: -10 }}  // Animation on click
                                                                    transition={{ type: 'spring', stiffness: 300 }}
                                                                    className='h-[4rem] p-2 w-full md:w-[4rem] text-white rounded-full bg-black hover:cursor-pointer flex justify-center items-center' onClick={()=>{
                                                                      setSelectedMember(null);
                                                                      teamContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}}>
                                                                        <IoArrowBack size={30}/>
                                                                      </motion.div>
                                                                </motion.div>
                                          ): ( 
                                             <motion.div
                                            key="swiper"
                                            initial={{ opacity: 0, scale: 0.8, y: -50 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.8, y: -50 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            >
                                                <Swiper
                                                grabCursor={false}
                                                centeredSlides={true}
                                                effect='coverflow'
                                                coverflowEffect={{
                                                rotate: 0,
                                                stretch: 30,
                                                depth: 150,
                                                modifier: 1,
                                                slideShadows: false,
                                              }}
                                              breakpoints={{640: {
                                                              slidesPerView: 1,
                                                            },  
                                                            768: {
                                                              slidesPerView: 2,
                                                            },
                                                              1024: {
                                                              
                                                              slidesPerView: 3,
                                                            },
                                                          }}
                                              loop={true}
                                              loopAdditionalSlides={2}
                                              autoplay={{delay:1800,
                                                      disableOnInteraction: false,
                                              }}
                                              
                                              allowTouchMove={false}
                                              navigation={{
                                                prevEl: ".custom-prev",
                                                nextEl: ".custom-next",
                                              }}
                                              modules={[  Navigation, Autoplay, EffectCoverflow]}
                                              className="mySwiper"
                                              onSlideChange={handleSlideChange}
                                              >
                                               {teamMockup.team.map((member, index) => (
                                      
                                                        <SwiperSlide  key={member.name} >
                                                          <div onClick={() => handleClick(index, member)}
                                                          className='slide h-[25rem] w-[full] text-[#d7fdff] md:h-[25rem] lg:h-[24rem] p-5 bg-black mt-10 mb-5 mx-10 flex flex-col items-start justify-end rounded-3xl border-2 border-white ' 
                                                          style={{backgroundImage: `url(${member.image})`, backgroundPosition:'center', backgroundSize:'cover'}}
                                                          >
                                                              <div  className='grid grid-cols-4 w-full'>
                                                                <div id='team-member-info' className='flex flex-col gap-4 w-full  col-span-3'>
                                                                  <div className='text-2xl md:text-3xl w-full font-medium'>
                                                                    {member.name}
                                                                  </div>
                                                                  <div className='text-xl md:text-2xl'>
                                                                    {member.role}
                                                                  </div>
                                                              </div>
                                                              <div>
                                                                <div className='flex w-full items-center justify-end'>
                                                                 
                                                                </div>
                                                              </div>
                                            
                                            
                                                               </div>
                                                           </div>
                                                          </SwiperSlide>
                              
                                                      ))}
                                                </Swiper>
                                                <div className='w-full flex justify-center border-b-2 border-gray-800 h-[5rem] gap-2 my-2'>
                                                <div>
                                                  {/* Left Arrow */}
                                                  <motion.div
                                                    className='custom-prev h-[4rem] w-[4rem] rounded-full bg-black flex justify-center items-center select-none'
                                                    whileTap={{ scale: 0.9, rotate: -10 }}  // Animation on click
                                                    transition={{ type: 'spring', stiffness: 300 }}  // Smooth spring transition
                                                    onClick={() => {
                                                      document.querySelector('.mySwiper').swiper.slidePrev(); // Move to the previous slide
                                                    }}
                                                  >
                                                    <FaAngleLeft size={60} className='hover:cursor-pointer text-white' />
                                                  </motion.div>
                                                </div>

                                                  <div>
                            {/* Right Arrow */}
                                                <motion.div
                                                  className='custom-next h-[4rem] w-[4rem] rounded-full bg-black flex justify-center items-center select-none'
                                                  whileTap={{ scale: 0.9, rotate: 10 }}  // Animation on click
                                                  transition={{ type: 'spring', stiffness: 300 }}  // Smooth spring transition
                                                  onClick={() => {
                                                    document.querySelector('.mySwiper').swiper.slideNext(); // Move to the next slide
                                                  }}
                                                >
                                                  <FaAngleRight size={60} className='hover:cursor-pointer text-white'/>
                                                </motion.div>
                                              </div>

                                              </div>
                                              </motion.div>
                        
                        
                                             )}   
                                              </AnimatePresence>
                                              </div>  
                          
                                      <div 
                                      data-aos='fade-up'
                                      data-aos-offset="100"
                                      id='our-team-info' className='text-white flex flex-col justify-center md:flex-row w-full text-center mb-4 gap-x-10'>
                                        <p className='text-xl my-4  p-5 border-opacity-40 w-[100%] md:w-[45%] '>
                                        At <span className='text-2xl font-extrabold text-gray-300 '>Monopoly prime</span> our team is the heart of everything we do. We’re passionate, dedicated, and driven to help you achieve your real estate goals
                                        </p>
                                        <p className='text-xl my-4 p-5 w-[100%] md:w-[45%]'>
                                        With a blend of experience, innovation, and care, our team works tirelessly to turn your real estate dreams into reality.
                                        </p>
                                      </div>
                                      <div 
                                      data-aos='fade-up'
                                      data-aos-offset="100"
                                      id='our-team-info' className='text-white flex flex-col md:flex-row w-full text-center gap-x-10'>
                                        <p className='text-xl my-4  p-5 border-opacity-40 w-[100%] md:w-[45%]'>
                                        What makes us stand out? Our team’s commitment to integrity, collaboration, and results.
                                        </p>
                                        <p className='text-xl my-4 p-5 w-[100%] md:w-[45%]'>
                                        Our team ensures every property stands out in the competitive market.
                                        </p>
                                      </div>

          </div>
          </div>
          </>
   );
}
 
export default OurTeam;