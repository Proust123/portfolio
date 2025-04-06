import img from './images/shofy.png'
import img2 from './images/img2.png'
import dupe from './images/dupe.png'
import resume from './images/resume.png'
import slider from './images/slider.png'

const data = [
    {
        id: 1,
        img : img,
        title : 'Shofy – A Full-Stack E-Commerce Platform',
        description : 'Shofy is a MERN-stack e-commerce website that allows users to browse, purchase products, and manage their accounts. It features secure authentication, including login, registration, and password recovery. Users can make payments through an integrated payment gateway, ensuring a seamless checkout process. Admins can manage product categories and inventory through a dedicated dashboard. Built with MongoDB, Express, React, and Node.js, Shofy is styled using Tailwind CSS and uses Redux Toolkit for efficient state management.',
        github : 'https://github.com/Proust123/Shofy.git'
    },
    {
        id: 2,
        img : img2,
        title : 'User Authentication System',
        description : 'A full-stack user authentication system built with React, Tailwind CSS, and Redux Toolkit on the frontend, and Node.js, Express, and MongoDB on the backend. Features include user registration, login, protected routes using middleware and JSON Web Tokens (JWT), and role-based access control where admins have exclusive access to restricted pages.',
        github : 'https://github.com/Proust123/User-Authentication-' 
    },
    {
        id: 3,
        img : dupe,
        title : 'Dupe – Product Management App',
        description : 'A full-stack CRUD application built with React, Tailwind CSS, Redux Toolkit, Node.js, Express, and MongoDB. Users can add product details via form inputs and view them in a list with options to view, edit, or delete each product. Backend handles data storage and operations with secure API routes.',
        github : 'https://github.com/Proust123/dupe'
    },
    {
        id: 4,
        img : resume,
        title : 'Resume Builder',
        description : 'A full-stack multi-step resume builder app developed using React, Tailwind CSS, Redux Toolkit, Node.js, Express, and MongoDB. The app guides users through eight pages of input forms to collect their information and dynamically generates a complete, professional resume based on the responses.',
        github : 'https://github.com/Proust123/Resume-Builder'
    },
    {
        id: 5,
        img : slider,
        title : 'Continuous Slider',
        description : 'A smooth, auto-rotating color slider built using HTML, CSS, and JavaScript. The slider loops infinitely without stopping, using logical control with setInterval and DOM manipulation to create seamless transitions.',
        github : 'https://github.com/Proust123/Continuous-Slider'
    },
]

export default data