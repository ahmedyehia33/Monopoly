import React from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return ( <>
                <div className='w-full bg-white pt-[3rem] flex justify-center text-white ' >
                   <div id='footer-container' className='w-[98%]  bg-black rounded-t-3xl flex flex-col'>
                        <div className='flex flex-col md:flex-row w-full justify-between items-center pt-6 px-5'>
                        <div id='footer-logo'>
                            <div className='w-[15rem] h-[6rem] '> 
                                <img src='/FOR DARK BACKGROUND2.png' alt='monopoly-logo' className='w-full object-cover object-center'/>

                            </div>
                        </div>
                        <div className='flex-col '>
                          <div className='w-full text-2xl font-extrabold text-center mb-3'>
                            Follow us on
                          </div>  
                        <div id='footer-contact-info' className='grid grid-cols-5 gap-4 md:flex md:items-center md:gap-6'>
                            <div className="facebook flex w-full items-center gap-0 hover:cursor-pointer">
                                <span className='text-white'><IoLogoFacebook size={50}/></span>
                            </div>
                            <div className="facebook flex items-center gap-0 hover:cursor-pointer">
                                <span className='text-white'><FaInstagramSquare size={50}/></span>
                            </div>
                            <div className="facebook flex items-center gap-0 hover:cursor-pointer">
                                <span className='text-white'><FaSquareXTwitter size={50}/></span>
                            </div>
                            <div className="facebook flex items-center gap-0 hover:cursor-pointer">
                                <span className='text-white'><FaSquareWhatsapp size={50}/></span>
                            </div>
                            <div className="facebook flex items-center gap-0 hover:cursor-pointer">
                                <span className='text-white'><MdEmail size={50}/></span>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className='flex w-full gap-3 items-center pb-2 mt-10 justify-center text-md underline '>
                                <div className='hover:cursor-pointer'>
                                    About
                                </div>
                                <div className='hover:cursor-pointer'>
                                    Contact
                                </div>
                                <div className='hover:cursor-pointer'>
                                    FAQ
                                </div>
                        </div>
                   </div>
                </div>
            </> );
}
 
export default Footer;