import React from 'react';
import './home-section.css';
import Typewriter from 'typewriter-effect';


const HomeSection = () => {
    return (  <>
      <div
          id="home-section"
          className="relative h-[35rem] w-full flex items-center content-center justify-center overflow-hidden"
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
          <div className="relative z-10 w-[70%]   flex flex-col items-center content-center justify-center">
              <div
                  id="logo"
                  className="w-[100%]  sm:w-[60%] md:w-[50%] flex items-center justify-center content-center"
              >
                  <img
                      src="/logo-02.jpg"
                      alt="monopoly-logo"
                      className="w-full opacity-70 h-[80%]"
                  />
              </div>
              <div>
                  <h1 className="text-4xl font-bold text-center text-gray-900">
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