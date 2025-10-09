import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40
    py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        alt="Company logo"
      />
      <div
        className={`text-gray-700 dark:text-white sm:text-sm 
            ${
              !sidebarOpen
                ? "max-sm:w-0 overflow-hidden"
                : "max-sm:w-60 max-sm:pl-10"
            }
             max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full
      max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex 
      sm:items-center gap-5 transition-all`}
        onClick={() => setSidebarOpen(false)}
      >
        <img
          src={assets.close_icon}
          className="w-5 absolute right-4 top-4 sm:hidden"
          alt=""
        />
        <a
          onClick={() => setSidebarOpen(false)}
          href="#"
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#services"
          className="sm:hover:border-b"
        >
          Services
        </a>

        <a
          onClick={() => setSidebarOpen(false)}
          href="#our-work"
          className="sm:hover:border-b"
        >
          Our Work
        </a>

        <a
          onClick={() => setSidebarOpen(false)}
          href="#contact"
          className="sm:hover:border-b"
        >
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden"
        />
        <a
          href="#contactus"
          className="text-sm max-sm:hidden flex items-center 
        gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer
        hover:scale-103 transition-all"
        >
          {" "}
          Connect <img src={assets.arrow_icon} alt="" width={14} />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
