import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import TestimonialSlider from './components/Testimonial/TestimonialSlider';
import Portfolio from './components/Blogs/Portfolio';
import Contact from './pages/Contact';
import BrandsLogo from './components/BrandsLogo/BrandsLogo'
import Footer from './components/Footer/Footer'
import { Element } from 'react-scroll';
import TestmonialImg from '../src/assets/TestimonialImg.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';



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
        

        <Element name="testimonials" className="section   ">
          <div className='dark:bg-gray-950 dark:text-white'>
            <div>

              <h1 className="text-4xl font-bold text-center py-5">Testimonials</h1>

              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <TestimonialSlider title={"@tubanayaz did a great job in such a short timeline. She was able to provide my project very quickly and it looked great. Highly recommend! I will definitely keep hiring her."} name={"Balamilla"} qualification={"⭐⭐⭐⭐⭐"} Testimonialimg={TestmonialImg} />

                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialSlider title={"First time working with tubanayaz, Experience was good, communication was good and he managed to make the site exactly what I was looking for. Thank you so much. Highly Recommended!!"} name={"Claudia Cooper"} qualification={"⭐⭐⭐⭐⭐"} Testimonialimg={TestmonialImg} />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialSlider title={"Fast response time, fast delivery"} name={"Blaked"} qualification={"⭐⭐⭐⭐⭐"} Testimonialimg={TestmonialImg} />
                </SwiperSlide>

                
              </Swiper>
            </div>
          </div>
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
