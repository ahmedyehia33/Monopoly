import React , { useEffect } from 'react';
import './home-section.css';
import Typewriter from 'typewriter-effect';


const HomeSection = () => {   useEffect(() => {
    // Get the video and image elements
    const videoElement = document.getElementById('background-video');
    const imageElement = document.getElementById('background-image');

    // Check the window width and control visibility
    const updateMediaVisibility = () => {
        const isMobile = window.innerWidth <= 620;

        if (videoElement) {
            videoElement.style.display = isMobile ? 'none' : 'block';
        }

        if (imageElement) {
            imageElement.style.display = isMobile ? 'block' : 'none';
        }
    };

    // Run on load and window resize
    updateMediaVisibility();
    window.addEventListener('resize', updateMediaVisibility);

    return () => {
        window.removeEventListener('resize', updateMediaVisibility); // Cleanup
    };
}, []);
        

    return (  <>
      <div
          id="home-section"
          className="relative h-[35rem] sm:h-[40rem] w-full flex items-center content-center justify-center overflow-hidden"
      >
          {/* Background Video */}
          <video
              id='background-video'
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover"
          >
              <source src="/background-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <img 
            className='absolute top-0 left-0 w-full h-full object-cover'
         id='background-image' 
          src='/skyline-201807999.jpg'
           alt='background-image' />

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
                  <h1 className="text-4xl md:text-6xl font-bold text-center text-white ">
                      <Typewriter
                          onInit={(typewriter) => {
                              typewriter
                                  .typeString(
                                      'Welcome to <span class="monopoly">MONOPOLY</span> '
                                  )
                                  .pauseFor(1500)
                                  .deleteAll()
                                  .typeString('Where Vision Meets Property.')
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