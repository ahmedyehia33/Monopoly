import React from 'react';
import './home-section.css';
import Typewriter from 'typewriter-effect';


const HomeSection = () => {
    return (  <>
      <div
          id="home-section"
          className="relative h-[35rem] sm:h-[40rem] w-full flex items-center content-center justify-center overflow-hidden"
      >
          {/* Background Video */}
          <video
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover"
          >
              <source src="/background-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>

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
              <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-center text-black  ">
                      <Typewriter
                          onInit={(typewriter) => {
                              typewriter
                                  .typeString(
                                      'Welcome to the Real Estate Market in the Emirates!'
                                  )
                                  .pauseFor(1500)
                                  .deleteAll()
                                  .typeString('Find the best properties here!')
                                  .pauseFor(1500)
                                  .start();
                          }}
                          options={{
                              loop: true, // This makes the typing effect loop
                              delay: 75, // Adjust typing speed (in ms)
                          }}
                      />
                  </h1>
              </div>
          </div>
      </div>
  </> );
}
 
export default HomeSection;