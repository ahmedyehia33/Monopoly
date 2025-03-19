import React from 'react';
import './contact.css'
import ContactForm from '../../components/contact-form/ContactFrom';

const Contact = () => {
    return ( <>
                <div className='w-full  flex justify-center bg-white mt-[5rem]'>
                    <div
                    id='contact-container'
                    
                    className='w-full grid grid-cols-1 md:grid-cols-2 ' >
                    <div className=' h-full flex items-center mt-12 justify-center md:items-center md:mb-0 md:justify-start '>
                        <h2 className='text-6xl md:text-9xl font-extrabold bg-white rounded-3xl p-10 italic bg-opacity-60 text-center'>Let's <br/> Connect</h2>
                    </div>
                    <div className=' py-8'>
                        <ContactForm/>

                    </div>
                    </div>
               </div>
             </>);
}
 
export default Contact;