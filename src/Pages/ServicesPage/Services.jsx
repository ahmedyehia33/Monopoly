import React from 'react';
import ContactForm from '../../components/contact-form/ContactFrom';
import ContactInfo from '../Contact/ContactInfo';

const Services = () => {
    return ( 
        <>
        <div className='w-full h-[40rem] flex-col justify-center bg-white mt-[10rem]'>
                    <div className='w-[94%] text-black text-5xl rounded-3xl flex justify-center items-center text-center bg-gray-300'>
                        Services
                    </div>
                    <ContactInfo/>
               </div>
        </>
     );
}
 
export default Services;