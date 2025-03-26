import React from 'react';
import './footer.css';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    
    const handleClick = () => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return ( 
        <>
            <div className='w-full bg-white pt-[3rem] flex justify-center text-white ' >
                <div id='footer-container' className='w-[98%] overflow-x-hidden bg-black rounded-t-3xl flex flex-col gap-[0.5rem]'>
                    
                    {/* Logo & Social Media */}
                    <div className='flex flex-col md:flex-row w-full justify-between items-center pt-[2rem] px-16 pb-8  border-b-2 border-gray-600'>
                        <div id='footer-logo'>
                            <Link to="/" onClick={handleClick}> 
                                <div className='w-[15rem] h-[6rem]'> 
                                    <img src='/FOR DARK BACKGROUND2.png' alt='monopoly-logo' className='w-full object-cover object-center'/>
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-col justify-center items-center md:mr-[3rem]'>
                            <div className='w-full text-2xl font-extrabold text-center mb-2'>
                                Follow us on
                            </div>  
                            <div id='footer-contact-info' className='flex w-full justify-center gap-4 md:gap-6'>
                                <div className="social-icon instagram flex items-center hover:cursor-pointer">
                                    <span className='icon-container text-white bg-white rounded-xl h-[3rem] w-[3rem]'>
                                        <img src='/socialMediaIcons/instagram.png' />
                                    </span>
                                </div>
                                  <a href='https://www.facebook.com' target='_blank'>
                                    <div className="social-icon facebook flex items-center hover:cursor-pointer">
                                        <span className='icon-container text-white bg-white rounded-xl h-[3rem] w-[3rem]'>
                                            <img src='/socialMediaIcons/facebook.png' />
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className='w-full flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-[2rem]'>
                        
                        {/* Left Side: Email & Address */}
                        <div className='flex flex-col gap-2 md:w-[50%] lg:w-[30%] text-white md:text-start font-medium text-lg'>
                        <a href="https://wa.me/+971588697893?text=Hello May I Ask about my free session" target="_blank" rel="noopener noreferrer">
                            <div className="flex w-full items-center gap-2">
                                <MdEmail size={40} />
                                <p>MonopolyPrime@gmail.com</p>
                            </div>
                        </a>    
                        <a href="https://wa.me/+971588697893?text=Hello May I Ask about my free session" target="_blank" rel="noopener noreferrer">
                            <div className="flex w-full items-center gap-2 text-sm">
                                <MdLocationOn size={50} />
                                <p className='w-full md:w-[100%]'>Sahara Healthcare City - Office 529 - 5th Floor - Al Nahda - Al Nahda 1 - Sharjah - UAE</p>
                            </div>
                        </a>    
                        </div>

                        {/* Right Side: WhatsApp & Phone */}
                        <div className='flex flex-col w-full items-start gap-4 md:w-[30%] md:mr-[2rem] text-white md:text-end md:justify-end md:items-end font-medium text-lg'>
                            <a href="https://wa.me/+971588697893?text=Hello May I Ask about my free session" target="_blank" rel="noopener noreferrer">
                                <div className="flex w-full justify-center md:justify-end items-center gap-2">
                                    <FaWhatsappSquare size={40} />
                                    <div>+971588697893</div>
                                </div>
                            </a>    
                            <a href="tel:+97165797908" className='w-full'>
                                <div className="flex w-full justify-start md:justify-end items-center gap-2">
                                    <IoCall size={40} />
                                    <div>+97165797908</div>
                                </div>
                            </a>
                        </div>
                    </div>

                   
                    
                </div>
            </div>
        </> 
    );
}

export default Footer;