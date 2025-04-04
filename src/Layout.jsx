import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader/Preloader';
import { motion } from 'framer-motion';

const Layout = () => {
  const [selectedLanguage , setSelectedLanguage] = useState(true)
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      {!isLoading && (
        <motion.div
          className="flex flex-col gap-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <ScrollToTop />
          <Navbar 
          selectedLanguage={selectedLanguage} 
          setSelectedLanguage={setSelectedLanguage} 
          />
          <Outlet 
          context={{ selectedLanguage, setSelectedLanguage }}/>
          <Footer selectedLanguage={selectedLanguage}/>
        </motion.div>
      )}
    </>
  );
};

export default Layout;
