import React, { useState } from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/portfolio1.png";
import Img2 from "../../assets/blog/portfolio2.png";
import Img3 from "../../assets/blog/portfolio3.png";
import Img4 from "../../assets/blog/portfolio4.png";
import Img5 from "../../assets/blog/portfolio5.png";
import Img6 from "../../assets/blog/portfolio6.png";
import Img7 from "../../assets/blog/portfolio7.png";


const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Mobile Development",
    description:
      "Our app development service transforms your ideas into user-friendly applications tailored to your business needs. From concept to deployment, our experienced team delivers high-quality mobile, web, and enterprise apps that engage users and drive results.",
    author: "Someone",
    date: "April 22, 2022",
    link: "https://kharcha.pk/"
  },
  {
    id: 2,
    image: Img2,
    title: "Web development",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
    link: "https://www.foodbomb.com.au/"
  },
  {
    id: 3,
    image: Img3,
    title: "AI development",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
    link: "https://buddy.ai/"
  },
  {
    id: 4,
    image: Img4,
    title: "Health Care",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
    link: "https://earlux.com/"
  },
  {
    id: 5,
    image: Img5,
    title: "Business Development",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
    link: "https://rooza.nl/en/"
  },
  {
    id: 6,
    image: Img6,
    title: "Ecommerce Development",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
    link: "https://fooji.com/"
  },
  {
    id: 7,
    image: Img7,
    title: "WordPress Development",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
    author: "Someone",
    date: "April 22, 2022",
    link: "https://thelex.live/?v=27889b81b317"
  },
  // {
  //   id: 8,
  //   image: Img3,
  //   title: "WordPress Development",
  //   description:
  //     "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
  //   author: "Someone",
  //   date: "April 22, 2022",
  //   link: "https://buddy.ai/"
  // }
];

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleViewMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 3);
  };

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Some Our Works <span className="text-gradient text-[48px]">.</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.slice(0, visibleProjects).map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          {visibleProjects < BlogsData.length && (
            <div className="text-center">
              <button className="primary-btn" onClick={handleViewMore}>
                View More Posts
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Portfolio;
