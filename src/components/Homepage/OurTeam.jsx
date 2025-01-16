import React from 'react';
import './our-team.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation,EffectCoverflow } from "swiper/modules";

const OurTeam = () => {
    const teamMockup = {
                    companyName: "DreamHome Realty",
                    tagline: "Building dreams, one home at a time.",
                    team: [
                    {
                        name: "John Smith",
                        role: "CEO & Founder",
                        image: "/team/man.png", // Path to a placeholder image
                        bio: "John has over 20 years of experience in the real estate industry and is passionate about helping families find their dream homes.",
                    },
                    {
                        name: "John Smith",
                        role: "CEO & Founder",
                        image: "/team/man.png", // Path to a placeholder image
                        bio: "John has over 20 years of experience in the real estate industry and is passionate about helping families find their dream homes.",
                    },
                    {
                        name: "Sarah Johnson",
                        role: "Lead Realtor",
                        image: "/team/woman.png",
                        bio: "Sarah specializes in luxury properties and has closed over $50 million in sales over the past 5 years.",
                    },
                    {
                        name: "Michael Brown",
                        role: "Marketing Director",
                        image: "/team/man.png",
                        bio: "Michael is a branding expert with a knack for creating compelling campaigns that connect buyers with the perfect properties.",
                    },
                    {
                        name: "Sarah Johnson",
                        role: "Lead Realtor",
                        image: "/team/woman.png",
                        bio: "Sarah specializes in luxury properties and has closed over $50 million in sales over the past 5 years.",
                    },
                    {
                        name: "Emily Davis",
                        role: "Client Relationship Manager",
                        image: "/team/woman.png",
                        bio: "Emily ensures every client receives personalized service, making the buying and selling process seamless.",
                    },
                    {
                        name: "Chris Wilson",
                        role: "Financial Advisor",
                        image: "/team/man.png",
                        bio: "Chris provides expert guidance on financing options, helping clients make informed decisions about their investments.",
                    },
                    ],
                    contactInfo: {
                    email: "contact@dreamhomerealty.com",
                    phone: "+1 (123) 456-7890",
                    address: "123 Dream St, Suite 100, Real Estate City, USA",
                    },
                    mission: "To empower individuals and families to achieve their real estate goals through exceptional service and expertise.",
                        };
                       
    return (    
            <>
            <div className='w-full bg-white flex justify-center py-[2.5rem] '>
            <div id='our-team-container' className='flex flex-col w-[94%] bg-gray-300 px-5 py-20 rounded-3xl '>
                <div id='our-team-header' className='w-full flex flex-col justify-center items-center gap-5' >
                    <h1 className='text-3xl sm:text-6xl tracking-wide sm:tracking-widest font-extrabold'>
                        Meet our team
                    </h1>
                    <p className='text-xl md:text-2xl text-gray-500 text-center'>
                        The experts behind every dream home
                    </p>
                </div>
                
                <div id='our-team-swiper' className='border-b-2 border-black border-opacity-50'>
                                  <Swiper
                                   grabCursor={false}
                                   centeredSlides={true}
                                   effect='coverflow'
                                   coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
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
                                                  slidesPerView: 4,
                                                },
                                              }}
                                  loop={true}
                                  autoplay={{delay:3000,
                                         disableOnInteraction: false,
                                  }}
                                  pagination={{ clickable: false}}
                                  allowTouchMove={false}
                                  navigation={true}
                                  modules={[ Pagination, Navigation, Autoplay, EffectCoverflow]}
                                  className="mySwiper"
                                 >
                          {teamMockup.team.map((member) => (
                              
                            <SwiperSlide  key={member.name} >
                              <div className='h-[30rem] w-[full]  md:h-[25rem] lg:h-[25rem] p-5 bg-black my-20 mx-10 flex flex-col items-start justify-end rounded-3xl border-2 border-white text-white' style={{backgroundImage: `url(${member.image})`, backgroundPosition:'center', backgroundSize:'cover'}}>
                                  <div  className='grid grid-cols-2 w-full'>
                                    <div id='team-member-info' className='flex flex-col gap-4 w-full'>
                                      <div className='text-4xl w-full font-semibold'>
                                        {member.name}
                                      </div>
                                      <div>
                                        {member.role}
                                      </div>
                                    </div>
                                    <div>
                                      <div className='flex w-full items-center justify-end'>
                                        2
                                      </div>
                                    </div>
                                    
                                    
                                  </div>
                              </div>
                            </SwiperSlide>
                      
                    ))}
                  </Swiper>
                </div>
                <div id='our-team-info' className='flex w-full text-center '>
                  <p className='text-xl my-4 border-r-2 border-black p-2 border-opacity-40 w-[50%] '>
                  At <span className='text-2xl font-extrabold text-black '>Monopoly prime</span> our team is the heart of everything we do. We’re passionate, dedicated, and driven to help you achieve your real estate goals
                  </p>
                  <p className='text-xl my-4 p-2 w-[50%]'>
                  With a blend of experience, innovation, and care, our team works tirelessly to turn your real estate dreams into reality.
                  </p>
                </div>
                <div id='our-team-info' className='flex w-full text-center'>
                  <p className='text-xl my-4 border-r-2 border-black p-2 border-opacity-40 w-[50%]'>
                  What makes us stand out? Our team’s commitment to integrity, collaboration, and results.
                  </p>
                  <p className='text-xl my-4 p-2 w-[50%]'>
                  Our team ensures every property stands out in the competitive market.
                  </p>
                </div>

            </div>
            </div>
            </>
     );
}
 
export default OurTeam;