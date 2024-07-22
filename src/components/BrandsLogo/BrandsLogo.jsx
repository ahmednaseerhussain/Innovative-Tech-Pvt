import React from "react";
import Brand1 from "../../assets/brands/1.png";
import Brand2 from "../../assets/brands/2.png";
import Brand3 from "../../assets/brands/3.png";
import Brand4 from "../../assets/brands/4.png";
// import Brand5 from "../../assets/brands/5.png";

const BrandsLogo = () => {
  return (
    <>
      <div className="  bg-gray-200 dark:bg-gray-900 dark:text-white sm:mt-0 py-10 h-fit">
        <h1 className="text-center text-lg font-bold py-2">Powering next-gen companies</h1>
        <div className=" flex items-center justify-center gap-10 mt-6 lg:flex-row sm:flex-col">
          <img src={Brand1} className="h-auto w-1/3  filter grayscale dark:invert dark:filter dark:brightness-0" alt="" />
          <img src={Brand2} className="h-auto w-1/6 filter grayscale dark:invert dark:filter dark:brightness-0" alt="" />
          <img src={Brand3} className="h-auto w-1/4  filter grayscale dark:invert dark:filter dark:brightness-0" alt="" />
          <img src={Brand4} className="h-8 invert  filter grayscale dark:invert dark:filter dark:brightness-0" alt="" />
          {/* <img src={Brand5} alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default BrandsLogo;
