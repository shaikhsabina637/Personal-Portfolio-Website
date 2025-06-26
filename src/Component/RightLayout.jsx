import React from 'react'
import Navbar from './Navbar';
import LeftLayout from './LeftLayout';
import { motion } from 'framer-motion';
import BottomNavbar from './BottomNavbar';
import { FaGraduationCap, FaDownload, FaServer } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

function About() {
  const handleDownloadResume = () => {
    const resumeUrl = '/documents/Sabina_Shaikh_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sabina_Shaikh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className='bg-grey w-full h-full flex items-center lg:justify-evenly lg:p-14 lg:flex-row md:flex-col md:gap-6 sm:flex-col sm:gap-6 sm:p-5  xs:flex-col xs:p-3 xs:gap-6 '>
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className='bg-darkGray p-5 md:p-10 relative lg:w-[62vw] rounded-lg sm:w-[100vw]'
        >
          <Navbar />
          <div className='p-5'>
            <div className='m-3'>
              <h2 className='capitalize text-3xl font-bold text-customWhite pb-2'>about Me</h2>
              <div className='w-20 h-1 bg-customWhite xs:mb-5'></div>
            </div>
            <motion.div
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'tween', duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className='p-4 m-3 xs:m-1 xs:w-full rounded-lg xs:p-2'
            >
              <p className='m-3 text-customWhite '>
                Highly skilled MERN Stack Developer with advanced expertise in React.js, Node.js, Express.js, and MongoDB, 
                dedicated to building secure, scalable, and high-performance web applications. 
              </p>

              <p className='m-3 text-customWhite'>
                Proficient in integrating robust authentication systems and implementing real-world solutions with a strong 
                focus on security and optimization. Familiar with Python and SQL, enhancing backend capabilities and 
                database management.
              </p>

              <p className='m-3 text-customWhite'>
                Passionate about tackling complex challenges and continuously expanding knowledge in cutting-edge technologies. 
                A quick learner with a proven track record of delivering impactful projects.
              </p>
            </motion.div>
            
            {/* Resume Download Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white text-black hover:bg-blue-900 rounded-lg p-4 mx-3 my-4 cursor-pointer transition-colors duration-300 lg:w-[30vw] sm:-w-[50vw]"
              onClick={handleDownloadResume}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaDownload className="text-2xl" />
                  <div>
                    <h3 className="font-bold text-lg">Download My Resume</h3>
                    <p className="text-sm">Get a PDF version of my full professional profile</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Education Section - Now Horizontal */}
            <div className='m-3'>
              <h2 className='capitalize text-2xl font-bold text-customWhite pb-2'>Education</h2>
              <div className='w-20 h-1 bg-customWhite mb-5'></div>
            </div>
            
            <motion.div
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'tween', duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              className='flex flex-col md:flex-row gap-4 p-3' // Changed to flex-row on medium screens and up
            >
              {/* College Education Card */}
              <div className='bg-customWhite rounded-lg p-5 shadow-md flex-1'> {/* Added flex-1 for equal width */}
                <div className='flex items-center gap-4 mb-3'>
                  <FaGraduationCap className='text-3xl text-blue-600' />
                  <h3 className='text-xl font-bold'>Bachelor's Degree</h3>
                </div>
                <div className='pl-12'>
                  <p className='font-semibold'>RD & SH National & SWA Science College (2022-2025)</p>
                  <p>Bachelor of Science in Information Technology</p>
                  <p className='font-bold mt-2'>CGPA: 9.18/10</p>
                </div>
              </div>
              
              {/* School Education Card */}
              <div className='bg-customWhite rounded-lg p-5 shadow-md flex-1'> {/* Added flex-1 for equal width */}
                <div className='flex items-center gap-4 mb-3'>
                  <MdSchool className='text-3xl text-green-600' />
                  <h3 className='text-xl font-bold'>Higher Secondary</h3>
                </div>
                <div className='pl-12'>
                  <p className='font-semibold'>Anjuman Islam's Girls College (2021-2022)</p>
                  <p>Higher Secondary Certificate</p>
                  <p className='font-bold mt-2'>Percentage: 86.50%</p>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <div className='m-3 mt-8'>
              <h2 className='capitalize text-2xl font-bold text-customWhite pb-2'>What I Do</h2>
              <div className='w-20 h-1 bg-customWhite mb-5'></div>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-3'>
              <div className='bg-customWhite rounded-lg p-5 flex items-start gap-4'>
                <CgWebsite className='text-3xl text-purple-600' />
                <div>
                  <h3 className='font-bold text-lg mb-2'>Frontend Development</h3>
                  <p>High quality development of sites at professional level using React.js, JavaScript, and modern CSS frameworks.</p>
                </div>
              </div>
              
              <div className='bg-customWhite rounded-lg p-5 flex items-start gap-4'>
                <FaServer className='text-3xl text-orange-600' />
                <div>
                  <h3 className='font-bold text-lg mb-2'>Backend Development</h3>
                  <p>Building secure and scalable backend systems with Node.js, Express.js, MongoDB, and RESTful APIs.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <BottomNavbar/>
    </div>
  )
}

export default About