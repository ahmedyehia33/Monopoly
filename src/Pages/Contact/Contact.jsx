import React, { useState, useEffect } from 'react';
import './contact.css'
import ContactForm from '../../components/contact-form/ContactFrom';
import FreeSessionModal from '../../components/freeSessionModal/FreeSessionModal';
import ContactInfo from './ContactInfo';

const Contact = () => {
    const [showModal, setShowModal] = useState(true);

    const handleBookNow = () => {
        setShowModal(false);
        const formSection = document.getElementById('contact-container');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return ( <>
        <FreeSessionModal 
            show={showModal} 
            onClose={() => setShowModal(false)} 
            onBookNow={handleBookNow} 
        />


        <div className='w-full flex flex-col space-y-10  items-center bg-white mt-[5rem]'>
            <div id='contact-container' className='w-full rounded-b-3xl grid grid-cols-1 md:grid-cols-2 '>
                <div className=' h-full flex items-center mt-12 justify-center md:items-center md:mb-0 md:justify-start '>
                    <h2 className=' w-full text-6xl md:text-7xl lg:text-8xl font-extrabold  rounded-3xl p-10 italic  text-center'>
                        Let's <br/> Connect
                    </h2>
                </div>
                <div className='py-8'>
                    <ContactForm/>
                </div>
            </div>
            <div className=' w-[94%] md:p-[2rem]  '>
                 <ContactInfo/>
             </div>
        </div>
    </> );
}
 
export default Contact;
