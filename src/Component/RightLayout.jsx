import React from 'react'
import Navbar from './Navbar'
import { CgWebsite } from 'react-icons/cg'
import { motion } from 'framer-motion'
import { AiOutlinePython } from "react-icons/ai";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";

function RightLayout() {
  return (
    <>
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={
          { type: 'tween', duration: 0.5, delay: 0.2, ease: 'easeOut' }
        }
        className='bg-darkGray p-5 relative lg:w-[62vw] rounded-lg  '>
        <Navbar />
        <div

          className=' p-5 xs:p-2' >
          <div className='lg:m-3'>
            <h2 className='capitalize text-3xl font-bold text-customWhite pb-2'>about us</h2>
            <div className='w-20 h-1 bg-customWhite xs:mb-5' ></div>
          </div>
          <div className=' p-4 m-3 xs:m-1 xs:w-full rounded-lg xs:p-2  '>
            <p className='m-3 text-customWhite'>I'm Full Stack Developer  from Mumbai, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>

            <h1 className='m-3 text-customWhite '>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.</h1>
          </div>
          <div className='m-2 lg:p-3 flex lg:flex-row items-center justify-center flex-wrap gap-3 md:flex-col md:gap-9 md:p-5 sm:p-2 xs:p-3'>
           
          <div className='bg-customWhite flex gap-4 lg:p-3 lg:w-[25vw] md:f-full md:p-5  sm:p-5 md:w-[75vw] xs:p-5 xs:w-[65vw] rounded-md '>
              <div>
                <CgWebsite className='text-3xl' />
              </div>
              <div>
                <p className='capitalize font-bold'>Frontend Developer</p>
                <h1>High qulaity development of sites at the professional level.</h1>
              </div>
            </div>
            <div className='bg-customWhite flex gap-4 lg:p-3 lg:w-[25vw] md:f-full md:p-5  sm:p-5 md:w-[75vw] xs:p-5 xs:w-[65vw] rounded-md '>
              <div>
                <CgWebsite className='text-3xl' />
              </div>
              <div>
                <p className='capitalize font-bold'>Backend Developer</p>
                <h1>High qulaity development of sites at the professional level and business logic</h1>
              </div>
            </div>
            <div className='bg-customWhite flex gap-4 lg:p-3 lg:w-[25vw] md:f-full md:p-5 md:w-[75vw] sm:p-5 xs:p-5 xs:w-[65vw]   rounded-md'>
              <div>
                <AiOutlinePython className='text-3xl' />
              </div>
              <div>
                <p className='capitalize font-bold'>python developer</p>
                <h1>Buildings interactive projects based on python language.</h1>
              </div>
            </div>
            <div className='bg-customWhite flex gap-4 lg:p-3 lg:w-[25vw] md:f-full md:p-5 md:w-[75vw] sm:p-5 xs:p-5 xs:w-[65vw]   rounded-md'>
              <div>
                <FaComputer className='text-3xl' />
              </div>
              <div>
                <p className='capitalize font-bold'>computer networking</p>
                <h1>Knowledge based on computers and network structure.</h1>
              </div>
            </div>
           
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default RightLayout
