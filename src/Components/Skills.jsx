
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MySkills from './MySkills';

const Skills = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-screen w-full bg-black">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* MySkills section */}
      <MySkills setIsSidebarOpen={setIsSidebarOpen} />
    </div>
  );
};

export default Skills;
