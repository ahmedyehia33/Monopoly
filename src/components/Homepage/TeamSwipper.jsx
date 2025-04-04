import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './team-swipper.css'
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { teamMockup, teamMockupArabic } from "../../index";

const TeamSwiper = ({ setSelectedMember , selectedLanguage}) => {
  return (
    <div>
      <Swiper
        grabCursor={false}
        centeredSlides={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 30,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          580: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        loopAdditionalSlides={2}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation, Autoplay, EffectCoverflow]}
        className="mySwiper"
      >
        {(selectedLanguage ? teamMockup.team : teamMockupArabic.team).map((member, index) => (
          <SwiperSlide key={member.name}>
            <div
              onClick={() => setSelectedMember(member)}
              
              className='slide h-[25rem] w-[full] text-[#d7fdff] md:h-[25rem] lg:h-[24rem] p-5 bg-black mt-10 mb-5 mx-10 flex flex-col items-start justify-end rounded-3xl border-2 border-white ' 
              style={{
                backgroundImage: `url(${member.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="grid grid-cols-4 w-full">
                <div className="flex flex-col gap-4 w-full col-span-3">
                  <div className="text-2xl md:text-3xl w-full font-medium">
                    {member.name}
                  </div>
                  <div className="text-xl md:text-2xl">{member.role}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full flex justify-center border-b-2 border-gray-800 h-[5rem] gap-2 my-2">
        <motion.div
          className="custom-prev h-[4rem] w-[4rem] rounded-full bg-black flex justify-center items-center select-none"
          whileTap={{ scale: 0.9, rotate: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaAngleLeft size={60} className="hover:cursor-pointer text-white" />
        </motion.div>

        <motion.div
          className="custom-next h-[4rem] w-[4rem] rounded-full bg-black flex justify-center items-center select-none"
          whileTap={{ scale: 0.9, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaAngleRight size={60} className="hover:cursor-pointer text-white" />
        </motion.div>
      </div>
    </div>
  );
};

export default TeamSwiper;