import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonial/Testimonial';
import Portfolio from './components/Blogs/Portfolio';
import Contact from './pages/Contact';
import BrandsLogo from './components/BrandsLogo/BrandsLogo'
import Footer from './components/Footer/Footer'
import { Element } from 'react-scroll';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Element name="home" className="section">
          <Home />
        </Element>
        <Element name="brands" className="section">
          <BrandsLogo />
        </Element>
        <Element name="services" className="section">
          <Services />
        </Element>
        <Element name="testimonials" className="section">
          <Testimonials />
        </Element>
        <Element name="portfolio" className="section">
          <Portfolio />
        </Element>
        
          <Element name="contact" className='section'>
          <Contact />
          </Element>
        
        <Element name="footer" className="section">
          <Footer />
        </Element>
        
      </Router>
    </div>
  );
}

export default App;
