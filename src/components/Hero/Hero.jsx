import React from "react";
import yellowCar from "../../assets/website/team.png";
import ParticlesContainer from "../ParticlesContainer/ParticlesContainer";
import { scroller } from "react-scroll";

const Hero = () => {
  const handleLearnMoreClick = () => {
    scroller.scrollTo('contact', {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -80,
    });
  };
  return (
    <div className="dark:bg-gray-950 dark:text-white bg-custom-gradient duration-300 relative">
     
      
      <div className="container min-h-[620px] flex mt-10 sm:mt-0 relative z-10">
      <ParticlesContainer/>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px]"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm">⭐Projects</p>
              <h1 className="font-bold">
                150+ <span className="font-normal">Done</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Transforming Ideas Into{" "}
              <span className="text-gradient">Digital Reality</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
            Developed a high-engagement Web apps, Mobile application, e-commerce platform with advanced security and seamless payments, enhancing scalability and performance through teamwork.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;