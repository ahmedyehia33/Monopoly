import React, { useEffect, useState } from 'react';
import './home-section.css';
import Typewriter from 'typewriter-effect';


const HomeSection = ({selectedLanguage}) => {   
    const [key, setKey] = useState(0); //
    useEffect(() => {
        setKey((prevKey) => prevKey + 1); // ✅ Force re-run Typewriter when language changes
      }, [selectedLanguage]);
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 620);
    

    // Handle screen resizing to determine whether to render video or image
    useEffect(() => {
        const handleResize = () => {
                                        setIsMobile(window.innerWidth <= 620);
                                    };

        window.addEventListener('resize', handleResize);

        return () => {
                        window.removeEventListener('resize', handleResize); // Cleanup listener
                     };
            }, []);

 return ( 
    <>
        <div id="home-section"
                 className="relative h-[35rem] sm:h-[40rem] w-full flex items-center content-center justify-center overflow-hidden"
            >
            {/* Background Media */}
            {!isMobile ? (
                            <video
                                id="background-video"
                                autoPlay
                                loop
                                muted
                                className="absolute top-0 left-0 z-10 w-full h-full object-cover"
                            >
                                <source src="/background-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img
                                id="background-image"
                                className="absolute top-0 left-0 w-full h-full z-10  "
                                src="/background.jpg"
                                alt="background-image"
                            />
                        )}

          {/* Content */}
            <div className="relative z-10 w-full   flex flex-col items-center content-center justify-center">
                <div
                  id="logo"
                  className="w-full  sm:w-[100%] md:w-[60%]  flex items-center justify-center content-center"
                >
                  <img
                      src="/logos/FOR WHITE BACKGROUND2.png"
                      alt="monopoly-logo"
                      className="w-full  h-[100%]"
                  />
                </div>
                <div key={key}> {/* ✅ Re-render Typewriter when key changes */}
  <h1 translate="no" className="text-4xl md:text-6xl font-bold text-center text-white">
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString(selectedLanguage 
            ? "Welcome to <span class='monopoly'>MONOPOLY prime</span>" 
            : ""
          )
          .pasteString(!selectedLanguage 
            ? "مرحبا في <span class='monopoly'>مونوبلي برايم</span>" 
            : ""
          )
          .pauseFor(1500)
          .deleteAll()
          .typeString(selectedLanguage 
            ? "Where Vision Meets Property." 
            : ""
          )
          .pasteString(!selectedLanguage 
            ? "حيث تتلاقى الرؤية مع الطموح" 
            : ""
          )
          .pauseFor(2500)
          .start();
      }}
      options={{
        loop: true,
        delay: 75,
      }}
    />
  </h1>
</div>
            </div>
        </div>
    </>  ); }
                           
 
export default HomeSection;