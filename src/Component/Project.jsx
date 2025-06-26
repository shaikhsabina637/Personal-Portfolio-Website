import React from 'react';
import Navbar from './Navbar';
import LeftLayout from './LeftLayout';
import { IoLogoGithub, IoEye } from "react-icons/io5";
import { motion } from 'framer-motion';
import BottomNavbar from './BottomNavbar';
import { Link } from 'react-router-dom';

function Project() {
  const projects = [
    {
      id: 1,
      title: "Tip Calculator",
      image: "./img/calculator.png",
      description: "A responsive web application that allows users to quickly calculate tips based on the bill amount and desired tip percentage. The UI is optimized for all screen sizes with intuitive controls and real-time calculations.",
      githubLink: "https://github.com/shaikhsabina637/03-tip-calculator",
      liveLink: "https://tips-calculators.netlify.app/",
      technologies: ["React", "JavaScript", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Turf Booking System",
      image: "./img/turfImage.png",
      description: "A full-stack turf management system with admin and player dashboards. Features include real-time booking, OTP authentication, payment integration, and turf availability management.",
      githubLink: "https://github.com/shaikhsabina637/Turf-Management-Booking-System-Website",
      liveLink: "https://kick-on-turf-player.onrender.com/",
      technologies: ["MERN Stack", "JWT Auth", "MongoDB","Cloudinary","Redux"]
    },
    {
      id: 3,
      title: "Text Editor",
      image: "./img/text-editor.png",
      description: "A feature-rich text editor with formatting options, document editing capabilities, and responsive design. Supports all standard text operations with a clean, intuitive interface.",
      githubLink: "https://github.com/shaikhsabina637/text-esditor",
      liveLink: "https://texts-editor-web.netlify.app/",
      technologies: ["JavaScript", "HTML5", "Local Storage","CSS3"]
    },
    {
      id: 4,
      title: "Note Taking App",
      image: "./img/note-web.png",
      description: "A CRUD application for creating, reading, updating and deleting notes. Features persistent storage, intuitive UI, and responsive design for seamless cross-device usage.",
      githubLink: "https://github.com/shaikhsabina637/notes-structure",
      liveLink: "https://notes-structure.netlify.app/",
      technologies: ["React", "CSS3", "Local Storage","Javascript"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div>
      <div className='bg-grey w-full h-full flex items-center justify-evenly lg:p-14 lg:flex-row md:flex-col md:gap-6 sm:flex-col sm:gap-6 sm:p-5 xs:flex-col xs:p-3 xs:gap-6'>
        <LeftLayout />
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className='bg-darkGray p-5 relative lg:w-[62vw] rounded-lg xs:m-4'
        >
          <Navbar />
          <div className='p-5 xs:p-2'>
            <div className='m-3'>
              <h2 className='capitalize text-3xl font-bold text-customWhite pb-2'>My Projects</h2>
              <div className='w-20 h-1 bg-customWhite mb-4'></div>
              <p className='text-customWhite mb-6'>
                Here's a collection of my recent work. Each project showcases different aspects of my skills
                in frontend development, backend integration, and problem-solving.
              </p>
            </div>

            {/* Projects section with enhanced animations */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className='m-3 p-2 grid grid-cols-1 md:grid-cols-2 gap-6'
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover="hover"
                  className='bg-customWhite flex flex-col p-4 rounded-lg transition-all duration-300'
                >
                  <div className='rounded-lg overflow-hidden'>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className='w-full h-48 object-cover transition-transform duration-500 hover:scale-105' 
                    />
                  </div>
                  
                  <div className='p-3 flex-grow'>
                    <h3 className='text-xl font-bold mb-2 text-darkGray'>{project.title}</h3>
                    <p className='text-gray-700 mb-4'>{project.description}</p>
                    
                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-darkGray mb-1'>Technologies Used:</h4>
                      <div className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech, i) => (
                          <span key={i} className='bg-gray-200 px-2 py-1 rounded text-xs text-gray-700'>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className='flex justify-center items-center gap-6 mt-auto'>
                    <Link 
                      to={project.githubLink} 
                      target="_blank"
                      className='text-3xl text-gray-700 hover:text-gray-900 transition-colors'
                      aria-label="GitHub repository"
                    >
                      <IoLogoGithub />
                    </Link>
                    <Link 
                      to={project.liveLink} 
                      target="_blank"
                      className='text-3xl text-gray-700 hover:text-blue-600 transition-colors'
                      aria-label="Live demo"
                    >
                      <IoEye />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional content section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className='mt-10 p-6 bg-gray-800 rounded-lg'
            >
              <h3 className='text-xl font-bold text-customWhite mb-3'>More About My Work</h3>
              <p className='text-customWhite mb-4'>
                Each project represents a unique challenge and learning opportunity. I focus on creating
                applications that are not only functional but also deliver exceptional user experiences.
              </p>
              <p className='text-customWhite'>
                Interested in seeing more? Check out my <Link to="https://github.com/shaikhsabina637" target="_blank" className='text-blue-400 hover:underline'>GitHub profile</Link> for additional
                projects and code samples.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <BottomNavbar/>
    </div>
  )
}

export default Project;