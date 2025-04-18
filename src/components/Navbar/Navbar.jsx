import React, { useState, useEffect } from 'react';
import './navbar.css';
import { IoHome } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MdLanguage } from "react-icons/md";

const Navbar = ({selectedLanguage , setSelectedLanguage}) => {
    
    const [open, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // Navbar visibility
    const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
    const [bg , setBg] = useState('black'); 
    const location = useLocation()
    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          if (open) {
            setIsVisible(true); // If the menu is open, navbar should always be visible
          } else if (location.pathname === "/" && currentScrollY <= 700) {
            setIsVisible(true); // On the homepage, show navbar within first 700px
          } else if (currentScrollY > lastScrollY && currentScrollY >= 50) {
            setIsVisible(false); // Scrolling down: Hide navbar
          } else {
            setIsVisible(true); // Scrolling up: Show navbar
          }
          if (location.pathname === "/" && currentScrollY <= 500) {
            setBg('none'); // Opacity increases from 0 to 1 as you scroll past 500px
          } else {
            setBg('black'); // Maximum opacity after 500px
          }
          setLastScrollY(currentScrollY); // Update last scroll position
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll); // Cleanup
        };
      }, [lastScrollY, open , location.pathname]);
      useEffect(()=>{
          if(location.pathname === '/'){
            setBg('none')
          }
          else{
            setBg('black')
          }
      },[location.pathname])
    const handleSelectedLanguage =()=>{
      setSelectedLanguage(!selectedLanguage)
    }
  
    return ( 
            <>
            <div className={`transition-transform duration-300 ${
               isVisible ? 'translate-y-0' : '-translate-y-full'
               } h-[6rem] w-full  text-white p-0 flex justify-between   z-20 items-center pr-8 border-b-2 border-double border-white`}
               style={{ background: bg }}
               id='navbar'>
               <Link to="/">
                    <div className="logo w-[10rem] ml-4 md:w-[10rem]  md:ml-5   ">
                        <img src='/logos/FOR DARK BACKGROUND2.png' className='w-full h-full' />
                    </div>
                </Link>
                <div id='nav-items' className='flex gap-4 mr-4 items-center justify-end  text-center w-[80%] h-[99%]'>
                <NavLink to='/' className={({ isActive }) => (isActive ? "text-gray-600" : "")}>
                    <div className='h-full w-[auto] min-w-[6rem] flex items-center content-center hover:bg-none  rounded-md hover:text-gray-600 hover:cursor-pointer'>
                   <span className='mr-2'> <IoHome  size={25} /></span> <h2 className='w-full text-2xl '> {selectedLanguage? 'Home' : 'الرئيسية'}</h2>                        
                    </div>
                    </NavLink>
                    <NavLink to='services' className={({ isActive }) => (isActive ? "text-gray-600" : "")}>
                    <div className='h-full w-[auto] mr-4 min-w-[6rem] flex items-center content-center hover:bg-none  rounded-md hover:text-gray-600 hover:cursor-pointer'>
                   <span className='mr-2'><GrServices  size={25} /></span> <h2 className='w-full text-2xl '> {selectedLanguage? 'Services' : 'خدماتنا'}</h2>                        
                    </div>
                    </NavLink>
                    <NavLink to='about' className={({ isActive }) => (isActive ? "text-gray-600" : "")}>
                    <div className='h-full w-[auto] mr-4 min-w-[6rem] flex items-center content-center hover:bg-none  rounded-md hover:text-gray-600 hover:cursor-pointer'>
                   <span className='mr-2'><BsFillInfoSquareFill  size={25} /></span> <h2 className='w-full text-2xl '> {selectedLanguage? 'About' : 'من نحن' }</h2>                        
                    </div>
                    </NavLink>
                    <NavLink to='contact' className={({ isActive }) => (isActive ? "text-gray-600" : "")}>
                    <div className='h-full w-[auto]  min-w-[6rem] flex items-center content-center hover:bg-none  rounded-md hover:text-gray-600 hover:cursor-pointer'>
                   <span className='mr-2'><IoCallOutline  size={25} /></span> <h2 className='w-full text-2xl '> {selectedLanguage? 'Contact' :'تواصل معنا'}</h2>                        
                    </div>
                    </NavLink>
                   
                    <div
                    onClick={handleSelectedLanguage} 
                    className='h-full w-[auto]  min-w-[6rem] flex items-center content-center hover:bg-none  rounded-md hover:text-gray-600 hover:cursor-pointer'>
                   <span className='mr-2'><MdLanguage  size={25} /></span> <h2 className='w-full text-2xl '> {selectedLanguage ? 'العربية' : 'English'}</h2>                        
                    </div>
                    
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
            {open ? (<div id='nav-menu' className='rounded-b-3xl w-[100%] z-20 bg-black text-white opacity-100 fixed right-0 mt-[6rem] pt-[1rem] flex flex-col gap-4'>
                        <NavLink to='/' className={({ isActive }) => (isActive ? "text-gray-600" : "")}
                            onClick={()=> {setOpen(false)
                              setIsVisible(true)}}
                        >
                          <div className=' w-[full] border-b border-white pb-[2rem] flex items-center justify-center hover:bg-none  rounded-md  hover:cursor-pointer'>
                            <div className='flex ' 
                            data-aos="fade-left"
                            data-aos-delay="100"> <span className='mr-2'> <IoHome  size={25} /></span> <h2 className='w-full text-2xl '> {selectedLanguage? 'Home' : 'الرئيسية'}</h2></div>                     
                          </div>
                        </NavLink>
                        <NavLink to='services' className={({ isActive }) => (isActive ? "text-gray-600" : "")}
                            onClick={()=> {setOpen(false)
                              setIsVisible(true)}}
                        >
                          <div className=' w-[full] border-b border-white pb-[2rem] flex items-center justify-center hover:bg-none  rounded-md  hover:cursor-pointer'>
                            <div className='flex'
                            data-aos="fade-left"
                            data-aos-delay="200"> <span className='mr-2'> <GrServices  size={25} /></span> <h2 className='w-full text-2xl '> {selectedLanguage? 'Services' : 'خدماتنا'}</h2></div>                     
                          </div>
                        </NavLink>
                        <NavLink to='about' className={({ isActive }) => (isActive ? "text-gray-600" : "")}
                            onClick={()=> {setOpen(false)
                              setIsVisible(true)}}
                        >
                          <div className=' w-[full] border-b border-white pb-[2rem] flex items-center justify-center hover:bg-none  rounded-md  hover:cursor-pointer'>
                            <div className='flex'
                            data-aos="fade-left"
                            data-aos-delay="300"> <span className='mr-2'> <BsFillInfoSquareFill  size={25} /></span> <h2 className='w-full text-2xl '> {selectedLanguage? 'About' : 'من نحن' }</h2></div>                     
                          </div>
                        </NavLink>
                        <NavLink to='contact' className={({ isActive }) => (isActive ? "text-gray-600 " : "")}
                            onClick={()=> {setOpen(false)
                              setIsVisible(true)}}
                        >
                          <div className=' w-[full] border-b border-white pb-[2rem] flex items-center justify-center hover:bg-none  rounded-md  hover:cursor-pointer'>
                            <div className='flex'
                            data-aos="fade-left"
                            data-aos-delay="400"> <span className='mr-2'> <IoCallOutline  size={25} /></span> <h2 className='w-full text-2xl '> {selectedLanguage? 'Contact' :'تواصل معنا'}</h2></div>                     
                          </div>
                        </NavLink>
                        <div
                        onClick={()=> {
                          handleSelectedLanguage()
                          setOpen(false)
                        }} 
                        className=' w-[full]  pb-[2rem] flex items-center justify-center hover:bg-none  rounded-md  hover:cursor-pointer'>
                            <div className='flex'
                            data-aos="fade-left"
                            data-aos-delay="450"> <span className='mr-2'> <MdLanguage  size={25} /></span> <h2 className='w-full text-2xl '> {selectedLanguage ? 'العربية' : 'English' }</h2></div>                     
                          </div>

                     </div>) : null}
            </>
     );
}
 
export default Navbar;