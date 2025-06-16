import React from 'react'
import Navbar from './Navbar';
import LeftLayout from './LeftLayout';
import { IoLogoGithub } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { motion } from 'framer-motion';
import BottomNavbar from './BottomNavbar';
import { Link } from 'react-router-dom';
function Project() {
  return (
    <div>
      <div className='bg-grey w-full h-full flex items-center justify-evenly lg:p-14 lg:flex-row  md:flex-col md:gap-6 sm:flex-col sm:gap-6 sm:p-5 xs:flex-col xs:p-3 xs:gap-6'>
        <LeftLayout />
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={
            { type: 'tween', duration: 0.5, delay: 0.2, ease: 'easeOut' }
          }
          className='bg-darkGray p-5 relative lg:w-[62vw] rounded-lg xs:m-4 '>
          <Navbar />
          <div className=' p-5 xs:p-2'  >
            <div className='m-3'>
              <h2 className='capitalize text-3xl font-bold text-customWhite pb-2'>projects</h2>
              <div className='w-20 h-1 bg-customWhite'></div>
            </div>
            {/* projects section starts */}
            <div className='m-3  p-2 flex items-center justify-center flex-wrap gap-3 xs:p-0 xs:w-[65vw]'>
              <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={
                  { type: 'tween', duration: 0.6, delay: 0.3, ease: 'easeOut' }
                }
                className='bg-customWhite flex flex-col  p-3 rounded-lg xs:m-2 xs:w-full xs:h-[80vw] xs:justify-center xxl:w-full xxl:justify-center xxl:items-center'>
                <div className='rounded-lg '>
                  <img src='./img/calculator.png' alt='' className='rounded-lg w-full h-auto max-w-[380px] transition-all duration-300 ' />
                </div>
                <div className='p-2 w-[380px] xs:w-[60vw] '>
                  <p className='text-xl xs:text-sm xs:text-center '>Tip Calculator is a responsive web application that allows users to quickly calculate tips based on the bill amount and desired tip percentage. The UI is optimized for all screen sizes.

                  </p>
                </div>
                <div className='flex  justify-center items-center gap-8'>
                  <Link to='https://github.com/shaikhsabina637/03-tip-calculator' target="_blank" >
                  <p className='text-4xl xs:text-2xl'><IoLogoGithub /></p>
                  </Link>
                  <Link to='https://tips-calculators.netlify.app/' target="_blank">
                  <p className='text-4xl xs:text-2xl'><IoEye /></p>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={
                  { type: 'tween', duration: 0.7, delay: 0.4, ease: 'easeOut' }
                }
                className='bg-customWhite flex flex-col  p-3 rounded-lg xs:m-2 xs:w-full xs:h-[80vw] xs:justify-center xxl:w-full xxl:items-center'>
                <div className='rounded-lg '>
                  <img src='./img/turfImage.png' alt='' className='rounded-lg w-full h-auto max-w-[380px] transition-all duration-300 ' />
                </div>
                <div className='p-2 w-[380px] xs:w-[60vw] '>
                  <p className='text-xl xs:text-sm xs:text-center '>Turf Management Booking System is designed to manage turf bookings . It supports full functionality for both admins and players. Players can book turfs based on real-time availability.</p>
                </div>
                <div className='flex  justify-center items-center gap-8'>
                <Link to='https://github.com/shaikhsabina637/Turf-Management-Booking-System-Website' target="_blank">
                  <p className='text-4xl xs:text-2xl'><IoLogoGithub /></p>
                  </Link>
                  <Link to='https://employee-detail-management.netlify.app/' target="_blank">
                  <p className='text-4xl xs:text-2xl'><IoEye /></p>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={
                  { type: 'tween', duration: 0.8, delay: 0.5, ease: 'easeOut' }
                }
                className='bg-customWhite flex flex-col  p-3 rounded-lg xs:m-2 xs:w-full xs:h-[80vw] xs:justify-center xxl:w-full xxl:items-center'>
                <div className='rounded-lg '>
                  <img src='./img/text-editor.png' alt='' className='rounded-lg w-full h-auto max-w-[380px] transition-all duration-300 ' />
                </div>
                <div className='p-2 w-[380px] xs:w-[60vw] '>
                  <p className='text-xl xs:text-sm xs:text-center '>
                  The text editor web application perform, editing, and formatting text documents. Additionally, the application is fully responsive, providing a seamless experience across all devices.
                  </p>
                </div>
                <div className='flex  justify-center items-center gap-8'>
                  <Link to='https://github.com/shaikhsabina637/text-esditor' target="_blank">
                  <p className='text-4xl xs:text-2xl'><IoLogoGithub /></p>
                  </Link>
                  <Link to='https://texts-editor-web.netlify.app/' target="_blank">
                  <p className='text-4xl xs:text-2xl'><IoEye /></p>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={
                  { type: 'tween', duration: 1, delay: 0.6, ease: 'easeOut' }
                }
                className='bg-customWhite flex flex-col  p-3 rounded-lg xs:m-2 xs:w-full xs:h-[80vw] xs:justify-center xxl:w-full xxl:items-center'>
                <div className='rounded-lg '>
                  <img src='./img/note-web.png' alt='' className='rounded-lg w-full h-auto max-w-[380px] transition-all duration-300 ' />
                </div>
                <div className='p-2 w-[380px] xs:w-[60vw] '>
                  <p className='text-xl xs:text-sm xs:text-center text-darkGray '>The note-taking web application enables users to perform CRUD. It features a user-friendly interface for easy note management and organization and fully responsive suitable for all devices. </p>
                </div>
                <div className='flex  justify-center items-center gap-8'>
                <Link to='https://github.com/shaikhsabina637/notes-structure' target="_blank">
                  <p className='text-4xl xs:text-2xl'><IoLogoGithub /></p>
                  </Link>
                  <Link to='https://notes-structure.netlify.app/' target="_blank">
                  <p className='text-4xl xs:text-2xl'><IoEye /></p>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* bottom nvabra starts */}
      <BottomNavbar/>
      {/* bottom navbar ends */}
    </div>
  )
}

export default Project
