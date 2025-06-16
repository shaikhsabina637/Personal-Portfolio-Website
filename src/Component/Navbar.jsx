import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className='bg-customWhite flex p-2 absolute top-0 right-0 rounded-tr-lg  rounded-bl-lg md:hidden lg:block sm:hidden xs:hidden'>
        <ul className=' flex gap-9 p-5 rounded-lg'>
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

export default Navbar
