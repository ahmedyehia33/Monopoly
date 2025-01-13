import React, { useState, useEffect } from 'react';
import './navbar.css';
import { IoHome } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

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
        } h-[6rem] w-full  text-white p-0 flex justify-between bg-black opacity-90 z-20 items-center pr-8 border-b-2 border-double border-white`} id='navbar'>
                <div className="logo w-[12rem] md:w-[18rem] sm:w-[15rem]   ">
                    <img src='/logos/FOR DARK BACKGROUND2.png' className='w-full h-full' />
                </div>
                <div id='nav-items' className='flex gap-4 mr-4 items-center justify-end  text-center w-[80%] h-[99%]'>
                <NavLink to='/' className={({ isActive }) => (isActive ? "text-gray-600" : "")}>
                    <div className='h-full w-[auto] min-w-[6rem] flex items-center content-center hover:bg-none  rounded-md hover:text-gray-600 hover:cursor-pointer'>
                   <span className='mr-2'> <IoHome  size={25} /></span> <h2 className='w-full text-2xl '> Home</h2>                        
                    </div>
                    </NavLink>
                    <NavLink to='services' className={({ isActive }) => (isActive ? "text-gray-600" : "")}>
                    <div className='h-full w-[auto] mr-4 min-w-[6rem] flex items-center content-center hover:bg-none  rounded-md hover:text-gray-600 hover:cursor-pointer'>
                   <span className='mr-2'><GrServices  size={25} /></span> <h2 className='w-full text-2xl '> Services</h2>                        
                    </div>
                    </NavLink>
                    <NavLink to='about' className={({ isActive }) => (isActive ? "text-gray-600" : "")}>
                    <div className='h-full w-[auto] mr-4 min-w-[6rem] flex items-center content-center hover:bg-none  rounded-md hover:text-gray-600 hover:cursor-pointer'>
                   <span className='mr-2'><BsFillInfoSquareFill  size={25} /></span> <h2 className='w-full text-2xl '> About</h2>                        
                    </div>
                    </NavLink>
                    <NavLink to='contact' className={({ isActive }) => (isActive ? "text-gray-600" : "")}>
                    <div className='h-full w-[auto]  min-w-[6rem] flex items-center content-center hover:bg-none  rounded-md hover:text-gray-600 hover:cursor-pointer'>
                   <span className='mr-2'><IoCallOutline  size={25} /></span> <h2 className='w-full text-2xl '> Contact</h2>                        
                    </div>
                    </NavLink>
                </div>
                <div id='nav-button' className='h-[50%] w-[3rem] flex  border-2 border-white rounded-full' onClick={()=>setOpen(!open)}>
                    {open? ( <div className='w-full h-full text-center text-3xl flex pt-1 items-center justify-center'>
                        X
                    </div>) : ( <div className='flex flex-col items-center content-center justify-center gap-[4px] p-1 w-full h-full '>
                                    <div className='h-[2px] w-[80%] bg-white'></div>
                                    <div className='h-[2px] w-[90%] bg-white'></div>
                                    <div className='h-[2px] w-[80%] bg-white'></div>
                                    </div>)}
                    

                </div>
            </div>
            {open ? (<div id='nav-menu' className='rounded-b-3xl w-[70%] z-20 bg-black text-white opacity-100 fixed right-0 mt-[6rem] pt-[1rem] flex flex-col gap-4'>
                        <NavLink to='/' className={({ isActive }) => (isActive ? "text-gray-600" : "")}
                            onClick={()=> {setOpen(false)
                              setIsVisible(true)}}
                        >
                          <div className=' w-[full] border-b border-white pb-[2rem] flex items-center justify-center hover:bg-none  rounded-md  hover:cursor-pointer'>
                            <div className='flex '> <span className='mr-2'> <IoHome  size={25} /></span> <h2 className='w-full text-2xl '> Home</h2></div>                     
                          </div>
                        </NavLink>
                        <NavLink to='services' className={({ isActive }) => (isActive ? "text-gray-600" : "")}
                            onClick={()=> {setOpen(false)
                              setIsVisible(true)}}
                        >
                          <div className=' w-[full] border-b border-white pb-[2rem] flex items-center justify-center hover:bg-none  rounded-md  hover:cursor-pointer'>
                            <div className='flex '> <span className='mr-2'> <GrServices  size={25} /></span> <h2 className='w-full text-2xl '> Services</h2></div>                     
                          </div>
                        </NavLink>
                        <NavLink to='about' className={({ isActive }) => (isActive ? "text-gray-600" : "")}
                            onClick={()=> {setOpen(false)
                              setIsVisible(true)}}
                        >
                          <div className=' w-[full] border-b border-white pb-[2rem] flex items-center justify-center hover:bg-none  rounded-md  hover:cursor-pointer'>
                            <div className='flex '> <span className='mr-2'> <BsFillInfoSquareFill  size={25} /></span> <h2 className='w-full text-2xl '> About</h2></div>                     
                          </div>
                        </NavLink>
                        <NavLink to='contact' className={({ isActive }) => (isActive ? "text-gray-600 " : "")}
                            onClick={()=> {setOpen(false)
                              setIsVisible(true)}}
                        >
                          <div className=' w-[full] border-b border-white pb-[2rem] flex items-center justify-center hover:bg-none  rounded-md  hover:cursor-pointer'>
                            <div className='flex '> <span className='mr-2'> <IoCallOutline  size={25} /></span> <h2 className='w-full text-2xl '> Contact</h2></div>                     
                          </div>
                        </NavLink>

                     </div>) : null}
            </>
     );
}
 
export default Navbar;