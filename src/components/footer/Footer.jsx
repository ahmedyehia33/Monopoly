import React from 'react';
import './footer.css';
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return ( <>
                <div className='w-full bg-white pt-[3rem] flex justify-center text-white ' >
                   <div id='footer-container' className='w-[98%] overflow-x-hidden bg-black rounded-t-3xl flex flex-col'>
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
                            <div className="social-icon facebook  flex w-full items-center gap-0 hover:cursor-pointer">
                                <span className='icon-container text-white h-[3rem] w-[3rem]'><img src='/socialMediaIcons/facebook.png' /></span>
                            </div>
                            <div className="social-icon instagram flex items-center gap-0 hover:cursor-pointer">
                                <span className='icon-container text-white h-[3rem] w-[3rem]'><img src='/socialMediaIcons/instagram.png' /></span>
                            </div>
                            <div className="social-icon twitter flex items-center gap-0 hover:cursor-pointer">
                                <span className='icon-container text-white'><FaSquareXTwitter className='twitter-icon' size={50}/></span>
                            </div>
                            <div className="social-icon whatsapp flex items-center gap-0 hover:cursor-pointer">
                                 <span className='icon-container text-white h-[3rem] w-[3rem]'><img src='/socialMediaIcons/whatsapp.png' /></span>
                            </div>
                            <div className="social-icon email flex items-center gap-0 hover:cursor-pointer">
                                 <span className='icon-container text-white h-[3rem] w-[3rem]'><img src='/socialMediaIcons/gmail.png' /></span>
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