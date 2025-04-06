

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io"; 
import { Link } from "react-router-dom";
import { TbBrandGithubFilled } from "react-icons/tb";
import data from '../data'



const Work = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-max w-full flex bg-black relative">
      {/* Sidebar only appears when isSidebarOpen is true */}
      {isSidebarOpen && (
        <div
        className={`fixed inset-0 bg-black w-[80%] h-full z-50 transition-transform duration-300 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:w-[10%] lg:translate-x-0`}
      >
        {/* Close button for mobile view */}
        <div className="absolute top-4 right-4 text-white text-3xl">
          <IoMdClose className="cursor-pointer" onClick={() => setIsSidebarOpen(false)} />
        </div>
  
        {/* Navigation */}
        <nav className="mt-16 h-[50%] py-14 bg-[rgb(29,29,29)]">
          <ul className="text-white h-[100%] flex flex-col justify-between space-y-4 text-center">
            <Link to={"/"} >About</Link>
            <Link to={"/skills"} >My Skills</Link>
            <Link to={"/work"} >Work</Link>
            <Link to={"/contact"} >Contact</Link>
          </ul>
        </nav>
      </div> 
      )}

      {/* Menu button for opening sidebar */}
      <div className="absolute top-5 left-5 text-white text-3xl">
        <FiMenu className="cursor-pointer" onClick={() => setIsSidebarOpen(true)} />
      </div>

      {/* Main Content Area */}
      <div className="w-full flex flex-col h-max items-center gap-6 p-10">
        <div className="text-white text-4xl font-bold">My Work</div>

        {/* Example Project Cards */}
        <div className="flex flex-wrap justify-center gap-8 ">
          {data.map((item) => {
            return (
              <div className="w-[450px] h-[450px] bg-gray-800 p-5 rounded-lg shadow-md text-white relative">
                <div className="mt-2">
                  <img src={item.img} alt="" />
                </div>
                <div className="absolute text-2xl text-white top-2 right-5">
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <TbBrandGithubFilled cursor={"pointer"} />
                  </a>
                </div>
                <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
