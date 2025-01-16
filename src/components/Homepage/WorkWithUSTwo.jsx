import React, { useState } from 'react';

const WorkTwo = () => {
    const [expandedID , setExpandedID] = useState(null);
    const cardsData =[{
                    id:1,
                    header:"Expertise in Dubai Real Estate Market",
                    content:"With deep knowledge of the local market, we offer tailored advice and solutions for buyers, sellers, and investors, ensuring your real estate journey is seamless and profitable.",
                    img:"/workcards/workcard1.jpg"
                    
                    },
                {
                    id:2,
                    header:"Customer-Centric Approach",
                    content:"Your goals are our priority. We focus on understanding your needs and providing personalized services to help you find the perfect property or investment.",
                    img:"/workcards/workcard2.jpg"
                    
                    },
                {
                    id:3,
                    header:"Transparency and Trust",
                    content:"We believe in building long-term relationships with our clients through honesty, integrity, and full transparency in all our transactions.",
                    img:"/workcards/workcard3.jpg"
                    
                    },
                {
                    id:4,
                    header:"Innovative Solutions",
                    content:"Leveraging cutting-edge technology and data analytics, we provide insights that give you a competitive advantage, whether you’re buying, selling, or investing.",
                    img:"/workcards/workcard4.jpg"
                    
                    },
                {
                    id:5,
                    header:"Wide Network of opportunities",
                    content:"We connect you to an extensive portfolio of properties, from luxury apartments in Dubai to emerging investment opportunities across the Emirates.",
                    img:"/workcards/workcard5.jpg"
                    
                    },
                {
                    id:6,
                    header:"Growth Potential",
                    content:"Partnering with us means joining a company that’s on the rise. As a startup, we’re agile, forward-thinking, and focused on creating value for our clients and investors.",
                    img:"/workcards/workcard6.jpg"
                    
                    },
                {
                    id:7,
                    header:"Sustainability Focus",
                    content:"We are committed to promoting sustainable real estate practices, helping you invest in properties that align with environmental and societal goals.",
                    img:"/workcards/workcard7.jpg"
                    
                    },
                {
                    id:8,
                    header:"Your success is our success",
                    content:"We measure our success by how well we help you achieve your real estate goals. Your satisfaction drives everything we do.",
                    img:"/workcards/workcard8.jpg"
                }]
    const textTrimmer=(text)=>{
                return text.length > 50 ? `${text.slice(0,80)}....`: text
    }
    const toggleContent = (id) => {
        setExpandedID((prev) => (prev === id ? null : id));
    };
    return ( <>
            <div className='w-full bg-white flex justify-center'>
                <div className='flex flex-col w-[94%] h-[auto] bg bg-gray-300 rounded-3xl py-8 pt-16 gap-10 px-5'>
                <div className='w-full text-center flex-col justify-center'>
                            <h1 className='text-3xl sm:text-6xl tracking-wide sm:tracking-widest font-extrabold'>
                            Why Work with Us?
                            </h1>
                        </div>
                <div id='work-cards-container' className='w-full flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-5 items-center content-center'>
                    {cardsData.map((card)=>
                       (
                            <div key={card.id} className='card w-full h-[auto]   flex flex-col justify-center items-center md:flex-row gap-1 ' >   
                                <div className='image w-[90%] h-[20rem] flex items-center rounded-xl '>
                                    <img src={card.img} alt={card.header} className='w-full h-full rounded-xl object-cover object-center'/>
                                </div>
                                <div className="flex flex-col h-[auto] justify-center  p-5 gap-4 md:min-h-[20rem] text-center w-full">
                                    <div className='text-2xl font-extrabold'>
                                        {card.header}
                                    </div>
                                    <div className="text-xl">
                                        {expandedID === card.id ? card.content : textTrimmer(card.content)}<span className='text-blue-600 cursor-pointer' onClick={() => toggleContent(card.id)}>
                                            {expandedID === card.id? "See less" : "See more"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                    
                </div>
                </div>
            </div>
            </> );
}
 
export default WorkTwo;