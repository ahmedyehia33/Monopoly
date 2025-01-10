import React from 'react';
import './our-team.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
            <div id='our-team-container' className='flex flex-col w-[94%] bg-gray-300 p-5 rounded-3xl '>
                <div id='our-team-header' className='w-full flex justify-center items-center' >
                    <h1 className='text-3xl sm:text-6xl tracking-wide sm:tracking-widest font-extrabold'>
                        Meet our team
                    </h1>
                </div>
                <div id='our-team-swiper'>
                                  <Swiper
                          
                          grabCursor={false}
                          centeredSlides={true}
                          
                          breakpoints={{
                              // When the window width is >= 640px
                              640: {
                                slidesPerView: 1,
                              },
                              // When the window width is >= 768px
                              768: {
                                slidesPerView: 2,
                              },
                              // When the window width is >= 1024px
                              1024: {
                                slidesPerView: 3,
                              },
                            }}
                          loop={true}
                          
                          autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                          pagination={{ clickable: false}}
                          allowTouchMove={false}
                          navigation={true}
                          modules={[ Pagination, Navigation, Autoplay]}
                          className="mySwiper"
                        >
                          {teamMockup.team.map((member) => (
                              
                            <SwiperSlide  key={member.name} style={{ boxShadow: 'none' }}>
                              <div className='h-[30rem] w-[full] p-5 bg-black my-20 mx-10 flex flex-col items-start justify-end rounded-3xl border-2 border-white text-white' style={{backgroundImage: `url(${member.image})`, backgroundPosition:'center', backgroundSize:'cover'}}>
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

            </div>
            </div>
            </>
     );
}
 
export default OurTeam;