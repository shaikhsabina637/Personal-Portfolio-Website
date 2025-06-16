import React from 'react'
import { Link } from 'react-router-dom'
function BottomNavbar() {
  return (
    <>
    <nav className=' flex p-2 sticky bottom-0  right-0 rounded-tr-lg rounded-tl-lg md:block w-full lg:hidden md:w-[98vw] backdrop-blur-md bg-opacity-50 bg-white z-10'>
        <ul className='flex justify-evenly items-center gap-9 p-5 rounded-lg sm:w-full xs:gap-9'>
          <Link to="/about">
            <li className='capitalize rounded-md hover:text-customWhite hover:bg-darkGray hover:p-2 transition-all duration-1000'>about</li>
          </Link>
          <Link to="/skills">
            <li className='capitalize rounded-md hover:text-customWhite hover:bg-darkGray hover:p-2 transition-all duration-1000'>skills</li>
          </Link>
          <Link to="/project">
            <li className='capitalize rounded-md hover:text-customWhite hover:bg-darkGray hover:p-2 transition-all duration-1000'>project</li>
          </Link>
          <Link to="/contact">
            <li className='capitalize rounded-md hover:text-customWhite hover:bg-darkGray hover:p-2 transition-all duration-1000'>contact</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default BottomNavbar
