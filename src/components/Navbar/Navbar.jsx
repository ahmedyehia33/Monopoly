import React, { useState, useEffect } from 'react';
import './navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // Navbar visibility
    const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          if(open){
            setIsVisible(true);
          }
          else if (currentScrollY > lastScrollY && currentScrollY > 500) {
            // Scroll Down: Hide Navbar
            setIsVisible(false);
          } 
          
          else {
            // Scroll Up: Show Navbar
            setIsVisible(true);
          }
    
          setLastScrollY(currentScrollY); // Update last scroll position
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll); // Cleanup
        };
      }, [lastScrollY]);
    
  
    return ( 
            <>
            <div className={`transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } h-[6rem] w-full  text-white p-0 flex justify-between bg-black items-center pr-8 border-b-2 border-double border-white`} id='navbar'>
                <div className="logo w-[12rem] md:w-[15rem] sm:w-[15rem] h-[100%] ">
                    <img src='/FOR DARK BACKGROUND2.png' className='w-full h-full rounded-lg' />
                </div>
                <div id='nav-items' className='flex gap-4 items-center justify-end  text-center w-[80%] h-[99%]'>
                    <div className='h-full w-[auto] min-w-[6rem] flex items-center content-center hover:bg-none  rounded-md'>
                        <h2 className='w-full text-3xl hover:text-gray-600 hover:cursor-pointer text-white '>Home</h2>                        
                    </div>
                    <div className='h-full w-[auto] min-w-[6rem] flex items-center content-center hover:bg-none  rounded-md'>
                        <h2 className='w-full text-3xl hover:text-gray-600 hover:cursor-pointer text-white '>Services</h2>                        
                    </div>
                    <div className='h-full w-[auto] min-w-[6rem] flex items-center content-center hover:bg-none  rounded-md'>
                        <h2 className='w-full text-3xl hover:text-gray-600 hover:cursor-pointer text-white '>About</h2>                        
                    </div>
                    <div className='h-full w-[auto] min-w-[6rem] flex items-center content-center hover:bg-none  rounded-md'>
                        <h2 className='w-full text-3xl hover:text-gray-600 hover:cursor-pointer text-white '>Contact Us</h2>                        
                    </div>

                </div>
                <div id='nav-button' className='h-[60%] w-[3rem] flex  border-4 border-white rounded-lg' onClick={()=>setOpen(!open)}>
                    {open? ( <div className='w-full h-full text-center text-4xl flex content-center items-center justify-center'>
                        X
                    </div>) : ( <div className='flex flex-col items-center content-center justify-center gap-[4px] p-1 w-full h-full '>
                                    <div className='h-[4px] w-[99%] bg-white'></div>
                                    <div className='h-[4px] w-[99%] bg-white'></div>
                                    <div className='h-[4px] w-[99%] bg-white'></div>
                                    </div>)}
                    

                </div>
            </div>
            {open ? (<div id='nav-menu' className='h-[80%] w-[70%] bg-black opacity-80 fixed right-0 mt-[6rem]'></div>) : null}
            </>
     );
}
 
export default Navbar;