
import React from "react";
import img from "../images/man.jpg";
import { FiMenu } from "react-icons/fi"; 

const Intro = ({isSidebarOpen, setIsSidebarOpen }) => {
  const myStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={`h-screen w-full ${isSidebarOpen ? "w-[80%]" : "w-full"} lg:w-[100%] flex p-12 items-center relative`} style={myStyle}>
      
      <div className="absolute top-5 left-5 text-white text-3xl lg:hidden">
        <FiMenu className="cursor-pointer" onClick={() => setIsSidebarOpen(true)} />
      </div>

      <div className="w-[60%] h-[80%] flex flex-col justify-center relative z-10">
        <h1 className="text-white lg:text-7xl md:text-5xl sm:text-4xl font-bold">Hi,</h1>
        <h2 className="text-white lg:text-7xl md:text-5xl sm:text-4xl font-bold">
          I'm Sultan Khalid,
        </h2>
        <h3 className="text-white lg:text-7xl md:text-5xl sm:text-4xl font-bold">
          Web Developer
        </h3>

        <h4 className="text-gray-300 lg:text-3xl md:text-2xl sm:text-xl mt-9 border-l-4 border-gray-500 pl-4 italic">
          MERN-STACK Developer
        </h4>
      </div>
    </div>
  );
};

export default Intro;
