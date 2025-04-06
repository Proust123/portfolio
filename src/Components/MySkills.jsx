
import React from "react";
import { FiMenu } from "react-icons/fi";

const MySkills = ({ setIsSidebarOpen }) => {
  return (
    <div className="h-full w-full lg:w-[90%] bg-black flex justify-center items-center py-7 transition-all duration-300 ease-in-out">
    
      <div className="absolute top-5 left-5 text-white text-3xl lg:hidden">
        <FiMenu className="cursor-pointer" onClick={() => setIsSidebarOpen(true)} />
      </div>

      <div className="h-[80%] w-[80%] flex flex-col justify-center gap-y-6 p-10">
        <h1 className="text-gray-200 text-xl md:text-2xl lg:text-4xl font-bold text-center">
          Skills & Technologies (Beginner, Actively Learning)
        </h1>

        <div className="mt-3">
          <h2 className="text-gray-200 text-xl lg:text-2xl font-semibold">Frontend</h2>
          <p className="text-gray-300 text-base lg:text-lg">HTML, CSS, JavaScript, React, Redux Toolkit, Tailwind CSS</p>
        </div>

        <div className="mt-3">
          <h2 className="text-gray-200 text-xl lg:text-2xl font-semibold">Backend</h2>
          <p className="text-gray-300 text-base lg:text-lg">Node.js, Express.js</p>
        </div>

        <div className="mt-3">
          <h2 className="text-gray-200 text-xl lg:text-2xl font-semibold">Databases</h2>
          <p className="text-gray-300 text-base lg:text-lg">MongoDB, MySQL</p>
        </div>

        <div className="mt-3">
            <h2 className="text-gray-200 text-xl lg:text-2xl font-semibold">Data Structures & Algorithms</h2>
            <p className="text-gray-300 text-base lg:text-lg">
              Comfortable implementing Hash Tables, Linked Lists (Singly & Doubly), Stack, Queue, 
              Binary Trees (DFS & BFS), Binary Search Trees (BST & Validation), Graphs (DFS & BFS), 
              and sorting algorithms (Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, Quick Sort)
            </p>
           </div>
      </div>
    </div>
  );
};

export default MySkills;
