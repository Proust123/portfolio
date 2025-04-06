
import React from "react";
import img1 from "../images/logo.jpg";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io"; 

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (

    <div
      className={`h-full bg-black flex flex-col gap-y-5 transition-transform duration-300 
      ${isSidebarOpen ? "fixed inset-0 z-50 w-[80%]" : "hidden lg:flex lg:w-[10%]"}`}
    >
      
      <div className="absolute top-4 right-4 text-white text-3xl lg:hidden">
        <IoMdClose className="cursor-pointer" onClick={() => setIsSidebarOpen(false)} />
      </div>

      
      <div className="h-[25%] bg-black flex flex-col cursor-pointer">
        <div className="h-[50%]">
          <img src={img1} alt="Logo" />
        </div>
        <div className="flex flex-col justify-evenly items-center h-[50%]">
          <h1 className="text-white">Sultan</h1>
          <h3 className="text-gray-400">Web Developer</h3>
        </div>
      </div>

      
      <nav className="h-[45%] bg-[rgb(29,29,29)]">
        <ul className="py-3 flex flex-col h-full">
          <Link to={"/"} className="h-full w-full">
            <li className="text-gray-400 h-full w-full flex justify-center items-center cursor-pointer">
              About
            </li>
          </Link>
          <Link to={"/skills"} className="h-full w-full">
            <li className="text-gray-400 h-full w-full flex justify-center items-center cursor-pointer">
              My Skills
            </li>
          </Link>
          <Link to={"/work"} className="h-full w-full">
            <li className="text-gray-400 h-full w-full flex justify-center items-center cursor-pointer">
              Work
            </li>
          </Link>
          <Link to={"/contact"} className="h-full w-full">
            <li className="text-gray-400 h-full w-full flex justify-center items-center cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
      </nav>

     
      <div className="w-full text-gray-600 text-2xl flex justify-center gap-x-7 border-white">
        <FiLinkedin cursor={"pointer"} />
        <TbBrandGithubFilled cursor={"pointer"} />
      </div>
    </div>
  );
};

export default Sidebar;




