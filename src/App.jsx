import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import HomePage from './Pages/Homepage/HomePage';
import About from './Pages/About/About';

//import Navbar from './components/Navbar';

const App = () => {
  return ( <>
        <Router>
          <Routes>
            <Route path='/' element={<Layout/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='about' element={<About/>}/>
            </Route>
          </Routes>
        </Router>
  </> );
}
 
export default App;