import React from 'react'
import Navbar from './Navbar';
import LeftLayout from './LeftLayout';
import SkillData from '../Data/SkillData';
import { motion } from 'framer-motion';
import BottomNavbar from './BottomNavbar';
function Skills() {
  return (
    <div>
      <div className='bg-grey w-full h-full flex items-center justify-evenly lg:p-14 lg:flex-row md:flex-col md:gap-6 sm:flex-col sm:gap-6 sm:p-5 xs:flex-col xs:p-3 xs:gap-6'>
        <LeftLayout />
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={
            { type: 'tween', duration: 0.5, delay: 0.2, ease: 'easeOut' }
          }
          className='bg-darkGray p-5 relative lg:w-[62vw] rounded-lg'>
          <Navbar />
          <div className=' lg:p-5 md:p-2 xs:pt-2' >
            <div className='m-3'>
              <h2 className='capitalize text-3xl font-bold text-customWhite pb-2'>skills</h2>
              <div className='w-20 h-1 bg-customWhite'></div>
            </div>
            {/* skilll container starts */}
            <div className='m-3  p-2 flex items-center justify-center flex-wrap gap-3'>
              {SkillData.map((skill) => {
                return (
                  <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={
                      { type: 'tween', duration: 0.6, delay: 0.2, ease: 'easeOut' }
                    }
                    className='bg-customWhite flex gap-4  justify-center items-center lg:p-3 lg:w-[25vw] md:f-full md:p-5 sm:p-5 xs:p-5 xs:w-[65vw] rounded-md xs:items-center xs:justify-center xs:flex-col' key={skill.id}>
                    <div className='xs:items-center xs:justify-center'>
                      <p className='lg:text-4xl xs:text-5xl'>{skill.logo}</p>
                    </div>
                    <div className='xs:justify-center xs:items-center p-2'>
                      <p className='uppercase font-bold xs:text-center'>{skill.name}</p>
                      <h1 className='xs:text-center'>{skill.description}</h1>
                    </div>
                  </motion.div>
                )
              })}
            </div>
            {/* skill container ends */}
          </div>
        </motion.div>
      </div>
     <BottomNavbar/>
    </div>
  )
}

export default Skills
