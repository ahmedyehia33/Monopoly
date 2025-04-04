import React, { useRef, useState } from "react";
import "./team.css";
import { AnimatePresence, motion } from "framer-motion";
import TeamSwiper from "./TeamSwipper";
import SelectedMember from "./SelectedMember";

const Team = ({selectedLanguage}) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const teamContainerRef = useRef(null);

  return (
    <div ref={teamContainerRef} className="w-full bg-white flex justify-center py-[2.5rem]">
      <div id="our-team-container" className="flex flex-col w-[94%] overflow-hidden bg-gray-300 px-[2rem] pt-[4rem] pb-[6rem] rounded-3xl">
        
        <div id="our-team-header" data-aos="fade-right" className="w-full flex flex-col justify-center items-center gap-2">
         {selectedLanguage?
          <h1 className="text-3xl text-center sm:text-5xl md:text-8xl tracking-wide sm:tracking-wider pt-4 font-medium md:font-thin pl-4">
            Meet <span className="text-white font-extrabold">our</span> team
          </h1>:
          <h1 className="text-3xl text-center sm:text-5xl md:text-8xl tracking-wide sm:tracking-wider pt-4 font-medium md:font-thin pl-4">
          تعرف على <span className="text-white font-extrabold">فريقنا</span>
        </h1>
          }
          <p className="text-xl md:text-2xl text-gray-500 text-center">{selectedLanguage? 
          "The experts behind every dream home":
          "الخبراء وراء كل منزل أحلام"}</p>
        </div>
        
        <div id="our-team-swiper" data-aos="fade-left" data-aos-offset="300" className="border-opacity-50">
          <AnimatePresence mode="wait">
            {selectedMember ? (
              <SelectedMember selectedMember={selectedMember} setSelectedMember={setSelectedMember} />
            ) : (
              <TeamSwiper setSelectedMember={setSelectedMember} selectedLanguage={selectedLanguage} />
            )}
          </AnimatePresence>
        </div>
         <div className="flex flex-col">
                <div 
                data-aos='fade-up'
                data-aos-offset="100"
                id='our-team-info' className='text-white flex flex-col justify-center md:flex-row w-full text-center mb-4 gap-x-10'>
                        {selectedLanguage ?
                        <p className='text-xl my-4  p-5 border-opacity-40 w-[100%] md:w-[45%] '>
                        At <span className='text-2xl font-extrabold text-gray-300 '>Monopoly prime</span> our team is the heart of everything we do. We’re passionate, dedicated, and driven to help you achieve your real estate goals
                        </p>:
                        <p className='text-xl my-4  p-5 border-opacity-40 w-[100%] md:w-[45%] '>
                        في <span className='text-2xl font-extrabold text-gray-300 '>مونوبولي برايم</span> ، فريقنا هو جوهر كل ما نقوم به. نحن شغوفون ومخلصون وعازمون على مساعدتك في تحقيق أهدافك العقارية.
                        </p>}
                        <p className='text-xl my-4 p-5 w-[100%] md:w-[45%]'>
                       {selectedLanguage?
                       " With a blend of experience, innovation, and care, our team works tirelessly to turn your real estate dreams into reality." 
                       :
                       "بمزيج من الخبرة والابتكار والرعاية، يعمل فريقنا بلا كلل لتحويل أحلامك العقارية إلى حقيقة."
                    }
                        </p>
                </div>
                <div 
                data-aos='fade-up'
                data-aos-offset="100"
                id='our-team-info' className='text-white flex flex-col md:flex-row w-full text-center gap-x-10'>
                        <p className='text-xl my-4  p-5 border-opacity-40 w-[100%] md:w-[45%]'>
                        {selectedLanguage? 
                        "What makes us stand out? Our team’s commitment to integrity, collaboration, and results." :
                        "ما الذي يميزنا؟ التزام فريقنا بالنزاهة والتعاون والنتائج."}
                        </p>
                        <p className='text-xl my-4 p-5 w-[100%] md:w-[45%]'>
                        {selectedLanguage? 
                        "Our team ensures every property stands out in the competitive market.":
                        " يضمن فريقنا أن كل عقار يبرز في السوق التنافسية."}
                        </p>
                </div>
        </div>
      </div>
      
    </div>
  );
};

export default Team;