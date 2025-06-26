import React from 'react';
import Navbar from './Navbar';
import LeftLayout from './LeftLayout';
import SkillData from '../Data/SkillData';
import { motion } from 'framer-motion';
import BottomNavbar from './BottomNavbar';
import { FaHandshake, FaLightbulb, FaUsers, FaClock, FaComments } from 'react-icons/fa';

function Skills() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const logoVariants = {
    hover: {
      rotate: 360,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear"
      }
    }
  };

  // Soft skills data
  const softSkills = [
    {
      id: 1,
      name: "Teamwork",
      description: "Collaborating effectively in groups",
      logo: <FaUsers />
    },
    {
      id: 2,
      name: "Communication",
      description: "Clear and effective expression",
      logo: <FaComments />
    },
    {
      id: 3,
      name: "Problem Solving",
      description: "Creative solution finding",
      logo: <FaLightbulb />
    },
    {
      id: 4,
      name: "Time Management",
      description: "Efficient task organization",
      logo: <FaClock />
    },
    {
      id: 5,
      name: "Leadership",
      description: "Guiding and motivating teams",
      logo: <FaHandshake />
    }
  ];

  return (
    <div>
      <div className='bg-grey w-full h-full flex items-center justify-evenly lg:p-14 lg:flex-row md:flex-col md:gap-6 sm:flex-col sm:gap-6 sm:p-5 xs:flex-col xs:p-3 xs:gap-6'>
        <LeftLayout />
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className='bg-darkGray p-5 relative lg:w-[62vw] rounded-lg'
        >
          <Navbar />
          <div className='lg:p-5 md:p-2 xs:pt-2'>
            <div className='m-3'>
              <h2 className='capitalize text-3xl font-bold text-customWhite pb-2'>My Skills</h2>
              <div className='w-20 h-1 bg-customWhite mb-4'></div>
              <p className='text-customWhite mb-6'>
                Combining technical expertise with interpersonal abilities to deliver comprehensive solutions.
              </p>
            </div>
            
            {/* Technical Skills Section */}
            <div className='m-3'>
              <h3 className='text-2xl font-bold text-customWhite mb-4'>Technical Skills</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className='p-2 flex items-center justify-center flex-wrap gap-4'
              >
                {SkillData.map((skill) => (
                  <motion.div
                    variants={itemVariants}
                    whileHover="hover"
                    className='bg-customWhite flex flex-col justify-center items-center p-4 rounded-md w-[150px]'
                    key={skill.id}
                  >
                    <motion.div
                      variants={logoVariants}
                      whileHover="hover"
                      className='mb-3 text-4xl'
                    >
                      {skill.logo}
                    </motion.div>
                    <div className='text-center'>
                      <p className='uppercase font-bold text-sm'>{skill.name}</p>
                      <p className='text-xs mt-1'>{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Soft Skills Section */}
            <div className='m-3 mt-8'>
              <h3 className='text-2xl font-bold text-customWhite mb-4'>Soft Skills</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className='p-2 flex items-center justify-center flex-wrap gap-4'
              >
                {softSkills.map((skill) => (
                  <motion.div
                    variants={itemVariants}
                    whileHover="hover"
                    className='bg-customWhite flex flex-col justify-center items-center p-4 rounded-md w-[150px]'
                    key={skill.id}
                  >
                    <motion.div
                      variants={logoVariants}
                      whileHover="hover"
                      className='mb-3 text-4xl'
                    >
                      {skill.logo}
                    </motion.div>
                    <div className='text-center'>
                      <p className='uppercase font-bold text-sm'>{skill.name}</p>
                      <p className='text-xs mt-1'>{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Continuous Learning Section */}
            <div className='mt-8 text-customWhite p-4 bg-gray-800 rounded-lg'>
              <h3 className='text-xl font-semibold mb-3'>Continuous Learning</h3>
              <p>
                Committed to ongoing development in both technical and interpersonal skills to deliver well-rounded solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <BottomNavbar/>
    </div>
  );
}

export default Skills;