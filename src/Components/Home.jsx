// import React from 'react'
// import Sidebar from './Sidebar'
// import Intro from './Intro'

// const Home = () => {
//   return (
//     <div className='flex h-[100vh] w-[100%]'>
//         <Sidebar/>
//         <Intro />
//     </div>
//   )
// }

// export default Home


import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Intro from "./Intro";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-[100vh] w-[100%]">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Intro isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </div>
  );
};

export default Home;
