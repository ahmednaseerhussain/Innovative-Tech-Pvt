import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/logo.png";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { MenuLinks } from '../../MenuLinks'; // Import MenuLinks from MenuLinks.js

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full flex items-center fixed top-0 z-20 bg-white dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-8" />
            <span className="text-2xl sm:text-3xl font-thin cursor-pointer uppercase ">
              Innovative Tech <span className="text-gradient font-semibold text-[50px]">.</span>
            </span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 cursor-pointer">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <ScrollLink
                    to={link}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </ScrollLink>
                </li>
              ))}
              <li>
                <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80} className="primary-btn text-lg font-medium">
                  Get in Touch
                </ScrollLink>
              </li>
              <DarkMode />
            </ul>
          </nav>
          <div className="flex items-center gap-4 md:hidden lg:hidden">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
