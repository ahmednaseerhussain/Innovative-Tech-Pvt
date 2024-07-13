import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "App Development",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "Our app development service transforms your ideas into user-friendly applications tailored to your business needs. From concept to deployment, our experienced team delivers high-quality mobile, web, and enterprise apps that engage users and drive results.",
    aosDelay: "0",
  },
  {
    name: "Web Designing",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "Our web development service focuses on creating robust, responsive websites that enhance your online presence. We build custom websites tailored to your brand, ensuring optimal performance, seamless user experience, and scalability to support your business growth.",
    aosDelay: "300",
  },
  {
    name: "Graphic Designing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Our graphic design service brings your brand to life with compelling visuals. We create eye-catching designs that resonate with your audience, from logos and branding materials to marketing collateral and user interfaces, ensuring a cohesive and professional look across all platforms.",
    aosDelay: "500",
  },
  {
    name: "Digital Marketing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Our digital marketing service helps your brand reach and engage the right audience. We develop comprehensive strategies, including SEO, social media marketing, content creation, and paid advertising, to boost your online visibility, drive traffic, and achieve your business goals.",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <section id="services">
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-gray-950 dark:text-primary"
            >
              Explore Our Services <span className="text-gradient font-bold text-[40px]"> . </span>
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
