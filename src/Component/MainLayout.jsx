import React from 'react'
import LeftLayout from './LeftLayout'
import RightLayout from './RightLayout'
import BottomNavbar from './BottomNavbar';


function MainLayout() {
    return (
        <div className=' w-[100vw] h-auto  bg-grey flex justify-evenly items-center lg:p-14 lg:flex-row md:flex-col md:p-10 md:gap-6 sm:flex-col sm:gap-6 sm:p-5 xs:flex-col xs:p-3 xs:pb-0 xs:gap-6 relative md:pb-0'>
            <LeftLayout />
            <RightLayout />
           <BottomNavbar/>
        </div>
    )
}

export default MainLayout
