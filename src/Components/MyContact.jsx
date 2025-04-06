import React from 'react'
import { FiMenu } from "react-icons/fi";

const MyContact = ({ setIsSidebarOpen }) => {
  return (
    <div className="flex h-screen w-full">
      
      <div className="absolute top-5 left-5 text-white text-3xl lg:hidden">
        <FiMenu className="cursor-pointer" onClick={() => setIsSidebarOpen(true)} />
      </div>

      <div className="flex-1 p-12 bg-[rgb(29,29,29)] text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        
        
        <div className="mb-8 text-lg">
          <p>Email: <a href="mailto:your-email@example.com" className="text-blue-400">your-email@example.com</a></p>
          <p>Phone: +123 456 7890</p>
        </div>
        
        
        <form action="https://formsubmit.co/sultanmkhalid123@gmail.com" method="POST" className="w-full max-w-md bg-gray-800 p-6 rounded-lg">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 mb-4 bg-gray-700 text-white rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 mb-4 bg-gray-700 text-white rounded" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-2 mb-4 bg-gray-700 text-white rounded"></textarea>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default MyContact