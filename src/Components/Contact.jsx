import React from "react";
import Sidebar from "./Sidebar";
import MyContact from "./MyContact";
import { useState } from "react";

const Contact = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-screen w-full bg-black">

      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <MyContact setIsSidebarOpen={setIsSidebarOpen}/>
    

    </div>
  );
};

export default Contact;