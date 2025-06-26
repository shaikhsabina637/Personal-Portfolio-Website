import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion, AnimatePresence } from 'framer-motion';

function LeftLayout() {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact(prev => !prev);
  };

  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'tween', duration: 0.1, delay: 0.1, ease: 'easeOut' }}
      className='bg-darkGray p-5 rounded-lg lg:w-[20vw]'
    >
      {/* First section */}
      <div className='p-5 lg:flex-col items-center justify-evenly gap-3 md:flex sm:flex xs:flex md:w-[90vw] lg:w-[17vw] relative'>
        <div className='bg-customWhite rounded-lg justify-center items-center flex'>
          <img
            src='img/Firefly 20250626142638.png'
            alt="avatar"
            height={50}
            width={70}
            className='xs:h-30 xs:w-20 lg:w-40 rounded-lg'
          />
        </div>
        <div>
          <h2 className='text-3xl capitalize text-white xs:text-sm xs:pb-2'>sabina shaikh</h2>
          <div className='bg-customWhite p-2 rounded-md text-black text-center capitalize xs:text-sm lg:mt-3'>
            full stack developer
          </div>
          <motion.div 
            className='bg-customWhite p-2 w-30 absolute top-0 right-0 rounded-bl-md capitalize lg:hidden flex justify-center items-center xs:p-1 cursor-pointer'
            onClick={toggleContact}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: showContact ? 180 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <RiArrowDropDownLine className='md:text-4xl xs:text-2xl' />
            </motion.div>
            <p className='xs:hidden'>show contact</p>
          </motion.div>
        </div>
      </div>

      {/* Second section - Animated Contact Info */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: { 
                  duration: 0.8, 
                  delay: 0.3,
                  ease: [0.04, 0.62, 0.23, 0.98] 
                },
                opacity: { 
                  duration: 0.6, 
                  delay: 0.5 
                }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { 
                  duration: 0.6,
                  ease: [0.04, 0.62, 0.23, 0.98] 
                },
                opacity: { 
                  duration: 0.4 
                }
              }
            }}
            className='overflow-hidden'
          >
            <div className='mt-3'>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className='p-5 flex items-center gap-3 rounded-lg'
              >
                <div className='bg-customWhite p-3 rounded-lg text-2xl'>
                  <IoPhonePortraitOutline />
                </div>
                <div>
                  <p className='text-customWhite capitalize'>birthday</p>
                  <h1 className='text-customWhite capitalize'>july 30, 2004</h1>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className='p-5 flex items-center gap-3 rounded-lg'
              >
                <div className='bg-customWhite p-3 rounded-lg text-2xl'>
                  <MdOutlineLocationOn />
                </div>
                <div>
                  <p className='text-customWhite capitalize'>location</p>
                  <h1 className='text-customWhite capitalize'>mumbai, bandra</h1>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className='p-5 flex items-center gap-3 rounded-lg'
              >
                <div className='bg-customWhite p-3 rounded-lg text-2xl'>
                  <MdOutlineEmail />
                </div>
                <div>
                  <p className='text-customWhite capitalize'>email</p>
                  <h1 className='text-customWhite'>shaikhsabina637@...</h1>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.4 }}
                className='p-5 flex items-center gap-3 rounded-lg'
              >
                <div className='bg-customWhite p-3 rounded-lg text-2xl'>
                  <IoCalendarNumberOutline />
                </div>
                <div>
                  <p className='text-customWhite capitalize'>phone</p>
                  <h1 className='text-customWhite'>9321778441</h1>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Always show contact info on large screens */}
      <div className='hidden lg:block'>
        <div className='mt-3'>
          <div className='p-5 flex items-center gap-3 rounded-lg'>
            <div className='bg-customWhite p-3 rounded-lg text-2xl'>
              <IoPhonePortraitOutline />
            </div>
            <div>
              <p className='text-customWhite capitalize'>birthday</p>
              <h1 className='text-customWhite capitalize'>july 30, 2004</h1>
            </div>
          </div>
          <div className='p-5 flex items-center gap-3 rounded-lg'>
            <div className='bg-customWhite p-3 rounded-lg text-2xl'>
              <MdOutlineLocationOn />
            </div>
            <div>
              <p className='text-customWhite capitalize'>location</p>
              <h1 className='text-customWhite capitalize'>mumbai, bandra</h1>
            </div>
          </div>
          <div className='p-5 flex items-center gap-3 rounded-lg'>
            <div className='bg-customWhite p-3 rounded-lg text-2xl'>
              <MdOutlineEmail />
            </div>
            <div>
              <p className='text-customWhite capitalize'>email</p>
              <h1 className='text-customWhite'>shaikhsabina637@...</h1>
            </div>
          </div>
          <div className='p-5 flex items-center gap-3 rounded-lg'>
            <div className='bg-customWhite p-3 rounded-lg text-2xl'>
              <IoCalendarNumberOutline />
            </div>
            <div>
              <p className='text-customWhite capitalize'>phone</p>
              <h1 className='text-customWhite'>9321778441</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Third section */}
      <div className={`p-2 lg:items-center lg:flex-row lg:justify-around mt-2 rounded-md ${showContact ? 'flex justify-evenly' : 'hidden xxl:hidden lg:flex'}`}>
        <Link to="https://github.com/shaikhsabina637" target="_blank" className='text-white text-2xl'>
          <FiGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/sabina-shaikh-803958255/" target="_blank" className='text-white text-2xl'>
          <FaLinkedinIn />
        </Link>
        <Link to="https://linkedin.com" target="_blank" className='text-white text-2xl'>
          <FaInstagram />
        </Link>
      </div>
    </motion.div>
  );
}

export default LeftLayout;